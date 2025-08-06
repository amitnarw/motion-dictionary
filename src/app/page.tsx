

import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Copy, Palette, Quote } from "lucide-react";
import Link from "next/link";
import { AnimationCard } from "@/components/animation-card";
import { animations } from "@/lib/animations";
import { FancyButton } from "@/components/ui/fancy-button";
import { LiquidFillText } from "@/components/animations/liquid-fill-text";
import { LoadingMotionText } from "@/components/animations/loading-motion-text";
import Image from "next/image";

export default function LandingPage() {
  const featuredAnimations = animations.slice(0, 4);

  const steps = [
    {
      icon: Palette,
      title: "Discover",
      description: "Browse our extensive collection of animations, categorized and searchable for easy discovery. Find the perfect motion for any component."
    },
    {
      icon: Copy,
      title: "Copy",
      description: "Once you find an animation you love, simply view the code and copy it to your clipboard with a single click."
    },
    {
      icon: Code,
      title: "Implement",
      description: "Paste the code directly into your project. Our snippets are designed to be clean, efficient, and easy to integrate into any modern framework."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative text-center py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-grid" />
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(142,206,2,0.1)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>

          <div className="container w-11/12 sm:w-4/5 mx-auto flex flex-col items-center">
            <h1 className="w-full text-left text-4xl sm:text-[80px] lg:text-[150px] font-headline">
              Motion
            </h1>
            <div className="w-full">
              <LiquidFillText
                text="DICTIONARY"
                alignment="right"
                size="text-[180px] sm:text-[160px] lg:text-[150px]"
                className="w-full font-black -mt-2 sm:-mt-4 lg:mt-0"
              />
            </div>
            <div className="w-full mt-10 flex flex-row items-center justify-end">
              <Link href="/animations" className="w-full flex justify-end group">
                <FancyButton
                  text="Explore Animations"
                  icon={<ArrowRight size="20" className="ml-2" />}
                  className="w-full sm:w-auto px-2 py-2"
                  textClassName="px-6 py-2 text-sm sm:text-lg"
                  fillPercentage={100}
                  initialTextColor="#fff"
                  hoverTextColor="#000"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Animations Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 w-4/5">
            <div className="flex flex-row gap-20">
              <div className="flex flex-col gap-6">
                <div className="flex gap-5 items-center justify-start">
                    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-90">
                        <path d="M50 0L50 100" stroke="hsl(var(--primary))" strokeWidth="4"/>
                        <path d="M50 100L25 75" stroke="hsl(var(--primary))" strokeWidth="4"/>
                        <path d="M50 100L75 75" stroke="hsl(var(--primary))" strokeWidth="4"/>
                    </svg>
                  <h2 className="text-3xl md:text-6xl text-start font-bold tracking-tight text-foreground font-headline">
                    Every animation. One search.
                  </h2>
                </div>
                <p className="text-lg md:text-lg text-muted-foreground text-start font-headline">
                  Discover animations from all major JavaScript and CSS libraries, including GSAP, Framer Motion, Anime.js, Lottie, and more.
                  Search, preview, and copy production-ready animation code with ease.
                  Whether you're building UI interactions, transitions, or full scenes, Motionary helps you find the perfect motion, faster.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {steps.map((step, index) => (
                    <div key={index} className="p-8 rounded-3xl shadow-lg border border-border/50 overflow-hidden">
                      <div className="top-4 left-4 text-5xl font-black text-primary/40">
                        0{index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <h2 className="mt-16 text-3xl md:text-5xl font-bold tracking-tight text-center text-foreground">Featured Animations</h2>
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

        {/* Testimonial Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 w-4/5 text-center">
            <Quote className="h-12 w-12 text-primary mx-auto mb-6" />
            <p className="text-2xl md:text-4xl lg:text-5xl font-medium text-foreground max-w-4xl mx-auto leading-tight">
              "Motionary has completely transformed my workflow. Finding the perfect animation used to take hours of searching. Now, it's just a few clicks away. An indispensable tool for any modern developer."
            </p>
            <div className="mt-8">
              <p className="font-bold text-lg text-foreground">Jane Doe</p>
              <p className="text-sm text-muted-foreground">Lead Frontend Developer at TechCorp</p>
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
