"use client";

import { motion } from "framer-motion";

const partners = [
  {
    name: "Federal Ministry of Works",
    logo: "/images/coatofarms.png",
  },
  { name: "Dangote Group", logo: "/images/dangote.png" },
  { name: "NNPC Limited", logo: "/images/NNPC.png" },
  { name: "Lagos State Govt", logo: "/images/lagoss.png" },
  { name: "GTBank", logo: "/images/gtbank.png" },
  { name: "Shell Nigeria", logo: "/images/shell.png" },
  { name: "Nigerite Ltd", logo: "/images/nigerite.png" },
  { name: "PZ Cussons", logo: "/images/pz.png" },
];

export function TrustedBy() {
  const row = [...partners, ...partners]; // duplicate for continuous sliding effect

  return (
    <section id="trusted" className="border-y border-border bg-card py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Trusted by government agencies, developers & industry leaders
        </p>
      </div>

      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <motion.div
          className="flex w-max gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            duration: 30,
          }}
        >
          {row.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex items-center justify-center"
            >
              <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-lg p-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-full w-full object-contain  transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
