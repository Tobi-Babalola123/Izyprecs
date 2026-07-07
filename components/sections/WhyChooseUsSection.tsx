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

const FEATURES = [
  {
    Icon: Shield,
    title: "Safety First",
    desc: "ISO 45001-certified safety management across all active sites. Zero-harm culture, no exceptions.",
  },
  {
    Icon: Award,
    title: "Certified Quality",
    desc: "ISO 9001:2015 quality management ensuring every deliverable meets international benchmarks.",
  },
  {
    Icon: Zap,
    title: "Innovation-Led",
    desc: "BIM technology, drone surveying, and AI-assisted scheduling for smarter, faster outcomes.",
  },
  {
    Icon: Clock,
    title: "On-Time Delivery",
    desc: "97.4% on-time project completion rate over the last decade, backed by contractual guarantees.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-28 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/4 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/2 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <SectionPill>Our Differentiators</SectionPill>
          <SectionHeading light>Why Industry Leaders Choose Us</SectionHeading>
          <div className="w-12 h-px bg-accent mx-auto mt-5 mb-7" />
          <p className="text-white/55 leading-relaxed text-[15px]">
            Two decades of consistent delivery have earned Izyprecs the trust of
            federal agencies, multinationals, and Nigeria's most discerning
            private developers.
          </p>
        </FadeIn>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {FEATURES.map(({ Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-accent/30 hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-accent/18 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/28 transition-colors">
                <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-semibold text-[17px] mb-3">
                {title}
              </h3>
              <p className="text-white/50 text-[13px] leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
