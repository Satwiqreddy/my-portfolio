import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Intro from './components/Intro';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [loading]);

  return (
    <div className="app-container">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <Navbar />
      <main>
        <Intro />
        <Hero />
        <Skills />
        <Education />
        <Marquee />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
