"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

import { AnimatePresence } from "framer-motion";
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

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "150+", label: "Projects Completed" },
  { value: "500+", label: "Skilled Workforce" },
  { value: "95%", label: "Client Satisfaction" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Background image with overlay */}
      <img
        src="https://images.unsplash.com/photo-1776333089634-8caadaa98359?w=1920&h=1080&fit=crop&auto=format"
        alt="Construction cranes over a modern city skyline"
        className="absolute inset-0 w-full h-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/35 text-accent text-[11px] font-semibold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-7">
              <HardHat className="w-3.5 h-3.5" />
              Nigeria's Premier Engineering Firm
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-display text-5xl md:text-6xl lg:text-[4.5rem] text-white leading-[1.05] mb-7"
          >
            Building Nigeria's Future
            <br />
            with <span className="text-accent italic">Engineering</span>{" "}
            Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.52 }}
            className="text-white/65 text-lg md:text-xl leading-relaxed max-w-2xl mb-11"
          >
            For over two decades, Izyprecs has delivered landmark
            infrastructure, commercial developments, and residential estates
            across 15 states engineering the nation's tomorrow, one project at a
            time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.68 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 bg-accent text-white font-semibold px-8 py-4 rounded-full hover:bg-accent/85 transition-all duration-300 hover:shadow-xl hover:shadow-accent/35 hover:-translate-y-0.5 text-sm"
            >
              View Our Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 border-2 border-white/35 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/65 transition-all duration-300 hover:-translate-y-0.5 text-sm"
            >
              Request Consultation
            </a>
          </motion.div>
        </div>

        {/* Floating stat cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="hidden xl:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-4"
        >
          {[
            { val: "20+", label: "Years" },
            { val: "300+", label: "Projects" },
            { val: "15", label: "States" },
          ].map(({ val, label }) => (
            <div
              key={label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-7 py-5 text-center"
            >
              <div className="font-display text-3xl text-accent leading-none">
                {val}
              </div>
              <div className="text-white/60 text-xs mt-1 uppercase tracking-widest">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.25em]">
          Scroll
        </span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            repeatDelay: 0.4,
            ease: "easeInOut",
          }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </section>
  );
}
