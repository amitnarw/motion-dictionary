
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Copy, Palette, Quote } from "lucide-react";
import Link from "next/link";
import { AnimationCard } from "@/components/animation-card";
import { animations } from "@/lib/animations";
import { FancyButton } from "@/components/ui/fancy-button";
import { LiquidFillText } from "@/components/animations/liquid-fill-text";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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

  const testimonials = [
    {
      quote: "Motionary has completely transformed my workflow. Finding the perfect animation used to take hours of searching. Now, it's just a few clicks away. An indispensable tool for any modern developer.",
      name: "Jane Doe",
      title: "Lead Frontend Developer at TechCorp"
    },
    {
      quote: "The quality and variety of animations are top-notch. I've saved countless hours and my projects have never looked better. Highly recommended!",
      name: "John Smith",
      title: "Freelance Web Designer"
    },
    {
      quote: "A must-have for any developer serious about UI/UX. The AI suggestions are surprisingly accurate and have sparked new creative ideas for me.",
      name: "Alex Johnson",
      title: "UI Engineer at Innovate Ltd."
    },
    {
      quote: "The best animation resource out there, period. The code is clean and the previews are incredibly helpful. A real time-saver.",
      name: "Emily White",
      title: "Creative Technologist"
    },
    {
      quote: "I use Motionary on almost every project now. It's the perfect starting point for creating beautiful, engaging user interfaces.",
      name: "Michael Brown",
      title: "Full-Stack Developer"
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

        {/* Every animation. One search. Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 w-4/5">
            <div className="flex flex-row gap-20">
               <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block mr-2"
                >
                  <path
                    d="M11.5303 6.53033C11.8232 6.23744 11.8232 5.76256 11.5303 5.46967L6.75736 0.696699C6.46447 0.403806 5.98959 0.403806 5.6967 0.696699C5.40381 0.989593 5.40381 1.46447 5.6967 1.75736L9.93934 6L5.6967 10.2426C5.40381 10.5355 5.40381 11.0104 5.6967 11.3033C5.98959 11.5962 6.46447 11.5962 6.75736 11.3033L11.5303 6.53033ZM0 6.75H11V5.25H0V6.75Z"
                    fill="currentColor"
                  />
                </svg>
              <div className="flex flex-col gap-6">
                <div className="flex gap-5 items-center justify-center">
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
          </div>
        </section>

        {/* Featured Animations Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 w-4/5">
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

        {/* Testimonials Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 w-4/5">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Loved by Developers
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              Our users praise our extensive library and ease of use.
            </p>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full mt-16"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2">
                    <Card className="h-full bg-background/30 backdrop-blur-lg border-border/20 rounded-2xl shadow-lg overflow-hidden flex flex-col">
                      <CardContent className="p-8 flex-grow flex flex-col justify-between">
                        <Quote className="w-10 h-10 text-primary/50 mb-4" />
                        <p className="text-foreground/90 text-lg flex-grow">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center gap-4 mt-8">
                          <Image src={`https://i.pravatar.cc/80?u=${index}`} width={56} height={56} alt={testimonial.name} className="rounded-full border-2 border-primary/50" />
                          <div>
                            <p className="font-bold text-xl text-foreground font-headline">{testimonial.name}</p>
                            <p className="text-md text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center gap-4 mt-8">
                  <CarouselPrevious className="static -translate-y-0" />
                  <div className="flex-1 h-px bg-border"></div>
                  <CarouselNext className="static -translate-y-0" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 lg:py-24 bg-background">
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
