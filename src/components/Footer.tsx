"use client";

import { MessageCircle } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">AI Concierge</span>
            </div>
            <p className="text-sm text-text-muted max-w-sm leading-relaxed">{t("footer.desc")}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t("footer.product")}</h4>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="text-sm text-text-muted hover:text-white transition-colors">{t("nav.howItWorks")}</a></li>
              <li><a href="#demo" className="text-sm text-text-muted hover:text-white transition-colors">{t("nav.demo")}</a></li>
              <li><a href="#pricing" className="text-sm text-text-muted hover:text-white transition-colors">{t("nav.pricing")}</a></li>
              <li><a href="#faq" className="text-sm text-text-muted hover:text-white transition-colors">{t("nav.faq")}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t("footer.legal")}</h4>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-sm text-text-muted hover:text-white transition-colors">{t("footer.privacy")}</a></li>
              <li><a href="/terms" className="text-sm text-text-muted hover:text-white transition-colors">{t("footer.terms")}</a></li>
              <li><a href="/gdpr" className="text-sm text-text-muted hover:text-white transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-text-muted">&copy; {new Date().getFullYear()} {t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
