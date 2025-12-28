"use client";

import { motion, HTMLMotionProps, Variants } from "framer-motion";
import { ReactNode } from "react";

// Premium easing curves
export const easing = {
  smooth: [0.16, 1, 0.3, 1],
  bounce: [0.34, 1.56, 0.64, 1],
  elastic: [0.68, -0.55, 0.265, 1.55],
} as const;

// Fade up animation
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easing.smooth,
    }
  }
};

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing.smooth,
    }
  }
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

// Scale up animation
export const scaleUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easing.smooth,
    }
  }
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easing.smooth,
    }
  }
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easing.smooth,
    }
  }
};

// Reusable animated components
interface AnimatedProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
}

export function FadeUp({ children, delay = 0, ...props }: AnimatedProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay,
            ease: easing.smooth,
          }
        }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, delay = 0, ...props }: AnimatedProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.6,
            delay,
            ease: easing.smooth,
          }
        }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, delay = 0, ...props }: AnimatedProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          }
        }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, ...props }: AnimatedProps) {
  return (
    <motion.div
      variants={fadeUp}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Magnetic hover effect
export function MagneticHover({ children, ...props }: AnimatedProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: easing.smooth }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Line draw animation
export function LineReveal({ children, ...props }: AnimatedProps) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: easing.smooth }}
      style={{ originX: 0 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
