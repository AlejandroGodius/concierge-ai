"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Utensils,
  Sailboat,
  Camera,
  Check,
  ChevronRight,
} from "lucide-react";

interface Message {
  from: "guest" | "bot";
  text: string;
  delay: number;
}

const scenarios = [
  {
    id: "activities",
    label: "Tours & Activities",
    icon: MapPin,
    color: "text-emerald-400",
    messages: [
      {
        from: "guest" as const,
        text: "Hi! What activities do you recommend around here?",
        delay: 0,
      },
      {
        from: "bot" as const,
        text: "Great question! Based on your location, here are the top experiences:\n\n🚤 Sunset Catamaran Cruise — €89\n⭐ 4.8 (2,340 reviews)\n\n🏔️ Hidden Coves Kayak Tour — €55\n⭐ 4.9 (1,120 reviews)\n\n🎶 Old Town Food & Wine Walk — €65\n⭐ 4.7 (890 reviews)\n\nWant details on any of these? I can check availability for your dates!",
        delay: 1500,
      },
      {
        from: "guest" as const,
        text: "The catamaran sounds amazing! Is it available tomorrow?",
        delay: 3000,
      },
      {
        from: "bot" as const,
        text: "Checking availability... ✅\n\nSunset Catamaran Cruise\n📅 Tomorrow, 5:30 PM\n👥 Spots available: 8\n💰 €89 per person\n🥂 Includes drinks & snacks\n\nShall I book it for you? Just tap the link below 👇",
        delay: 4500,
      },
    ],
  },
  {
    id: "restaurants",
    label: "Restaurants",
    icon: Utensils,
    color: "text-orange-400",
    messages: [
      {
        from: "guest" as const,
        text: "Can you recommend a good restaurant for dinner tonight? We love seafood",
        delay: 0,
      },
      {
        from: "bot" as const,
        text: "I'd love to help! Here are the best seafood spots nearby:\n\n🐟 La Marina — Fresh catch, sea views\n📍 5 min walk | 💰 €€€\n⭐ 4.8 on Google\n\n🦐 Porto Viejo — Traditional paella\n📍 10 min walk | 💰 €€\n⭐ 4.6 on Google\n\n🐙 El Chiringuito — Beach dining\n📍 8 min walk | 💰 €€\n⭐ 4.7 on Google\n\nWant me to help you reserve a table?",
        delay: 1500,
      },
      {
        from: "guest" as const,
        text: "La Marina sounds perfect! Table for 2 at 8pm?",
        delay: 3000,
      },
      {
        from: "bot" as const,
        text: "I'll send you the direct link to reserve at La Marina for tonight at 8pm, table for 2. 🍽️\n\nPro tip: Ask for a window seat — the sunset view is incredible! 🌅",
        delay: 4500,
      },
    ],
  },
  {
    id: "boats",
    label: "Boat Trips",
    icon: Sailboat,
    color: "text-cyan-400",
    messages: [
      {
        from: "guest" as const,
        text: "We want to rent a boat for the day. What options do you have?",
        delay: 0,
      },
      {
        from: "bot" as const,
        text: "Perfect day for it! Here are the best options:\n\n⛵ Private Sailboat (4-6 pax)\n⏰ Full day (10am-6pm)\n💰 €350 | Captain included\n⭐ 4.9 (560 reviews)\n\n🚤 Speed Boat Tour (up to 8 pax)\n⏰ Half day (10am-2pm)\n💰 €180 | With snorkeling gear\n⭐ 4.7 (340 reviews)\n\n🛥️ Luxury Yacht Experience\n⏰ Full day with lunch\n💰 €890 | All inclusive\n⭐ 5.0 (120 reviews)\n\nWhich one catches your eye?",
        delay: 1500,
      },
      {
        from: "guest" as const,
        text: "The sailboat! Is it available this Saturday?",
        delay: 3000,
      },
      {
        from: "bot" as const,
        text: "Let me check... ✅ Available!\n\nPrivate Sailboat\n📅 Saturday, 10:00 AM - 6:00 PM\n👥 Up to 6 people\n💰 €350 total (not per person!)\n🧊 Cooler & snorkeling included\n\nReady to book? Here's your link 👇",
        delay: 4500,
      },
    ],
  },
  {
    id: "culture",
    label: "Culture & Sights",
    icon: Camera,
    color: "text-purple-400",
    messages: [
      {
        from: "guest" as const,
        text: "Hola! Qué museos o sitios culturales me recomiendas?",
        delay: 0,
      },
      {
        from: "bot" as const,
        text: "¡Hola! Tienes opciones increíbles cerca:\n\n🏛️ Museo de Arte Contemporáneo\n📍 15 min a pie | 💰 €12\n⭐ 4.6 (2,100 reseñas)\n🎟️ Sin colas con entrada anticipada\n\n🏰 Tour Guiado del Casco Antiguo\n📍 Sale del centro | 💰 €25\n⭐ 4.9 (780 reseñas)\n⏰ 3 horas, incluye tapas\n\n🎨 Taller de Cerámica Local\n📍 20 min en bus | 💰 €45\n⭐ 4.8 (320 reseñas)\n🏺 Te llevas tu pieza\n\n¿Quieres que reserve alguno?",
        delay: 1500,
      },
      {
        from: "guest" as const,
        text: "El tour del casco antiguo! Somos 3 personas para mañana",
        delay: 3000,
      },
      {
        from: "bot" as const,
        text: "¡Comprobando disponibilidad! ✅\n\nTour Guiado del Casco Antiguo\n📅 Mañana, 10:30 AM\n👥 3 personas\n💰 €75 total (€25/persona)\n🥘 Incluye 3 paradas de tapas\n🗣️ Disponible en español\n\nAquí tienes el enlace para reservar 👇",
        delay: 4500,
      },
    ],
  },
];

export default function ChatDemo() {
  const [active, setActive] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<number>(0);

  const currentScenario = scenarios[active];

  useEffect(() => {
    setVisibleMessages(0);
    const timers: ReturnType<typeof setTimeout>[] = [];

    currentScenario.messages.forEach((msg, i) => {
      timers.push(
        setTimeout(() => {
          setVisibleMessages(i + 1);
        }, msg.delay + 500)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, [active, currentScenario.messages]);

  return (
    <section id="demo" className="py-28 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-4 px-4 py-2 rounded-full glass">
            Live Demo
          </span>
          <h2 className="text-4xl sm:text-6xl font-black mb-5">
            <span className="text-white">See Your </span>
            <span className="gradient-text">Concierge in Action</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Real conversations your guests will have. In any language, 24/7.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8 max-w-5xl mx-auto">
          {/* Scenario tabs */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {scenarios.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-medium transition-all whitespace-nowrap ${
                  active === i
                    ? "bg-white/10 text-white border border-white/10"
                    : "text-white/50 hover:text-white/80 hover:bg-white/5"
                }`}
              >
                <s.icon className={`w-4 h-4 ${active === i ? s.color : ""}`} />
                {s.label}
                {active === i && (
                  <ChevronRight className="w-4 h-4 ml-auto hidden lg:block" />
                )}
              </button>
            ))}
          </div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-[400px]"
          >
            <div className="rounded-[2rem] border border-white/10 bg-[#0b141a] p-1 shadow-2xl shadow-primary/10">
              {/* Phone header */}
              <div className="rounded-t-[1.8rem] bg-[#1f2c34] px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold">
                  AI
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    Hotel Concierge
                  </div>
                  <div className="text-xs text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Online
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="h-[480px] overflow-y-auto p-4 space-y-3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-3"
                  >
                    {currentScenario.messages
                      .slice(0, visibleMessages)
                      .map((msg, i) => (
                        <motion.div
                          key={`${active}-${i}`}
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className={`flex ${msg.from === "guest" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[85%] px-3 py-2 text-[13px] leading-relaxed whitespace-pre-line ${
                              msg.from === "guest"
                                ? "wa-bubble-guest text-white"
                                : "wa-bubble-bot text-white/90"
                            }`}
                          >
                            {msg.text}
                          </div>
                        </motion.div>
                      ))}

                    {visibleMessages > 0 &&
                      visibleMessages < currentScenario.messages.length && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex justify-start"
                        >
                          <div className="wa-bubble-bot px-4 py-3">
                            <div className="flex gap-1">
                              <span className="w-2 h-2 rounded-full bg-white/30 animate-bounce" />
                              <span
                                className="w-2 h-2 rounded-full bg-white/30 animate-bounce"
                                style={{ animationDelay: "0.1s" }}
                              />
                              <span
                                className="w-2 h-2 rounded-full bg-white/30 animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}

                    {visibleMessages === currentScenario.messages.length && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-start"
                      >
                        <div className="wa-bubble-bot px-3 py-2">
                          <div className="flex items-center gap-2 px-3 py-2 bg-primary/20 rounded-lg cursor-pointer hover:bg-primary/30 transition-colors">
                            <Check className="w-4 h-4 text-primary-light" />
                            <span className="text-xs font-medium text-primary-light">
                              Book Now →
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Input bar */}
              <div className="rounded-b-[1.8rem] bg-[#1f2c34] px-4 py-3 flex items-center gap-3">
                <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 text-xs text-white/30">
                  Type a message...
                </div>
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
