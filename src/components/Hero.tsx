import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const profilePhoto = "/images/profile photo.jpeg";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-background">

      {/* ── Full-height photo panel (right half, absolutely positioned) ── */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] hidden lg:block">
        {/* Photo */}
        <img
          src={profilePhoto}
          alt="Shashank Kapoor"
          data-testid="img-profile"
          className="w-full h-full object-cover object-top grayscale"
          style={{ objectPosition: "50% 12%" }}
        />
        <div className="absolute inset-0 hero-photo-fade-x" />
        <div className="absolute inset-0 hero-photo-fade-bottom" />
        <div className="absolute inset-0 hero-photo-fade-top" />
        {/* Subtle blue tint */}
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
      </div>

      {/* ── Left text content ── */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-20">
        <div className="max-w-[58%] lg:max-w-[52%]">

          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-border text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              Chandigarh, India
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-1 mb-8 leading-none"
          >
            <span className="text-5xl md:text-7xl lg:text-[clamp(64px,7vw,110px)] font-normal italic text-foreground/90">
              Crafting
            </span>
            <span className="text-6xl md:text-8xl lg:text-[clamp(72px,9vw,130px)] font-black text-foreground tracking-tighter">
              Digital
            </span>
            <span
              className="text-6xl md:text-8xl lg:text-[clamp(72px,9vw,130px)] font-black tracking-tighter uppercase"
              style={{ WebkitTextStroke: "2px hsl(var(--primary))", color: "transparent" }}
            >
              Experiences
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-10"
          >
            UI/UX Designer · Chandigarh, India
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-wrap items-center gap-4 mb-14"
          >
            <Button
              size="lg"
              className="rounded-full px-10 h-14 text-sm uppercase tracking-widest font-bold bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 transition-all shadow-lg shadow-primary/25"
              data-testid="button-view-projects"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
            </Button>
            <a href="/Shashank_Kapoor_Resume.pdf" download="Shashank_Kapoor_Resume.pdf" data-testid="button-download-resume">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-10 h-14 text-sm uppercase tracking-widest font-bold border-border hover:bg-foreground/5 hover:-translate-y-0.5 transition-all"
              >
                Download Resume
              </Button>
            </a>
          </motion.div>

          {/* Floating stat chips — horizontal row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex items-center gap-3 flex-wrap"
          >
            {[
             
            ].map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/[0.04] border border-border backdrop-blur-sm"
              >
                <span className="text-sm font-black text-primary">{s.value}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* ── Floating "Role" badge — bottom-right of photo zone ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
        className="absolute bottom-24 right-[6%] z-20 hidden lg:flex items-center gap-3 px-5 py-4 rounded-2xl bg-card/90 backdrop-blur-xl border border-border shadow-2xl"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-3"
        >
          <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
          </div>
          <div>
            <div className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold mb-0.5">Role</div>
            <div className="text-sm font-bold text-foreground">UI/UX Designer</div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Mobile photo (stacked layout) ── */}
      <div className="lg:hidden w-full mt-8 px-6 pb-8">
        <div className="relative w-full max-w-xs mx-auto" style={{ aspectRatio: "3/4" }}>
          <div className="w-full h-full rounded-[2rem] overflow-hidden border border-border shadow-2xl">
            <img
              src={profilePhoto}
              alt="Shashank Kapoor"
              className="w-full h-full object-cover grayscale"
              style={{ objectPosition: "50% 12%" }}
            />
            <div className="absolute inset-0 bg-primary/15 mix-blend-overlay" />
            <div className="absolute inset-0 hero-photo-fade-mobile" />
          </div>
        </div>
      </div>

      {/* ── Watermark ── */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 text-[28vw] font-black text-foreground/[0.04] select-none pointer-events-none -z-10 leading-none tracking-tighter">
        SK
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground cursor-pointer z-20"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="relative w-6 h-10 rounded-full border-2 border-foreground/20 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>

    </section>
  );
}
