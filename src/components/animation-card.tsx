"use client";

import type { Animation } from '@/lib/animations';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CodeViewer } from './code-viewer';
import { useState } from 'react';
import { Code, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

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
          className="flex flex-col h-full overflow-hidden transition-all duration-300 group hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1"
        >
          <CardContent className="flex-1 flex items-center justify-center p-0 bg-secondary/40 min-h-[180px] relative overflow-hidden">
             <div className="absolute inset-0 bg-grid-zinc-400/25 [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)] z-0" />
            <div className="z-10">
              <PreviewComponent key={animationKey} />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center p-3 bg-card/50">
            <Badge variant={
              animation.library === 'Framer Motion' ? 'default' :
              animation.library === 'GSAP' ? 'secondary' : 'outline'
            }
            className="border-primary/50 text-primary"
            >
              {animation.library}
            </Badge>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" onClick={replayAnimation} className="h-8 w-8 text-muted-foreground hover:text-foreground">
                <RefreshCw className="h-4 w-4" />
                <span className="sr-only">Replay Animation</span>
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setCodeVisible(true)} className="h-8 w-8 text-muted-foreground hover:text-foreground">
                <Code className="h-4 w-4" />
                 <span className="sr-only">View Code</span>
              </Button>
            </div>
          </CardFooter>
           <CardHeader className="pt-4 p-4">
            <CardTitle className="font-headline text-lg">{animation.title}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">{animation.description}</CardDescription>
          </CardHeader>
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
