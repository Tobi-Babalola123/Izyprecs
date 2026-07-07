"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, HardHat } from "lucide-react";
import {
  Building2,
  Wrench,
  ClipboardList,
  Home as HomeIcon,
  TrendingUp,
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

const NAV_LINKS = ["About", "Services", "Projects", "Team", "News", "Contact"];
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

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary shadow-2xl shadow-primary/30 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center shadow-md">
            <Building2 className="w-5 h-5 text-white" strokeWidth={2} />
          </div>
          <div className="leading-none">
            <div className="font-display text-xl text-white">Izyprecs</div>
            <div className="text-accent text-[9px] uppercase tracking-[0.22em]">
              Engineering Excellence
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-white/75 hover:text-accent text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-accent/85 transition-all duration-200 hover:shadow-lg hover:shadow-accent/30"
        >
          Request Consultation
          <ArrowRight className="w-3.5 h-3.5" />
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-primary/98 backdrop-blur-md px-6 pb-8 pt-3 border-t border-white/10"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-white/80 hover:text-accent py-3.5 border-b border-white/8 text-sm font-medium transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-5 block text-center bg-accent text-white text-sm font-semibold px-5 py-3.5 rounded-full hover:bg-accent/85 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Request Consultation
          </a>
        </motion.div>
      )}
    </header>
  );
}
