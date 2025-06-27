'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-purple-50 dark:from-gray-900 dark:to-purple-950 pt-64 pb-24 px-6 sm:pt-72 sm:pb-32 lg:px-8 min-h-screen flex items-center"> {/* Økt pt-verdier betydelig for mobil */}
      {/* Background Gradient/Pattern Overlay - Subtle animation */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        <div className="absolute inset-0 bg-repeat bg-[size:100px_100px]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23a0aec0\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 20v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 46v-4h-2v4H0v2h4v4h2v-4h4v-2H6zm0-10v-4h-2v4H0v2h4v4h2v-4h4v-2H6zM36 46v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 16v-4H4v4H0v2h4v4h2v-4h4v-2H6zm30 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM18 28v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM36 4V0h-2v4h-4v2h4v4h2V6h4V4h-4zM48 16v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM18 4V0h-2v4h-4v2h4v4h2V6h4V4h-4zM48 28v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM0 34v-4H-2v4H-6v2h4v4h2v-4h4v-2H0zm0 12v-4H-2v4H-6v2h4v4h2v-4h4v-2H0zM12 6V2h-2v4h-4v2h4v4h2V8h4V6h-4zM12 18v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 0v-4h-2v4h-4v2h4v4h2V2h4V0h-4zM48 46v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM0 10v-4H-2v4H-6v2h4v4h2v-4h4v-2H0z\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}
        ></div>
      </div>


      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-5 animate-fade-in-up">
            Pause<br className="sm:hidden"/> with <span className="text-emerald-600 dark:text-emerald-400">Purpose</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed animate-fade-in-up delay-200">
            Build mindful habits through calming breathing exercises, beautiful visuals, and a truly rewarding XP system that keeps you engaged.
          </p>
          <a
            href="#"
            className="inline-block bg-emerald-600 dark:bg-emerald-500 text-white
                       px-8 py-4 rounded-full font-bold text-lg shadow-xl
                       hover:bg-emerald-700 dark:hover:bg-emerald-600 hover:scale-105 transition-all duration-300 ease-in-out
                       focus:outline-none focus:ring-4 focus:ring-emerald-300 focus:ring-opacity-75 animate-fade-in-up delay-400"
          >
            Get Early Access
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-8 animate-fade-in-up delay-600">
            📱 Launching soon on <strong className="text-gray-700 dark:text-white">App Store</strong> and <strong className="text-700 dark:text-white">Google Play</strong>.
          </p>
        </div>

        {/* Right Column: App Preview Placeholder */}
        <div className="w-full max-w-sm mx-auto p-4 md:p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl aspect-[9/19] flex items-center justify-center text-gray-400 dark:text-gray-500 transform rotate-3 scale-95 md:rotate-0 md:scale-100 transition-transform duration-500 ease-out animate-fade-in-right">
          <span className="text-base sm:text-lg font-medium text-center italic">
            [ Immersive App Preview Coming Soon! ]
          </span>
        </div>
      </div>
    </section>
  );
}