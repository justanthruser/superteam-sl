'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  variant?: 'fadeIn' | 'fadeInUp' | 'slideInLeft' | 'slideInRight';
  delay?: number;
  viewportMargin?: string;
};

export function AnimatedSection({
  children,
  className = '',
  variant = 'fadeInUp',
  delay = 0,
  viewportMargin = '0px 0px -100px 0px',
}: AnimatedSectionProps) {
  const variants: Record<string, Variants> = {
    fadeIn: {
      offscreen: { opacity: 0 },
      onscreen: {
        opacity: 1,
        transition: { duration: 0.6, delay, ease: 'easeOut' },
      },
    },
    fadeInUp: {
      offscreen: { y: 40, opacity: 0 },
      onscreen: {
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          bounce: 0.3,
          duration: 0.8,
          delay,
        },
      },
    },
    slideInLeft: {
      offscreen: { x: -40, opacity: 0 },
      onscreen: {
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          bounce: 0.2,
          duration: 0.8,
          delay,
        },
      },
    },
    slideInRight: {
      offscreen: { x: 40, opacity: 0 },
      onscreen: {
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          bounce: 0.2,
          duration: 0.8,
          delay,
        },
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, margin: viewportMargin }}
      variants={variants[variant]}
    >
      {children}
    </motion.div>
  );
}
