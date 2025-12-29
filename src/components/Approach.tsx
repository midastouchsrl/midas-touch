"use client";

import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerItem, LineReveal, easing } from "./motion";
import { useLanguage } from "@/lib/i18n";

export function Approach() {
  const { t } = useLanguage();
  const steps = t.approach.steps;

  return (
    <section id="approach" className="py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <FadeUp>
            <span className="text-caption text-muted block mb-6">
              {t.approach.eyebrow}
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-headline mb-6">
              {t.approach.headline}
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-body-large text-muted">
              {t.approach.description}
            </p>
          </FadeUp>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Vertical line */}
          <LineReveal>
            <div className="absolute left-8 lg:left-12 top-0 bottom-0 w-px bg-border hidden md:block" />
          </LineReveal>

          <StaggerContainer className="space-y-0">
            {steps.map((step, index) => (
              <StaggerItem key={step.number}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3, ease: easing.smooth }}
                  className="relative group"
                >
                  <div className="flex items-start gap-8 lg:gap-16 py-12 border-b border-border last:border-0">
                    {/* Number indicator */}
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full border border-border flex items-center justify-center bg-background group-hover:bg-gold group-hover:text-background group-hover:border-gold transition-all duration-500">
                        <span className="text-lg lg:text-2xl font-medium">
                          {step.number}
                        </span>
                      </div>
                      {/* Connector dot */}
                      {index < steps.length - 1 && (
                        <div className="absolute left-1/2 -translate-x-1/2 top-full h-12 hidden md:block">
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                            className="w-2 h-2 rounded-full bg-border mt-6"
                          />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-grow pt-2 lg:pt-4">
                      <div className="max-w-xl">
                        <h3 className="text-xl lg:text-2xl font-medium mb-4">
                          {step.title}
                        </h3>
                        <p className="text-muted">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Bottom CTA */}
        <FadeUp delay={0.3}>
          <div className="mt-20 text-center">
            <p className="text-body-large text-muted mb-8">
              {t.approach.cta.question}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-medium rounded-full hover:opacity-90 transition-opacity duration-300"
            >
              {t.approach.cta.button}
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
