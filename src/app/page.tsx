
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Copy, Palette } from "lucide-react";
import Link from "next/link";
import { AnimationCard } from "@/components/animation-card";
import { animations } from "@/lib/animations";
import { MagneticButton } from "@/components/ui/magnetic-button";

export default function LandingPage() {
  const featuredAnimations = animations.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative text-center py-24 md:py-40 lg:py-48 px-4 overflow-hidden">
           <div className="absolute inset-0 -z-10 h-full w-full bg-grid" />
           <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(142,206,2,0.1)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
          
          <div className="container w-4/5 mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground uppercase">
              Animate Anything
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              The ultimate open-source library of production-ready animations. Built for developers, designers, and creators to bring life to their projects with ease.
            </p>
            <div className="mt-10 flex gap-4 justify-center">
              <MagneticButton>
                <Link href="/animations" className="flex items-center gap-2">
                  Explore Library <ArrowRight className="ml-2" />
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-foreground">How It Works</h2>
            <p className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              Three simple steps to find, copy, and implement the perfect animation for your project.
            </p>
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-card p-8 rounded-lg">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 text-primary p-4 rounded-full">
                    <Palette className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">1. Discover</h3>
                <p className="text-muted-foreground mt-2">
                  Browse our extensive library of animations, categorized and searchable for easy discovery.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg">
                 <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 text-primary p-4 rounded-full">
                    <Copy className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">2. Copy</h3>
                <p className="text-muted-foreground mt-2">
                  Once you find an animation you love, simply view the code and copy it to your clipboard with a single click.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg">
                 <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 text-primary p-4 rounded-full">
                    <Code className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">3. Implement</h3>
                <p className="text-muted-foreground mt-2">
                  Paste the code directly into your project. Our snippets are designed to be clean, efficient, and easy to integrate.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
