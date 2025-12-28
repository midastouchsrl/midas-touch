"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useRef } from "react";
import { easing } from "./motion";
import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, 200]), springConfig);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />

        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full opacity-[0.03] dark:opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, var(--foreground) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-1/4 -right-1/4 w-[1000px] h-[1000px] rounded-full opacity-[0.02] dark:opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, var(--foreground) 0%, transparent 70%)",
          }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(var(--foreground) 1px, transparent 1px),
              linear-gradient(90deg, var(--foreground) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Main content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32"
      >
        <div className="max-w-5xl">
          {/* Eyebrow with animated line */}
          {t.hero.eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easing.smooth }}
              className="flex items-center gap-4 mb-12"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: easing.smooth }}
                className="h-px w-12 bg-gold origin-left"
              />
              <span className="text-caption text-muted tracking-[0.2em]">
                {t.hero.eyebrow}
              </span>
            </motion.div>
          )}

          {/* Main headline - unified block */}
          <div className="overflow-hidden mb-10">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: easing.smooth }}
              className="text-display"
            >
              {t.hero.headline.line1}{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-gold">{t.hero.headline.line2}</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.2, ease: easing.smooth }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gold/30 origin-left"
                />
              </span>
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: easing.smooth }}
            className="text-body-large text-muted max-w-xl mb-14"
          >
            {t.hero.subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: easing.smooth }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background font-medium rounded-full transition-all duration-300"
            >
              <span>{t.hero.cta.primary}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#work"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-border font-medium rounded-full hover:bg-card hover:border-foreground/20 transition-all duration-500"
            >
              {t.hero.cta.secondary}
            </motion.a>
          </motion.div>
        </div>

      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#services"
          className="flex flex-col items-center gap-3 text-muted hover:text-foreground transition-colors duration-300"
        >
          <span className="text-xs tracking-[0.2em] uppercase">{t.hero.scroll}</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.a>
      </motion.div>

      {/* Corner decorations */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6, ease: easing.smooth }}
        className="absolute top-8 right-8 w-2 h-2 rounded-full bg-foreground/20"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.6, ease: easing.smooth }}
        className="absolute top-8 right-14 w-2 h-2 rounded-full bg-foreground/10"
      />
    </section>
  );
}
