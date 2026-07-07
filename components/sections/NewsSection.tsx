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

const NEWS_ITEMS = [
  {
    title: "Izyprecs Wins ₦12B Kano State Highway Contract",
    category: "Company News",
    date: "June 18, 2025",
    excerpt:
      "Our civil engineering division has secured a landmark highway development contract spanning 45 kilometres across Kano State — the largest single award in our history.",
    img: "/images/kano.webp",
  },
  {
    title: "BIM Adoption Cuts Project Delays by 40%",
    category: "Innovation",
    date: "May 30, 2025",
    excerpt:
      "Deploying Building Information Modelling across our entire project portfolio has dramatically improved site coordination and reduced costly rework industry-wide.",
    img: "https://images.unsplash.com/photo-1634250878836-0d4618ae41d3?w=700&h=450&fit=crop&auto=format",
  },
  {
    title: "ISO 45001 Safety Certification Renewed for Third Year",
    category: "Safety & Compliance",
    date: "April 12, 2025",
    excerpt:
      "Our safety management system has earned a third consecutive ISO 45001 certification with a commendation for our zero-harm culture across all active construction sites.",
    img: "/images/engii.jpg",
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <SectionPill>Latest Updates</SectionPill>
            <SectionHeading>News & Insights</SectionHeading>
            <GoldRule />
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:text-accent transition-colors group pb-2"
          >
            All articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </FadeIn>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {NEWS_ITEMS.map(({ title, category, date, excerpt, img }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              className="group bg-white rounded-2xl overflow-hidden border border-border hover:shadow-2xl hover:shadow-primary/7 hover:-translate-y-2 transition-all duration-350 cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden bg-primary/10">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3.5">
                  <span className="bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {category}
                  </span>
                  <span className="text-muted-foreground text-xs">{date}</span>
                </div>
                <h3 className="text-primary font-semibold text-[15px] leading-snug mb-3 group-hover:text-accent/85 transition-colors line-clamp-2">
                  {title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3 mb-5">
                  {excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold group-hover:gap-3 transition-all duration-200">
                  Read more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
