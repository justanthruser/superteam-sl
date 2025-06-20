import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  offscreen: {
    y: 40,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

export const fadeIn: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const slideInFromLeft: Variants = {
  offscreen: {
    x: -40,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 0.8,
    },
  },
};

export const slideInFromRight: Variants = {
  offscreen: {
    x: 40,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 0.8,
    },
  },
};

export const staggerContainer = (staggerChildren: number = 0.1): Variants => ({
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren,
    },
  },
});

export const viewport = {
  once: true,
  margin: '0px 0px -100px 0px',
  amount: 0.1,
};
