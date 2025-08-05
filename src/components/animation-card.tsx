
"use client";

import type { Animation } from '@/lib/animations';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CodeViewer } from './code-viewer';
import { useState } from 'react';
import { Code, RefreshCw, Settings2, Expand } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FullViewViewer } from './full-view-viewer';


type AnimationCardProps = {
  animation: Animation;
  index: number;
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut"
    },
  }),
};

export function AnimationCard({ animation, index }: AnimationCardProps) {
  const [isCodeVisible, setCodeVisible] = useState(false);
  const [isFullViewVisible, setFullViewVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  
  const initialControls = animation.controls?.reduce((acc, control) => {
    acc[control.prop] = control.defaultValue;
    return acc;
  }, {} as Record<string, any>) || {};

  const [controls, setControls] = useState(initialControls);

  const PreviewComponent = animation.preview;

  const replayAnimation = () => {
    setAnimationKey(prevKey => prevKey + 1);
  };
  
  const handleControlChange = (prop: string, value: any) => {
    setControls(prev => ({ ...prev, [prop]: value }));
    replayAnimation();
  };


  return (
    <>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        custom={index}
      >
        <Card
          className={cn(
            "group relative flex flex-col h-full overflow-hidden transition-all duration-300",
            "bg-card border-border hover:border-primary/50",
            "hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
          )}
        >
          <CardContent className="flex-1 flex items-center justify-center p-0 bg-background min-h-[200px] relative overflow-hidden rounded-t-lg">
            <div className="z-10 w-full h-full flex items-center justify-center">
              <PreviewComponent key={animationKey} {...controls} />
            </div>
             <div className="absolute inset-0 bg-grid-zinc-700/25 [mask-image:linear-gradient(to_bottom,white_5%,transparent_50%)]" />
          </CardContent>
          
          <div className="p-4 border-t">
              <Badge variant={
                    animation.library === 'Framer Motion' ? 'default' :
                    animation.library === 'GSAP' ? 'secondary' : 'outline'
                    }
                    className={cn(
                    "border-transparent text-xs mb-2",
                    animation.library === 'Framer Motion' && "bg-blue-500/20 text-blue-300",
                    animation.library === 'GSAP' && "bg-gradient-to-r from-[var(--color-shockingly-green)] to-[var(--color-lt-green)] text-black",
                    animation.library === 'TailwindCSS' && "bg-teal-500/20 text-teal-300"
                    )}
                    >
                    {animation.library}
                </Badge>
            <CardTitle className="font-headline text-lg text-foreground/90">{animation.title}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground pt-1">{animation.description}</CardDescription>
          </div>
          
           {animation.controls && animation.controls.length > 0 && (
            <Accordion type="single" collapsible className="w-full border-t">
              <AccordionItem value="controls" className="border-b-0">
                <AccordionTrigger className="p-2 text-xs text-muted-foreground hover:no-underline justify-center gap-2">
                   <Settings2 className="h-3 w-3" />
                   Controls
                </AccordionTrigger>
                <AccordionContent className="p-4 pt-0 space-y-4">
                  {animation.controls.map((control) => (
                    <div key={control.prop} className="space-y-2">
                       <Label htmlFor={control.prop} className="text-xs">{control.label}</Label>
                       {control.type === 'range' && (
                         <Slider
                           id={control.prop}
                           min={control.min}
                           max={control.max}
                           step={control.step}
                           value={[controls[control.prop]]}
                           onValueChange={([val]) => handleControlChange(control.prop, val)}
                         />
                       )}
                       {control.type === 'select' && (
                          <Select 
                            onValueChange={(val) => handleControlChange(control.prop, val)} 
                            defaultValue={control.defaultValue}
                          >
                            <SelectTrigger className="h-8 text-xs">
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                              {control.options?.map(option => (
                                <SelectItem key={option.value} value={option.value} className="text-xs">
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                       )}
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}

           <CardFooter className="flex justify-end items-center p-2 bg-card/50 mt-auto border-t">
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" onClick={replayAnimation} className="h-8 w-8 text-muted-foreground hover:text-primary">
                <RefreshCw className="h-4 w-4" />
                <span className="sr-only">Replay Animation</span>
              </Button>
               <Button variant="ghost" size="icon" onClick={() => setFullViewVisible(true)} className="h-8 w-8 text-muted-foreground hover:text-primary">
                <Expand className="h-4 w-4" />
                 <span className="sr-only">View Fullscreen</span>
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setCodeVisible(true)} className="h-8 w-8 text-muted-foreground hover:text-primary">
                <Code className="h-4 w-4" />
                 <span className="sr-only">View Code</span>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
      <CodeViewer
        isOpen={isCodeVisible}
        onOpenChange={setCodeVisible}
        title={animation.title}
        code={animation.code}
      />
       <FullViewViewer
        isOpen={isFullViewVisible}
        onOpenChange={setFullViewVisible}
        animation={animation}
        animationKey={animationKey}
        controls={controls}
        onControlChange={handleControlChange}
        onReplay={replayAnimation}
      />
    </>
  );
}
