"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton
} from '@/components/ui/sidebar';
import { CATEGORIES } from '@/lib/animations';
import {
  Palette,
  LayoutGrid,
  Sparkles,
  FilePlus,
  MonitorPlay,
  Replace,
  Loader,
  MousePointerClick,
  MoveDown,
  ChevronDown
} from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  'Welcome Screen': <MonitorPlay className="h-4 w-4" />,
  'Page Transitions': <Replace className="h-4 w-4" />,
  'Loading': <Loader className="h-4 w-4" />,
  'Microelements': <MousePointerClick className="h-4 w-4" />,
  'Scroll Animation': <MoveDown className="h-4 w-4" />,
};

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getIsActive = (href: string) => {
    return pathname === href;
  };

  const getIsCategoryActive = (category: string) => {
    if (pathname !== '/') return false;
    // This is a placeholder for searchParam logic which is harder to do in a client layout component
    // In a real app, you'd use useSearchParams() here.
    return false;
  };

  if (!isMounted) {
    return (
      <div className="flex min-h-svh w-full">
        <div className="w-64 bg-gray-800" />
        <main className="flex-1">{children}</main>
      </div>
    );
  }

  return (
    <SidebarProvider defaultOpen>
      <Sidebar>
        <SidebarHeader>
          <Link href="/" className="flex items-center gap-2">
            <Palette className="h-8 w-8 text-primary" />
            <span className="font-headline text-2xl font-bold text-sidebar-foreground">
              AniLib
            </span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={getIsActive('/')}>
                <Link href="/">
                  <LayoutGrid />
                  Browse Animations
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={getIsActive('/ai-suggestions')}>
                <Link href="/ai-suggestions">
                  <Sparkles />
                  AI Suggestions
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={getIsActive('/submit')}>
                <Link href="/submit">
                  <FilePlus />
                  Submit Snippet
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <SidebarGroup className="mt-4">
             <SidebarGroupLabel>Categories</SidebarGroupLabel>
             <SidebarMenu>
                {CATEGORIES.map(category => (
                    <SidebarMenuItem key={category}>
                        <SidebarMenuButton asChild size="sm" variant="ghost">
                            <Link href={`/?category=${encodeURIComponent(category)}`}>
                                {categoryIcons[category] || <div className="h-4 w-4" />}
                                {category}
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
             </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <div className="absolute top-2 left-2">
          <SidebarTrigger />
        </div>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
