import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Philosophy from './components/Philosophy';
import PlotGuide from './components/PlotGuide';
import Leadership from './components/Leadership';
import Consultation from './components/Consultation';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

/*
  Earlier sections (SelectedProperties, FeaturedResidence, Locations, Journal) are kept in
  src/components/ and can be added back here at any time.
*/

function App() {
  return (
    // reducedMotion="user" turns movement off for visitors who prefer less motion
    <MotionConfig reducedMotion="user">
      {/* Framed canvas with fine side borders, as in the original design */}
      <div className="mx-auto min-h-screen max-w-[1440px] overflow-x-clip border-x border-line bg-ivory">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Philosophy />
          <Projects />
          <Services />
          <PlotGuide />
          <Leadership />
          <Consultation />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
