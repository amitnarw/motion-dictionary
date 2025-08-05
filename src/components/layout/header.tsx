
"use client";

import Link from 'next/link';
import { Palette, Sparkles, FilePlus, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
    { href: "/animations", label: "Animations" },
    { href: "/ai-suggestions", label: "AI Suggestions" },
];

function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


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
                <div className="flex items-center gap-2">
                     <Link href="/submit">
                        <motion.button
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                            className="relative flex items-center justify-center h-10 px-6 bg-transparent text-primary-foreground rounded-full cursor-pointer overflow-hidden border border-primary/50"
                        >
                             <motion.div 
                                className="absolute inset-0"
                                style={{ background: 'var(--gradient-macha)'}}
                                variants={{
                                    rest: { y: "0%" },
                                    hover: { y: "-100%" }
                                }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                             />
                              <motion.div 
                                className="absolute inset-0"
                                style={{ background: 'var(--gradient-orange-crush)'}}
                                variants={{
                                    rest: { y: "100%" },
                                    hover: { y: "0%" }
                                }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
                             />
                            <motion.span
                                className="relative z-10 flex items-center gap-2"
                                variants={{
                                    rest: { y: "0%" },
                                    hover: { y: "-150%" }
                                }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
                            >
                                <FilePlus className="h-4 w-4" /> Submit
                            </motion.span>
                             <motion.span
                                className="absolute z-10 flex items-center gap-2"
                                variants={{
                                    rest: { y: "150%" },
                                    hover: { y: "0%" }
                                }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
                            >
                               <FilePlus className="h-4 w-4" /> Contribute
                            </motion.span>
                        </motion.button>
                    </Link>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}
