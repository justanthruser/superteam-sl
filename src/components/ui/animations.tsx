'use client';

import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type ScrollRevealProps = {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  className?: string;
};

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.5,
  className = '',
}: ScrollRevealProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const directionMap = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
  };

  const variants: Variants = {
    hidden: { 
      opacity: 0,
      ...directionMap[direction],
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type StaggerContainerProps = {
  children: React.ReactNode;
  delayChildren?: number;
  staggerChildren?: number;
  className?: string;
};

export function StaggerContainer({
  children,
  delayChildren = 0,
  staggerChildren = 0.1,
  className = '',
}: StaggerContainerProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren,
        staggerChildren,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
};

export function FadeIn({ children, delay = 0, duration = 0.5, className = '' }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ 
        opacity: 1,
        transition: { 
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1],
        } 
      }}
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type ScaleInProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  scale?: number;
  className?: string;
};

export function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  scale = 0.95,
  className = '',
}: ScaleInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        transition: { 
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1],
        } 
      }}
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Custom hook for scroll progress animation
export function useScrollProgress(): { progress: number; ref: React.RefObject<HTMLDivElement> } {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateProgress = () => {
      const { top, height } = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = top + window.scrollY;
      const elementBottom = elementTop + height;
      const scrollPosition = window.scrollY + windowHeight;
      
      if (scrollPosition > elementTop && window.scrollY < elementBottom) {
        const progress = (scrollPosition - elementTop) / (height + windowHeight);
        setProgress(Math.min(Math.max(progress, 0), 1));
      }
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
    
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return { progress, ref };
}
