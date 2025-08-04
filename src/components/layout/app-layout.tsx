"use client";

import React, { useState, useEffect } from 'react';
import { Header } from './header';
import { Footer } from './footer';


export function AppLayout({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex min-h-svh w-full bg-background" />
    );
  }

  return (
    <div className="min-h-svh flex flex-col w-4/5 mx-auto">
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
    </div>
  );
}
