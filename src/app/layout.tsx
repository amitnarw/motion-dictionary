import type { Metadata } from 'next';
import './globals.css';
import { AppLayout } from '@/components/layout/app-layout';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'AniLib - Animation Library',
  description: 'A curated library of animations for Framer Motion, GSAP, and more.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
         <div className="fixed inset-0 bg-grid-zinc-400/25 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-10" />
        <AppLayout>{children}</AppLayout>
        <Toaster />
      </body>
    </html>
  );
}
