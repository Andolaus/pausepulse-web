import './globals.css';
import { Outfit } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/react';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PausePulse - Breathe Calmer, Think Clearer',
  description: 'PausePulse is a breathing app for real life: guided sessions, calming soundscapes, and gentle progress without pressure.',
  metadataBase: new URL('https://pausepulse.app'),
  openGraph: {
    title: 'PausePulse',
    description: 'A breathing app for real life with guided sessions and gentle, pressure-free progress.',
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
    title: 'PausePulse - Breathe Calmer, Think Clearer',
    description: 'Guided breathing sessions, calming soundscapes, and steady habits without pressure.',
    creator: '@yourtwitterhandle',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
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
        <Analytics />
      </body>
    </html>
  );
}
