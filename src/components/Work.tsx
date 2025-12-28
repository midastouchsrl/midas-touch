"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem, easing } from "./motion";
import { cn } from "@/lib/utils";
import { useRef, MouseEvent } from "react";
import { useLanguage } from "@/lib/i18n";

interface Project {
  title: string;
  category: string;
  description: string;
  tags: readonly string[];
  year: string;
  featured: boolean;
}

function FeaturedProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 50 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <StaggerItem>
      <motion.article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative"
      >
        <motion.div
          whileHover={{ y: -12 }}
          transition={{ duration: 0.5, ease: easing.smooth }}
          className="relative"
        >
          {/* Image area with abstract gradient */}
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-8">
            {/* Dynamic gradient background */}
            <div
              className={cn(
                "absolute inset-0",
                index === 0
                  ? "bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"
                  : "bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-800"
              )}
            />

            {/* Animated mesh gradient */}
            <motion.div
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 50%),
                                 radial-gradient(circle at 70% 70%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
                backgroundSize: "200% 200%",
              }}
            />

            {/* Glare effect on hover */}
            <motion.div
              style={{
                background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.15) 0%, transparent 50%)`,
              }}
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            {/* Grain texture */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')]" />

            {/* Floating elements inside the card */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-1/4 left-1/4 w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            />
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute bottom-1/3 right-1/4 w-32 h-24 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            />
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm"
            />

            {/* Category badge */}
            <div className="absolute top-6 left-6 z-10">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full text-sm text-white border border-white/10">
                {project.category}
              </span>
            </div>

            {/* Year badge */}
            <div className="absolute top-6 right-6 z-10">
              <span className="text-sm text-white/60 font-medium">{project.year}</span>
            </div>

            {/* Hover overlay with CTA */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1 }}
                className="w-20 h-20 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100"
              >
                <ExternalLink className="w-6 h-6 text-black" />
              </motion.div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-2xl lg:text-3xl font-medium group-hover:text-muted transition-colors duration-300">
                {project.title}
              </h3>
              <ArrowUpRight className="w-5 h-5 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <p className="text-muted mb-6 max-w-lg">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-sm bg-foreground/5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.article>
    </StaggerItem>
  );
}

function SecondaryProjectCard({ project }: { project: Project }) {
  return (
    <StaggerItem>
      <motion.article
        whileHover={{ y: -4, x: 4 }}
        transition={{ duration: 0.3, ease: easing.smooth }}
        className="group relative p-6 rounded-2xl border border-border hover:border-foreground/20 bg-card transition-all duration-500"
      >
        <div className="flex items-start gap-6">
          {/* Thumbnail */}
          <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-800" />
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute inset-2 rounded-lg bg-white/10"
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs text-muted uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-xs text-muted">{project.year}</span>
            </div>
            <h3 className="text-lg font-medium mb-2 group-hover:text-muted transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-muted line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Arrow */}
          <ArrowUpRight className="w-4 h-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
        </div>
      </motion.article>
    </StaggerItem>
  );
}

export function Work() {
  const { t } = useLanguage();

  const projects: Project[] = t.work.projects.map((p) => ({
    title: p.title,
    category: p.category,
    description: p.description,
    tags: p.tags,
    year: p.year,
    featured: p.featured,
  }));

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-foreground/[0.015] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <FadeUp>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-caption text-muted tracking-[0.2em]">
                  {t.work.eyebrow}
                </span>
                <div className="h-px flex-1 max-w-[100px] bg-border" />
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="text-headline">
                {t.work.headline}
              </h2>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <p className="text-muted max-w-md lg:text-right">
              {t.work.description}
            </p>
          </FadeUp>
        </div>

        {/* Featured projects */}
        <StaggerContainer className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16" delay={0.2}>
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.title} project={project} index={index} />
          ))}
        </StaggerContainer>

        {/* Secondary projects */}
        <StaggerContainer className="grid md:grid-cols-2 gap-4" delay={0.3}>
          {otherProjects.map((project) => (
            <SecondaryProjectCard key={project.title} project={project} />
          ))}
        </StaggerContainer>

        {/* NDA note */}
        <FadeUp delay={0.4}>
          <div className="mt-20 pt-12 border-t border-border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <p className="text-muted">
                {t.work.nda.text}
              </p>
              <motion.a
                href="#contact"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 text-foreground hover:text-muted transition-colors duration-300"
              >
                {t.work.nda.link}
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
