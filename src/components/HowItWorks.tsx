"use client";

import { motion } from "framer-motion";
import { QrCode, MessageCircle, Wallet } from "lucide-react";

const steps = [
  {
    icon: QrCode,
    number: "01",
    title: "Sign Up & Get Your QR",
    description:
      "Create your account in 2 minutes. We generate a WhatsApp QR code and link for your property. Place it at reception, in rooms, or share it digitally.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: MessageCircle,
    number: "02",
    title: "Guests Chat with AI",
    description:
      "Guests scan the QR and instantly chat with your AI concierge on WhatsApp. It recommends tours, restaurants, activities — in 30+ languages, 24/7.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Wallet,
    number: "03",
    title: "You Earn Commission",
    description:
      "When guests book an experience through the concierge, you earn 3% commission automatically. No effort, no follow-up, just passive income.",
    color: "from-amber-500 to-orange-500",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-4 px-4 py-2 rounded-full glass">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-6xl font-black mb-5">
            <span className="text-white">Live in </span>
            <span className="gradient-text">5 Minutes</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            No integrations. No technical setup. No monthly fees. Just a QR code
            and an AI that works.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector lines (desktop) */}
          <div className="hidden md:block absolute top-20 left-[20%] right-[20%] h-px border-t-2 border-dashed border-white/10" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: "spring" }}
              className="relative text-center"
            >
              <div className="relative inline-flex mb-6">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                >
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-surface-card border border-white/10 flex items-center justify-center text-xs font-bold text-white">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
