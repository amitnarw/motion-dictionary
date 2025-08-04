"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { suggestAnimation } from "@/ai/flows/suggest-animation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Loader, Sparkles } from "lucide-react";
import { CodeViewer } from "@/components/code-viewer";

const FormSchema = z.object({
  animationDescription: z
    .string()
    .min(10, {
      message: "Description must be at least 10 characters.",
    })
    .max(200, {
      message: "Description must not be longer than 200 characters.",
    }),
});

type Suggestion = {
  title: string;
  code: string;
};

export default function AiSuggestionsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [activeCode, setActiveCode] = useState<{ title: string; code: string } | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    setSuggestions([]);
    try {
      const result = await suggestAnimation(data);
      setSuggestions(result.suggestions);
    } catch (error) {
      console.error("AI suggestion failed:", error);
    } finally {
      setIsLoading(false);
    }
  }
  
  const handleViewCode = (code: string, index: number) => {
    setActiveCode({ title: `AI Suggestion #${index + 1}`, code });
  };

  return (
    <div className="p-4 md:p-6 h-full flex flex-col">
       {activeCode && (
        <CodeViewer
          isOpen={!!activeCode}
          onOpenChange={() => setActiveCode(null)}
          title={activeCode.title}
          code={activeCode.code}
        />
      )}
      <header>
        <h1 className="font-headline text-3xl md:text-4xl font-bold text-foreground flex items-center gap-2">
          <Sparkles className="h-8 w-8 text-primary" />
          AI Animation Suggestions
        </h1>
        <p className="text-muted-foreground mt-2">
          Describe the animation you're looking for, and our AI will generate some ideas.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mt-6 flex-1">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="animationDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Animation Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., a button that wiggles, a card that flips over"
                      className="resize-none h-48"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Be as descriptive as possible for the best results.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                "Get Suggestions"
              )}
            </Button>
          </form>
        </Form>
        <div className="flex flex-col">
          <h2 className="font-headline text-xl font-semibold mb-4">Suggestions</h2>
          <Card className="flex-1">
            <CardContent className="p-4 h-full">
              {isLoading && (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <Loader className="mx-auto h-12 w-12 animate-spin text-primary" />
                    <p className="mt-4 text-muted-foreground">Thinking...</p>
                  </div>
                </div>
              )}
              {!isLoading && suggestions.length === 0 && (
                <div className="flex items-center justify-center h-full">
                  <p className="text-muted-foreground">AI suggestions will appear here.</p>
                </div>
              )}
              {!isLoading && suggestions.length > 0 && (
                <div className="space-y-4">
                  {suggestions.map((suggestion, index) => (
                     <Card key={index} className="bg-background">
                      <CardContent className="p-3 flex items-center justify-between">
                         <p className="text-sm text-muted-foreground font-mono truncate pr-4">
                           Suggestion #{index + 1}: {suggestion.split('\\n')[0]}...
                         </p>
                         <Button variant="outline" size="sm" onClick={() => handleViewCode(suggestion, index)}>
                           View Code
                         </Button>
                       </CardContent>
                     </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
