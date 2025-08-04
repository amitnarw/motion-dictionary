"use client";

import { Meteors } from '@/components/animations/meteors';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Github, Send, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Animations', href: '/animations' },
      { label: 'AI Suggestions', href: '/ai-suggestions' },
      { label: 'Submit', href: '/submit' },
      { label: 'Pricing', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'Support', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
];

const socialLinks = [
  { icon: <Github />, href: '#', 'aria-label': 'GitHub' },
  { icon: <Twitter />, href: '#', 'aria-label': 'Twitter' },
  { icon: <Youtube />, href: '#', 'aria-label': 'YouTube' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/20 overflow-hidden">
        <div className="absolute inset-0">
             <Meteors />
        </div>
        <div className="relative z-10 container py-12 w-4/5 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-2 pr-8">
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

            <div className="mt-12 pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between">
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} AniMotion. All rights reserved.
                </p>
                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                    {socialLinks.map((link) => (
                        <Link key={link['aria-label']} href={link.href} aria-label={link['aria-label']} className="text-muted-foreground hover:text-primary transition-colors">
                            {link.icon}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  );
}
