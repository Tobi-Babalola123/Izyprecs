"use client";

import { useState } from "react";
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

export default function AboutSection() {
  return (
    <section id="about" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <FadeIn>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-primary/10">
                <img
                  src="/images/engineer.jpg"
                  alt="Izyprecs engineers reviewing construction blueprints on site"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* 20+ badge */}
              <div className="absolute -bottom-7 -right-7 bg-primary text-white rounded-2xl p-7 shadow-2xl shadow-primary/25">
                <div className="font-display text-5xl text-accent leading-none">
                  20+
                </div>
                <div className="text-white/65 text-xs mt-1.5 leading-snug">
                  Years of
                  <br />
                  Excellence
                </div>
              </div>
              {/* Decorative corner frame */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-accent/25 rounded-2xl -z-10" />
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn delay={0.15}>
            <SectionPill>Who We Are</SectionPill>
            <SectionHeading>
              Nigeria's Most Trusted Engineering Partner
            </SectionHeading>
            <GoldRule />
            <p className="text-foreground/65 leading-relaxed mb-9 text-[15px]">
              Founded in 2004, Izyprecs has grown from a regional contractor
              into one of Nigeria's foremost engineering and construction
              conglomerates. We combine deep local expertise with international
              best practices to deliver projects that stand the test of time.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-9">
              {[
                {
                  heading: "Our Mission",
                  body: "To build the infrastructure that powers Nigeria's economic growth — safely, sustainably, and on time.",
                },
                {
                  heading: "Our Vision",
                  body: "To be Africa's most respected construction company by 2030, setting the standard for engineering excellence.",
                },
                {
                  heading: "Core Values",
                  body: "Integrity · Safety · Excellence · Innovation · Sustainability",
                },
              ].map(({ heading, body }) => (
                <div
                  key={heading}
                  className="bg-white rounded-xl p-5 border border-border shadow-sm"
                >
                  <div className="w-6 h-px bg-accent mb-3" />
                  <h4 className="text-primary font-semibold text-sm mb-2">
                    {heading}
                  </h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {body}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-accent transition-colors duration-200 group"
            >
              Partner with us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
