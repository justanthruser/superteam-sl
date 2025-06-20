import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export interface MemberProfile {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  dataAiHint: string;
  bio?: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
  };
}

interface MemberProfileCardProps {
  member: MemberProfile;
  className?: string;
}

export function MemberProfileCard({ member, className }: MemberProfileCardProps) {
  return (
    <Card className={`text-center overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-card/70 backdrop-blur-sm ${className}`}>
      <CardHeader className="items-center p-6">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary mb-4">
          <Image
            src={member.imageUrl}
            alt={member.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={member.dataAiHint}
          />
        </div>
        <CardTitle className="font-headline text-2xl">{member.name}</CardTitle>
        <CardDescription className="text-primary">{member.role}</CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        {member.bio && <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{member.bio}</p>}
        {member.socials && (
          <div className="flex justify-center space-x-3">
            {member.socials.twitter && (
              <Button variant="ghost" size="icon" asChild className="text-accent hover:text-accent-foreground hover:bg-accent/20 rounded-full">
                <Link href={member.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on Twitter`}>
                  <Twitter className="h-5 w-5 icon-glow-accent" />
                </Link>
              </Button>
            )}
            {member.socials.linkedin && (
              <Button variant="ghost" size="icon" asChild className="text-accent hover:text-accent-foreground hover:bg-accent/20 rounded-full">
                <Link href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on LinkedIn`}>
                  <Linkedin className="h-5 w-5 icon-glow-accent" />
                </Link>
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
