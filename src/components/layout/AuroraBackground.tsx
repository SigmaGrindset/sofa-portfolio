import { useEffect, useRef } from 'react';

export function AuroraBackground() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const blobs = Array.from(root.querySelectorAll<HTMLDivElement>('.aurora-blob'));
    const strengths = [40, -55, 28];

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      targetX = x;
      targetY = y;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      blobs.forEach((blob, i) => {
        const s = strengths[i] ?? 30;
        blob.style.setProperty('--mx', `${currentX * s}px`);
        blob.style.setProperty('--my', `${currentY * s}px`);
      });
      rafId = window.requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={rootRef} className="aurora-root" aria-hidden>
        <div className="aurora-blob aurora-blob-1"><span /></div>
        <div className="aurora-blob aurora-blob-2"><span /></div>
        <div className="aurora-blob aurora-blob-3"><span /></div>
      </div>
      <div className="aurora-grain" aria-hidden />
    </>
  );
}
