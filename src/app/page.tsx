// src/app/page.tsx
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

export default function Home() {
  const [activeSection, setActiveSection] = useState<'about' | 'how' | 'features' | 'pricing' | null>(null);

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
      default:
        return null;
    }
  };

  return (
    <>
      <Header onNavigate={setActiveSection} />
      <div className="h-8" />
      <main className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen">
        <AnimatePresence mode="wait">
          {!activeSection && (
            <motion.div className="pt-28 min-h-[60vh]">
              <div className="pt-32 pb-20"><Hero /></div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {activeSection && (
            <motion.div className="pt-28 min-h-[60vh]">
              {renderSection()}
              <DownloadCTA />
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </main>
    </>
  );
}
