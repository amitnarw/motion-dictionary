
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Copy, Palette } from "lucide-react";
import Link from "next/link";
import { AnimationCard } from "@/components/animation-card";
import { animations } from "@/lib/animations";
import { MagneticButton } from "@/components/ui/magnetic-button";

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
        <section className="relative text-center py-24 md:py-40 lg:py-48 px-4 overflow-hidden">
           <div className="absolute inset-0 -z-10 h-full w-full bg-grid" />
           <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(142,206,2,0.1)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
          
          <div className="container w-4/5 mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground uppercase">
              Animate Anything
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              The ultimate open-source hub of production-ready animations. Built for developers, designers, and creators to bring life to their projects with ease.
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
            <div className="relative mt-20 max-w-3xl mx-auto">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-border"></div>
              {steps.map((step, index) => (
                <div key={index} className="relative mb-16 flex items-center justify-center">
                  <div className={`flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                      <div className="bg-card p-6 rounded-xl shadow-lg border border-border/50">
                        <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-background p-2 rounded-full border-2 border-primary">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full">
                      <step.icon className="h-6 w-6" />
                    </div>
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
