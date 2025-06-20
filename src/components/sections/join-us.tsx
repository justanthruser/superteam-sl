import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ChevronRight, UserPlus } from 'lucide-react';
import Link from 'next/link';

export function JoinUsSection() {
  const steps = [
    { title: 'Express Interest', description: 'Fill out our quick application form.' },
    { title: 'Community Call', description: 'Chat with a team member to learn more.' },
    { title: 'Onboarding', description: 'Get access to our resources and channels.' },
    { title: 'Start Building!', description: 'Collaborate on projects and make an impact.' },
  ];

  return (
    <section id="join-us" className="py-16 md:py-24 bg-primary/5 parallax-bg" style={{backgroundImage: "url('https://placehold.co/1920x1080.png')", backgroundBlendMode: 'overlay', backgroundColor: 'hsl(var(--background)/0.9)'}} data-ai-hint="futuristic cityscape">
      <div className="container mx-auto max-w-screen-lg px-4 text-center">
        <UserPlus className="h-16 w-16 text-primary mx-auto mb-6 icon-glow-accent animate-fade-in" />
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 animate-slide-in-bottom">
          Ready to Shape the Future?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto animate-slide-in-bottom" style={{animationDelay: '0.2s'}}>
          Become a part of Superteam Sierra Leone and contribute your skills to the Web3 revolution. We're looking for passionate builders, creatives, and visionaries.
        </p>
        
        <Button size="lg" asChild className="rounded-full text-lg px-8 py-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <Link href="#">
            Join the Superteam <ChevronRight className="ml-2 h-6 w-6" />
          </Link>
        </Button>

        <div className="mt-16">
          <h3 className="font-headline text-2xl md:text-3xl font-semibold mb-8 animate-slide-in-bottom" style={{animationDelay: '0.6s'}}>How to Join</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="bg-card/70 backdrop-blur-sm text-left animate-slide-in-bottom" style={{animationDelay: `${0.8 + index * 0.15}s`}}>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <CheckCircle className="h-6 w-6 text-primary mr-3" />
                    <CardTitle className="font-headline text-xl">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <p className="mt-12 text-sm text-muted-foreground animate-fade-in" style={{animationDelay: '1.5s'}}>
          For partnerships or inquiries, please reach out to <a href="mailto:contact@superteamsl.com" className="text-primary hover:underline">contact@superteamsl.com</a>.
        </p>
      </div>
    </section>
  );
}
