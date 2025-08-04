"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';
import { Copy } from 'lucide-react';
import { useEffect, useState } from 'react';

type CodeViewerProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  title: string;
  code: string;
};

export function CodeViewer({ isOpen, onOpenChange, title, code }: CodeViewerProps) {
  const { toast } = useToast();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    toast({
      title: 'Copied to clipboard!',
      description: 'The animation code has been copied.',
    });
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-full">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">{title}</DialogTitle>
          <DialogDescription>
            Here is the code snippet for the animation. You can copy it directly.
          </DialogDescription>
        </DialogHeader>
        <div className="relative">
          <ScrollArea className="h-96 rounded-md border bg-secondary/50 p-4">
            <pre className="text-sm whitespace-pre-wrap break-words">
              <code className="font-code">{code}</code>
            </pre>
          </ScrollArea>
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-4 right-4"
            onClick={handleCopy}
            aria-label="Copy code"
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
