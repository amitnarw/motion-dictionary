// This file holds the Genkit flow for suggesting animation snippets based on user input.

'use server';

/**
 * @fileOverview An AI agent that suggests animation snippets based on user input.
 *
 * - suggestAnimation - A function that takes a user's description of a desired animation and returns suggested animation snippets.
 * - SuggestAnimationInput - The input type for the suggestAnimation function.
 * - SuggestAnimationOutput - The return type for the suggestAnimation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestAnimationInputSchema = z.object({
  animationDescription: z
    .string()
    .describe('A description of the desired animation effect.'),
});
export type SuggestAnimationInput = z.infer<typeof SuggestAnimationInputSchema>;

const SuggestAnimationOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('An array of suggested animation code snippets.'),
});
export type SuggestAnimationOutput = z.infer<typeof SuggestAnimationOutputSchema>;

export async function suggestAnimation(input: SuggestAnimationInput): Promise<SuggestAnimationOutput> {
  return suggestAnimationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestAnimationPrompt',
  input: {schema: SuggestAnimationInputSchema},
  output: {schema: SuggestAnimationOutputSchema},
  prompt: `You are an expert animation assistant. A user will describe an animation they want to create. Provide three relevant animation code snippets. Be as specific as possible.

User description: {{{animationDescription}}}`,
});

const suggestAnimationFlow = ai.defineFlow(
  {
    name: 'suggestAnimationFlow',
    inputSchema: SuggestAnimationInputSchema,
    outputSchema: SuggestAnimationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
