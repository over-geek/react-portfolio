import './App.css';
import ContactSection from './components/ContactSection';
import EngineeringPillars from './components/EngineeringPillars';
import HeroSection from './components/HeroSection';
import ProjectsShowcase from './components/ProjectsShowcase';
import ScrollRail from './components/ScrollRail';
import { navSections } from './data/portfolio';
import { useActiveSection } from './hooks/useActiveSection';

const sectionIds = navSections.map((section) => section.id);

function App() {
  const { activeId, activeIndex } = useActiveSection(sectionIds);
  return (
    <div className="min-h-screen overflow-hidden bg-obsidian text-ivory">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 cyber-grid opacity-40" />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 scanline opacity-30" />
      <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 h-px bg-cyan/40" />

      <ScrollRail
        activeId={activeId}
        activeIndex={activeIndex}
        sections={navSections}
      />

      <main className="relative z-10 pb-24 lg:pl-24">
        <HeroSection />
        <EngineeringPillars />
        <ProjectsShowcase />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
