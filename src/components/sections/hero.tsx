'use client';
import { SuperteamSLLogo } from '@/components/svg/logo';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  const taglineParts = [
    "Built by the bold.",
    "Powered by Web3.",
    "Born in Sierra Leone."
  ];

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/10 p-4 text-center"
    >
      <div className="absolute inset-0 opacity-5 md:opacity-10">
        {/* Decorative background elements, could be SVGs or subtle patterns */}
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-accent/30 blur-3xl animate-pulse-glow animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-primary/30 blur-3xl animate-pulse-glow animation-delay-4000"></div>
      </div>
      
      <div className="z-10 flex flex-col items-center">
        <SuperteamSLLogo className="mb-8 h-24 w-24 md:h-32 md:w-32 animate-fade-in" style={{ animationDelay: '0.2s' }} />
        
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold">
          {taglineParts.map((part, index) => (
            <span
              key={index}
              className="block animate-text-pop-up"
              style={{ animationDelay: `${0.5 + index * 0.3}s` }}
            >
              {part}
            </span>
          ))}
        </h1>
        
        <p 
          className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground animate-fade-in"
          style={{ animationDelay: '1.5s' }}
        >
          Superteam Sierra Leone is a high-energy collective of creatives, builders, and Web3 professionals pioneering the future, from Africa.
        </p>
        
        <Button 
          asChild 
          size="lg" 
          className="mt-10 rounded-full animate-fade-in"
          style={{ animationDelay: '1.8s' }}
        >
          <Link href="#about">
            Discover More <ArrowDown className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
      
      {/* Subtle animated lines or particles could be added here for more "motion-heavy" feel */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
