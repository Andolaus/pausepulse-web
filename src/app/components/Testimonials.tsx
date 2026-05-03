import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote:
      'I used to dread anxious mornings. PausePulse gives me a 90-second reset before work, and it actually sticks because nothing about it feels like a chore.',
    name: 'Maria L.',
    role: 'Product designer',
    rating: 5,
  },
  {
    quote:
      'Finally a breathing app that does not lecture me. The visuals are beautiful, and the no-streak approach took the guilt out of practicing.',
    name: 'Daniel K.',
    role: 'Software engineer',
    rating: 5,
  },
  {
    quote:
      'Three minutes between meetings and I feel like a different person. The voices and soundscapes are genuinely soothing — not generic.',
    name: 'Sofie T.',
    role: 'Therapist',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative bg-white dark:bg-gray-950 py-24 sm:py-32 px-6 lg:px-8 border-t border-gray-100 dark:border-gray-800 overflow-hidden"
    >
      {/* Soft accent */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-emerald-100/40 to-transparent dark:from-emerald-900/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-3">
            Loved by users
          </p>
          <h2
            id="testimonials-heading"
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight"
          >
            Real calm. Real people.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Thousands of moments of breath, stress relief, and quiet focus — every single day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-300"
            >
              <FaQuoteLeft
                className="absolute top-5 right-5 text-emerald-100 dark:text-emerald-900/40 w-8 h-8"
                aria-hidden="true"
              />

              <div className="flex gap-0.5 mb-4 text-amber-400" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <FaStar key={idx} className="w-4 h-4" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px] mb-6">
                “{t.quote}”
              </blockquote>

              <figcaption className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
                  {t.name
                    .split(' ')
                    .map((p) => p[0])
                    .join('')}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">{t.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
