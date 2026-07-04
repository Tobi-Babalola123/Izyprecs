'use client'

import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { StaggerGroup, staggerItem, Reveal } from '@/components/motion/reveal'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'Greylink delivered our corporate headquarters ahead of schedule and beyond expectations. Their engineering discipline is world-class.',
    name: 'Adewale Okonkwo',
    role: 'MD, Zenith Developers',
    image: '/images/client-1.png',
  },
  {
    quote:
      'From planning to handover, the professionalism was exceptional. Greylink is now our contractor of choice for major infrastructure.',
    name: 'Chidinma Eze',
    role: 'Director, Lagos State PWD',
    image: '/images/client-2.png',
  },
  {
    quote:
      'Their commitment to safety and quality on our processing facility was unmatched. A truly dependable partner for complex projects.',
    name: 'Ibrahim Bello',
    role: 'Project Lead, NNPC Limited',
    image: '/images/client-3.png',
  },
]

export function Testimonials() {
  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            Client Testimonials
          </span>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-primary text-balance sm:text-4xl lg:text-5xl">
            Trusted by the people we build for
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="flex flex-col rounded-2xl border border-border bg-background p-8 shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/10"
            >
              <Quote className="h-9 w-9 text-secondary/30" />
              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-primary/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4 border-t border-border pt-6">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-primary">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
