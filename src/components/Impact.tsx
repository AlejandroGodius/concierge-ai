"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Globe, MessageCircle, DollarSign, Clock } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

function AnimatedNumber({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        const duration = 2000;
        const start = Date.now();
        const animate = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.floor(target * eased));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref}>{prefix}{value.toLocaleString()}{suffix}</div>;
}

export default function Impact() {
  const { t } = useLanguage();

  const stats = [
    { icon: Globe, value: 300000, suffix: "+", label: t("impact.experiences"), color: "text-emerald-400" },
    { icon: MessageCircle, value: 30, suffix: "+", label: t("impact.languages"), color: "text-cyan-400" },
    { icon: Clock, value: 3, suffix: "s", prefix: "<", label: t("impact.response"), color: "text-purple-400" },
    { icon: DollarSign, value: 0, suffix: "", prefix: "€", label: t("impact.cost"), color: "text-amber-400" },
  ];

  return (
    <section className="py-20 relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className="glass-card p-6 text-center cursor-default">
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
              <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                {stat.value === 0 ? <span>{stat.prefix}{stat.value}</span> : <AnimatedNumber target={stat.value} suffix={stat.suffix} prefix={stat.prefix || ""} />}
              </div>
              <span className="text-xs text-text-muted">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
