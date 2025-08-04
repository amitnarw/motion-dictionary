"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Home, Search, Settings, User } from "lucide-react";

export function Dock() {
    let mouseX = useMotionValue(Infinity);

  return (
    <div className="flex h-16 items-center justify-center gap-4 rounded-2xl bg-muted px-4">
      <div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex h-full items-center gap-4"
      >
        {[
          <Home key="home" />,
          <Search key="search" />,
          <Settings key="settings" />,
          <User key="user" />,
        ].map((icon, i) => (
          <AppIcon mouseX={mouseX} key={i}>
            {icon}
          </AppIcon>
        ))}
      </div>
    </div>
  );
}

function AppIcon({
  children,
  mouseX,
}: {
  children: React.ReactNode;
  mouseX: any;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-100, 0, 100], [40, 80, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square w-10 rounded-full bg-background flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
}
