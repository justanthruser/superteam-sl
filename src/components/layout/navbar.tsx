import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SuperteamSLLogo } from '@/components/svg/logo';
import { Zap } from 'lucide-react';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <SuperteamSLLogo className="h-8 w-8" />
          <span className="font-headline text-xl font-bold">LeoneVerse</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#about" className="transition-colors hover:text-primary">About</Link>
          <Link href="#projects" className="transition-colors hover:text-primary">Projects</Link>
          <Link href="#community" className="transition-colors hover:text-primary">Community</Link>
          <Link href="#catalyst" className="transition-colors hover:text-primary">Catalyst</Link>
        </nav>
        <Button asChild className="rounded-full">
          <Link href="#join-us">
            Join the Team
            <Zap className="ml-2 h-4 w-4 icon-glow-accent" />
          </Link>
        </Button>
      </div>
    </header>
  );
}
