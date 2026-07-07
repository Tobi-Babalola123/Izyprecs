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
  X,
  Clock,
  Star,
  ChevronRight,
  Send,
  Layers,
  Calendar,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import { useState } from "react";

const SERVICES = [
  {
    Icon: HomeIcon,
    title: "Residential Construction",
    desc: "Luxury homes, gated estates, and residential towers built to international comfort and safety standards.",
  },
  {
    Icon: Building2,
    title: "Commercial Construction",
    desc: "Corporate HQs, shopping complexes, and high-rise developments that redefine Nigerian skylines.",
  },
  {
    Icon: Layers,
    title: "Civil Engineering",
    desc: "Roads, bridges, dams, and large-scale infrastructure connecting communities and powering growth.",
  },
  {
    Icon: Wrench,
    title: "Renovation & Retrofit",
    desc: "Comprehensive refurbishment services breathing new life into existing structures with minimal disruption.",
  },
  {
    Icon: ClipboardList,
    title: "Project Management",
    desc: "End-to-end supervision with rigorous timeline control, budget discipline, and quality assurance.",
  },
  {
    Icon: TrendingUp,
    title: "Property Development",
    desc: "Strategic land acquisition, master planning, and profitable real estate development across key cities.",
  },
];

export default function FooterSection() {
  const [newsletter, setNewsletter] = useState("");

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <div className="leading-none">
                <div className="font-display text-xl">Izyprecs</div>
                <div className="text-accent text-[9px] uppercase tracking-[0.22em]">
                  Engineering Excellence
                </div>
              </div>
            </div>
            <p className="text-white/50 text-[13px] leading-relaxed mb-6">
              Nigeria's most trusted engineering and construction company.
              Building the future, one landmark at a time.
            </p>
            <div className="flex gap-2.5">
              {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social media"
                    className="w-9 h-9 border border-white/18 rounded-lg flex items-center justify-center text-white/50 hover:border-accent hover:text-accent transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold text-[11px] uppercase tracking-[0.18em] mb-5 text-white/80">
              Quick Links
            </h5>
            <ul className="space-y-3">
              {[
                "About Us",
                "Our Projects",
                "Careers",
                "Investor Relations",
                "Media Centre",
                "Contact Us",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/50 text-[13px] hover:text-accent transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-accent/40 group-hover:text-accent transition-colors flex-shrink-0" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-semibold text-[11px] uppercase tracking-[0.18em] mb-5 text-white/80">
              Our Services
            </h5>
            <ul className="space-y-3">
              {SERVICES.map(({ title }) => (
                <li key={title}>
                  <a
                    href="#services"
                    className="text-white/50 text-[13px] hover:text-accent transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-accent/40 group-hover:text-accent transition-colors flex-shrink-0" />
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Certifications */}
          <div>
            <h5 className="font-semibold text-[11px] uppercase tracking-[0.18em] mb-5 text-white/80">
              Stay Informed
            </h5>
            <p className="text-white/50 text-[13px] leading-relaxed mb-4">
              Industry insights, project updates, and company news delivered to
              your inbox.
            </p>
            <form
              className="flex gap-2 mb-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                value={newsletter}
                onChange={(e) => setNewsletter(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-white/8 border border-white/18 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-accent/60 transition-all min-w-0"
              />
              <button
                type="submit"
                className="bg-accent text-white px-4 py-2.5 rounded-xl hover:bg-accent/80 transition-colors flex-shrink-0"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="text-white/35 text-[10px] uppercase tracking-widest mb-3">
              Certifications
            </div>
            <div className="flex flex-wrap gap-2">
              {["ISO 9001", "ISO 45001", "COREN", "NIQS", "NIOB"].map(
                (cert) => (
                  <span
                    key={cert}
                    className="border border-white/18 text-white/50 text-[10px] px-2.5 py-1 rounded-full"
                  >
                    {cert}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-xs">
            © 2025 Izyprecs Engineering Limited. All rights reserved. RC No.
            789234
          </p>
          <div className="flex gap-5 text-white/35 text-xs">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:text-accent transition-colors"
                >
                  {link}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
