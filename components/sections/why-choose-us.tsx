"use client";

import {
  Users,
  BadgeCheck,
  Truck,
  Award,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { Reveal, StaggerGroup, staggerItem } from "@/components/motion/reveal";
import { motion } from "framer-motion";

const features = [
  {
    icon: Users,
    title: "Experienced Engineers",
    body: "A multidisciplinary team with decades of combined field expertise.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Professionals",
    body: "COREN-registered engineers and internationally accredited specialists.",
  },
  {
    icon: Truck,
    title: "Modern Equipment",
    body: "A fully-owned fleet of advanced machinery for maximum efficiency.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    body: "Rigorous QA/QC protocols on every phase of every project.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    body: "A proven record of completing landmark projects on schedule.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    body: "Industry-leading HSE standards protecting our people and clients.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            Why Choose Us
          </span>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-primary text-balance sm:text-4xl lg:text-5xl">
            The Greylink advantage
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Clients partner with us because we combine technical mastery with
            total accountability delivering results that endure.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={staggerItem}
              className="group flex gap-5 rounded-2xl border border-border bg-card p-7 transition-colors hover:border-secondary/40"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                <f.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-primary">
                  {f.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
