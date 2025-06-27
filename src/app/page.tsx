// src/app/page.tsx
'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Premium from './components/Premium';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20 bg-white text-gray-900">
        <Hero />
        <About />
        <section id="how"><HowItWorks /></section>
        <section id="features"><Features /></section>
        <section id="pricing"><Premium /></section>
        <DownloadCTA />
        <section id="contact"><Footer /></section>
      </main>
    </>
  );
}
