import { MemberProfileCard, type MemberProfile } from '@/components/ui/member-profile-card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Twitter as TwitterIcon, Users } from 'lucide-react';
import Link from 'next/link';

const members: MemberProfile[] = [
  {
    id: '1',
    name: 'Fatmata K.',
    role: 'Lead Blockchain Developer',
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'woman portrait',
    bio: 'Passionate about building scalable and secure decentralized applications. Core contributor to multiple open-source Web3 projects.',
    socials: { twitter: '#', linkedin: '#' },
  },
  {
    id: '2',
    name: 'Mohamed S.',
    role: 'Creative Director & NFT Artist',
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'man portrait',
    bio: 'Blending Sierra Leonean art with futuristic digital concepts. Believes in art as a catalyst for change.',
    socials: { twitter: '#', linkedin: '#' },
  },
  {
    id: '3',
    name: 'Aisha B.',
    role: 'Community Manager & DAO Strategist',
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'person smiling',
    bio: 'Building inclusive and engaged Web3 communities. Expert in DAO governance and decentralized collaboration.',
    socials: { twitter: '#', linkedin: '#' },
  },
];

export function CommunityShowcaseSection() {
  return (
    <section id="community" className="py-16 md:py-24 bg-card/30">
      <div className="container mx-auto max-w-screen-xl px-4">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-4 animate-slide-in-bottom">
          Meet Our Vibrant Community
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto animate-slide-in-bottom" style={{animationDelay: '0.2s'}}>
          The heart of Superteam SL is its people. Get to know some of the brilliant minds driving Web3 innovation in Sierra Leone.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {members.map((member, index) => (
            <MemberProfileCard 
              key={member.id} 
              member={member} 
              className="animate-slide-in-bottom"
              style={{animationDelay: `${0.4 + index * 0.15}s`}}
            />
          ))}
        </div>

        <div className="text-center space-y-6 animate-fade-in" style={{animationDelay: '1s'}}>
          <h3 className="font-headline text-3xl font-semibold">Join the Conversation</h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Connect with us on our social platforms, participate in events, and become part of the movement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="rounded-full bg-accent text-accent-foreground hover:bg-accent/80">
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> Join Discord
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full border-accent text-accent hover:bg-accent/10">
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <TwitterIcon className="mr-2 h-5 w-5" /> Follow on X (Twitter)
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full">
              <Link href="#events">
                <Users className="mr-2 h-5 w-5" /> Upcoming Events
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
