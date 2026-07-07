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

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <SectionPill>What We Build</SectionPill>
          <SectionHeading>Comprehensive Construction Services</SectionHeading>
          <GoldRule center />
          <p className="text-foreground/65 leading-relaxed text-[15px]">
            From single-family residences to national highway networks, our
            multidisciplinary team delivers every scope with the same
            uncompromising standard of excellence.
          </p>
        </FadeIn>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {SERVICES.map(({ Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group bg-background rounded-2xl p-8 border border-border hover:border-accent/30 hover:shadow-2xl hover:shadow-primary/6 hover:-translate-y-2 transition-all duration-350 cursor-pointer"
            >
              <div className="w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/12 transition-colors duration-300">
                <Icon
                  className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-primary font-semibold text-[17px] mb-3 leading-snug">
                {title}
              </h3>
              <p className="text-muted-foreground text-[13px] leading-relaxed mb-5">
                {desc}
              </p>
              <span className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
