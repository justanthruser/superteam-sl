'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SuperteamSLLogo } from '@/components/svg/logo';
import { Linkedin, Twitter, Send, Copyright } from 'lucide-react';
import Link from 'next/link';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';

const NewsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});
type NewsletterFormData = z.infer<typeof NewsletterSchema>;

export function Footer() {
  const { toast } = useToast();
  const currentYear = new Date().getFullYear();

  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(NewsletterSchema),
  });

  const onSubmit: SubmitHandler<NewsletterFormData> = async (data) => {
    // Simulate API call
    console.log("Newsletter subscription:", data.email);
    toast({
      title: "Subscribed!",
      description: "Thanks for joining our newsletter.",
    });
    form.reset();
  };

  return (
    <footer className="bg-card/50 border-t border-border/40 py-12">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <SuperteamSLLogo className="h-10 w-10" />
              <span className="font-headline text-2xl font-bold">LeoneVerse</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
              Superteam Sierra Leone: Igniting Web3 innovation from the heart of West Africa. Join us in building a decentralized future.
            </p>
          </div>

          <div>
            <h4 className="font-headline text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="#projects" className="text-muted-foreground hover:text-primary">Projects</Link></li>
              <li><Link href="#community" className="text-muted-foreground hover:text-primary">Community</Link></li>
              <li><Link href="#join-us" className="text-muted-foreground hover:text-primary">Join Superteam</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline text-lg font-semibold mb-3">Stay Updated</h4>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="rounded-r-none focus:ring-primary focus:border-primary"
                  {...form.register("email")}
                />
                <Button type="submit" variant="default" className="rounded-l-none">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              {form.formState.errors.email && (
                <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
              )}
            </form>
            <div className="flex space-x-3 mt-4">
              <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary rounded-full">
                <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5 icon-glow-accent" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary rounded-full">
                <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5 icon-glow-accent" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p className="flex items-center">
            <Copyright className="h-4 w-4 mr-1" /> {currentYear} Superteam Sierra Leone. All rights reserved.
          </p>
          <p>Born in Sierra Leone, Building for the World.</p>
        </div>
      </div>
    </footer>
  );
}
