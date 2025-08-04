"use client";

import type { Animation } from '@/lib/animations';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CodeViewer } from './code-viewer';
import { useState } from 'react';
import { Code, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type AnimationCardProps = {
  animation: Animation;
};

export function AnimationCard({ animation }: AnimationCardProps) {
  const [isCodeVisible, setCodeVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const PreviewComponent = animation.preview;

  const replayAnimation = () => {
    setAnimationKey(prevKey => prevKey + 1);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
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
              <PreviewComponent key={animationKey} />
            </div>
             <div className="absolute inset-0 bg-grid-zinc-700/25 [mask-image:linear-gradient(to_bottom,white_5%,transparent_50%)]" />
          </CardContent>
          <CardHeader className="p-4 border-t">
            <div className="flex justify-between items-center">
                <CardTitle className="font-headline text-lg text-foreground/90">{animation.title}</CardTitle>
                 <Badge variant={
                    animation.library === 'Framer Motion' ? 'default' :
                    animation.library === 'GSAP' ? 'secondary' : 'outline'
                    }
                    className={cn(
                    "border-transparent text-xs",
                    animation.library === 'Framer Motion' && "bg-blue-500/20 text-blue-300",
                    animation.library === 'GSAP' && "bg-green-500/20 text-green-300",
                    animation.library === 'TailwindCSS' && "bg-teal-500/20 text-teal-300"
                    )}
                    >
                    {animation.library}
                </Badge>
            </div>
            <CardDescription className="text-sm text-muted-foreground pt-1">{animation.description}</CardDescription>
          </CardHeader>
           <CardFooter className="flex justify-end items-center p-2 bg-card/50">
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" onClick={replayAnimation} className="h-8 w-8 text-muted-foreground hover:text-primary">
                <RefreshCw className="h-4 w-4" />
                <span className="sr-only">Replay Animation</span>
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
    </>
  );
}
