'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-indigo-700 via-purple-700 to-fuchsia-600 text-white py-24 px-6 text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto z-10 relative">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">🌿 PausePulse</h1>
        <p className="text-xl sm:text-2xl mb-6">Breathe. Grow. Level Up.</p>
        <p className="mb-8 text-lg text-white/80">
          En ny type mindfulness-app som gjør pauser vanedannende og gøy – med XP, nivåer og rolig stemning.
        </p>

        <div className="flex justify-center gap-4">
          <a href="#" className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
            Last ned på App Store
          </a>
          <a href="#" className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
            Google Play
          </a>
        </div>
      </div>

      {/* Dekorativ bakgrunnsboble */}
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl z-0"></div>
    </section>
  );
}
