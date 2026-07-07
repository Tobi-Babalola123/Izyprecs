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

const TESTIMONIALS = [
  {
    name: "Engr. Emeka Okonkwo",
    role: "Director General",
    company: "FCDA Abuja",
    quote:
      "Izyprecs delivered the Ring Road project on time and within budget. Their engineering precision and project management capability are genuinely world-class.",
    img: "/images/client-1.png",
  },
  {
    name: "Mrs. Amaka Nwosu",
    role: "Chief Executive Officer",
    company: "Greenfield Property Holdings",
    quote:
      "The finish quality on our Lekki development exceeded every expectation. Our buyers are delighted and we have already commissioned two additional phases.",
    img: "/images/client-2.png",
  },
  {
    name: "Mr. Bola Adeleke",
    role: "VP Operations",
    company: "TechHub Nigeria Ltd",
    quote:
      "From concept to keys-in-hand, Izyprecs was professional, communicative, and deeply committed to quality at every single stage of the process.",
    img: "/images/client-3.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <SectionPill>Client Voices</SectionPill>
          <SectionHeading>What Our Clients Say</SectionHeading>
          <GoldRule center />
        </FadeIn>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {TESTIMONIALS.map(({ name, role, company, quote, img }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 border border-border hover:shadow-2xl hover:shadow-primary/7 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <div className="font-display text-7xl text-accent/15 leading-none -mt-3 mb-2 select-none">
                "
              </div>
              <p className="text-foreground/70 leading-relaxed text-[14px] mb-7">
                {quote}
              </p>
              <div className="flex items-center gap-3.5 pt-5 border-t border-border">
                <img
                  src={img}
                  alt={name}
                  className="w-10 h-10 rounded-full object-cover bg-primary/10 flex-shrink-0"
                />
                <div>
                  <div className="text-primary font-semibold text-sm">
                    {name}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {role}, {company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
