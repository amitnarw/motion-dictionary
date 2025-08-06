
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
              <Image src="/1.png" alt="1" height={1500} width={1500} ></Image>
              <div className="flex flex-col gap-6">
                <div className="flex gap-5 items-center justify-center">
                  <Image src="/arrow.png" alt="arrow" height={100} width={100} ></Image>
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
                    <div key={index} className="relative p-10 rounded-3xl shadow-lg border border-primary/10 overflow-hidden hover:bg-primary/50 duration-300">
                      <p className="absolute top-2 left-2 text-7xl font-black text-transparent bg-gradient-to-b from-primary/20 to-primary/0 bg-clip-text">
                        0{index + 1}
                      </p>
                      <h3 className="text-xl font-bold text-foreground text-center">{step.title}</h3>
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
            <h2 className="text-3xl md:text-7xl font-bold tracking-tight text-start font-headline bg-clip-text text-transparent bg-gradient-to-r from-white to-[#99ec46]">
              Loved by Developers
            </h2>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full mt-8"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2">
                    <Card className="h-full rounded-2xl shadow-lg overflow-hidden flex flex-col bg-[linear-gradient(0deg,#2a2d32_20%,_#1d1d1d_100%)] border-none">
                      <CardContent className="p-8 flex-grow flex flex-col justify-between">
                        <Quote className="w-10 h-10 text-primary/50 mb-4" />
                        <p className="text-foreground/70 text-xl flex-grow leading-relaxed">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center gap-4 mt-8">
                          <Image src={`https://i.pravatar.cc/80?u=${index}`} width={64} height={64} alt={testimonial.name} className="rounded-full" />
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
                <CarouselPrevious className="static -translate-y-0 h-14 w-14" />
                <CarouselNext className="static -translate-y-0 h-14 w-14" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="relative py-16 lg:py-24 bg-black/40">
          <div className="container mx-auto px-4 w-4/5">
            <div className="text-center">
              <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-foreground font-headline">HOW IT WORKS</h2>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative p-8 bg-[linear-gradient(0deg,#2a2d32_20%,_#1d1d1d_100%)] rounded-xl shadow-lg border border-border/50 overflow-hidden">
                  <div className="absolute top-1 right-1">
                    <step.icon className="h-20 w-20 text-primary/10" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="absolute left-0 bottom-0 -z-10 rounded-full"
            style={{
              height: "200px",
              width: "200px",
              background: "#C9F31D",
              filter: "blur(120px)",
            }}
          />
        </section>

      </main>
    </div>
  );
}
