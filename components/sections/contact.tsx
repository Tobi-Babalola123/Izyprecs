'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'

const info = [
  { icon: MapPin, label: 'Head Office', value: '14 Adeola Odeku Street, Victoria Island, Lagos' },
  { icon: Phone, label: 'Phone', value: '+234 000 000 0000' },
  { icon: Mail, label: 'Email', value: 'hello@greylinkng.com' },
  { icon: Clock, label: 'Working Hours', value: 'Mon – Fri, 8:00 AM – 6:00 PM' },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-primary/5">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: info + map */}
            <div className="bg-primary p-8 text-primary-foreground sm:p-12">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Get In Touch
              </span>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-primary-foreground text-balance sm:text-4xl">
                Let&apos;s build something great together
              </h2>
              <p className="mt-4 text-base leading-relaxed text-primary-foreground/70">
                Tell us about your project and our team will respond within one business
                day.
              </p>

              <ul className="mt-9 space-y-5">
                {info.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-secondary">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-primary-foreground/50">
                        {item.label}
                      </div>
                      <div className="mt-0.5 text-sm font-medium text-primary-foreground">
                        {item.value}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-9 overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  title="Greylink Construction office location"
                  src="https://www.google.com/maps?q=Victoria+Island+Lagos&output=embed"
                  className="h-56 w-full grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right: form */}
            <div className="p-8 sm:p-12">
              <Reveal>
                {submitted ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <CheckCircle2 className="h-16 w-16 text-secondary" />
                    <h3 className="mt-6 font-serif text-2xl text-primary">Thank you!</h3>
                    <p className="mt-2 max-w-sm text-muted-foreground">
                      Your message has been received. A member of our team will be in touch
                      shortly.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      setSubmitted(true)
                    }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <Field label="Full Name" name="name" placeholder="John Doe" />
                      <Field
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <Field label="Phone" name="phone" placeholder="+234 ..." />
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="service"
                          className="text-sm font-medium text-primary"
                        >
                          Service
                        </label>
                        <select
                          id="service"
                          name="service"
                          className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-primary outline-none transition-colors focus:border-secondary"
                        >
                          <option>General Construction</option>
                          <option>Civil Engineering</option>
                          <option>Road Construction</option>
                          <option>Industrial Projects</option>
                          <option>Residential Development</option>
                          <option>Commercial Buildings</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-sm font-medium text-primary">
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell us about your project..."
                        className="resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-secondary"
                      />
                    </div>
                    <button
                      type="submit"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-7 py-4 text-sm font-semibold text-secondary-foreground shadow-lg shadow-secondary/25 transition-transform hover:-translate-y-0.5"
                    >
                      Send Message
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </form>
                )}
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-primary">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-secondary"
      />
    </div>
  )
}
