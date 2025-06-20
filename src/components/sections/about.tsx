import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Zap } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-screen-lg px-4">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12 animate-slide-in-bottom">
          Who We Are
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-slide-in-bottom" style={{animationDelay: '0.2s'}}>
            <Image
              src="https://placehold.co/600x400.png"
              alt="Superteam SL Community"
              width={600}
              height={400}
              className="rounded-lg shadow-xl object-cover aspect-[3/2]"
              data-ai-hint="team collaboration"
            />
          </div>
          <div className="space-y-6 animate-slide-in-bottom" style={{animationDelay: '0.4s'}}>
            <p className="text-lg text-muted-foreground">
              Superteam Sierra Leone is a dynamic collective of forward-thinking creatives, skilled builders, and passionate Web3 professionals. We are united by a shared vision: to harness the power of decentralized technologies to create impactful solutions and foster innovation within Sierra Leone and beyond.
            </p>
            <p className="text-lg text-muted-foreground">
              We believe in the transformative potential of Web3 to empower individuals, build resilient communities, and drive economic growth. Our members are at the forefront of this revolution, contributing their diverse talents to projects that matter.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: <Users className="h-10 w-10 text-primary icon-glow-accent" />, title: "Our Community", description: "A vibrant network of innovators and problem-solvers." },
            { icon: <Target className="h-10 w-10 text-primary icon-glow-accent" />, title: "Our Mission", description: "To build, educate, and inspire through Web3 in Sierra Leone." },
            { icon: <Zap className="h-10 w-10 text-primary icon-glow-accent" />, title: "Our Vision", description: "A future where Sierra Leone is a hub for Web3 excellence." },
          ].map((item, index) => (
            <Card key={item.title} className="bg-card/50 backdrop-blur-sm animate-slide-in-bottom" style={{animationDelay: `${0.6 + index * 0.2}s`}}>
              <CardHeader>
                <div className="mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/10 p-4 w-fit">
                  {item.icon}
                </div>
                <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
