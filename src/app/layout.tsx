import type { Metadata } from 'next';
import './globals.css';
import { AppLayout } from '@/components/layout/app-layout';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { Barlow, Montserrat } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Motionary - Every animation. One search',
  description: 'Discover animations from all major JavaScript and CSS libraries, including GSAP, Framer Motion, Anime.js, Lottie, and more. Search, preview, and copy production-ready animation code with ease. Whether you\'re building UI interactions, transitions, or full scenes, Motionary helps you find the perfect motion, faster.',
};

const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${barlow.variable} ${montserrat.variable} font-body antialiased bg-background`}>
         <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
          <AppLayout>{children}</AppLayout>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
