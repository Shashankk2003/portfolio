import { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring, animate } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "Master of Computer Application",
    short: "MCA",
    institution: "Lovely Professional University",
    location: "Jalandhar, Punjab",
    period: "2023 – Present",
    cgpa: 7.7,
    maxCgpa: 10,
    accentColor: "#5B8CFF",
    ringColor: "rgba(91,140,255,0.15)",
    status: "Ongoing",
  },
  {
    degree: "Bachelor of Computer Application",
    short: "BCA",
    institution: "DAV College Chandigarh",
    location: "Chandigarh",
    period: "2020 – 2023",
    cgpa: 7.5,
    maxCgpa: 10,
    accentColor: "#A78BFA",
    ringColor: "rgba(167,139,250,0.15)",
    status: "Completed",
  },
];

function CircleProgress({ value, max, color, size = 80 }: { value: number; max: number; color: string; size?: number }) {
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const progress = useMotionValue(0);
  const strokeDashoffset = useSpring(progress, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (inView) {
      animate(progress, circumference - (value / max) * circumference, {
        duration: 1.8,
        delay: 0.3,
        ease: "easeOut",
      });
    }
  }, [inView, circumference, value, max, progress]);

  return (
    <div ref={ref} className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90 absolute inset-0">
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="hsl(var(--foreground) / 0.1)"
          strokeWidth={4}
        />
        {/* Progress */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={4}
          strokeLinecap="round"
          strokeDasharray={circumference}
          style={{ strokeDashoffset }}
        />
      </svg>
      <div className="relative z-10 flex flex-col items-center">
        <span className="text-xl font-black text-foreground leading-none">{value}</span>
        <span className="text-[8px] uppercase tracking-wider text-muted-foreground font-bold">GPA</span>
      </div>
    </div>
  );
}

function CountUp({ to, decimals = 1, duration = 1.5, delay = 0 }: { to: number; decimals?: number; duration?: number; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0.0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      delay,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, to, duration, delay, decimals]);

  return <span ref={ref}>{display}</span>;
}

function EducationCard({ item, index }: { item: (typeof educationData)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group rounded-[2rem] overflow-hidden cursor-default bg-card"
      style={{ border: `1px solid ${hovered ? item.accentColor + "30" : "hsl(var(--border))"}`, transition: "border-color 0.4s ease" }}
    >
      {/* Top accent bar — animated width */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: index * 0.2 + 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-[3px] origin-left"
        style={{ backgroundColor: item.accentColor }}
      />

      {/* Glow on hover */}
      <motion.div
        animate={{ opacity: hovered ? 0.12 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${item.accentColor}, transparent 70%)` }}
      />

      {/* Ghost label */}
      <div
        className="absolute -right-3 top-1/2 -translate-y-1/2 text-[120px] font-black leading-none select-none pointer-events-none transition-all duration-700"
        style={{ color: item.accentColor, opacity: hovered ? 0.08 : 0.03 }}
      >
        {item.short}
      </div>

      <div className="relative z-10 p-8 md:p-10">
        {/* Header row */}
        <div className="flex items-start justify-between gap-6 mb-8 flex-wrap">
          {/* Left */}
          <div className="flex items-start gap-5">
            <motion.div
              animate={{ rotate: hovered ? 360 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border"
              style={{ backgroundColor: `${item.accentColor}15`, borderColor: `${item.accentColor}30` }}
            >
              <GraduationCap className="h-6 w-6" style={{ color: item.accentColor }} />
            </motion.div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full"
                  style={{ color: item.accentColor, backgroundColor: `${item.accentColor}15`, border: `1px solid ${item.accentColor}30` }}
                >
                  {item.status}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-foreground leading-tight tracking-tight">
                {item.degree}
              </h3>
            </div>
          </div>

          {/* CGPA Circle */}
          <CircleProgress value={item.cgpa} max={item.maxCgpa} color={item.accentColor} size={88} />
        </div>

        {/* Animated divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: index * 0.2 + 0.5, ease: "easeOut" }}
          className="h-px origin-left mb-8"
          style={{ backgroundColor: `${item.accentColor}20` }}
        />

        {/* Info row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Institution</span>
            <span className="text-sm font-bold text-foreground">{item.institution}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Period</span>
            <span className="text-sm font-bold text-foreground flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" style={{ color: item.accentColor }} />
              {item.period}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Location</span>
            <span className="text-sm font-bold text-foreground flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" style={{ color: item.accentColor }} />
              {item.location}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Education() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-[120px] relative overflow-hidden bg-background">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Education</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground">
            Academic{" "}
            <span style={{ WebkitTextStroke: "2px hsl(var(--primary))", color: "transparent" }}>
              Background
            </span>
          </h2>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {educationData.map((item, i) => (
            <EducationCard key={item.institution} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
