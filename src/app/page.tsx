import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Premium from './components/Premium';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <Premium />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
