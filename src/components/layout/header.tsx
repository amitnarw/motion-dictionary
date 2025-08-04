
"use client";

import Link from 'next/link';
import { Palette, Sparkles, FilePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { MagneticButton } from '../ui/magnetic-button';
import { motion } from 'framer-motion';

const navItems = [
    { href: "/animations", label: "Animations" },
    { href: "/ai-suggestions", label: "AI Suggestions" },
];

export function Header() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
            <div className="container flex h-16 items-center justify-between w-4/5 mx-auto">
                <div className="mr-4 flex">
                    <Link href="/" className="flex items-center gap-2">
                        <Palette className="h-6 w-6 text-primary" />
                        <span className="font-bold text-lg">AniMotion</span>
                    </Link>
                </div>
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    {navItems.map((item) => (
                        <Link 
                            key={item.href} 
                            href={item.href}
                            className={cn(
                                "transition-colors hover:text-foreground/80",
                                pathname === item.href ? "text-foreground" : "text-foreground/60"
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="hidden md:block">
                     <Link href="/submit">
                        <motion.div
                            whileHover="hover"
                            className="relative flex items-center justify-center gap-2 h-10 px-6 bg-secondary text-secondary-foreground rounded-full cursor-pointer overflow-hidden"
                        >
                            <motion.div
                                variants={{ hover: { x: -5, rotate: 90, scale: 1.2 } }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                className="z-10"
                            >
                                <FilePlus className="h-4 w-4" />
                            </motion.div>
                            <motion.span
                                variants={{ hover: { x: 50, opacity: 0 } }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                className="z-10"
                            >
                                Submit
                            </motion.span>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </header>
    )
}
