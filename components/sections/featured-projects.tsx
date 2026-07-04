"use client";

import Image from "next/image";
import {
  MapPin,
  Building2,
  CalendarCheck,
  Banknote,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const projects = [
  {
    image: "/images/building.png",
    name: "Marina Corporate Tower",
    location: "Victoria Island, Lagos",
    client: "Zenith Developers Ltd",
    completion: "Q2 2023",
    value: "₦18.5B",
    description:
      "A 32-storey Grade-A office tower featuring a curtain-wall facade, smart building systems and LEED-aligned sustainability throughout.",
  },
  {
    image: "/images/project-road.png",
    name: "Lekki-Epe Expressway Upgrade",
    location: "Lekki, Lagos",
    client: "Lagos State Government",
    completion: "Q4 2022",
    value: "₦42.0B",
    description:
      "A 24km dual-carriageway rehabilitation including a signature interchange, drainage systems and modern intelligent traffic management.",
  },
  {
    image: "/images/project-industrial.png",
    name: "Delta Processing Facility",
    location: "Warri, Delta State",
    client: "NNPC Limited",
    completion: "Q1 2024",
    value: "₦67.3B",
    description:
      "A large-scale industrial processing plant delivered to strict oil & gas engineering, safety and environmental standards.",
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            Featured Projects
          </span>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-primary text-balance sm:text-4xl lg:text-5xl">
            Landmarks that define skylines
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            A selection of the projects that showcase our scale, capability and
            commitment to engineering excellence.
          </p>
        </Reveal>

        <div className="mt-16 space-y-16 lg:space-y-24">
          {projects.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={p.name}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <Reveal
                  direction={flip ? "left" : "right"}
                  className={flip ? "lg:order-2" : ""}
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-primary/20">
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={800}
                      height={600}
                      className="h-[380px] w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[460px]"
                    />
                  </div>
                </Reveal>

                <Reveal
                  direction={flip ? "right" : "left"}
                  className={flip ? "lg:order-1" : ""}
                >
                  <div>
                    <h3 className="font-serif text-2xl text-primary sm:text-3xl">
                      {p.name}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>

                    <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5">
                      <Meta icon={MapPin} label="Location" value={p.location} />
                      <Meta icon={Building2} label="Client" value={p.client} />
                      <Meta
                        icon={CalendarCheck}
                        label="Completed"
                        value={p.completion}
                      />
                      <Meta
                        icon={Banknote}
                        label="Project Value"
                        value={p.value}
                      />
                    </dl>

                    <a
                      href="#contact"
                      className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary"
                    >
                      View Project
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Meta({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-secondary">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <dt className="text-xs uppercase tracking-wider text-muted-foreground">
          {label}
        </dt>
        <dd className="mt-0.5 text-sm font-semibold text-primary">{value}</dd>
      </div>
    </div>
  );
}
