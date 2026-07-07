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

const STATS = [
  { value: 20, suffix: "+", label: "Years of Excellence" },
  { value: 300, suffix: "+", label: "Projects Completed" },
  { value: 120, suffix: "+", label: "Satisfied Clients" },
  { value: 15, suffix: "", label: "States Served" },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1764258777856-723351e71a17?w=1920&h=400&fit=crop&auto=format"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 lg:divide-x divide-white/20">
          {STATS.map(({ value, suffix, label }) => (
            <div key={label} className="text-center py-4">
              <div className="font-display text-5xl md:text-6xl text-white leading-none mb-3">
                <Counter target={value} suffix={suffix} />
              </div>
              <div className="text-white/70 text-[11px] font-semibold uppercase tracking-[0.2em]">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
