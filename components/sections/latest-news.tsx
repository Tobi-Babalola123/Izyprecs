"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal, StaggerGroup, staggerItem } from "@/components/motion/reveal";
import { motion } from "framer-motion";

const articles = [
  {
    image: "/images/news-1.png",
    category: "Company News",
    date: "March 12, 2024",
    title: "Greylink breaks ground on ₦25B mixed-use development in Abuja",
  },
  {
    image: "/images/news-2.png",
    category: "Infrastructure",
    date: "February 28, 2024",
    title: "How modern equipment is accelerating road delivery across Nigeria",
  },
  {
    image: "/images/buid.jpg",
    category: "Engineering",
    date: "January 15, 2024",
    title: "Inside our design studio: engineering smarter, greener buildings",
  },
];

export function LatestNews() {
  return (
    <section id="news" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              Latest News
            </span>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-primary text-balance sm:text-4xl lg:text-5xl">
              Insights &amp; company updates
            </h2>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary"
          >
            View all articles
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {articles.map((a) => (
            <motion.article
              key={a.title}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  {a.category}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {a.date}
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-primary text-pretty">
                  {a.title}
                </h3>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary"
                >
                  Read More
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
