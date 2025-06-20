import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { MapShowcaseSection } from '@/components/sections/map-showcase';
import { ProjectShowcaseSection } from '@/components/sections/project-showcase';
import { CommunityShowcaseSection } from '@/components/sections/community-showcase';
import { CreativeCatalystSection } from '@/components/sections/creative-catalyst';
import { JoinUsSection } from '@/components/sections/join-us';
import { AnimatedSection } from '@/components/ui/animated-section';

export default function LeoneVersePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main className="flex-grow overflow-hidden">
        {/* Hero section remains without animations */}
        <div className="relative z-10">
          <HeroSection />
        </div>
        
        {/* Animated sections */}
        <div className="space-y-20 md:space-y-32">
          <AnimatedSection variant="fadeInUp">
            <AboutSection />
          </AnimatedSection>
          
          <AnimatedSection variant="slideInRight">
            <MapShowcaseSection />
          </AnimatedSection>
          
          <AnimatedSection variant="fadeInUp">
            <ProjectShowcaseSection />
          </AnimatedSection>
          
          <AnimatedSection variant="slideInLeft">
            <CommunityShowcaseSection />
          </AnimatedSection>
          
          <AnimatedSection variant="fadeInUp">
            <CreativeCatalystSection />
          </AnimatedSection>
          
          <AnimatedSection variant="fadeIn">
            <JoinUsSection />
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}
