
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Copy, Palette } from "lucide-react";
import Link from "next/link";
import { AnimationCard } from "@/components/animation-card";
import { animations } from "@/lib/animations";

export default function LandingPage() {
  const featuredAnimations = animations.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="text-center py-20 lg:py-32 px-4">
          <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
           <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            The Animation Library
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your ultimate destination for discovering and using production-ready animations. Built for developers, designers, and creators to bring life to their projects.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/animations">
                Explore Animations <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/submit">
                Contribute <Palette className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Featured Animations Section */}
        <section className="py-16 lg:py-24 bg-background/50">
            <div className="container mx-auto px-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-foreground">Featured Animations</h2>
                 <p className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
                    Get a glimpse of the high-quality, ready-to-use animations in our ever-growing library.
                 </p>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredAnimations.map((animation) => (
                        <AnimationCard key={animation.id} animation={animation} />
                    ))}
                </div>
            </div>
        </section>


        {/* How It Works Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-foreground">How It Works</h2>
            <p className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              Three simple steps to find and implement the perfect animation for your project.
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
