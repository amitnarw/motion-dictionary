"use client";

import { FancyButton } from "@/components/ui/fancy-button";
import { ArrowRight } from "lucide-react";

export function FancyButtonPreview() {
  return (
    <FancyButton
      text="Explore"
      icon={<ArrowRight className="ml-2 h-5 w-5" />}
    />
  );
}
