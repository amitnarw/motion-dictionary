"use client";

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { CATEGORIES } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

export function CategoryFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const currentCategory = searchParams.get('category');

  const handleFilter = (category: string | null) => {
    const params = new URLSearchParams(searchParams);
    if (category) {
      params.set('category', category);
    } else {
      params.delete('category');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Button
        variant={!currentCategory ? 'default' : 'outline'}
        size="sm"
        onClick={() => handleFilter(null)}
      >
        All
      </Button>
      {CATEGORIES.map((category) => (
        <Button
          key={category}
          variant={currentCategory === category ? 'default' : 'outline'}
          size="sm"
          onClick={() => handleFilter(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
