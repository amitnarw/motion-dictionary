"use client";

import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset, SidebarTrigger, SidebarGroup, SidebarGroupLabel } from '@/components/ui/sidebar';
import Link from 'next/link';
import { Palette } from 'lucide-react';
import { CATEGORIES } from '@/lib/animations';
import { NavigationDock } from './navigation-dock';

export function AppLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex min-h-svh w-full bg-background">
        <div className="w-64 bg-muted hidden md:block" />
        <main className="flex-1">{children}</main>
      </div>
    );
  }

  if (isMobile) {
    return (
      <SidebarProvider>
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
                <SidebarMenuButton asChild isActive={false} className="text-base">
                  <Link href="/">
                    Browse Animations
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={false} className="text-base">
                  <Link href="/ai-suggestions">
                    AI Suggestions
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={false} className="text-base">
                  <Link href="/submit">
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
                          <SidebarMenuButton asChild size="sm" variant="ghost" className="text-sm">
                              <Link href={`/?category=${encodeURIComponent(category)}`}>
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
          <div className="absolute top-2 left-2 z-50">
            <SidebarTrigger />
          </div>
          {children}
        </SidebarInset>
      </SidebarProvider>
    );
  }

  return (
    <div className="min-h-svh flex flex-col">
      <NavigationDock />
       <main className="flex-1 flex flex-col">
          {children}
        </main>
    </div>
  );
}
