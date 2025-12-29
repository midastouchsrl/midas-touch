"use client";

import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerItem, easing } from "./motion";
import { useLanguage } from "@/lib/i18n";

export function About() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column */}
          <div>
            <FadeUp>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-caption text-muted tracking-[0.2em]">
                  {t.about.eyebrow}
                </span>
                <div className="h-px flex-1 max-w-[100px] bg-gold/50" />
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="text-headline mb-8">
                {t.about.headline}
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-body-large text-muted mb-8">
                {t.about.description.p1}
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="text-body text-muted">
                {t.about.description.p2}
              </p>
            </FadeUp>
          </div>

          {/* Right column - Values */}
          <StaggerContainer className="space-y-12 lg:pt-16" delay={0.3}>
            {t.about.values.map((value) => (
              <StaggerItem key={value.number}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3, ease: easing.smooth }}
                  className="group"
                >
                  <div className="flex items-start gap-6">
                    <span className="text-caption text-gold mt-1">
                      {value.number}
                    </span>
                    <div>
                      <h3 className="text-xl font-medium mb-3 group-hover:text-muted transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-muted">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Bottom statement */}
        <FadeUp delay={0.2}>
          <div className="mt-32 pt-16 border-t border-border">
            <p className="text-title max-w-4xl">
              &ldquo;{t.about.quote}&rdquo;
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
