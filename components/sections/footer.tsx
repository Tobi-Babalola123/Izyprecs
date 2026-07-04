"use client";

import { useState } from "react";
import { HardHat, ArrowRight } from "lucide-react";

function IconLinkedIn(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={props.className}
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zM8 8h3.83v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.14V23h-4v-6.85c0-1.63-.03-3.73-2.27-3.73-2.27 0-2.62 1.78-2.62 3.61V23H8V8z" />
    </svg>
  );
}
function IconX(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={props.className}
      aria-hidden="true"
    >
      <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.75l-5.29-6.91L4.9 22H1.64l8.03-9.17L1 2h6.92l4.78 6.32L18.244 2zm-1.18 18h1.83L7.02 3.9H5.06l12.004 16.1z" />
    </svg>
  );
}
function IconFacebook(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={props.className}
      aria-hidden="true"
    >
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
    </svg>
  );
}
function IconInstagram(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={props.className}
      aria-hidden="true"
    >
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.44c-3.14 0-3.51.01-4.75.07-1.15.05-1.77.24-2.19.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.42-.35 1.04-.4 2.19-.06 1.24-.07 1.61-.07 4.75s.01 3.51.07 4.75c.05 1.15.24 1.77.4 2.19.21.55.47.94.88 1.35.41.41.8.67 1.35.88.42.16 1.04.35 2.19.4 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c1.15-.05 1.77-.24 2.19-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.42.35-1.04.4-2.19.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.05-1.15-.24-1.77-.4-2.19a3.6 3.6 0 00-.88-1.35 3.6 3.6 0 00-1.35-.88c-.42-.16-1.04-.35-2.19-.4-1.24-.06-1.61-.07-4.75-.07zm0 3.67a4.73 4.73 0 100 9.46 4.73 4.73 0 000-9.46zm0 7.8a3.07 3.07 0 110-6.14 3.07 3.07 0 010 6.14zm6.02-7.98a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" />
    </svg>
  );
}

const columns = [
  {
    title: "Company",
    links: ["About Us", "Our Team", "Careers", "Safety & Quality", "News"],
  },
  {
    title: "Services",
    links: [
      "General Construction",
      "Civil Engineering",
      "Road Construction",
      "Industrial Projects",
      "Project Management",
    ],
  },
  {
    title: "Projects",
    links: [
      "Commercial",
      "Residential",
      "Industrial",
      "Infrastructure",
      "All Projects",
    ],
  },
];

const socials = [IconLinkedIn, IconX, IconFacebook, IconInstagram];

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand + newsletter */}
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                <HardHat className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg">Greylink</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-accent">
                  Construction
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/60">
              Greylink Construction Nigeria Limited, building the nation&apos;s
              future with engineering excellence, safety and integrity since
              2004.
            </p>

            <div className="mt-8">
              <h4 className="text-sm font-semibold">
                Subscribe to our newsletter
              </h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setDone(true);
                  setEmail("");
                }}
                className="mt-3 flex max-w-sm items-center gap-2"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-primary-foreground outline-none transition-colors placeholder:text-primary-foreground/40 focus:border-secondary"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-transform hover:-translate-y-0.5"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
              {done && (
                <p className="mt-2 text-xs text-accent">
                  Thanks for subscribing!
                </p>
              )}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/60 transition-colors hover:text-secondary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Greylink Construction Nigeria Limited.
            All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social media"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-primary-foreground/70 transition-colors hover:border-secondary hover:bg-secondary hover:text-secondary-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
