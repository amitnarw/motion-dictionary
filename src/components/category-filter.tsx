"use client";

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { CATEGORIES } from '@/lib/animations';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    }
  },
};


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
    <motion.div 
      className="flex flex-wrap items-center justify-center gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Button
          variant={!currentCategory ? 'default' : 'outline'}
          size="sm"
          onClick={() => handleFilter(null)}
        >
          All
        </Button>
      </motion.div>
      {CATEGORIES.map((category) => (
        <motion.div key={category} variants={itemVariants}>
          <Button
            variant={currentCategory === category ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleFilter(category)}
          >
            {category}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
}
