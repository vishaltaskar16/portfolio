import { AnimatedHero } from './components/AnimatedHero';
import { AnimatedAbout } from './components/AnimatedAbout';
import { DraggableSkills } from './components/DraggableSkills';
import { Projects } from './components/Projects';
import { AnimatedEducation } from './components/AnimatedEducation';
import { AnimatedContact } from './components/AnimatedContact';
import { AnimatedFooter } from './components/AnimatedFooter';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <BackToTop />
      <Navbar />
      <AnimatedHero />
      <AnimatedAbout />
      <DraggableSkills />
      <Projects />
      <AnimatedEducation />
      <AnimatedContact />
      <AnimatedFooter />
    </div>
  );
}