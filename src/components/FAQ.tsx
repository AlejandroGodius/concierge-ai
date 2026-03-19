"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How is this really free? What's the catch?",
    a: "No catch. We earn a commission from Viator when your guests book tours and activities through the concierge. We share part of that commission with you (3%). It's a win-win — your guests get great recommendations, you earn passive income, and we earn from the marketplace. Nobody pays anything upfront.",
  },
  {
    q: "What do I need to get started?",
    a: "Just your property name, location, and a WhatsApp number. That's it. No PMS integration, no IT department, no technical setup. We generate a QR code and link that you place at reception or share with guests. The AI auto-populates activities based on your location.",
  },
  {
    q: "How does the commission work?",
    a: "When a guest books an activity through your concierge (via Viator), the booking generates an 8% affiliate commission. On the Free plan, you receive 3% and we keep 5%. On the Pro plan, you receive 5% and we keep 3%. Commission is paid after the guest completes the activity (not at booking time), and cancelled bookings don't generate commission.",
  },
  {
    q: "What languages does the concierge speak?",
    a: "Over 30 languages, automatically. The AI detects the guest's language and responds accordingly. German, French, Japanese, Russian, Arabic, Chinese, Portuguese, Italian — whatever your guests speak, the concierge handles it natively.",
  },
  {
    q: "What if a guest asks something the AI doesn't know?",
    a: "The concierge is focused on recommending experiences, tours, restaurants, and activities. For hotel-specific questions (Wi-Fi password, checkout time, room issues), it will politely direct the guest to contact reception. It never invents information.",
  },
  {
    q: "Can I add my own recommended restaurants and tours?",
    a: "Yes! On the Pro plan (€49/month), you can add your own partner businesses — restaurants, tour operators, transfer services, anything. These appear as priority recommendations before marketplace results. You keep whatever commission you've negotiated directly with those partners.",
  },
  {
    q: "Is guest data safe?",
    a: "Absolutely. We're GDPR compliant. Guest conversations are encrypted and never sold to third parties. We only use anonymized, aggregated data to improve recommendations. Each property's data is completely isolated.",
  },
  {
    q: "Can I try it before giving it to guests?",
    a: "Of course. After signing up, you get a personal test link to chat with your concierge yourself. Try asking it anything — test different languages, ask for activities, see how it responds. Only share the QR with guests when you're satisfied.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 relative">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-4 px-4 py-2 rounded-full glass">
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mb-5">
            <span className="text-white">Common </span>
            <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-sm font-semibold text-white pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-text-muted shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 text-sm text-text-muted leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
