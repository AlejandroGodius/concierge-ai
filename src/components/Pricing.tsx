"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Star } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Pricing() {
  const { t } = useLanguage();

  const plans = [
    {
      name: t("pricing.free.name"), tagline: t("pricing.free.tagline"), price: t("pricing.free.price"), period: t("pricing.free.period"),
      highlighted: false, badge: null,
      gradient: "from-emerald-500/15 to-surface-light", buttonGradient: "from-emerald-500 to-teal-500",
      checkColor: "text-emerald-400", checkBg: "bg-emerald-500/20",
      features: Array.from({ length: 8 }, (_, i) => t(`pricing.free.f${i + 1}`)),
      cta: t("pricing.free.cta"), href: "/get-started",
    },
    {
      name: t("pricing.pro.name"), tagline: t("pricing.pro.tagline"), price: t("pricing.pro.price"), period: t("pricing.pro.period"),
      highlighted: true, badge: t("pricing.pro.badge"),
      gradient: "from-amber-500/15 to-surface-light", buttonGradient: "from-amber-500 to-orange-500",
      checkColor: "text-amber-400", checkBg: "bg-amber-500/20",
      features: Array.from({ length: 8 }, (_, i) => t(`pricing.pro.f${i + 1}`)),
      cta: t("pricing.pro.cta"), href: "/get-started?plan=pro",
    },
  ];

  return (
    <section id="pricing" className="py-28 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-4 px-4 py-2 rounded-full glass">{t("pricing.badge")}</span>
          <h2 className="text-4xl sm:text-6xl font-black mb-5">
            <span className="gradient-text">{t("pricing.title.1")}</span>
            <span className="text-white">{t("pricing.title.2")}</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">{t("pricing.subtitle")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, type: "spring" }} whileHover={{ y: -10 }} style={{ overflow: "visible" }} className={`relative rounded-2xl p-8 transition-all duration-300 flex flex-col bg-gradient-to-b ${plan.gradient} border border-white/5`}>
              {plan.badge && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30">
                    <Star className="w-3 h-3" />{plan.badge}
                  </span>
                </motion.div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-text-muted mb-5">{plan.tagline}</p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-5xl font-black ${plan.highlighted ? "gradient-text-gold" : "gradient-text"}`}>{plan.price}</span>
                  <span className="text-text-muted text-lg">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.checkBg}`}>
                      {j === 0 && plan.highlighted ? <Sparkles className={`w-3 h-3 ${plan.checkColor}`} /> : <Check className={`w-3 h-3 ${plan.checkColor}`} />}
                    </div>
                    <span className="text-sm text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href={plan.href} className={`block w-full text-center py-4 rounded-full font-bold text-sm transition-all duration-300 glow-button bg-gradient-to-r ${plan.buttonGradient} text-white hover:scale-105`}>{plan.cta}</a>
            </motion.div>
          ))}
        </div>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-sm text-text-muted mt-8">{t("pricing.note")}</motion.p>
      </div>
    </section>
  );
}
