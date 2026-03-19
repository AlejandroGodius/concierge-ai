"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Globe, DollarSign, Zap } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

function TypewriterText({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDeleting(false);
    setIndex(0);
  }, [texts]);

  useEffect(() => {
    const current = texts[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 50);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2500);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 25);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, texts]);

  return (
    <>
      {displayed}
      <span className="inline-block w-[3px] h-[0.85em] bg-primary-light ml-1 animate-pulse align-middle" />
    </>
  );
}

export default function Hero() {
  const { t } = useLanguage();

  const rotatingTexts = [t("hero.rotate.1"), t("hero.rotate.2"), t("hero.rotate.3"), t("hero.rotate.4")];

  const stats = [
    { icon: Zap, label: t("hero.stat.response"), value: "<3s", color: "text-emerald-400" },
    { icon: Globe, label: t("hero.stat.languages"), value: "30+", color: "text-cyan-400" },
    { icon: DollarSign, label: t("hero.stat.cost"), value: "$0", color: "text-amber-400" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[300px] -right-[200px] w-[800px] h-[800px] rounded-full bg-primary/15 blur-[150px] animate-pulse-glow" />
        <div className="absolute -bottom-[300px] -left-[200px] w-[700px] h-[700px] rounded-full bg-accent/15 blur-[150px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-20">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7, type: "spring" }} className="inline-flex items-center px-5 py-2.5 rounded-full glass mb-10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-3" />
            <span className="text-sm font-medium text-white/80">{t("hero.badge")}</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[1.05] mb-8 tracking-tight">
              <span className="text-white">{t("hero.title.1")}</span><br />
              <span className="text-white">{t("hero.title.2")}</span><br />
              <span className="gradient-text"><TypewriterText texts={rotatingTexts} /></span>
            </h1>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-lg sm:text-xl text-text-muted max-w-3xl mx-auto mb-12 leading-relaxed">
            {t("hero.subtitle.1")} <strong className="text-white">{t("hero.subtitle.free")}</strong>{" "}
            {t("hero.subtitle.2").startsWith("on") ? "You even " : "Además "}<strong className="text-emerald-400">{t("hero.subtitle.earn")}</strong> {t("hero.subtitle.2")}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }} className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <a href="#pricing" className="group glow-button inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold rounded-full bg-gradient-to-r from-primary to-accent text-white transition-all duration-300 hover:scale-105 active:scale-95">
              {t("hero.cta.primary")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
            <a href="#demo" className="group inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-semibold rounded-full glass text-white hover:bg-white/8 transition-all duration-300 hover:scale-105 active:scale-95">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Play className="w-4 h-4 ml-0.5" />
              </div>
              {t("hero.cta.secondary")}
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="flex flex-wrap justify-center gap-6">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 + i * 0.1, type: "spring" }} whileHover={{ scale: 1.08, y: -6 }} className="text-center px-8 py-5 rounded-2xl glass-card cursor-default">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  <span className="text-3xl sm:text-4xl font-black text-white">{stat.value}</span>
                </div>
                <span className="text-xs sm:text-sm text-text-muted">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-surface to-transparent z-10" />
    </section>
  );
}
