"use client";

import Image from "next/image";
import { motion } from "@/components/motion/motion";

const PARTNERS = [
  { name: "NNPC", logo: "/images/NNPC.png" },
  { name: "Julius Berger", logo: "/images/julius-berger.png" },
  { name: "Federal Ministry of Works", logo: "/images/cbn.png" },
  { name: "Dangote", logo: "/images/dangote.png" },
  { name: "CBN", logo: "/images/cbn.png" },
  { name: "Lagos State", logo: "/images/lagoss.png" },
  { name: "NIMASA", logo: "/images/nimasa.png" },
  { name: "Shell", logo: "/images/shell.png" },
  { name: "Access Bank", logo: "/images/access.png" },
  { name: "BUA", logo: "/images/Bua.jpeg" },
];

const doubled = [...PARTNERS, ...PARTNERS];

export default function TrustedBySection() {
  return (
    <section className="overflow-hidden border-y border-border bg-white py-16">
      <p className="mb-12 px-6 text-center text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
        Trusted by government agencies and industry leaders across Nigeria
      </p>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <motion.div
          className="flex w-max items-center gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {doubled.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="group flex h-28 shrink-0 items-center justify-center px-4"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="
          h-20
          w-auto
          object-contain
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:-translate-y-1
          group-hover:drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]
        "
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
