import Background from './components/canvas/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Loading from './components/Loading';

import { Canvas } from '@react-three/fiber';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Force scroll to top on page load
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    // Remove hash from URL
    if (window.location.hash) {
      window.history.replaceState('', document.title, window.location.pathname);
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loading />}
      </AnimatePresence>
      <div id="canvas-container" style={{ opacity: loading ? 0 : 1, transition: 'opacity 1.5s ease' }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <Background />
        </Canvas>
      </div>
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>

        <footer style={{
          textAlign: 'center',
          padding: '30px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          color: 'var(--text-muted)',
          background: 'rgba(5,5,5,0.8)',
          backdropFilter: 'blur(10px)'
        }}>
          <p>© 2026 Mukul Rajput | Built with ❤️ + AI + 3D Web</p>
        </footer>
      </div>
    </>
  );
}

export default App;
