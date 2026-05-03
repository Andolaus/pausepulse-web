'use client';

import { LuClock, LuShieldCheck, LuSparkles } from 'react-icons/lu';

type AboutMeProps = {
  onNavigate: (section: 'contact') => void;
};

export default function AboutMe({ onNavigate }: AboutMeProps) {
  const pillars = [
    {
      icon: <LuClock className="w-5 h-5" aria-hidden="true" />,
      title: 'Built for real life',
      desc: 'Tap once, breathe deeply, get back to your day. Sessions adapt to a minute or ten.',
    },
    {
      icon: <LuSparkles className="w-5 h-5" aria-hidden="true" />,
      title: 'Calm, not clinical',
      desc: 'A warm, beautiful experience guided by techniques you can actually feel working.',
    },
    {
      icon: <LuShieldCheck className="w-5 h-5" aria-hidden="true" />,
      title: 'Pressure-free progress',
      desc: 'No streaks shaming you. Just gentle insights that build a habit you keep.',
    },
  ];

  return (
    <section
      id="about"
      aria-labelledby="aboutme-heading"
      className="bg-gradient-to-b from-white to-emerald-50/40 dark:from-gray-950 dark:to-emerald-950/20 py-24 lg:py-32 px-6 sm:px-8 lg:px-12 border-t border-gray-100 dark:border-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: heading */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-3">
              About PausePulse
            </p>
            <h2
              id="aboutme-heading"
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1]"
            >
              Mindfulness that actually fits
              <span className="text-gradient-brand"> your day.</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              We built PausePulse for the moments most apps ignore — the school run, the inbox spike,
              the 90 seconds before a hard conversation. A breathing app you reach for because it
              makes you feel <span className="font-semibold text-gray-800 dark:text-gray-200">better</span>,
              not <span className="font-semibold text-gray-800 dark:text-gray-200">guilty</span>.
            </p>

            <button
              onClick={() => onNavigate('contact')}
              aria-label="Contact PausePulse"
              className="mt-8 inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 font-semibold text-base group"
            >
              Get in touch
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true">
                <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Right: pillars */}
          <div className="lg:col-span-7 grid sm:grid-cols-1 gap-4">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="group flex gap-5 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-lg transition-all duration-300"
              >
                <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800 group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">{p.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
