'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Premium from './components/Premium';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';
import Contact from './components/Contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState<
    'about' | 'how' | 'features' | 'pricing' | 'contact' | null
  >(null);

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About key="about" />;
      case 'how':
        return <HowItWorks key="how" />;
      case 'features':
        return <Features key="features" />;
      case 'pricing':
        return <Premium key="pricing" />;
      case 'contact':
        return <Contact key="contact" />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header onNavigate={setActiveSection} />
      <div className="h-24" />
      <main className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {!activeSection && (
              <motion.div className="min-h-[60vh]">
                <Hero />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {activeSection && (
              <motion.div className="min-h-[60vh] space-y-24">
                {renderSection()}
                <DownloadCTA />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Footer />
      </main>
    </>
  );
}
