import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { MapShowcaseSection } from '@/components/sections/map-showcase';
import { ProjectShowcaseSection } from '@/components/sections/project-showcase';
import { CommunityShowcaseSection } from '@/components/sections/community-showcase';
import { CreativeCatalystSection } from '@/components/sections/creative-catalyst';
import { JoinUsSection } from '@/components/sections/join-us';

export default function LeoneVersePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <MapShowcaseSection />
        <ProjectShowcaseSection />
        <CommunityShowcaseSection />
        <CreativeCatalystSection />
        <JoinUsSection />
      </main>
      <Footer />
    </div>
  );
}
