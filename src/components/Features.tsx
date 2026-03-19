"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Globe,
  Clock,
  Smartphone,
  TrendingUp,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "WhatsApp Native",
    description:
      "No app downloads. Guests scan a QR and chat instantly on WhatsApp — the app they already use every day.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Globe,
    title: "30+ Languages",
    description:
      "German tourist? Japanese couple? French family? The concierge speaks their language automatically.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Clock,
    title: "24/7, Never Sick",
    description:
      "3AM questions? Holiday weekends? Your AI concierge never sleeps, never takes a day off, never has a bad day.",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    icon: Smartphone,
    title: "Zero Setup",
    description:
      "No PMS integration. No IT department needed. Sign up, get your QR code, place it at reception. Done.",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: TrendingUp,
    title: "You Earn Commission",
    description:
      "Every activity your guests book through the concierge earns you 3% commission. Passive income from day one.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Shield,
    title: "Guest Privacy First",
    description:
      "GDPR compliant. We never sell guest data. Conversations stay between the guest and the concierge.",
    gradient: "from-red-500 to-pink-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-4 px-4 py-2 rounded-full glass">
            Features
          </span>
          <h2 className="text-4xl sm:text-6xl font-black mb-5">
            <span className="text-white">Everything Your Guests </span>
            <span className="gradient-text">Need</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            A full concierge service that runs itself. No staff required.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-6 group cursor-default"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
