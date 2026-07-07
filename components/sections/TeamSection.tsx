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

const TEAM = [
  {
    name: "Engr. Ogbonnaya Israel",
    role: "Managing Director & CEO",
    isMD: true,
    img: "/images/ogbonnaya.png",
  },
  {
    name: "Onuegbu Nwabueze",
    role: "Procurement Manager - B.Sc ECONOMICS), LASU",
    img: "/images/onuegbu.png",
  },
  {
    name: "Gabriel Foluso Fadare",
    role: "HND , Quantity Survey Yabatech ,MBA . Financial Management LASU",
    img: "/images/gabriel.png",
  },
  {
    name: "Arc Adindu Arisa",
    role: "M.Sc (ARCH) UNIVERSITY OF NIGERIA ARCHITECT ",
    img: "/images/adindu.png",
  },
  {
    name: "Ogbonnaya David Ifeanyichukwu",
    role: "B.A (ENG/LITT) UNIBEN  M.A HUMAN RESOURCES MANAGEMENT (MIDDLESEX UNIVERSITY LONDON ACIPD) (GENERAL MANAGER) ",
    img: "/images/david.png",
  },
  {
    name: "Chisom Michael",
    role: "Director Marketing ",
    img: "/images/chisom.png",
  },
  {
    name: "Chijioke H Okeiyi",
    role: "Bsc Electrical Engineer",
    img: "/images/chijioke.png",
  },
  {
    name: "Chukwunyerem Ogbonnaya",
    role: "Director",
    img: "/images/Chukwunyerem.png",
  },
  {
    name: "Arc.Ufomba-Amaije Henry Obinna",
    role: "Project Director",
    img: "/images/ufomba.png",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <SectionPill>Our People</SectionPill>
          <SectionHeading>Leadership Team</SectionHeading>
          <div className="w-12 h-px bg-accent mx-auto mt-5 mb-7" />
          <p className="text-foreground/65 text-[14px] leading-relaxed">
            Led by professionals with decades of engineering and management
            expertise spanning Nigeria and internationally accredited
            programmes.
          </p>
        </FadeIn>

        <div className="flex flex-wrap justify-center gap-10">
          {TEAM.map(({ name, role, img, isMD }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group text-center"
              style={{ width: isMD ? 216 : 168 }}
            >
              <div
                className={`mx-auto mb-5 relative ${
                  isMD ? "w-36 h-36" : "w-28 h-28"
                }`}
              >
                <div
                  className={`w-full h-full rounded-full overflow-hidden border-4 transition-all duration-350 group-hover:scale-105 ${
                    isMD
                      ? "border-accent shadow-2xl shadow-accent/20 group-hover:shadow-accent/30"
                      : "border-white shadow-lg shadow-primary/12 group-hover:border-accent/60"
                  } bg-primary/10`}
                >
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {isMD && (
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-bold px-3.5 py-1 rounded-full whitespace-nowrap shadow-md">
                    Managing Director
                  </span>
                )}
              </div>
              <div className={`${isMD ? "mt-5" : "mt-3"}`}>
                <h4
                  className={`text-primary font-semibold leading-snug ${
                    isMD ? "text-[15px]" : "text-[13px]"
                  }`}
                >
                  {name}
                </h4>
                <p className="text-muted-foreground text-xs mt-1">{role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
