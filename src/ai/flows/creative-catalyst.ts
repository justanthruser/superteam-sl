// src/ai/flows/creative-catalyst.ts
'use server';
/**
 * @fileOverview AI-powered 'Creative Catalyst' that generates web3 project ideas tailored for Sierra Leone.
 *
 * - generateProjectIdea - A function that generates web3 project ideas tailored for Sierra Leone.
 * - CreativeCatalystInput - The input type for the generateProjectIdea function.
 * - CreativeCatalystOutput - The return type for the generateProjectIdea function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CreativeCatalystInputSchema = z.object({
  currentTrends: z.string().describe('Current global web3 trends.'),
  localContext: z.string().describe('Specific geographical and social information about Sierra Leone.'),
});
export type CreativeCatalystInput = z.infer<typeof CreativeCatalystInputSchema>;

const CreativeCatalystOutputSchema = z.object({
  projectName: z.string().describe('The name of the generated project idea.'),
  projectDescription: z.string().describe('A detailed description of the generated project idea, incorporating local trends and geographical information about Sierra Leone.'),
  potentialImpact: z.string().describe('The potential positive impact of the project on Sierra Leone.'),
});
export type CreativeCatalystOutput = z.infer<typeof CreativeCatalystOutputSchema>;

export async function generateProjectIdea(input: CreativeCatalystInput): Promise<CreativeCatalystOutput> {
  return creativeCatalystFlow(input);
}

const creativeCatalystPrompt = ai.definePrompt({
  name: 'creativeCatalystPrompt',
  input: {schema: CreativeCatalystInputSchema},
  output: {schema: CreativeCatalystOutputSchema},
  prompt: `You are a creative AI assistant specializing in generating innovative Web3 project ideas tailored for Sierra Leone.

  Consider the current global Web3 trends and the specific geographical and social information about Sierra Leone to generate project ideas that have a positive impact on the local community.

  Current Web3 Trends: {{{currentTrends}}}
  Sierra Leone Context: {{{localContext}}}

  Generate a unique Web3 project idea that leverages these trends and addresses the specific needs and opportunities in Sierra Leone.
  Provide a detailed project description and explain the potential positive impact of the project on Sierra Leone.

  Project Name: {{projectName}}
  Project Description: {{projectDescription}}
  Potential Impact: {{potentialImpact}}`,
});

const creativeCatalystFlow = ai.defineFlow(
  {
    name: 'creativeCatalystFlow',
    inputSchema: CreativeCatalystInputSchema,
    outputSchema: CreativeCatalystOutputSchema,
  },
  async input => {
    const {output} = await creativeCatalystPrompt(input);
    return output!;
  }
);
