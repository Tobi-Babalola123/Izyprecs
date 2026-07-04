'use client'

import { Building2, Users, Trophy, CalendarClock, UserCog } from 'lucide-react'
import { CountUp } from '@/components/motion/count-up'
import { StaggerGroup, staggerItem } from '@/components/motion/reveal'
import { motion } from 'framer-motion'

const stats = [
  { icon: Building2, end: 150, suffix: '+', label: 'Projects Delivered' },
  { icon: Users, end: 120, suffix: '+', label: 'Satisfied Clients' },
  { icon: Trophy, end: 25, suffix: '', label: 'Industry Awards' },
  { icon: CalendarClock, end: 20, suffix: '+', label: 'Years in Business' },
  { icon: UserCog, end: 500, suffix: '+', label: 'Team Members' },
]

export function Statistics() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <StaggerGroup className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={staggerItem}
              className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                <s.icon className="h-6 w-6" />
              </span>
              <div className="mt-4 font-serif text-4xl text-primary">
                <CountUp end={s.end} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
