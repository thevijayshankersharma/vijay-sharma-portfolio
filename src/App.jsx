import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Loader from './components/Loader';
import { NotificationProvider } from './components/VisaNotification';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      {loading && <Loader onLoadingComplete={() => setLoading(false)} />}

      {!loading && (
        <NotificationProvider>
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </NotificationProvider>
      )}
    </div>
  );
}

export default App;
