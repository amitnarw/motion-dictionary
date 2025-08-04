"use client";

import type { Animation } from '@/lib/animations';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CodeViewer } from './code-viewer';
import { useState } from 'react';
import { Code, RefreshCw } from 'lucide-react';

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
      <Card
        className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      >
        <CardHeader>
          <CardTitle className="font-headline text-lg">{animation.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex items-center justify-center p-0 bg-secondary/30 min-h-[150px]">
          <PreviewComponent key={animationKey} />
        </CardContent>
        <CardFooter className="flex justify-between items-center p-4">
          <Badge variant={
            animation.library === 'Framer Motion' ? 'default' :
            animation.library === 'GSAP' ? 'secondary' : 'outline'
          }>
            {animation.library}
          </Badge>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" onClick={replayAnimation} className="h-8 w-8">
              <RefreshCw className="h-4 w-4" />
              <span className="sr-only">Replay Animation</span>
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setCodeVisible(true)}>
              <Code className="mr-2 h-4 w-4" />
              Code
            </Button>
          </div>
        </CardFooter>
      </Card>
      <CodeViewer
        isOpen={isCodeVisible}
        onOpenChange={setCodeVisible}
        title={animation.title}
        code={animation.code}
      />
    </>
  );
}
