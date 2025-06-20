import Image from 'next/image';

export function MapShowcaseSection() {
  const hotspots = [
    { id: 'freetown', name: 'Freetown Hub', top: '45%', left: '25%' },
    { id: 'bo', name: 'Bo Innovation Center', top: '60%', left: '40%' },
    { id: 'kenema', name: 'Kenema Tech Park', top: '55%', left: '65%' },
  ];

  return (
    <section id="map" className="py-16 md:py-24 bg-card/30 parallax-bg" style={{backgroundImage: "url('https://placehold.co/1920x1080.png')", backgroundBlendMode: 'overlay', backgroundColor: 'hsl(var(--background)/0.8)'}} data-ai-hint="abstract network">
      <div className="container mx-auto max-w-screen-lg px-4 text-center">
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 animate-slide-in-bottom">
          Our Footprint in Sierra Leone
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-in-bottom" style={{animationDelay: '0.2s'}}>
          Discover our key project locations and community hubs across the nation. We're building a connected Web3 ecosystem, one node at a time.
        </p>
        <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg shadow-2xl overflow-hidden animate-fade-in" style={{animationDelay: '0.4s'}}>
          <Image
            src="https://placehold.co/1200x675.png"
            alt="Map of Sierra Leone with project locations"
            layout="fill"
            objectFit="cover"
            data-ai-hint="Sierra Leone map"
          />
          {hotspots.map((spot, index) => (
            <div
              key={spot.id}
              className="absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 animate-slide-in-bottom"
              style={{ top: spot.top, left: spot.left, animationDelay: `${0.6 + index * 0.1}s` }}
              title={spot.name}
            >
              <div className="w-full h-full rounded-full bg-accent animate-pulse-glow shadow-md"></div>
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-md bg-background px-2 py-1 text-xs text-foreground shadow-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {spot.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
