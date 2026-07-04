'use client'

import {
  Building,
  Ruler,
  TrafficCone,
  Factory,
  Home,
  Store,
  ClipboardList,
  ArrowUpRight,
} from 'lucide-react'
import { StaggerGroup, staggerItem } from '@/components/motion/reveal'
import { Reveal } from '@/components/motion/reveal'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Building,
    title: 'General Construction',
    body: 'End-to-end delivery of complex building projects with precision and speed.',
  },
  {
    icon: Ruler,
    title: 'Civil Engineering',
    body: 'Structural design and execution built on sound, certified engineering.',
  },
  {
    icon: TrafficCone,
    title: 'Road Construction',
    body: 'Durable highways, bridges and urban road networks across the region.',
  },
  {
    icon: Factory,
    title: 'Industrial Projects',
    body: 'Plants and facilities for oil, gas and heavy manufacturing sectors.',
  },
  {
    icon: Home,
    title: 'Residential Development',
    body: 'Modern estates and luxury homes designed for comfortable living.',
  },
  {
    icon: Store,
    title: 'Commercial Buildings',
    body: 'Landmark offices, malls and mixed-use developments that stand out.',
  },
  {
    icon: ClipboardList,
    title: 'Project Management',
    body: 'Disciplined oversight that keeps budgets, safety and timelines on track.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            What We Do
          </span>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-primary text-balance sm:text-4xl lg:text-5xl">
            Comprehensive construction services
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            From groundbreaking to handover, Greylink offers the full spectrum of
            construction and engineering capabilities under one roof.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/10"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-secondary">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-muted-foreground/40 transition-all group-hover:right-5 group-hover:text-secondary" />
            </motion.div>
          ))}

          <motion.a
            href="#contact"
            variants={staggerItem}
            whileHover={{ y: -6 }}
            className="group flex flex-col justify-between rounded-2xl bg-secondary p-7 text-secondary-foreground shadow-lg shadow-secondary/25"
          >
            <span className="text-lg font-semibold">Have a project in mind?</span>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
              Talk to our team
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </motion.a>
        </StaggerGroup>
      </div>
    </section>
  )
}
