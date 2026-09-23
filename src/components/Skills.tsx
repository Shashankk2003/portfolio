import { motion } from "framer-motion";

export function Skills() {
  const row1 = [
    "UI/UX Design", "Web Design", "Wireframing", "Prototyping", "User Research"
  ];
  const row2 = [
    "Design Systems", "Responsive Design", "Adobe Photoshop", "Adobe Illustrator", "Figma"
  ];

  // Double arrays for seamless looping
  const duplicatedRow1 = [...row1, ...row1, ...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section id="skills" className="py-[120px] bg-card relative z-10 overflow-hidden border-y border-border">
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4">
            Expertise
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground">
            What I <span style={{ WebkitTextStroke: "2px hsl(var(--primary))", color: "transparent" }}>Do Best</span>
          </h2>
        </motion.div>
      </div>

      <div className="w-full flex flex-col gap-6 relative">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

        {/* Row 1: Left to Right */}
        <div className="flex overflow-hidden w-full">
          <div className="animate-marquee-slow flex items-center shrink-0 min-w-full">
            {duplicatedRow1.map((skill, idx) => (
              <div
                key={`r1-${idx}`}
                className="mx-3 px-6 py-4 rounded-full border border-border/40 bg-card/50 backdrop-blur-sm flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-bold uppercase tracking-widest text-foreground whitespace-nowrap">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex overflow-hidden w-full">
          <div className="animate-marquee-slow flex items-center shrink-0 min-w-full" style={{ animationDirection: 'reverse' }}>
            {duplicatedRow2.map((skill, idx) => (
              <div
                key={`r2-${idx}`}
                className="mx-3 px-6 py-4 rounded-full border border-border/40 bg-card/50 backdrop-blur-sm flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm font-bold uppercase tracking-widest text-foreground whitespace-nowrap">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
