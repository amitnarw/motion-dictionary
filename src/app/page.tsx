

import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Copy, Palette } from "lucide-react";
import Link from "next/link";
import { AnimationCard } from "@/components/animation-card";
import { animations } from "@/lib/animations";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { LiquidFillText } from "@/components/animations/liquid-fill-text";

export default function LandingPage() {
  const featuredAnimations = animations.slice(0, 4);

  const steps = [
    {
      icon: Palette,
      title: "1. Discover",
      description: "Browse our extensive collection of animations, categorized and searchable for easy discovery. Find the perfect motion for any component."
    },
    {
      icon: Copy,
      title: "2. Copy",
      description: "Once you find an animation you love, simply view the code and copy it to your clipboard with a single click."
    },
    {
      icon: Code,
      title: "3. Implement",
      description: "Paste the code directly into your project. Our snippets are designed to be clean, efficient, and easy to integrate into any modern framework."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative text-center py-16 px-4 overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-grid" />
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(142,206,2,0.1)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>

          <div className="container w-4/5 mx-auto flex flex-col items-center">
            <div className="max-w-fit mx-auto">
                <h1 className="w-full text-left text-7xl sm:text-[120px] lg:text-[150px] font-headline">
                    MOTION
                </h1>
                <LiquidFillText text="DICTIONARY" className="w-full text-right text-9xl sm:text-[160px] lg:text-[150px] font-black -mt-4 sm:-mt-6 lg:-mt-8" />
            </div>
            <h2 className="mt-4 text-2xl md:text-3xl font-medium tracking-tight text-foreground">
              Every animation. One search.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover animations from all major JavaScript and CSS libraries, including GSAP, Framer Motion, Anime.js, Lottie, and more.
              Search, preview, and copy production-ready animation code with ease.
              Whether you're building UI interactions, transitions, or full scenes, Motionary helps you find the perfect motion, faster.
            </p>
            <div className="mt-10 flex gap-4 justify-center">
              <MagneticButton>
                <Link href="/animations" className="flex items-center gap-2">
                  Explore Animations <ArrowRight className="ml-2" />
                </Link>
              </MagneticButton>
            </div>
          </div>
        </section>

        {/* Featured Animations Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 w-4/5">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-foreground">Featured Animations</h2>
            <p className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              A curated glimpse into our ever-expanding collection of high-quality, ready-to-use animations.
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredAnimations.map((animation, index) => (
                <AnimationCard key={animation.id} animation={animation} index={index} />
              ))}
            </div>
          </div>
        </section>


        {/* How It Works Section */}
        <section className="py-16 lg:py-24 bg-card/50">
          <div className="container mx-auto px-4 w-4/5">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">How It Works</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Three simple steps to find, copy, and implement the perfect animation for your project.
              </p>
            </div>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative p-8 bg-card rounded-xl shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-4 right-4 text-5xl font-black text-primary/10">
                    0{index + 1}
                  </div>
                  <div className="relative z-10">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg inline-block mb-4">
                      <step.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
