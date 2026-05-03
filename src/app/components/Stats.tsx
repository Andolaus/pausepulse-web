import { LuUsers, LuClock, LuHeart, LuShieldCheck } from 'react-icons/lu';

export default function Stats() {
  const stats = [
    { icon: <LuUsers className="w-5 h-5" aria-hidden="true" />, value: 'New', label: 'Just launched' },
    { icon: <LuClock className="w-5 h-5" aria-hidden="true" />, value: '60s', label: 'To start breathing' },
    { icon: <LuHeart className="w-5 h-5" aria-hidden="true" />, value: '5.0★', label: 'Early App Store rating' },
    { icon: <LuShieldCheck className="w-5 h-5" aria-hidden="true" />, value: '100%', label: 'Privacy-first' },
  ];

  return (
    <section
      aria-label="At a glance"
      className="relative bg-white dark:bg-gray-950 -mt-6 lg:-mt-12 z-10"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="glass-card rounded-3xl shadow-xl shadow-emerald-900/5 px-6 sm:px-8 py-7 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="flex items-center gap-3 sm:gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800">
                {s.icon}
              </div>
              <div className="leading-tight">
                <div className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight tabular-nums">{s.value}</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
