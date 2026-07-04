'use client'

import Image from 'next/image'
import { ArrowRight, CalendarDays } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'

export function CTA() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0">
        <Image
          src="/images/cta-crane.png"
          alt="Tower cranes on a Greylink construction project"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center lg:px-8">
        <Reveal>
          <h2 className="font-serif text-3xl leading-tight text-primary-foreground text-balance sm:text-4xl lg:text-6xl">
            Ready to Build With Greylink?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
            Let&apos;s bring your project to life with engineering excellence you can trust.
            Reach out today for a no-obligation consultation and quote.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold text-secondary-foreground shadow-xl shadow-secondary/30 transition-transform hover:-translate-y-0.5"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <CalendarDays className="h-4 w-4" />
              Schedule Consultation
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
