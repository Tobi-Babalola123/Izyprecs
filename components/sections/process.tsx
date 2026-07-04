'use client'

import { MessageSquare, ClipboardList, PencilRuler, HardHat, SearchCheck, KeyRound } from 'lucide-react'
import { Reveal, StaggerGroup, staggerItem } from '@/components/motion/reveal'
import { motion } from 'framer-motion'

const steps = [
  { icon: MessageSquare, title: 'Consultation', body: 'Understanding your vision, budget and objectives.' },
  { icon: ClipboardList, title: 'Planning', body: 'Feasibility, scheduling and resource strategy.' },
  { icon: PencilRuler, title: 'Design', body: 'Detailed engineering and architectural drawings.' },
  { icon: HardHat, title: 'Construction', body: 'Precision execution with rigorous supervision.' },
  { icon: SearchCheck, title: 'Inspection', body: 'Quality checks and safety compliance sign-off.' },
  { icon: KeyRound, title: 'Delivery', body: 'On-time handover of a project built to last.' },
]

export function Process() {
  return (
    <section id="process" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            How We Work
          </span>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-primary text-balance sm:text-4xl lg:text-5xl">
            A proven construction process
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Six disciplined stages that turn ambitious ideas into completed, dependable
            infrastructure.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* connector line */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-border lg:block" />
          <motion.div
            className="absolute left-0 top-8 hidden h-px origin-left bg-secondary lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            style={{ width: '100%' }}
          />

          <StaggerGroup className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                variants={staggerItem}
                className="relative flex flex-col items-center text-center"
              >
                <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-lg">
                  <s.icon className="h-6 w-6" />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-5 text-base font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
