import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Research & Insights",
    description:
      "I use AI to synthesize user research, analyze competitor landscapes, and surface key pain points — turning hours of research into sharp, actionable insights in minutes.",
    tools: ["ChatGPT", "Claude", "Perplexity"],
    color: "#5B8CFF",
  },
  {
    num: "02",
    title: "Concept Generation",
    description:
      "AI helps me rapidly explore layout directions, generate copy variations, and ideate visual metaphors — expanding creative possibilities before committing to a direction.",
    tools: ["Midjourney", "Claude", "ChatGPT"],
    color: "#A78BFA",
  },
  {
    num: "03",
    title: "Design Execution",
    description:
      "AI-powered Figma plugins automate repetitive tasks — auto-layout, component naming, accessibility checks — so I focus entirely on craft and nuance.",
    tools: ["Figma AI", "Magician", "Relume"],
    color: "#34D399",
  },
  {
    num: "04",
    title: "Iteration & Testing",
    description:
      "I feed AI real user feedback and analytics to rapidly identify friction points and generate A/B hypotheses — iterating at 3× the speed of traditional methods.",
    tools: ["Maze AI", "Hotjar AI", "Claude"],
    color: "#F59E0B",
  },
  {
    num: "05",
    title: "Delivery & Handoff",
    description:
      "AI generates developer-ready documentation, auto-annotates components, and produces design tokens — ensuring every handoff is seamless and zero-friction.",
    tools: ["Figma AI", "Zeplin AI", "ChatGPT"],
    color: "#F43F5E",
  },
];

function StepRow({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative py-10 md:py-12 border-b border-white/5 last:border-0 flex flex-col md:flex-row md:items-center gap-6 md:gap-16 cursor-default"
    >
      {/* Hover bg sweep */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute inset-0 origin-left rounded-2xl pointer-events-none -mx-6 px-6"
        style={{ backgroundColor: `${step.color}07` }}
      />

      {/* Step number — outlined like hero "EXPERIENCES" */}
      <div
        className="flex-shrink-0 text-[56px] md:text-[72px] font-black leading-none tracking-tighter select-none transition-all duration-500 group-hover:opacity-100 opacity-20"
        style={{ WebkitTextStroke: `2px ${step.color}`, color: "transparent" }}
      >
        {step.num}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3
          className="text-2xl md:text-3xl font-black tracking-tight text-white mb-3 transition-colors duration-300"
        >
          {step.title}
        </h3>
        <p className="text-base text-muted-foreground font-light leading-relaxed max-w-2xl">
          {step.description}
        </p>
      </div>

      {/* Tool chips — right-aligned */}
      <div className="flex flex-wrap md:flex-col gap-2 flex-shrink-0 md:items-end">
        {step.tools.map((tool) => (
          <span
            key={tool}
            className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/8 bg-white/4 text-muted-foreground group-hover:border-white/15 transition-colors duration-300"
          >
            {tool}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function AIInDesign() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section className="py-[120px] bg-[#0f0f0f] relative z-10 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10 translate-x-1/2" />

      <div className="container mx-auto px-6">
        {/* Heading — same style as all other sections */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            AI-Powered Design
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-4">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
              Design at the{" "}
              <span style={{ WebkitTextStroke: "2px hsl(var(--primary))", color: "transparent" }}>
                Speed of AI
              </span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-sm md:pb-2 md:text-right">
              AI amplifies every stage of my process — from research to final handoff.
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={headingInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="h-px bg-white/8 origin-left mb-2"
        />

        {/* Steps — editorial list rows */}
        <div>
          {steps.map((step, i) => (
            <StepRow key={step.num} step={step} index={i} />
          ))}
        </div>

        {/* Bottom stat row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 pt-12 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
        >
          <p className="text-2xl md:text-3xl font-black text-white tracking-tight max-w-sm">
            3× faster delivery.{" "}
            <span className="text-muted-foreground font-light">Zero compromise on quality.</span>
          </p>
          <div className="flex gap-10">
            {[
              { value: "3×", label: "Faster Workflow" },
              { value: "5", label: "AI Tools Used" },
              { value: "100%", label: "Quality Retained" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="text-3xl font-black text-primary leading-none">{s.value}</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
