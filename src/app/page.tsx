'use client';

import Header from './components/Header';
import Hero from './components/Hero';
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
      <div className="h-24" />
      <main className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero onNavigate={handleNavigate} />
          <AboutMe onNavigate={() => handleNavigate('contact')} />
          <HowItWorks />
          <Features />
          <Premium onStartPremium={() => handleNavigate('earlyaccess')} />
          <EarlyAccess />
          <Contact />
        </div>
        <Footer onNavigate={handleNavigate} />
      </main>
    </>
  );
}
