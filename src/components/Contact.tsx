"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check, ArrowRight, Mail, MapPin, Phone, Building2 } from "lucide-react";
import { FadeUp, easing } from "./motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";

export function Contact() {
  const { t } = useLanguage();

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSubmitted(true);
    } catch {
      setError(t.contact.error || "Si è verificato un errore. Riprova più tardi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-32 bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-foreground/[0.02] rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-foreground/[0.015] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
          {/* Left column - Copy */}
          <div className="lg:col-span-2">
            <FadeUp>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-caption text-muted tracking-[0.2em]">
                  {t.contact.eyebrow}
                </span>
                <div className="h-px flex-1 max-w-[100px] bg-gold/50" />
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="text-headline mb-8">
                {t.contact.headline}
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-body-large text-muted mb-16">
                {t.contact.description}
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="space-y-8">
                <motion.div
                  whileHover={{ x: 4 }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center group-hover:bg-gold group-hover:text-background transition-all duration-500">
                      <Mail className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm text-muted mb-1">{t.contact.info.email.label}</p>
                      <a
                        href={`mailto:${t.contact.info.email.value}`}
                        className="text-lg font-medium hover:text-gold transition-colors duration-300"
                      >
                        {t.contact.info.email.value}
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center group-hover:bg-gold group-hover:text-background transition-all duration-500">
                      <Phone className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm text-muted mb-1">{t.contact.info.phone.label}</p>
                      <a
                        href={`tel:${t.contact.info.phone.value.replace(/\s/g, '')}`}
                        className="text-lg font-medium hover:text-gold transition-colors duration-300"
                      >
                        {t.contact.info.phone.value}
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center group-hover:bg-gold group-hover:text-background transition-all duration-500">
                      <MapPin className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm text-muted mb-1">{t.contact.info.location.label}</p>
                      <p className="text-lg font-medium">{t.contact.info.location.value}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center group-hover:bg-gold group-hover:text-background transition-all duration-500">
                      <Building2 className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm text-muted mb-1">{t.contact.info.vat.label}</p>
                      <p className="text-lg font-medium">{t.contact.info.vat.value}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeUp>
          </div>

          {/* Right column - Form */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center h-full text-center py-20"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                    className="w-24 h-24 rounded-full bg-foreground text-background flex items-center justify-center mb-10"
                  >
                    <Check className="w-12 h-12" strokeWidth={1.5} />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl font-medium mb-4"
                  >
                    {t.contact.success.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-muted max-w-md text-lg"
                  >
                    {t.contact.success.description}
                  </motion.p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  {/* Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FadeUp delay={0.1}>
                      <div className="relative">
                        <label
                          htmlFor="name"
                          className={cn(
                            "absolute left-4 transition-all duration-300 pointer-events-none",
                            focusedField === "name" || formState.name
                              ? "-top-2.5 text-xs bg-card px-2 text-foreground"
                              : "top-4 text-muted"
                          )}
                        >
                          {t.contact.form.name}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          className={cn(
                            "w-full px-4 py-4 bg-background border rounded-xl",
                            "focus:outline-none transition-all duration-300",
                            focusedField === "name"
                              ? "border-foreground"
                              : "border-border hover:border-foreground/30"
                          )}
                        />
                      </div>
                    </FadeUp>

                    <FadeUp delay={0.15}>
                      <div className="relative">
                        <label
                          htmlFor="email"
                          className={cn(
                            "absolute left-4 transition-all duration-300 pointer-events-none",
                            focusedField === "email" || formState.email
                              ? "-top-2.5 text-xs bg-card px-2 text-foreground"
                              : "top-4 text-muted"
                          )}
                        >
                          {t.contact.form.email}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          className={cn(
                            "w-full px-4 py-4 bg-background border rounded-xl",
                            "focus:outline-none transition-all duration-300",
                            focusedField === "email"
                              ? "border-foreground"
                              : "border-border hover:border-foreground/30"
                          )}
                        />
                      </div>
                    </FadeUp>
                  </div>

                  {/* Company */}
                  <FadeUp delay={0.2}>
                    <div className="relative">
                      <label
                        htmlFor="company"
                        className={cn(
                          "absolute left-4 transition-all duration-300 pointer-events-none",
                          focusedField === "company" || formState.company
                            ? "-top-2.5 text-xs bg-card px-2 text-foreground"
                            : "top-4 text-muted"
                        )}
                      >
                        {t.contact.form.company}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("company")}
                        onBlur={() => setFocusedField(null)}
                        className={cn(
                          "w-full px-4 py-4 bg-background border rounded-xl",
                          "focus:outline-none transition-all duration-300",
                          focusedField === "company"
                            ? "border-foreground"
                            : "border-border hover:border-foreground/30"
                        )}
                      />
                    </div>
                  </FadeUp>

                  {/* Project Type */}
                  <FadeUp delay={0.25}>
                    <div>
                      <label className="block text-sm font-medium mb-4">
                        {t.contact.form.projectType}
                      </label>
                      <div className="flex flex-wrap gap-3">
                        {t.contact.form.projectTypes.map((type, index) => (
                          <motion.button
                            key={type}
                            type="button"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + index * 0.05 }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() =>
                              setFormState((prev) => ({
                                ...prev,
                                projectType: type,
                              }))
                            }
                            className={cn(
                              "px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-300",
                              formState.projectType === type
                                ? "bg-foreground text-background border-foreground"
                                : "border-border hover:border-foreground/50 hover:bg-foreground/5"
                            )}
                          >
                            {type}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </FadeUp>

                  {/* Budget */}
                  <FadeUp delay={0.3}>
                    <div>
                      <label className="block text-sm font-medium mb-4">
                        {t.contact.form.budget}
                      </label>
                      <div className="flex flex-wrap gap-3">
                        {t.contact.form.budgetRanges.map((range, index) => (
                          <motion.button
                            key={range}
                            type="button"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.35 + index * 0.05 }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() =>
                              setFormState((prev) => ({ ...prev, budget: range }))
                            }
                            className={cn(
                              "px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-300",
                              formState.budget === range
                                ? "bg-foreground text-background border-foreground"
                                : "border-border hover:border-foreground/50 hover:bg-foreground/5"
                            )}
                          >
                            {range}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </FadeUp>

                  {/* Message */}
                  <FadeUp delay={0.35}>
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className={cn(
                          "absolute left-4 transition-all duration-300 pointer-events-none",
                          focusedField === "message" || formState.message
                            ? "-top-2.5 text-xs bg-card px-2 text-foreground"
                            : "top-4 text-muted"
                        )}
                      >
                        {t.contact.form.message}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        className={cn(
                          "w-full px-4 py-4 bg-background border rounded-xl",
                          "focus:outline-none transition-all duration-300 resize-none",
                          focusedField === "message"
                            ? "border-foreground"
                            : "border-border hover:border-foreground/30"
                        )}
                      />
                    </div>
                  </FadeUp>

                  {/* Error message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm"
                    >
                      {error}
                    </motion.div>
                  )}

                  {/* Submit */}
                  <FadeUp delay={0.4}>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.01, y: -2 }}
                      whileTap={{ scale: 0.99 }}
                      className={cn(
                        "w-full flex items-center justify-center gap-3 px-8 py-5",
                        "bg-foreground text-background font-medium rounded-xl",
                        "transition-all duration-300 relative overflow-hidden",
                        "disabled:opacity-70 disabled:cursor-not-allowed"
                      )}
                    >
                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-3"
                          >
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full"
                            />
                            <span>{t.contact.form.sending}</span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="send"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-3"
                          >
                            <span>{t.contact.form.submit}</span>
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </FadeUp>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
