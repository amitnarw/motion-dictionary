
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import type { Animation } from '@/lib/animations';
import { RefreshCw, Settings2, X } from 'lucide-react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Slider } from './ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

type FullViewViewerProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  animation: Animation;
  animationKey: number;
  controls: Record<string, any>;
  onControlChange: (prop: string, value: any) => void;
  onReplay: () => void;
};

export function FullViewViewer({ 
  isOpen, 
  onOpenChange, 
  animation,
  animationKey,
  controls,
  onControlChange,
  onReplay
}: FullViewViewerProps) {
  
  const PreviewComponent = animation.preview;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-full h-[80vh] flex flex-col p-0">
        <DialogHeader className="p-4 border-b">
          <DialogTitle className="font-headline text-2xl">{animation.title}</DialogTitle>
          <DialogDescription>
            Interact with the animation in full view.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex-1 grid grid-cols-1 md:grid-cols-4 overflow-hidden">
            <main className="col-span-1 md:col-span-3 h-full bg-background flex items-center justify-center relative">
                 <PreviewComponent key={animationKey} {...controls} />
                 <div className="absolute inset-0 bg-grid-zinc-700/25 [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)] -z-10" />
            </main>
            <aside className="col-span-1 h-full border-l bg-card/50 overflow-y-auto">
                 <div className="p-4 space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                           <Settings2 className="h-5 w-5" />
                           Controls
                        </h3>
                        <Button variant="ghost" size="icon" onClick={onReplay} className="h-8 w-8 text-muted-foreground hover:text-primary">
                            <RefreshCw className="h-4 w-4" />
                            <span className="sr-only">Replay Animation</span>
                        </Button>
                    </div>

                    {animation.controls && animation.controls.length > 0 ? (
                        animation.controls.map((control) => (
                            <div key={control.prop} className="space-y-2">
                            <Label htmlFor={`full-${control.prop}`} className="text-sm">{control.label}</Label>
                            {control.type === 'range' && (
                                <Slider
                                id={`full-${control.prop}`}
                                min={control.min}
                                max={control.max}
                                step={control.step}
                                value={[controls[control.prop]]}
                                onValueChange={([val]) => onControlChange(control.prop, val)}
                                />
                            )}
                            {control.type === 'select' && (
                                <Select 
                                onValueChange={(val) => onControlChange(control.prop, val)} 
                                defaultValue={control.defaultValue}
                                >
                                <SelectTrigger id={`full-${control.prop}`} className="h-9 text-sm">
                                    <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                                <SelectContent>
                                    {control.options?.map(option => (
                                    <SelectItem key={option.value} value={option.value} className="text-sm">
                                        {option.label}
                                    </SelectItem>
                                    ))}
                                </SelectContent>
                                </Select>
                            )}
                            </div>
                        ))
                    ) : (
                        <p className="text-sm text-muted-foreground">No controls available for this animation.</p>
                    )}
                 </div>
            </aside>
        </div>
      </DialogContent>
    </Dialog>
  );
}
