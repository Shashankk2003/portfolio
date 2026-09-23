import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

const experiences = [
  {
    role: "UI/UX Designer",
    company: "SNTRIX",
    date: "Sep 2025 – Present",
    status: "Current",
    description:
      "Designed and delivered 7+ UI/UX projects including website redesigns for Kaldorin and Phase One Partners, enhancing usability and brand presence. Created marketing posters and visuals aligning creative design with business goals.",
    tags: ["Website Redesign", "Marketing Assets", "Brand Identity"],
    color: "#5B8CFF",
  },
  {
    role: "UI/UX Designer Intern",
    company: "SQUAREAERO",
    date: "May 2025 – Sep 2025",
    status: "Internship",
    description:
      "Conducted user research, wireframing, prototyping, and designed the entire platform from scratch for optimal UX. Collaborated with cross-functional teams to align UX strategy with business goals.",
    tags: ["User Research", "Wireframing", "Platform Design"],
    color: "#A78BFA",
  },
  {
    role: "Freelance UI/UX Designer",
    company: "Fiverr",
    date: "Mar 2023 – Apr 2025",
    status: "Freelance",
    description:
      "Successfully completed 10+ UX/UI projects across various sectors. Collaborated with clients from multiple countries, delivering tailored, user-focused design solutions.",
    tags: ["International Clients", "10+ Projects", "End-to-End Design"],
    color: "#34D399",
  },
];

function TiltCard({ exp, index }: { exp: (typeof experiences)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, y: 20 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative rounded-[2rem] border border-border bg-card p-8 md:p-10 overflow-hidden cursor-default hover:border-foreground/15 transition-colors duration-500"
      >
        {/* Shimmer sweep on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{ background: `linear-gradient(105deg, transparent 40%, ${exp.color}18 50%, transparent 60%)`, backgroundSize: "200% 100%", animation: "shimmer 1.5s ease-in-out" }}
        />

        {/* Accent glow corner */}
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
          style={{ backgroundColor: exp.color, transform: "translate(30%, -30%)" }}
        />

        {/* Ghost number */}
        <div
          className="absolute bottom-0 right-6 text-[120px] md:text-[160px] font-black leading-none select-none pointer-events-none opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-700"
          style={{ color: exp.color }}
        >
          0{index + 1}
        </div>

        <div className="relative z-10">
          {/* Top row */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border"
                  style={{ color: exp.color, borderColor: `${exp.color}40`, backgroundColor: `${exp.color}10` }}
                >
                  {exp.status}
                </span>
              </div>
              <h3
                className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground group-hover:text-opacity-90 transition-colors duration-300"
                style={{ textShadow: `0 0 40px ${exp.color}00` }}
              >
                <motion.span
                  animate={inView ? { textShadow: [`0 0 0px ${exp.color}00`, `0 0 30px ${exp.color}30`, `0 0 0px ${exp.color}00`] } : {}}
                  transition={{ duration: 2, delay: index * 0.15 + 0.5, repeat: 0 }}
                >
                  {exp.company}
                </motion.span>
              </h3>
              <div className="text-sm font-bold uppercase tracking-widest mt-2" style={{ color: exp.color }}>
                {exp.role}
              </div>
            </div>

            <span className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full bg-foreground/5 border border-border text-muted-foreground flex-shrink-0">
              {exp.date}
            </span>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.3, ease: "easeOut" }}
            className="h-px bg-border origin-left mb-6"
          />

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed mb-8">
            {exp.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag, ti) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.4 + ti * 0.07 }}
                className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-border bg-foreground/5 text-muted-foreground"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Experience() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-[120px] bg-background relative z-10 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "80px 80px" }}
      />

      <div className="container mx-auto px-6" ref={sectionRef}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <div className="inline-block text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4">
            Experience
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground">
            Where I've{" "}
            <span style={{ WebkitTextStroke: "2px hsl(var(--primary))", color: "transparent" }}>
              Worked
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <TiltCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  );
}
