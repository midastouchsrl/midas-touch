"use client";

import { motion } from "framer-motion";
import { FadeUp, easing } from "./motion";
import { useLanguage } from "@/lib/i18n";
import Image from "next/image";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <FadeUp>
              <a href="#" className="inline-block mb-6">
                <Image
                  src="/images/logo-dark.png"
                  alt={t.footer.brand.name}
                  width={260}
                  height={32}
                  className="h-8 w-auto object-contain dark:hidden"
                />
                <Image
                  src="/images/logo-light.png"
                  alt={t.footer.brand.name}
                  width={260}
                  height={32}
                  className="h-8 w-auto object-contain hidden dark:block"
                />
              </a>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-muted max-w-sm">
                {t.footer.brand.description}
              </p>
            </FadeUp>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Services */}
              <FadeUp delay={0.1}>
                <div>
                  <h4 className="text-caption text-muted mb-4">{t.footer.links.services.title}</h4>
                  <ul className="space-y-3">
                    {t.footer.links.services.items.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-muted hover:text-foreground transition-colors duration-300"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              {/* Company */}
              <FadeUp delay={0.15}>
                <div>
                  <h4 className="text-caption text-muted mb-4">{t.footer.links.company.title}</h4>
                  <ul className="space-y-3">
                    {t.footer.links.company.items.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-muted hover:text-foreground transition-colors duration-300"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              {/* Social */}
              <FadeUp delay={0.2}>
                <div>
                  <h4 className="text-caption text-muted mb-4">{t.footer.links.social.title}</h4>
                  <ul className="space-y-3">
                    {t.footer.links.social.items.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted hover:text-foreground transition-colors duration-300"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <FadeUp delay={0.25}>
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted">
              © {currentYear} {t.footer.brand.name}. {t.footer.legal.copyright}
            </p>

            <div className="flex items-center gap-6 text-sm text-muted">
              <a href="#" className="hover:text-foreground transition-colors duration-300">
                {t.footer.legal.privacy}
              </a>
              <a href="#" className="hover:text-foreground transition-colors duration-300">
                {t.footer.legal.terms}
              </a>
            </div>
          </div>
        </FadeUp>

        {/* Decorative large text */}
        <FadeUp delay={0.3}>
          <div className="mt-20 overflow-hidden">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 0.03 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easing.smooth }}
            >
              <span className="text-[12vw] font-semibold tracking-tighter select-none whitespace-nowrap">
                {t.footer.decorative}
              </span>
            </motion.div>
          </div>
        </FadeUp>
      </div>
    </footer>
  );
}
