
"use client";

import { Meteors } from '@/components/animations/meteors';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaceWithFollowingEyes } from '../animations/face-with-following-eyes';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Animations', href: '/animations' },
      { label: 'AI Suggestions', href: '/ai-suggestions' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
   {
    title: 'Actions',
    links: [
      { label: 'Submit', href: '/submit' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'Support', href: '#' },
    ],
  },
];


export function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.6, 0.01, 0.05, 0.95] 
      } 
    },
  };

  return (
    <footer ref={footerRef} className="relative border-t border-border/20 overflow-hidden" style={{background: 'linear-gradient(0deg,hsl(var(--background)) 20%,#1d1d1d 100%)'}}>
        <div className="absolute inset-0">
             <Meteors />
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative z-10 container py-12 w-4/5 mx-auto"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="pr-8">
                    <h3 className="font-headline text-lg font-semibold text-foreground">Stay updated</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Get the latest animations and updates delivered right to your inbox.
                    </p>
                    <form className="mt-4 flex w-full max-w-sm">
                        <Input type="email" placeholder="Enter your email" className="rounded-r-none focus:z-10" />
                        <Button type="submit" variant="default" className="rounded-l-none">
                            <Send className="h-4 w-4" />
                        </Button>
                    </form>
                </div>
                
                <div className="flex justify-center items-center">
                    <FaceWithFollowingEyes />
                </div>

                <div className="grid grid-cols-2 gap-8 text-right">
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-headline text-lg font-semibold text-foreground">{section.title}</h3>
                            <ul className="mt-4 space-y-2">
                            {section.links.map((link) => (
                                <li key={link.label}>
                                <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    {link.label}
                                </Link>
                                </li>
                            ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between">
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Motionary. All rights reserved.
                </p>
            </div>
        </motion.div>
    </footer>
  );
}
