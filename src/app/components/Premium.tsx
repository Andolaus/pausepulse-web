export default function Premium() {
  const features = [
    { label: 'Breathing sessions', free: true, premium: true },
    { label: 'XP & level progression', free: true, premium: true },
    { label: 'Basic badges & streaks', free: true, premium: true },
    { label: 'Daily goals', free: true, premium: true },
    { label: 'Advanced insights & stats', free: false, premium: true },
    { label: 'Voice packs & themes', free: false, premium: true },
    { label: 'Double XP bonus', free: false, premium: true },
    { label: 'Exclusive perks & rewards', free: false, premium: true },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Free vs Premium</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="col-span-1 bg-white rounded-xl shadow p-6">
            <h3 className="text-2xl font-bold mb-2">Free</h3>
            <p className="text-gray-600 mb-4">Everything you need to get started and grow.</p>
            <ul className="space-y-2">
              {features.map((f, idx) => f.free && (
                <li key={idx} className="text-sm text-gray-700">✔️ {f.label}</li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 bg-indigo-600 text-white rounded-xl shadow-xl p-6 transform scale-[1.05]">
            <h3 className="text-2xl font-bold mb-2">Premium</h3>
            <p className="text-white/90 mb-4">Unlock the full PausePulse experience.</p>
            <ul className="space-y-2">
              {features.map((f, idx) => f.premium && (
                <li key={idx} className="text-sm">✨ {f.label}</li>
              ))}
            </ul>
            <a href="#" className="mt-6 inline-block bg-white text-indigo-600 font-semibold px-5 py-3 rounded-full hover:bg-indigo-100 transition">
              Upgrade to Premium
            </a>
          </div>

          <div className="col-span-1 bg-white rounded-xl shadow p-6 flex flex-col justify-center">
            <h3 className="text-lg font-semibold mb-2">Why Premium?</h3>
            <p className="text-gray-700 text-sm">
              Designed for users who want to go deeper: personalize their journey, unlock perks, and access enhanced insights that turn calm into a habit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
