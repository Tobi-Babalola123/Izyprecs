"use client";

import {
  motion,
  fadeUp,
  staggerContainer,
  FadeIn,
  SectionHeading,
  SectionPill,
  GoldRule,
  Counter,
} from "@/components/motion/motion";

import {
  Building2,
  Wrench,
  ClipboardList,
  Home as HomeIcon,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Shield,
  Award,
  Zap,
  Clock,
  Star,
  ChevronRight,
  Send,
  Layers,
  Calendar,
} from "lucide-react";

export default function CTABannerSection() {
  return (
    <section className="py-28 bg-primary relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1764258777856-723351e71a17?w=1920&h=600&fit=crop&auto=format"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-12"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-primary/88" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <SectionPill>Get Started</SectionPill>
          <h2 className="font-display text-5xl md:text-6xl text-white leading-tight mb-7">
            Let's Build Something
            <br />
            <span className="text-accent italic">Extraordinary</span> Together
          </h2>
          <p className="text-white/60 text-lg mb-11 max-w-2xl mx-auto leading-relaxed">
            Whether you have a fully formed brief or just the seed of an idea,
            our team of engineers and architects is ready to bring your vision
            to life on time, on budget, and beyond expectation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-accent text-white font-semibold px-9 py-4 rounded-full hover:bg-accent/85 transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 text-sm"
            >
              Request Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+23412345678"
              className="inline-flex items-center gap-2.5 border-2 border-white/30 text-white font-semibold px-9 py-4 rounded-full hover:bg-white/10 hover:border-white/55 transition-all duration-300 hover:-translate-y-0.5 text-sm"
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
