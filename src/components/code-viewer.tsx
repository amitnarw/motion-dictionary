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
        <div className="relative group">
           <Button
            size="icon"
            variant="ghost"
            className="absolute top-2 right-2 z-10 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleCopy}
            aria-label="Copy code"
          >
            <Copy className="h-4 w-4" />
          </Button>
          <ScrollArea className="h-96 rounded-md border bg-secondary/50">
            <pre className="text-sm whitespace-pre-wrap break-words p-4">
              <code className="font-code">{code}</code>
            </pre>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}
