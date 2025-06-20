'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { MapShowcaseSection } from '@/components/sections/map-showcase';
import { ProjectShowcaseSection } from '@/components/sections/project-showcase';
import { CommunityShowcaseSection } from '@/components/sections/community-showcase';
import { CreativeCatalystSection } from '@/components/sections/creative-catalyst';
import { JoinUsSection } from '@/components/sections/join-us';
import { ScrollReveal, StaggerContainer } from '@/components/ui/animations';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function LeoneVersePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Example of scroll-linked animation values
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  return (
    <div 
      ref={containerRef}
      className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden"
    >
      <motion.div 
        style={{ opacity, scale }}
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 pointer-events-none"
      />
      
      <ScrollReveal>
        <Navbar />
      </ScrollReveal>
      
      <main className="flex-grow">
        <StaggerContainer staggerChildren={0.2}>
          <HeroSection />
          
          <ScrollReveal delay={0.1}>
            <AboutSection />
          </ScrollReveal>
          
          <ScrollReveal direction="left">
            <MapShowcaseSection />
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <ProjectShowcaseSection />
          </ScrollReveal>
          
          <ScrollReveal>
            <CommunityShowcaseSection />
          </ScrollReveal>
          
          <ScrollReveal>
            <CreativeCatalystSection />
          </ScrollReveal>
          
          <ScrollReveal>
            <JoinUsSection />
          </ScrollReveal>
        </StaggerContainer>
      </main>
      
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </div>
  );
}


