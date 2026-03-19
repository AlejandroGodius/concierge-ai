"use client";

import { motion } from "framer-motion";
import {
  Utensils,
  Sailboat,
  Car,
  Sparkles,
  ArrowRight,
  Star,
} from "lucide-react";

const partnerTypes = [
  {
    icon: Utensils,
    label: "Your restaurants",
    example: '"Try La Marina — our partner restaurant with the best sea views"',
    commission: "Your deal, your rules",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    icon: Sailboat,
    label: "Your tour operators",
    example: '"Book Captain Miguel\'s private boat tour — exclusive to our guests"',
    commission: "Keep 100% of your commission",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Car,
    label: "Your transfer partners",
    example: '"Need a ride to the airport? Our trusted partner offers €35 flat rate"',
    commission: "Your negotiated rate",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
];

export default function PromotePartners() {
  return (
    <section className="py-28 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-4 px-4 py-2 rounded-full glass">
            Pro Feature
          </span>
          <h2 className="text-4xl sm:text-6xl font-black mb-5">
            <span className="text-white">Promote </span>
            <span className="gradient-text-gold">Your Own Partners</span>
          </h2>
          <p className="text-lg text-text-muted max-w-3xl mx-auto">
            Already have deals with local restaurants, tour operators, or
            transfer services? Put them <strong className="text-white">first</strong> in
            your concierge recommendations. Your deals, your commissions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {partnerTypes.map((partner, i) => (
            <motion.div
              key={partner.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass-card p-6"
            >
              <div className={`w-12 h-12 rounded-xl ${partner.bg} flex items-center justify-center mb-4`}>
                <partner.icon className={`w-6 h-6 ${partner.color}`} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                {partner.label}
              </h3>
              <div className="bg-white/5 rounded-lg p-3 mb-4">
                <p className="text-xs text-white/70 italic leading-relaxed">
                  {partner.example}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Star className={`w-4 h-4 ${partner.color}`} />
                <span className="text-sm text-text-muted">
                  {partner.commission}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-bold text-amber-400 uppercase tracking-wider">
                How it works
              </span>
            </div>
            <p className="text-text-muted mb-6 leading-relaxed">
              Add your partner businesses in the dashboard. Set their priority
              level. When a guest asks for recommendations, your partners appear
              first — before any marketplace results. You keep whatever
              commission you&apos;ve negotiated directly with them.
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
            >
              See Pro Plan
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
