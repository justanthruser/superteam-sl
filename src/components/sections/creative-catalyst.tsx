'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateProjectIdea, type CreativeCatalystInput, type CreativeCatalystOutput } from '@/ai/flows/creative-catalyst';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FormSchema = z.object({
  currentTrends: z.string().min(10, { message: "Please describe current Web3 trends in at least 10 characters." }),
  localContext: z.string().min(10, { message: "Please provide local context for Sierra Leone in at least 10 characters." }),
});

type FormData = z.infer<typeof FormSchema>;

export function CreativeCatalystSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [idea, setIdea] = useState<CreativeCatalystOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      currentTrends: "",
      localContext: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setIdea(null);
    try {
      const result = await generateProjectIdea(data as CreativeCatalystInput);
      setIdea(result);
      toast({
        title: "New Idea Generated!",
        description: "Your creative catalyst has sparked something new.",
      });
    } catch (error) {
      console.error("Error generating project idea:", error);
      toast({
        title: "Error Generating Idea",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="catalyst" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-screen-lg px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 animate-slide-in-bottom">
            Creative Catalyst <Sparkles className="inline-block h-10 w-10 text-primary icon-glow-accent" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-bottom" style={{animationDelay: '0.2s'}}>
            Unleash AI-powered innovation. Generate Web3 project ideas tailored for Sierra Leone by providing current trends and local context.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="bg-card/70 backdrop-blur-sm animate-slide-in-bottom" style={{animationDelay: '0.4s'}}>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Fuel the AI</CardTitle>
              <CardDescription>Provide the necessary inputs for the AI to generate a project idea.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="currentTrends"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Web3 Trends</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., Real-World Assets (RWA), DePIN, SocialFi, ZK-proofs..." {...field} rows={4} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="localContext"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sierra Leone Context</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., High mobile penetration, challenges in financial access, youth demographics, key industries like agriculture, mining..." {...field} rows={4} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Sparkles className="mr-2 h-4 w-4" />
                    )}
                    Generate Idea
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="animate-slide-in-bottom" style={{animationDelay: '0.6s'}}>
            {isLoading && (
              <Card className="bg-card/70 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Loader2 className="h-12 w-12 text-primary animate-spin mx-auto mb-4" />
                  <p className="text-muted-foreground">Generating your next big idea...</p>
                </CardContent>
              </Card>
            )}
            {idea && !isLoading && (
              <Card className="bg-gradient-to-br from-primary/10 via-card/70 to-accent/10 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="font-headline text-3xl text-primary text-glow-accent">{idea.projectName}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Project Description:</h4>
                    <p className="text-muted-foreground">{idea.projectDescription}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Potential Impact:</h4>
                    <p className="text-muted-foreground">{idea.potentialImpact}</p>
                  </div>
                </CardContent>
              </Card>
            )}
            {!idea && !isLoading && (
               <Card className="bg-card/70 backdrop-blur-sm">
                <CardContent className="p-10 text-center">
                  <Sparkles className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Your generated idea will appear here.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
