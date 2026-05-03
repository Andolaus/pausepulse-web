'use client';

import Image from 'next/image';
import { FaStar, FaApple, FaGooglePlay } from 'react-icons/fa';

type HeroProps = {
  onNavigate: (section: 'about' | 'how' | 'features' | 'pricing' | 'contact' | 'earlyaccess' | null) => void;
};

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      className="relative isolate overflow-hidden pt-20 pb-24 lg:pt-28 lg:pb-32 bg-white dark:bg-gray-950"
      aria-labelledby="hero-heading"
    >
      {/* Background — aurora + soft grid */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-grid-soft opacity-60" />
        <div className="aurora-blob absolute -top-40 -right-32 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-emerald-300/40 via-teal-200/30 to-transparent dark:from-emerald-500/20 dark:via-teal-500/10 blur-3xl" />
        <div
          className="aurora-blob absolute -bottom-32 -left-24 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-emerald-100/70 to-transparent dark:from-emerald-700/15 blur-3xl"
          style={{ animationDelay: '-7s' }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-gray-950 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 items-center gap-12 lg:gap-8">

        {/* Text column */}
        <div className="lg:col-span-7 text-center lg:text-left fade-up">

          {/* Live badge */}
          <div className="inline-flex items-center gap-2 bg-white/70 dark:bg-gray-900/60 backdrop-blur border border-emerald-200/70 dark:border-emerald-700/50 text-emerald-700 dark:text-emerald-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-7 tracking-wide shadow-sm">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
            </span>
            <span className="uppercase tracking-widest">Live on iOS &amp; Android</span>
          </div>

          <h1
            id="hero-heading"
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.02] tracking-tight mb-6"
          >
            Find calm
            <br />
            in <span className="text-gradient-brand">60 seconds.</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Guided breathing, calming soundscapes, and gentle progress — backed by real techniques.
            No streaks. No pressure. Just better days.
          </p>

          {/* Social proof */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 mb-8 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((i) => (
                  <FaStar key={i} className="w-4 h-4" aria-hidden="true" />
                ))}
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">5.0</span>
              <span>on the App Store</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-gray-400" aria-hidden="true" />
              <span>
                <span className="font-semibold text-gray-900 dark:text-white">Just launched</span> · be among the first
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row sm:justify-start justify-center items-stretch sm:items-center gap-3">
            <a
              href="https://apps.apple.com/us/app/pausepulse/id6761433093"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download PausePulse on the App Store"
              className="group inline-flex items-center justify-center gap-3 bg-gray-900 hover:bg-black text-white px-6 py-3.5 rounded-2xl font-semibold shadow-xl shadow-black/10 hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all duration-300 border border-gray-900"
            >
              <FaApple className="w-6 h-6" aria-hidden="true" />
              <div className="text-left leading-tight">
                <div className="text-[10px] font-medium opacity-70">Download on the</div>
                <div className="text-base font-bold">App Store</div>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.pausepulse.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download PausePulse on Google Play"
              className="group inline-flex items-center justify-center gap-3 bg-gray-900 hover:bg-black text-white px-6 py-3.5 rounded-2xl font-semibold shadow-xl shadow-black/10 hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all duration-300 border border-gray-900"
            >
              <FaGooglePlay className="w-5 h-5" aria-hidden="true" />
              <div className="text-left leading-tight">
                <div className="text-[10px] font-medium opacity-70">Get it on</div>
                <div className="text-base font-bold">Google Play</div>
              </div>
            </a>
            <button
              onClick={() => onNavigate('pricing')}
              aria-label="See PausePulse Premium"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-gray-700 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-400 font-medium transition-colors duration-200 border border-transparent hover:border-emerald-200 dark:hover:border-emerald-800"
            >
              See Premium
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Trust microcopy */}
          <p className="mt-6 text-xs text-gray-500 dark:text-gray-500">
            Free to download · Privacy-first · No account required
          </p>
        </div>

        {/* Image column */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end fade-up" style={{ animationDelay: '0.15s' }}>
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 -z-10 m-8 rounded-[3rem] bg-gradient-to-br from-emerald-400/30 via-teal-300/20 to-emerald-500/20 blur-3xl" aria-hidden="true" />

            {/* Floating badges */}
            <div className="hidden md:flex absolute -left-6 top-12 z-10 items-center gap-2.5 glass-card px-3.5 py-2.5 rounded-2xl shadow-xl float-soft" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 breathe-soft" />
              <div className="leading-tight">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">Inhale</div>
                <div className="text-xs font-medium text-gray-800 dark:text-gray-200">4·7·8 method</div>
              </div>
            </div>
            <div
              className="hidden md:flex absolute -right-4 bottom-16 z-10 items-center gap-2.5 glass-card px-3.5 py-2.5 rounded-2xl shadow-xl float-soft"
              style={{ animationDelay: '-3s' }}
              aria-hidden="true"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                  <path d="M3 13h2v-2H3v2zm4 4h2V7H7v10zm4 4h2V3h-2v18zm4-4h2V7h-2v10zm4-4h2v-2h-2v2z" />
                </svg>
              </div>
              <div className="leading-tight">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">Today</div>
                <div className="text-xs font-medium text-gray-800 dark:text-gray-200">3 calm minutes</div>
              </div>
            </div>

            <Image
              src="/images/hero-app-preview2.png"
              alt="PausePulse app preview"
              width={2400}
              height={1400}
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 460px"
              className="relative w-full max-w-[260px] sm:max-w-xs md:max-w-sm lg:max-w-md h-auto drop-shadow-[0_25px_50px_rgba(5,150,105,0.25)] float-soft"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
