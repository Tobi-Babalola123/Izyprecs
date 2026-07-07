"use client";

import {
  Building2,
  Wrench,
  ClipboardList,
  Home as HomeIcon,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Shield,
  Award,
  Zap,
  Clock,
  Star,
  ChevronRight,
  Send,
  Layers,
  Calendar,
} from "lucide-react";

import {
  motion,
  fadeUp,
  staggerContainer,
  FadeIn,
  SectionHeading,
  SectionPill,
  GoldRule,
  Counter,
} from "@/components/motion/motion";
import { useState } from "react";

const SERVICES = [
  {
    Icon: HomeIcon,
    title: "Residential Construction",
    desc: "Luxury homes, gated estates, and residential towers built to international comfort and safety standards.",
  },
  {
    Icon: Building2,
    title: "Commercial Construction",
    desc: "Corporate HQs, shopping complexes, and high-rise developments that redefine Nigerian skylines.",
  },
  {
    Icon: Layers,
    title: "Civil Engineering",
    desc: "Roads, bridges, dams, and large-scale infrastructure connecting communities and powering growth.",
  },
  {
    Icon: Wrench,
    title: "Renovation & Retrofit",
    desc: "Comprehensive refurbishment services breathing new life into existing structures with minimal disruption.",
  },
  {
    Icon: ClipboardList,
    title: "Project Management",
    desc: "End-to-end supervision with rigorous timeline control, budget discipline, and quality assurance.",
  },
  {
    Icon: TrendingUp,
    title: "Property Development",
    desc: "Strategic land acquisition, master planning, and profitable real estate development across key cities.",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const inputClass =
    "w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all duration-200";

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — info */}
          <FadeIn>
            <SectionPill>Get In Touch</SectionPill>
            <SectionHeading>Start Your Project Today</SectionHeading>
            <GoldRule />
            <p className="text-foreground/65 leading-relaxed text-[15px] mb-10">
              Our project development team is ready to discuss your requirements
              and provide a comprehensive proposal tailored to your scope,
              timeline, and budget with no obligation.
            </p>

            <div className="space-y-5 mb-10">
              {[
                {
                  Icon: MapPin,
                  label: "Head Office",
                  value:
                    "Plot 15, Engineering Boulevard, Victoria Island, Lagos",
                },
                {
                  Icon: Phone,
                  label: "Phone",
                  value: "+234 1 234 5678  ·  +234 803 456 7890",
                },
                {
                  Icon: Mail,
                  label: "Email",
                  value: "info@Izyprecs.com  ·  projects@Izyprecs.com",
                },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-11 h-11 bg-primary/7 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon
                      className="w-4.5 h-4.5 text-primary"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-0.5">
                      {label}
                    </div>
                    <div className="text-primary text-sm font-medium leading-snug">
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden bg-background border border-border h-52 relative">
              <img
                src="https://images.unsplash.com/photo-1639774274707-09c80b4f53e3?w=700&h=300&fit=crop&auto=format"
                alt="Lagos cityscape aerial view"
                className="w-full h-full object-cover opacity-55"
              />
              <div className="absolute inset-0 bg-primary/45 flex flex-col items-center justify-center gap-2">
                <MapPin className="w-8 h-8 text-accent" />
                <div className="text-white text-sm font-semibold">
                  Victoria Island, Lagos
                </div>
                <div className="text-white/60 text-xs">
                  View on Google Maps →
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn delay={0.15}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-background rounded-2xl p-8 md:p-10 border border-border shadow-sm space-y-5"
            >
              <div className="mb-2">
                <h3 className="font-display text-2xl text-primary">
                  Send Us a Message
                </h3>
                <p className="text-muted-foreground text-xs mt-1.5">
                  We respond to all enquiries within one business day.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1.5 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Emeka Okonkwo"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1.5 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="emeka@company.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1.5 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+234 803 456 7890"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1.5 block">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map(({ title }) => (
                      <option key={title} value={title}>
                        {title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1.5 block">
                  Project Description
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your project — scope, location, timeline, and any specific requirements..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold py-4 rounded-xl hover:bg-accent transition-all duration-300 flex items-center justify-center gap-2.5 hover:shadow-lg hover:shadow-primary/20 group text-sm"
              >
                Submit Enquiry
                <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <p className="text-muted-foreground text-[11px] text-center">
                Your information is treated with strict confidentiality.
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
