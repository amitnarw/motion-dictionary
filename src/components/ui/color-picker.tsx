"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "./input";

export interface ColorPickerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  color?: string;
}

const ColorPicker = React.forwardRef<HTMLInputElement, ColorPickerProps>(
  ({ className, color, ...props }, ref) => {
    const [value, setValue] = React.useState(color || props.defaultValue || "#000000");
    const colorInputRef = React.useRef<HTMLInputElement>(null);

    const handleSwatchClick = () => {
      colorInputRef.current?.click();
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      if (props.onChange) {
        props.onChange(e);
      }
    };
    
    React.useEffect(() => {
      if (color) {
        setValue(color);
      }
    }, [color]);

    return (
      <div className="relative flex items-center">
        <div
          className="h-7 w-7 rounded-l-md border border-r-0 border-input cursor-pointer"
          style={{ backgroundColor: value as string }}
          onClick={handleSwatchClick}
        />
        <Input
          ref={ref}
          type="text"
          value={value}
          onChange={handleChange}
          className={cn("rounded-l-none", className)}
          {...props}
        />
        <input
            ref={colorInputRef}
            type="color"
            value={value as string}
            onChange={handleChange}
            className="absolute -z-10 w-0 h-0 opacity-0"
        />
      </div>
    );
  }
);
ColorPicker.displayName = "ColorPicker";

export { ColorPicker };
