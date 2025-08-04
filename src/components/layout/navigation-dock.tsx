"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Sparkles, FilePlus } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const navItems = [
  { href: "/", label: "Browse", icon: Home },
  { href: "/ai-suggestions", label: "AI Suggestions", icon: Sparkles },
  { href: "/submit", label: "Submit", icon: FilePlus },
];

export function NavigationDock() {
  const mouseX = useMotionValue(Infinity);
  const pathname = usePathname();

  return (
    <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <TooltipProvider>
            <motion.div
                onMouseMove={(e) => mouseX.set(e.clientX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                className="flex h-16 items-center gap-4 rounded-2xl bg-white/10 backdrop-blur-lg px-4 shadow-lg ring-1 ring-black/5"
            >
                {navItems.map(({ href, label, icon: Icon }) => (
                <AppIcon mouseX={mouseX} key={href} href={href} isActive={pathname === href}>
                     <Tooltip>
                        <TooltipTrigger asChild>
                             <Icon className={`h-6 w-6 transition-colors duration-200 ${pathname === href ? 'text-primary' : 'text-foreground/70'}`} />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{label}</p>
                        </TooltipContent>
                    </Tooltip>
                </AppIcon>
                ))}
            </motion.div>
        </TooltipProvider>
    </footer>
  );
}

function AppIcon({
  children,
  mouseX,
  href,
  isActive
}: {
  children: React.ReactNode;
  mouseX: any;
  href: string;
  isActive: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-120, 0, 120], [48, 80, 48]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={`aspect-square w-12 rounded-full flex items-center justify-center transition-colors duration-200 ${isActive ? 'bg-background/80' : 'bg-transparent hover:bg-background/50'}`}
    >
      <Link href={href} className="w-full h-full flex items-center justify-center">
        {children}
      </Link>
    </motion.div>
  );
}