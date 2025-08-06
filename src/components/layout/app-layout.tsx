"use client";

import React, { useState, useEffect } from 'react';
import { Header } from './header';
import { Footer } from './footer';
import Lenis from '@studio-freight/lenis'


export function AppLayout({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const lenis = new Lenis()

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

      return () => {
        lenis.destroy();
      };
    }
  }, [isMounted])

  if (!isMounted) {
    return (
      <div className="flex min-h-svh w-full bg-background" />
    );
  }

  return (
    <div className="min-h-svh flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
    </div>
  );
}
