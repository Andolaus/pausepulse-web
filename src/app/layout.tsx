import './globals.css';
import { Outfit } from 'next/font/google';
import type { Metadata, Viewport } from 'next';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PausePulse – Breathe. Grow. Level Up.',
  description: 'PausePulse is a mindfulness app that turns breathing breaks into a gamified, rewarding habit. Launching soon on iOS and Android.',
  metadataBase: new URL('https://pausepulse.app'),
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
  twitter: {
    card: 'summary_large_image',
    title: 'PausePulse – Breathe. Grow. Level Up.',
    description: 'PausePulse is a mindfulness app that turns breathing breaks into a gamified, rewarding habit.',
    creator: '@yourtwitterhandle',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.png',
  },
  alternates: {
    canonical: 'https://pausepulse.app',
  },
  robots: {
    index: true,
    follow: true,
  },
  // ❌ themeColor er fjernet herfra
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff', // ✅ flyttet hit
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth`}>
      <body className="bg-white text-gray-900 font-sans dark:bg-gray-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}
