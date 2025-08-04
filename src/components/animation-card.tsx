"use client";

import type { Animation } from '@/lib/animations';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CodeViewer } from './code-viewer';
import { useState } from 'react';
import { Code } from 'lucide-react';

type AnimationCardProps = {
  animation: Animation;
};

export function AnimationCard({ animation }: AnimationCardProps) {
  const [isCodeVisible, setCodeVisible] = useState(false);

  return (
    <>
      <Card
        className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      >
        <CardHeader>
          <CardTitle className="font-headline text-lg">{animation.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex items-center justify-center p-0">
          <Image
            src={animation.preview}
            alt={`Preview of ${animation.title}`}
            width={600}
            height={400}
            className="w-full h-auto object-cover aspect-video"
            data-ai-hint="animation motion"
          />
        </CardContent>
        <CardFooter className="flex justify-between items-center p-4">
          <Badge variant={
            animation.library === 'Framer Motion' ? 'default' :
            animation.library === 'GSAP' ? 'secondary' : 'outline'
          }>
            {animation.library}
          </Badge>
          <Button variant="ghost" size="sm" onClick={() => setCodeVisible(true)}>
            <Code className="mr-2 h-4 w-4" />
            View Code
          </Button>
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
