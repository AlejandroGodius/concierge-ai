"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ChatDemo from "@/components/ChatDemo";
import Features from "@/components/Features";
import Impact from "@/components/Impact";
import PromotePartners from "@/components/PromotePartners";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-20">
        <Hero />
        <HowItWorks />
        <ChatDemo />
        <Features />
        <Impact />
        <PromotePartners />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
