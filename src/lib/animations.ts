import React from 'react';
import { FadeInUp } from '@/components/animations/fade-in-up';
import { PulsingButton } from '@/components/animations/pulsing-button';
import { SpinningLoader } from '@/components/animations/spinning-loader';
import { StaggeredList } from '@/components/animations/staggered-list';
import { SlideInFromLeft } from '@/components/animations/slide-in-from-left';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { BouncingSkeleton } from '@/components/animations/bouncing-skeleton';

export type Animation = {
  id: string;
  title: string;
  category: (typeof CATEGORIES)[number];
  preview: React.ComponentType;
  code: string;
  library: 'Framer Motion' | 'GSAP' | 'TailwindCSS';
};

export const CATEGORIES = [
  'Welcome Screen',
  'Page Transitions',
  'Loading',
  'Microelements',
  'Scroll Animation',
] as const;

export const animations: Animation[] = [
  {
    id: '1',
    title: 'Fade In Up',
    category: 'Welcome Screen',
    preview: FadeInUp,
    library: 'Framer Motion',
    code: `import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const MyComponent = () => (
  <motion.div variants={fadeInUp} initial="initial" animate="animate">
    Hello World
  </motion.div>
);`
  },
  {
    id: '2',
    title: 'Pulsing Button',
    category: 'Microelements',
    preview: PulsingButton,
    library: 'TailwindCSS',
    code: `<button class="animate-pulse bg-primary text-primary-foreground font-bold py-2 px-4 rounded-lg shadow-lg">
  Click me
</button>`
  },
  {
    id: '3',
    title: 'Spinning Loader',
    category: 'Loading',
    preview: SpinningLoader,
    library: 'TailwindCSS',
    code: `<div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>`
  },
  {
    id: '4',
    title: 'Staggered List',
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

const StaggeredList = () => (
  <motion.ul variants={container} initial="hidden" animate="show">
    <motion.li variants={item}>Item 1</motion.li>
    <motion.li variants={item}>Item 2</motion.li>
    <motion.li variants={item}>Item 3</motion.li>
  </motion.ul>
);`
  },
  {
    id: '5',
    title: 'Slide In From Left',
    category: 'Page Transitions',
    preview: SlideInFromLeft,
    library: 'Framer Motion',
    code: `import { motion } from "framer-motion";

const slideIn = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } },
  exit: { x: "100vw", opacity: 0 }
};

const Page = () => (
  <motion.div variants={slideIn} initial="hidden" animate="visible" exit="exit">
    Page Content
  </motion.div>
);`
  },
  {
    id: '6',
    title: 'GSAP Color Tween',
    category: 'Microelements',
    preview: () => <div className="w-24 h-24 bg-gray-400" />,
    library: 'GSAP',
    code: `import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

const Box = () => {
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    gsap.to(boxRef.current, { 
      backgroundColor: "#29ABE2", 
      duration: 2, 
      repeat: -1, 
      yoyo: true 
    });
  }, []);

  return <div ref={boxRef} className="w-24 h-24 bg-gray-400" />;
};`
  },
  {
    id: '7',
    title: 'Scroll Reveal',
    category: 'Scroll Animation',
    preview: ScrollReveal,
    library: 'Framer Motion',
    code: `import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ScrollRevealComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
    >
      Content revealed on scroll
    </motion.div>
  );
};`
  },
  {
    id: '8',
    title: 'Bouncing Skeleton',
    category: 'Loading',
    preview: BouncingSkeleton,
    library: 'TailwindCSS',
    code: `<div class="space-y-2">
  <div class="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
  <div class="h-4 bg-gray-300 rounded w-1/2 animate-pulse" style={{animationDelay: '0.2s'}}></div>
  <div class="h-4 bg-gray-300 rounded w-5/6 animate-pulse" style={{animationDelay: '0.4s'}}></div>
</div>`
  }
];
