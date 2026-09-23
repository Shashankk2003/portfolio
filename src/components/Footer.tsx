import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaBehance, FaDribbble } from "react-icons/fa";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/in/shashank-k12/" },
  { icon: Mail,         label: "Email",    href: "mailto:shashankkapoor4115@gmail.com" },
  { icon: Phone,        label: "Phone",    href: "tel:+918360287930" },
];

export function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer className="bg-background relative z-10 overflow-hidden" ref={ref}>
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/4 rounded-full blur-[120px] pointer-events-none" />

      {/* ── Giant name display ── */}
      <div className="relative border-b border-border overflow-hidden py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="container mx-auto px-6 text-center"
        >
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-6">UI/UX Designer · Chandigarh, India</p>

          {/* Huge name */}
          <h2 className="font-black tracking-tighter leading-none text-foreground select-none"
            style={{ fontSize: "clamp(56px, 12vw, 180px)" }}>
            Shashank
          </h2>
          <h2
            className="font-black tracking-tighter leading-none select-none"
            style={{
              fontSize: "clamp(56px, 12vw, 180px)",
              WebkitTextStroke: "2px hsl(var(--primary))",
              color: "transparent",
            }}
          >
            Kapoor
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mt-12 origin-center"
          />
        </motion.div>
      </div>

      {/* ── Main footer grid ── */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* Col 1 — About blurb */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-black text-sm">
                SK
              </div>
              <span className="font-bold uppercase tracking-widest text-foreground text-sm">Shashank Kapoor</span>
            </div>
            <p className="text-sm font-normal text-muted-foreground leading-relaxed mb-6">
              UI/UX Designer crafting digital experiences that are beautiful, functional, and human-centered. Available for freelance projects.
            </p>
            <div className="flex items-center gap-2">
              
              
            </div>
          </motion.div>

          {/* Col 2 — Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">Navigation</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3 — Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">Get in Touch</p>
            <div className="flex flex-col gap-3 mb-8">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-3 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <span className="w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    {s.label}
                  </a>
                );
              })}
            </div>

            {/* Hire me CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 h-11 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-normal text-muted-foreground">
            © {new Date().getFullYear()} Shashank Kapoor. All rights reserved.
          </p>
          <p className="text-xs font-normal text-muted-foreground">
            Designed &amp; built with precision.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:-translate-y-0.5 transition-all duration-200"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
