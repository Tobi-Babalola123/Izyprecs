"use client";

import Image from "next/image";
import { ArrowRight, Target, Eye, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    body: "To deliver world-class infrastructure that empowers communities and drives economic growth across Nigeria.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    body: "To be West Africa’s most trusted and innovative construction partner by 2030.",
  },
  {
    icon: ShieldCheck,
    title: "Core Values",
    body: "Integrity, safety, engineering precision and an unwavering commitment to quality.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        {/* Image */}
        <Reveal direction="right">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-primary/20">
              <Image
                src="/images/engg.jpg"
                alt="Greylink engineers reviewing project blueprints on site"
                width={720}
                height={820}
                className="h-[520px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-secondary px-8 py-6 text-secondary-foreground shadow-xl sm:block">
              <div className="font-serif text-4xl">20+</div>
              <div className="text-sm">Years of excellence</div>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              About Greylink
            </span>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-primary text-balance sm:text-4xl lg:text-5xl">
              Engineering trust into every structure we build
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Founded in 2004, Greylink Construction Nigeria Limited has grown
              into one of the nation&apos;s most respected contractors. From
              high-rise developments to critical road and industrial
              infrastructure, we pair rigorous engineering with disciplined
              project management to deliver on our promises.
            </p>
          </Reveal>

          <div className="mt-8 space-y-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.1 * i}>
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-secondary">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-primary">{v.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {v.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <a
              href="#services"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
