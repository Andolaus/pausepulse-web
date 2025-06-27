import './globals.css';
import { Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata = {
  title: 'PausePulse – Breathe. Grow. Level Up.',
  description:
    'PausePulse is a mindfulness app that turns breathing breaks into a gamified, rewarding habit. Launching soon on iOS and Android.',
  metadataBase: new URL('https://pausepulse.app'), // ← bytt til riktig domene
  openGraph: {
    title: 'PausePulse',
    description: 'Mindful breaks, gamified. Coming soon.',
    url: 'https://pausepulse.app',
    siteName: 'PausePulse',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PausePulse preview',
      },
    ],
    type: 'website',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="bg-white text-gray-900 font-sans">{children}</body>
    </html>
  );
}
