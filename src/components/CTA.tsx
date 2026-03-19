"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-28 relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-surface-card to-accent/20" />
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-8 left-8 animate-pulse"><Sparkles className="w-6 h-6 text-primary/30" /></div>
          <div className="absolute bottom-8 right-8 animate-pulse" style={{ animationDelay: "1s" }}><Sparkles className="w-8 h-8 text-accent/30" /></div>
          <div className="relative px-8 py-20 sm:px-16 text-center">
            <h2 className="text-4xl sm:text-6xl font-black mb-6">
              <span className="text-white">{t("cta.title.1")}</span>
              <span className="gradient-text">{t("cta.title.2")}</span>
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">{t("cta.subtitle")}</p>
            <a href="/get-started" className="group glow-button inline-flex items-center justify-center gap-3 px-12 py-5 text-lg font-bold rounded-full bg-gradient-to-r from-primary to-accent text-white transition-all duration-300 hover:scale-105 active:scale-95">
              {t("cta.button")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
            <p className="text-sm text-text-muted mt-6">{t("cta.note")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
