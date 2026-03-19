"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, Globe } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const links = [
    { label: t("nav.howItWorks"), href: "#how-it-works" },
    { label: t("nav.demo"), href: "#demo" },
    { label: t("nav.pricing"), href: "#pricing" },
    { label: t("nav.faq"), href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white">AI Concierge</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}

            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white/70 hover:text-white rounded-full glass transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              {lang === "en" ? "ES" : "EN"}
            </button>

            <a
              href="#pricing"
              className="px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-primary to-accent text-white hover:scale-105 transition-transform"
            >
              {t("nav.cta")}
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-white/70"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-white/70 hover:text-white py-2"
                >
                  {l.label}
                </a>
              ))}
              <button
                onClick={() => { setLang(lang === "en" ? "es" : "en"); setOpen(false); }}
                className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white py-2"
              >
                <Globe className="w-4 h-4" />
                {lang === "en" ? "Español" : "English"}
              </button>
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="block text-center px-5 py-3 text-sm font-semibold rounded-full bg-gradient-to-r from-primary to-accent text-white"
              >
                {t("nav.cta")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
