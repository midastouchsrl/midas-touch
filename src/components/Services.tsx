"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code2, Database, Brain, Palette, ArrowUpRight, LucideIcon } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem, easing } from "./motion";
import { cn } from "@/lib/utils";
import { useRef, MouseEvent } from "react";
import { useLanguage } from "@/lib/i18n";

const serviceIcons: LucideIcon[] = [Code2, Palette, Brain, Database];

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  capabilities: readonly string[];
}

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 50 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <StaggerItem>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative group h-full"
      >
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.4, ease: easing.smooth }}
          className={cn(
            "relative h-full p-8 lg:p-10 rounded-3xl overflow-hidden",
            "bg-card border border-border",
            "hover:border-foreground/10 transition-all duration-500",
            "transform-gpu"
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Subtle gradient overlay on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent" />
          </div>

          {/* Number indicator */}
          <div
            className="absolute top-6 right-6 text-[120px] font-bold leading-none opacity-[0.03] select-none"
            style={{ transform: "translateZ(20px)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Icon */}
          <div
            className="relative w-14 h-14 rounded-2xl bg-foreground/5 flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-background transition-all duration-500"
            style={{ transform: "translateZ(30px)" }}
          >
            <service.icon className="w-6 h-6" strokeWidth={1.5} />
          </div>

          {/* Content */}
          <div style={{ transform: "translateZ(20px)" }}>
            <h3 className="text-xl font-medium mb-4 group-hover:text-foreground transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-muted leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Hover arrow */}
          <motion.div
            initial={{ opacity: 0, x: -10, y: 10 }}
            className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300"
            style={{ transform: "translateZ(40px)" }}
          >
            <div className="w-10 h-10 rounded-full bg-gold text-background flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </StaggerItem>
  );
}

export function Services() {
  const { t } = useLanguage();

  const services: ServiceItem[] = t.services.items.map((item, index) => ({
    icon: serviceIcons[index],
    title: item.title,
    description: item.description,
    capabilities: item.capabilities,
  }));

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-foreground/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-foreground/[0.01] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <FadeUp>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-caption text-muted tracking-[0.2em]">
                {t.services.eyebrow}
              </span>
              <div className="h-px flex-1 max-w-[100px] bg-gold/50" />
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-headline mb-6">
              {t.services.headline}
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-body-large text-muted">
              {t.services.description}
            </p>
          </FadeUp>
        </div>

        {/* Services grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8" delay={0.2}>
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
