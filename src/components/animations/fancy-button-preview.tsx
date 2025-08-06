
"use client";

import { FancyButton } from "@/components/ui/fancy-button";
import { ArrowRight } from "lucide-react";

export function FancyButtonPreview({ 
  fillPercentage = 100,
  initialTextColor,
  hoverTextColor 
}: { 
  fillPercentage?: number;
  initialTextColor?: string;
  hoverTextColor?: string;
}) {
  return (
    <FancyButton
      text="Explore"
      icon={<ArrowRight className="ml-2 h-5 w-5" />}
      fillPercentage={fillPercentage}
      initialTextColor={initialTextColor}
      hoverTextColor={hoverTextColor}
    />
  );
}
