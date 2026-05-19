import { useEffect, useRef } from 'react';

const VERT = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;

uniform vec2  u_res;
uniform float u_time;
uniform float u_dark;

// hash / noise utilities
float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p *= 2.02;
    a *= 0.5;
  }
  return v;
}

// procedural starfield — layered for depth
float starLayer(vec2 uv, float density, float size, float twinkleSpeed, float seed) {
  vec2 g = uv * density;
  vec2 i = floor(g);
  vec2 f = fract(g);
  float h = hash(i + seed);
  // only some cells contain a star
  float exists = step(0.985, h);
  // jitter position within cell
  vec2 c = vec2(hash(i + seed + 1.7), hash(i + seed + 3.3));
  float d = length(f - c);
  float star = smoothstep(size, 0.0, d);
  // twinkle
  float tw = 0.6 + 0.4 * sin(u_time * twinkleSpeed + h * 30.0);
  return star * exists * tw;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res.xy;
  vec2 p = uv - 0.5;
  p.x *= u_res.x / u_res.y;

  // Base — deep navy
  vec3 base = vec3(0.020, 0.024, 0.052);

  // Nebula: domain-warped low-frequency fbm in palette colors, very muted
  float t = u_time * 0.12;
  vec2 q = p * 1.2;
  vec2 flow = vec2(t * 0.35, t * 0.18);
  vec2 warp = vec2(
    fbm(q + flow + vec2(sin(t * 0.7), cos(t * 0.5))),
    fbm(q - flow * 0.8 + vec2(cos(t * 0.6), sin(t * 0.9)) + 5.2)
  );
  float n1 = fbm(q + warp * 2.4 + flow);
  float n2 = fbm(q * 1.6 + warp * 1.8 - flow * 0.6 + 7.3);

  // palette (violet / pink / cyan) — but desaturated and dim
  vec3 violet = vec3(0.27, 0.18, 0.42);
  vec3 pink   = vec3(0.36, 0.15, 0.32);
  vec3 cyan   = vec3(0.07, 0.22, 0.32);

  vec3 nebula = mix(violet, cyan, smoothstep(0.35, 0.75, n1));
  nebula = mix(nebula, pink, smoothstep(0.55, 0.9, n2) * 0.55);

  // mask the nebula so it's patchy, not a wash
  float mask = smoothstep(0.42, 0.78, n1) * 0.7
             + smoothstep(0.5, 0.85, n2) * 0.35;
  mask *= 0.72; // overall intensity cap — keeps it muted

  vec3 col = base + nebula * mask;

  // gentle radial vignette toward edges (slightly darker corners)
  float vig = smoothstep(1.1, 0.25, length(p));
  col *= mix(0.7, 1.0, vig);

  // Starfield — three layers for parallax/depth
  vec2 suv = uv * vec2(u_res.x / u_res.y, 1.0);
  float stars = 0.0;
  stars += starLayer(suv, 90.0,  0.012, 1.6, 1.0) * 0.55;
  stars += starLayer(suv, 160.0, 0.008, 2.3, 7.0) * 0.75;
  stars += starLayer(suv, 240.0, 0.006, 3.1, 13.0) * 0.9;

  // tint stars slightly with palette so they're not pure white
  vec3 starCol = mix(vec3(0.85, 0.88, 1.0), vec3(0.95, 0.88, 1.0), hash(floor(suv * 50.0)));
  col += starCol * stars * 0.85;

  // slight overall darken control (for light mode)
  col = mix(col, vec3(0.97, 0.97, 0.95), u_dark);

  gl_FragColor = vec4(col, 1.0);
}
`;

export function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { antialias: false, alpha: false, premultipliedAlpha: false });
    if (!gl) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      return sh;
    };
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, 'u_res');
    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uDark = gl.getUniformLocation(prog, 'u_dark');

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = Math.floor(window.innerWidth * dpr);
      const h = Math.floor(window.innerHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, w, h);
      gl.uniform2f(uRes, w, h);
    };
    resize();
    window.addEventListener('resize', resize);

    const start = performance.now();
    let rafId = 0;

    const render = () => {
      const t = (performance.now() - start) / 1000;
      gl.uniform1f(uTime, t);
      const isDark = document.documentElement.classList.contains('dark');
      gl.uniform1f(uDark, isDark ? 0.0 : 0.92);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      if (!reduced) rafId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(rafId);
      gl.deleteBuffer(buf);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="aurora-canvas" aria-hidden />
      <div className="aurora-grain" aria-hidden />
    </>
  );
}
