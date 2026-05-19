import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { ProjectsGrid } from './components/ProjectsGrid';
import { Contact } from './components/Contact';

export function Homepage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <ProjectsGrid />
      <Contact />
    </>
  );
}
