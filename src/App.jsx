import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Loader from './components/Loader';
import Scene3D from './components/Scene3D';
import SmoothScroll from './components/SmoothScroll';
import { NotificationProvider } from './components/VisaNotification';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="App">
      <Scene3D />
      <SmoothScroll>
        <AnimatePresence>
          {loading && (
            <motion.div
              key="loader"
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8 }}
            >
              <Loader onLoadingComplete={() => setLoading(false)} />
            </motion.div>
          )}
        </AnimatePresence>

        {!loading && (
          <NotificationProvider>
            <ScrollProgress />
            <Navbar />
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </motion.main>
            <Footer />
          </NotificationProvider>
        )}
      </SmoothScroll>
    </div>
  );
}

export default App;
