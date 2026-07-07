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

const TIMELINE_STEPS = [
  {
    num: "01",
    title: "Planning",
    desc: "Site surveys, feasibility studies, and detailed project scoping with stakeholder briefings.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Architectural blueprints, structural drawings, and full BIM 3D modelling.",
  },
  {
    num: "03",
    title: "Construction",
    desc: "Ground-breaking through structural completion with daily live reporting dashboards...",
  },
  {
    num: "04",
    title: "Inspection",
    desc: "Rigorous QA/QC checks, regulatory compliance reviews, and third-party safety audits..",
  },
  {
    num: "05",
    title: "Delivery",
    desc: "Client walkthrough, full handover documentation, defects liability, and aftercare...",
  },
];

export default function TimelineSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-20">
          <SectionPill>How We Work</SectionPill>
          <SectionHeading>Our Construction Process</SectionHeading>
          <div className="w-12 h-px bg-accent mx-auto mt-5" />
        </FadeIn>

        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-border" />
          <motion.div
            className="hidden lg:block absolute top-8 left-[10%] h-px bg-accent origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            style={{ width: "80%" }}
          />

          <div className="grid lg:grid-cols-5 gap-8">
            {TIMELINE_STEPS.map(({ num, title, desc }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.3 + i * 0.14 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-5 relative z-10 shadow-lg shadow-primary/18 flex-shrink-0">
                  <span className="font-display text-accent text-lg leading-none">
                    {num}
                  </span>
                </div>
                <h4 className="text-primary font-semibold text-[15px] mb-2.5">
                  {title}
                </h4>
                <p className="text-muted-foreground text-xs leading-relaxed px-1">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
