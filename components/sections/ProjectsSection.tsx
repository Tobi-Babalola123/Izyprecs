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

const PROJECTS = [
  {
    title: "Multi Purpose Office Complex ,",
    category: "Commercial Construction",
    location: "Gudu , Abuja",
    year: "2023",
    area: "48,500 m²",
    desc: "A modern multi-purpose commercial complex in Gudu, Abuja, designed to accommodate offices, retail spaces, and business services. The development combines contemporary architecture, durable construction, and efficient space planning to support the area's growing commercial district.",
    img: "/images/multipurpose.png",
  },
  {
    title: "Residential appartment",
    category: "Residential Construction",
    location: "Ijesha- tedo , Lagos",
    year: "2022",
    area: "62 km stretch",
    desc: "A high-quality residential apartment project in Ijeshatedo, Lagos, developed with a focus on modern design, structural integrity, and exceptional craftsmanship to provide residents with a safe, comfortable, and contemporary living experience.",
    img: "/images/residential.png",
  },
  {
    title: "Private Chapel",
    category: "Religious Construction",
    location: "Imo State",
    year: "2024",
    area: "12,000 m²",
    desc: "A purpose-built private chapel in Imo State, thoughtfully designed to provide a serene worship environment through timeless architecture, quality craftsmanship, and carefully detailed interior and exterior finishes.",
    img: "/images/private-chapel_.png",
  },
];

const GALLERY = [
  "/images/catholic.png",
  "/images/communityhall.png",
  "/images/diamond.png",
  "/images/ecobank.png",
  "/images/formeroceanicbank.png",
  "/images/interiror.png",
  "/images/interiorecobank.png",
  "/images/multipurpose.png",
  "/images/oceanicbank.png",
  "/images/officecomplex.png",
  "/images/onelove.png",
  "/images/pool.png",
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="mb-16">
          <SectionPill>Our Work</SectionPill>
          <SectionHeading>Featured Projects</SectionHeading>
          <GoldRule />
        </FadeIn>

        <div className="space-y-24">
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.title}>
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative group ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-primary/10">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <span className="absolute top-5 left-5 bg-accent text-white text-[11px] font-semibold px-4 py-1.5 rounded-full shadow-md">
                    {project.category}
                  </span>
                </div>

                {/* Text */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex flex-wrap gap-5 mb-6 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-accent" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-accent" />
                      {project.year}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-accent" />
                      {project.area}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl text-primary mb-5 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-foreground/65 leading-relaxed text-[15px] mb-8">
                    {project.desc}
                  </p>
                  <button className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold px-7 py-3.5 rounded-full hover:bg-primary hover:text-white transition-all duration-300 text-sm group">
                    View Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        {/* Project Gallery */}

        <div className="mt-32">
          <FadeIn className="text-center mb-14">
            <SectionPill>Project Gallery</SectionPill>

            <SectionHeading className="mb-4">
              More Projects We've Delivered
            </SectionHeading>

            <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
              From commercial towers and residential developments to highways,
              industrial facilities and public infrastructure, our portfolio
              spans more than two decades of engineering excellence across
              Nigeria.
            </p>
          </FadeIn>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY.map((image, index) => (
              <FadeIn key={index} delay={index * 0.04}>
                <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer">
                  <img
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div className="absolute bottom-5 left-5 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-white font-medium text-sm">
                      View Project
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-14 flex justify-center">
            <button className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-white font-semibold transition-all duration-300 hover:bg-primary/90 hover:-translate-y-1">
              Explore All 27 Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
