'use client'

import Image from 'next/image'
import { ShieldCheck, Award, GraduationCap, FileCheck } from 'lucide-react'
import { Reveal, StaggerGroup, staggerItem } from '@/components/motion/reveal'
import { CountUp } from '@/components/motion/count-up'
import { motion } from 'framer-motion'

const stats = [
  { value: 2500000, suffix: '+', label: 'Safe Man-Hours' },
  { value: 0, suffix: '', label: 'Lost-Time Incidents 2023' },
  { value: 100, suffix: '%', label: 'ISO Compliance' },
  { value: 1200, suffix: '+', label: 'Workers Trained' },
]

const badges = [
  { icon: ShieldCheck, title: 'ISO 45001', body: 'Occupational Health & Safety' },
  { icon: Award, title: 'ISO 9001', body: 'Quality Management Systems' },
  { icon: FileCheck, title: 'ISO 14001', body: 'Environmental Management' },
  { icon: GraduationCap, title: 'HSE Academy', body: 'Continuous workforce training' },
]

export function SafetyQuality() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
      <div className="absolute inset-0">
        <Image
          src="/images/safety-workers.png"
          alt="Greylink construction workers in safety gear"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Safety &amp; Quality
            </span>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-primary-foreground text-balance sm:text-4xl lg:text-5xl">
              Uncompromising standards, certified excellence
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/70">
              Safety is engineered into everything we do. Our internationally certified
              management systems and dedicated HSE academy protect our people while
              guaranteeing the quality our clients expect.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.1 * i}>
                <div className="font-serif text-4xl text-secondary sm:text-5xl">
                  <CountUp end={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-sm text-primary-foreground/70">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>

        <StaggerGroup className="grid grid-cols-1 gap-4 self-center sm:grid-cols-2">
          {badges.map((b) => (
            <motion.div
              key={b.title}
              variants={staggerItem}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                <b.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-primary-foreground">{b.title}</h3>
              <p className="mt-1 text-sm text-primary-foreground/60">{b.body}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
