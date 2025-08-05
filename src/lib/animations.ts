import React from 'react';
import { FadeInUp } from '@/components/animations/fade-in-up';
import { PulsingButton } from '@/components/animations/pulsing-button';
import { SpinningLoader } from '@/components/animations/spinning-loader';
import { StaggeredList } from '@/components/animations/staggered-list';
import { SlideInFromLeft } from '@/components/animations/slide-in-from-left';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { BouncingSkeleton } from '@/components/animations/bouncing-skeleton';
import { GsapColorTween } from '@/components/animations/gsap-color-tween';
import { FlipCard } from '@/components/animations/flip-card';
import { ShakingButton } from '@/components/animations/shaking-button';
import { GsapStaggeredFade } from '@/components/animations/gsap-staggered-fade';
import { MultiStepLoader } from '@/components/animations/multi-step-loader';
import { PageFlyIn } from '@/components/animations/page-fly-in';
import { TypingEffect } from '@/components/animations/typing-effect';
import { BackgroundSpotlight } from '@/components/animations/background-spotlight';
import { GsapTimeline } from '@/components/animations/gsap-timeline';
import { AnimatedTabs } from '@/components/animations/animated-tabs';
import { OrbitingIcons } from '@/components/animations/orbiting-icons';
import { CardStack } from '@/components/animations/card-stack';
import { AuroraBackground } from '@/components/animations/aurora-background';
import { TextReveal } from '@/components/animations/text-reveal';
import { Meteors } from '@/components/animations/meteors';
import { Dock } from '@/components/animations/dock';
import { SlidingTextButton } from '@/components/animations/sliding-text-button';
import { RevealBgButton } from '@/components/animations/reveal-bg-button';
import { FollowingEyes } from '@/components/animations/following-eyes';
import { WavyText } from '@/components/animations/wavy-text';
import { LiquidFillText } from '@/components/animations/liquid-fill-text';

type AnimationControl = {
    prop: string;
    label: string;
    type: 'range' | 'select' | 'text';
    min?: number;
    max?: number;
    step?: number;
    defaultValue: any;
    options?: { label: string; value: any }[];
};


export type Animation = {
  id: string;
  title: string;
  description: string;
  category: (typeof CATEGORIES)[number];
  preview: React.ComponentType<any>;
  code: string;
  library: 'Framer Motion' | 'GSAP' | 'TailwindCSS';
  controls?: AnimationControl[];
};

export const CATEGORIES = [
  'Welcome Screen',
  'Page Transitions',
  'Loading',
  'Microelements',
  'Scroll Animation',
  'Buttons',
  'Cursor',
  'Text',
] as const;

export const animations: Animation[] = [
  {
    id: '1',
    title: 'Fade In Up',
    description: 'A simple and elegant fade-in and slide-up effect.',
    category: 'Welcome Screen',
    preview: FadeInUp,
    library: 'Framer Motion',
    code: `import { motion } from "framer-motion";

export function FadeInUp({ duration = 0.5, delay = 0.1 }) {
  const FADE_IN_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", duration, delay } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={FADE_IN_VARIANTS}
      className="bg-card text-card-foreground p-8 rounded-lg"
    >
      <h3 className="font-bold text-lg">Fade In Up</h3>
    </motion.div>
  );
}`,
    controls: [
        { prop: 'duration', label: 'Duration', type: 'range', min: 0.1, max: 2, step: 0.1, defaultValue: 0.5 },
        { prop: 'delay', label: 'Delay', type: 'range', min: 0, max: 2, step: 0.1, defaultValue: 0.1 },
    ]
  },
  {
    id: '2',
    title: 'Pulsing Button',
    description: 'A subtle pulse animation to draw attention to a button.',
    category: 'Buttons',
    preview: PulsingButton,
    library: 'TailwindCSS',
    code: `<button className="animate-pulse bg-primary text-primary-foreground font-bold py-2 px-4 rounded-lg shadow-lg">
    Click me
</button>`
  },
  {
    id: '3',
    title: 'Spinning Loader',
    description: 'A classic spinning loader for indicating loading states.',
    category: 'Loading',
    preview: SpinningLoader,
    library: 'TailwindCSS',
    code: `<div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>`
  },
  {
    id: '4',
    title: 'Staggered List Entrance',
    description: 'List items animate in one by one with a pleasing stagger effect.',
    category: 'Welcome Screen',
    preview: StaggeredList,
    library: 'Framer Motion',
    code: `import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function StaggeredList() {
  return (
    <motion.ul variants={container} initial="hidden" animate="show" className="flex flex-col gap-2 items-center">
      <motion.li variants={item} className="bg-muted p-2 rounded w-3/4 text-center">Item 1</motion.li>
      <motion.li variants={item} className="bg-muted p-2 rounded w-3/4 text-center">Item 2</motion.li>
      <motion.li variants={item} className="bg-muted p-2 rounded w-3/4 text-center">Item 3</motion.li>
    </motion.ul>
  );
}`
  },
  {
    id: '5',
    title: 'Slide In From Left',
    description: 'An element smoothly slides in from the left side of the screen.',
    category: 'Page Transitions',
    preview: SlideInFromLeft,
    library: 'Framer Motion',
    code: `import { motion } from "framer-motion";

export function SlideInFromLeft({ duration = 0.5, stiffness = 100 }) {
    const slideIn = {
        hidden: { x: "-10vw", opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness, duration } },
    };

  return (
    <motion.div variants={slideIn} initial="hidden" animate="visible" className="bg-card text-card-foreground p-8 rounded-lg">
      <h3 className="font-bold text-lg">Sliding In</h3>
    </motion.div>
  );
}`,
    controls: [
        { prop: 'duration', label: 'Duration', type: 'range', min: 0.1, max: 2, step: 0.1, defaultValue: 0.5 },
        { prop: 'stiffness', label: 'Stiffness', type: 'range', min: 50, max: 200, step: 10, defaultValue: 100 },
    ]
  },
  {
    id: '6',
    title: 'GSAP Color Tween',
    description: 'A smooth color transition animation powered by GSAP.',
    category: 'Microelements',
    preview: GsapColorTween,
    library: 'GSAP',
    code: `import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

export function GsapColorTween() {
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    gsap.to(boxRef.current, {
      backgroundColor: "#29ABE2",
      duration: 2,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return <div ref={boxRef} className="w-24 h-24 bg-muted rounded-lg" />;
}`
  },
  {
    id: '7',
    title: 'Scroll Reveal',
    description: 'Elements animate into view as you scroll down the page.',
    category: 'Scroll Animation',
    preview: ScrollReveal,
    library: 'Framer Motion',
    code: `import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ScrollReveal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="bg-card text-card-foreground p-8 rounded-lg"
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
      }}
    >
      <h3 className="font-bold text-lg">Revealed</h3>
    </motion.div>
  );
};`
  },
  {
    id: '8',
    title: 'Bouncing Skeleton',
    description: 'A pulsing skeleton loader with a subtle bouncing effect.',
    category: 'Loading',
    preview: BouncingSkeleton,
    library: 'TailwindCSS',
    code: `<div className="space-y-2 w-full p-4">
  <div className="h-4 bg-muted rounded w-3/4 animate-pulse"></div>
  <div className="h-4 bg-muted rounded w-1/2 animate-pulse" style={{animationDelay: '0.2s'}}></div>
  <div className="h-4 bg-muted rounded w-5/6 animate-pulse" style={{animationDelay: '0.4s'}}></div>
</div>`
  },
  {
    id: '9',
    title: '3D Flipping Card',
    description: 'A card that flips over in 3D space on hover.',
    category: 'Microelements',
    preview: FlipCard,
    library: 'Framer Motion',
    code: `import { motion } from "framer-motion";
import { useState } from "react";

export function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div className="w-40 h-24" style={{ perspective: '1000px' }}>
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onHoverStart={() => setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
      >
        <div className="absolute w-full h-full flex items-center justify-center bg-primary rounded-lg text-primary-foreground" style={{ backfaceVisibility: 'hidden' }}>Front</div>
        <div className="absolute w-full h-full flex items-center justify-center bg-accent rounded-lg text-accent-foreground" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>Back</div>
      </motion.div>
    </div>
  );
}`
  },
  {
    id: '10',
    title: 'Shaking Button',
    description: 'A button that shakes on hover to indicate an error or warning.',
    category: 'Buttons',
    preview: ShakingButton,
    library: 'TailwindCSS',
    code: `<button className="hover:animate-shake bg-primary text-primary-foreground font-bold py-2 px-4 rounded-lg shadow-lg">
  Shake Me
</button>

// tailwind.config.ts
...
theme: {
  extend: {
    keyframes: {
      shake: {
        '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
        '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
        '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
        '40%, 60%': { transform: 'translate3d(4px, 0, 0)' },
      }
    },
    animation: {
      shake: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
    }
  }
}
...`
  },
  {
    id: '11',
    title: 'GSAP Staggered Fade',
    description: 'Elements fade in and up in a staggered sequence using GSAP.',
    category: 'Welcome Screen',
    preview: GsapStaggeredFade,
    library: 'GSAP',
    code: `import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

export function GsapStaggeredFade() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.5,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="flex gap-2">
      <div className="w-12 h-12 bg-primary rounded-md" />
      <div className="w-12 h-12 bg-accent rounded-md" />
      <div className="w-12 h-12 bg-secondary rounded-md" />
    </div>
  );
}`
  },
  {
    id: '12',
    title: 'Multi-Step Loader',
    description: 'A loader that cycles through different text steps.',
    category: 'Loading',
    preview: MultiStepLoader,
    library: 'Framer Motion',
    code: `import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const steps = ["Authenticating...", "Fetching data...", "Almost there..."];

export function MultiStepLoader() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.p
        key={steps[index]}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="font-semibold text-muted-foreground"
      >
        {steps[index]}
      </motion.p>
    </AnimatePresence>
  );
}`
  },
  {
    id: '13',
    title: 'Page Fly-In',
    description: 'A smooth transition for page content flying in from the bottom.',
    category: 'Page Transitions',
    preview: PageFlyIn,
    library: 'Framer Motion',
    code: `import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  enter: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.8, y: -50, transition: { duration: 0.3, ease: "easeIn" } }
};

export function PageFlyIn() {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      className="w-48 h-24 bg-card rounded-lg flex items-center justify-center"
    >
      <h3 className="font-bold text-lg">Page Content</h3>
    </motion.div>
  );
}`
  },
  {
    id: '14',
    title: 'Typing Effect',
    description: 'Text appears with a character-by-character typing animation.',
    category: 'Text',
    preview: TypingEffect,
    library: 'Framer Motion',
    code: `import { motion } from "framer-motion";

const text = "Welcome to AniMotion";
const characters = Array.from(text);

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.2 * i },
  }),
};

const child = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    x: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export function TypingEffect() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex overflow-hidden font-headline font-bold text-4xl md:text-6xl"
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          className={index > 11 ? "text-primary" : ""}
        >
          {char === " " ? "\\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
}`
  },
  {
    id: '15',
    title: 'Background Spotlight',
    description: 'A spotlight effect that follows the mouse on hover.',
    category: 'Scroll Animation',
    preview: BackgroundSpotlight,
    library: 'TailwindCSS',
    code: `export function BackgroundSpotlight() {
  return (
    <div className="group relative w-48 h-24 rounded-lg bg-card p-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -inset-full top-0 block animate-spotlight-spin h-full w-full bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10">
        <h3 className="font-bold text-lg">Spotlight</h3>
      </div>
    </div>
  );
}
// tailwind.config.ts
...
keyframes: {
  'spotlight-spin': {
    '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
    '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
  },
},
animation: {
  'spotlight-spin': 'spotlight-spin 3s linear infinite',
},
...`
  },
  {
    id: '16',
    title: 'GSAP Timeline Animation',
    description: 'A complex, multi-step animation sequence controlled by a GSAP timeline.',
    category: 'Welcome Screen',
    preview: GsapTimeline,
    library: 'GSAP',
    code: `import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

export function GsapTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useLayoutEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
    if(containerRef.current) {
        const elements = containerRef.current.children;
        tl.to(elements[0], { x: 50, duration: 1, ease: "power1.inOut" })
          .to(elements[1], { y: -20, duration: 0.5 }, "-=0.5")
          .to(elements[2], { rotation: 360, duration: 1 }, "+=0.2");
    }
  }, []);

  return (
    <div ref={containerRef} className="flex items-center justify-center gap-2">
      <div className="w-10 h-10 bg-primary rounded-md" />
      <div className="w-10 h-10 bg-accent rounded-full" />
      <div className="w-10 h-10 bg-secondary rounded-lg" />
    </div>
  );
}`
  },
  {
    id: '17',
    title: 'Animated Tabs',
    description: 'A slick tab component with a smooth sliding indicator.',
    category: 'Microelements',
    preview: AnimatedTabs,
    library: 'Framer Motion',
    code: `import { motion } from 'framer-motion';
import { useState } from 'react';

const tabs = ['Home', 'About', 'Contact'];

export function AnimatedTabs() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="flex space-x-1 rounded-full bg-muted p-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setSelectedTab(tab)}
          className={\`relative rounded-full px-3 py-1.5 text-sm font-medium text-foreground transition-colors duration-200 \${selectedTab === tab ? '' : 'hover:bg-background/50'}\`}
        >
          {selectedTab === tab && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-background rounded-full"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-20">{tab}</span>
        </button>
      ))}
    </div>
  );
}`
  },
  {
    id: '18',
    title: 'Orbiting Icons',
    description: 'Decorative icons orbiting a central point. Great for loading states.',
    category: 'Loading',
    preview: OrbitingIcons,
    library: 'TailwindCSS',
    code: `// This component is best for loading states or decorative elements.
export function OrbitingIcons() {
  return (
    <div className="relative flex h-32 w-32 items-center justify-center">
      <div className="absolute h-full w-full animate-spin-slow rounded-full border-2 border-dashed border-muted-foreground" />
      <div className="absolute h-[85%] w-[85%] animate-spin-slow-reverse rounded-full border-2 border-dashed border-muted-foreground" />
      <div className="h-8 w-8 bg-primary rounded-full" />
    </div>
  )
}
// tailwind.config.ts
...
animation: {
  'spin-slow': 'spin 4s linear infinite',
  'spin-slow-reverse': 'spin 4s linear infinite reverse',
}
...`
  },
  {
    id: '19',
    title: 'Draggable Card Stack',
    description: 'A stack of cards that can be dragged and reordered.',
    category: 'Microelements',
    preview: CardStack,
    library: 'Framer Motion',
    code: `import { motion } from 'framer-motion';

export function CardStack() {
  return (
    <div className="relative w-40 h-24">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-full bg-card rounded-lg shadow-md border"
          style={{ originX: 0.5, originY: 1 }}
          animate={{
            y: -i * 8,
            scale: 1 - i * 0.05,
            zIndex: 3 - i,
          }}
          drag="y"
          dragConstraints={{ top: -100, bottom: 0 }}
          whileHover={{ scale: 1.05 - i * 0.05 }}
          whileTap={{ scale: 1.1 - i * 0.05, zIndex: 4 }}
        >
          <div className="p-2 text-sm">Card {i + 1}</div>
        </motion.div>
      ))}
    </div>
  );
}`
  },
  {
    id: '20',
    title: 'Aurora Background',
    description: 'A beautiful, animated aurora borealis effect for backgrounds.',
    category: 'Welcome Screen',
    preview: AuroraBackground,
    library: 'TailwindCSS',
    code: `"use client";

import { motion } from "framer-motion";

export function AuroraBackground() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-black transition-colors duration-200 overflow-hidden rounded-lg">
      <div className="absolute inset-0 overflow-hidden">
         <div className="absolute h-full w-full bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
      </div>
      <div className="relative z-10 text-white font-bold">Aurora</div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: [0, 1, 0], y: 0 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
      />
    </div>
  );
}`
  },
  {
    id: '21',
    title: 'Text Reveal',
    description: 'A gradient reveal effect that wipes across text.',
    category: 'Text',
    preview: TextReveal,
    library: 'Framer Motion',
    code: `"use client";

import { motion } from "framer-motion";

export function TextReveal() {
  return (
    <div className="z-10 flex min-h-[10rem] items-center justify-center rounded-lg bg-background">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center">
        <motion.span
          initial={{
            opacity: 1,
          }}
          animate={{
            opacity: 0,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop'
          }}
          className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
        >
          Animate
        </motion.span>
        Text
      </h1>
    </div>
  );
}`
  },
  {
    id: '22',
    title: 'Meteors',
    description: 'A stunning meteor shower effect for backgrounds.',
    category: 'Welcome Screen',
    preview: Meteors,
    library: 'TailwindCSS',
    code: `"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Meteors({ number = 20, className}: { number?: number, className?: string}) {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([]);

  useEffect(() => {
    // This effect will only run on the client, preventing hydration errors.
    const styles = Array.from({ length: number }).map(() => ({
      top: 0,
      left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
      animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]); // Only re-run if the number of meteors changes

  return (
    <div className={cn("relative flex h-full w-full items-center justify-center overflow-hidden bg-transparent", className)}>
      {meteorStyles.map((style, idx) => (
        <span
          key={"meteor" + idx}
          className="absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor-effect rounded-full bg-primary shadow-[0_0_0_1px_#ffffff10]"
          style={style}
        ></span>
      ))}
    </div>
  );
};

// tailwind.config.ts
...
keyframes: {
  'meteor-effect': {
    "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
    "70%": { opacity: "1" },
    "100%": {
      transform: "rotate(215deg) translateX(-500px)",
      opacity: "0",
    },
  },
},
animation: {
  "meteor-effect": "meteor-effect 1.4s linear infinite",
},
...
`
  },
  {
    id: '23',
    title: 'Dock',
    description: 'A macOS-style dock with a magnification effect on hover.',
    category: 'Cursor',
    preview: Dock,
    library: 'Framer Motion',
    code: `"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Home, Search, Settings, User } from "lucide-react";

export function Dock() {
    let mouseX = useMotionValue(Infinity);

  return (
    <div className="flex h-16 items-center justify-center gap-4 rounded-2xl bg-muted px-4">
      <div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex h-full items-center gap-4"
      >
        {[
          <Home key="home" />,
          <Search key="search" />,
          <Settings key="settings" />,
          <User key="user" />,
        ].map((icon, i) => (
          <AppIcon mouseX={mouseX} key={i}>
            {icon}
          </AppIcon>
        ))}
      </div>
    </div>
  );
}

function AppIcon({
  children,
  mouseX,
}: {
  children: React.ReactNode;
  mouseX: any;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-100, 0, 100], [40, 80, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square w-10 rounded-full bg-background flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
}`
  },
  {
    id: '24',
    title: 'Sliding Text Button',
    description: 'A button where text slides up on hover, revealing new text.',
    category: 'Buttons',
    preview: SlidingTextButton,
    library: 'Framer Motion',
    code: `
"use client";
import { motion } from 'framer-motion';

export function SlidingTextButton() {
  const textVariants = {
    rest: { y: 0 },
    hover: { y: '-125%' },
  };

  const newTextVariants = {
    rest: { y: '125%' },
    hover: { y: 0 },
  };

  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      className="relative block overflow-hidden whitespace-nowrap rounded-xl bg-primary px-6 py-3 text-lg font-medium text-primary-foreground shadow-lg"
    >
      <span className="relative inline-block h-full w-full">
        <motion.span
          variants={textVariants}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="inline-block"
        >
          Hover Me
        </motion.span>
        <motion.span
          variants={newTextVariants}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="absolute left-0"
        >
          Let's Go!
        </motion.span>
      </span>
    </motion.button>
  );
}


`
  },
  {
    id: '25',
    title: 'Reveal Background Button',
    description: 'A button with a background that reveals from bottom to top on hover.',
    category: 'Buttons',
    preview: RevealBgButton,
    library: 'Framer Motion',
    code: `
"use client";
import { motion } from 'framer-motion';

export function RevealBgButton() {
  return (
    <motion.button 
        className="relative overflow-hidden rounded-xl bg-secondary px-6 py-3 text-lg font-medium text-secondary-foreground shadow-lg"
        initial="rest"
        whileHover="hover"
        animate="rest"
    >
      <span className="relative z-10">Hover Me</span>
      <motion.div
        variants={{
            rest: { y: '100%' },
            hover: { y: 0 }
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="absolute inset-0 z-0 bg-primary"
      />
    </motion.button>
  );
}
`
  },
  {
    id: '26',
    title: 'Following Eyes',
    description: 'A pair of cartoon eyes that follow the cursor around the screen.',
    category: 'Cursor',
    preview: FollowingEyes,
    library: 'Framer Motion',
    code: `"use client";
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export function FollowingEyes({ direction = 1 }: { direction?: number }) {
  const [rotate, setRotate] = useState(0);
  const eyesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (eyesRef.current) {
        const { left, top, width, height } = eyesRef.current.getBoundingClientRect();
        const eyeCenterX = left + width / 2;
        const eyeCenterY = top + height / 2;
        const deltaX = e.clientX - eyeCenterX;
        const deltaY = e.clientY - eyeCenterY;
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        setRotate(angle + (90 * direction));
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={eyesRef} className="flex gap-4">
      <div className="w-24 h-24 bg-card rounded-full flex items-center justify-center">
        <div className="w-12 h-12 bg-foreground rounded-full relative">
          <motion.div
            animate={{ rotate }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            className="w-full h-full"
          >
            <div className="w-5 h-5 bg-background rounded-full absolute top-2 left-1/2 -translate-x-1/2" />
          </motion.div>
        </div>
      </div>
       <div className="w-24 h-24 bg-card rounded-full flex items-center justify-center">
        <div className="w-12 h-12 bg-foreground rounded-full relative">
          <motion.div
            animate={{ rotate }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            className="w-full h-full"
          >
            <div className="w-5 h-5 bg-background rounded-full absolute top-2 left-1/2 -translate-x-1/2" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}`,
    controls: [
      {
        prop: 'direction',
        label: 'Direction',
        type: 'select',
        defaultValue: 1,
        options: [
          { label: 'Normal', value: 1 },
          { label: 'Opposite', value: -1 },
        ],
      },
    ]
  },
  {
    id: '27',
    title: 'Wavy Text',
    description: 'Text with a subtle, staggered up-and-down wave animation.',
    category: 'Text',
    preview: WavyText,
    library: 'Framer Motion',
    code: `
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WavyTextProps {
  text?: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export function WavyText({
  text = "Wavy Text",
  className,
  delay = 0,
  duration = 0.05,
}: WavyTextProps) {
  const letters = text.split("");

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { y: 0 },
    visible: {
      y: [
        "0%",
        "-20%",
        "0%",
        "20%",
        "0%",
      ],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 2
      },
    },
  };

  return (
    <motion.h1
      className={cn("flex overflow-hidden font-headline text-4xl", className)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          transition={{ duration: 1, delay: index * duration }}
          style={{display: 'inline-block'}}
        >
          {letter === " " ? "\\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}
`,
    controls: [
      { prop: 'text', label: 'Text', type: 'text', defaultValue: 'Wavy Text Animation' },
      { prop: 'delay', label: 'Animation Delay', type: 'range', min: 0, max: 2, step: 0.1, defaultValue: 0 },
      { prop: 'duration', label: 'Letter Stagger', type: 'range', min: 0.01, max: 0.2, step: 0.01, defaultValue: 0.05 },
    ]
  },
   {
    id: '28',
    title: 'Liquid Fill Text',
    description: 'Text that appears to fill up with a flowing liquid.',
    category: 'Text',
    preview: LiquidFillText,
    library: 'Framer Motion',
    code: `
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LiquidFillText() {
  return (
    <div className="relative w-full text-center">
      <svg width="100%" viewBox="0 0 800 120" className="max-w-4xl mx-auto">
        <defs>
          <clipPath id="text-clip-path">
            <text
              x="50%"
              y="50%"
              dy=".35em"
              textAnchor="middle"
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase select-none"
            >
              Animate Anything
            </text>
          </clipPath>
        </defs>
        
        {/* Fallback for non-supporting browsers */}
        <text
            x="50%"
            y="50%"
            dy=".35em"
            textAnchor="middle"
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase fill-current text-foreground"
        >
             Animate Anything
        </text>

        <g clipPath="url(#text-clip-path)">
          {/* Background fill */}
          <rect width="800" height="120" className="fill-foreground" />
          
          {/* Liquid Wave */}
          <motion.path
            d="M -10 120 Q 200 100 400 120 Q 600 140 810 120 V 240 H -10 Z"
            className="fill-primary"
            animate={{
              y: ["0%", "-100%"],
            }}
            transition={{
              duration: 4,
              ease: "linear",
              repeat: Infinity,
            }}
          />
          <motion.path
            d="M -10 120 Q 190 140 400 120 Q 610 100 810 120 V 240 H -10 Z"
            className="fill-accent"
            style={{ opacity: 0.5 }}
             animate={{
              y: ["0%", "-100%"],
            }}
            transition={{
              duration: 4,
              ease: "linear",
              repeat: Infinity,
              delay: 1,
            }}
          />
        </g>
      </svg>
    </div>
  );
}
`
  }
];
