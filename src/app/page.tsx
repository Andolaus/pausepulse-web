'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import AboutMe from './components/AboutMe';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Premium from './components/Premium';
import Footer from './components/Footer';
import Contact from './components/Contact';
import EarlyAccess from './components/EarlyAccess';

export default function Home() {
  const handleNavigate = (
    section: 'about' | 'how' | 'features' | 'pricing' | 'contact' | 'earlyaccess' | null
  ) => {
    if (!section) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.getElementById(section);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Header onNavigate={handleNavigate} />
      <main className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white min-h-screen">
        <Hero onNavigate={handleNavigate} />
        <Stats />
        <AboutMe onNavigate={() => handleNavigate('contact')} />
        <HowItWorks />
        <Features />
        <Premium onStartPremium={() => handleNavigate('earlyaccess')} />
        <EarlyAccess />
        <Contact />
        <Footer onNavigate={handleNavigate} />
      </main>
    </>
  );
}

