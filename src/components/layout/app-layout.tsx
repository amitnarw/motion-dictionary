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
} from '@/components/ui/sidebar';
import { CATEGORIES } from '@/lib/animations';
import {
  Palette,
} from 'lucide-react';

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getIsActive = (href: string) => {
    return pathname === href;
  };

  if (!isMounted) {
    return (
      <div className="flex min-h-svh w-full">
        <div className="w-64 bg-gray-100" />
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
              <SidebarMenuButton asChild isActive={getIsActive('/')} className="text-base">
                <Link href="/">
                  Browse Animations
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={getIsActive('/ai-suggestions')} className="text-base">
                <Link href="/ai-suggestions">
                  AI Suggestions
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={getIsActive('/submit')} className="text-base">
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
        <div className="absolute top-2 left-2">
          <SidebarTrigger />
        </div>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
