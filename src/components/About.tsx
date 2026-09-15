import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Sparkles, Zap, Globe, Users } from "lucide-react";

const tools = [
  "Figma", "Wireframing", "Prototyping", "User Flows",
  "Responsive Design", "Design Systems", "Photoshop", "Illustrator",
];

const clientTypes = [
  { icon: Sparkles, label: "Startups", desc: "Building their first product" },
  { icon: Globe, label: "Agencies", desc: "Scaling client deliverables" },
  { icon: Zap, label: "Founders", desc: "Launching fast with great UX" },
  { icon: Users, label: "Enterprises", desc: "Redesigning for modern users" },
];

function CountUp({ to, suffix = "", duration = 1.8, delay = 0 }: { to: number; suffix?: string; duration?: number; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      delay,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(String(Math.round(v))),
    });
    return () => controls.stop();
  }, [inView, to, duration, delay]);

  return <span ref={ref}>{display}{suffix}</span>;
}

const stats = [
  { value: 30, suffix: "+", label: "Projects Delivered" },
  { value: 3, suffix: " Yrs", label: "Experience" },
  { value: 5, suffix: "★", label: "Star Rated" },
];

export function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-[120px] bg-[#0f0f0f] relative z-10 overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="container mx-auto px-6" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="inline-block text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4">
            About Me
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            Designing Experiences{" "}
            <span style={{ WebkitTextStroke: "2px hsl(var(--primary))", color: "transparent" }}>
              That Matter
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

          {/* Bio cell — large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-[#151515] rounded-[2rem] p-8 md:p-12 border border-white/5 flex flex-col justify-between gap-10 relative overflow-hidden group hover:border-white/10 transition-colors duration-500"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10 pointer-events-none group-hover:opacity-80 transition-opacity duration-700" />

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              I'm a <span className="text-white font-semibold">UI/UX Designer</span> from Chandigarh with a focus on creating intuitive, user-centered experiences. I transform complex ideas into{" "}
              <span className="text-white font-semibold">simple, beautiful digital products</span> that users love and businesses trust.
            </p>

            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-muted-foreground mb-5">Tools & Skills</div>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, i) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                    className="px-4 py-2 rounded-full border border-white/8 bg-black/40 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-default"
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats cell */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 bg-[#151515] rounded-[2rem] p-8 md:p-10 border border-white/5 flex flex-col justify-between relative overflow-hidden hover:border-white/10 transition-colors duration-500"
          >
            {stats.map((stat, i) => (
              <div key={stat.label}>
                <div className="py-6">
                  <div className="text-5xl md:text-6xl font-black text-white leading-none mb-2">
                    <CountUp to={stat.value} suffix={stat.suffix} delay={0.2 + i * 0.15} />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
                {i < stats.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                    className="h-px bg-white/5 origin-left"
                  />
                )}
              </div>
            ))}
          </motion.div>

          {/* Who I work for */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-12 bg-[#151515] rounded-[2rem] p-8 md:p-10 border border-white/5 relative overflow-hidden hover:border-white/10 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="mb-8">
              <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary mb-2">Who I Design For</div>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                From early-stage startups to global enterprises
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {clientTypes.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group/card flex flex-col gap-3 p-5 rounded-2xl border border-white/5 bg-black/30 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover/card:bg-primary/20 transition-colors duration-300">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm mb-1">{label}</p>
                    <p className="text-xs text-muted-foreground leading-snug">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quote cell */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-12 bg-[#151515] rounded-[2rem] p-10 md:p-16 border border-white/5 flex items-center justify-center relative overflow-hidden group hover:border-white/10 transition-colors duration-500"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-primary/8 rounded-full blur-[100px] -z-10 pointer-events-none group-hover:opacity-150 transition-opacity duration-700" />
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="text-2xl md:text-4xl lg:text-5xl font-light italic text-center max-w-4xl text-white/90 leading-tight"
            >
              "I believe great design is invisible —{" "}
              <span className="font-black text-white not-italic">it just works.</span>"
            </motion.h3>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
