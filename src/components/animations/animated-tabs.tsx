"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';

const tabs = ['Home', 'About', 'Contact'];

export function AnimatedTabs() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="flex space-x-1 rounded-full bg-muted p-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setSelectedTab(tab)}
          className={`relative rounded-full px-3 py-1.5 text-sm font-medium text-foreground transition-colors duration-200 ${selectedTab === tab ? '' : 'hover:bg-background/50'}`}
        >
          {selectedTab === tab && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-background rounded-full"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-20">{tab}</span>
        </button>
      ))}
    </div>
  );
}
