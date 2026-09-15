import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import loreMarketingImg from "@assets/Gemini_Generated_Image_4l6c3f4l6c3f4l6c_1785088239978.png";

interface Project {
  name: string;
  url: string;
  description: string;
  tags: string[];
  gradient: string;
  accentColor: string;
  mockupBg: string;
  mockupLines: { y: number; w: string; color: string }[];
  image?: string;
}

const projects: Project[] = [
  {
    name: "Lore Marketing",
    url: "https://loremarketing.com.au/",
    description: "Marketing website with modern layouts and strong branding for an Australian agency.",
    tags: ["Marketing", "Branding", "Web Design"],
    gradient: "from-[#0F2027] via-[#203A43] to-[#2C5364]",
    accentColor: "#38BDF8",
    mockupBg: "#1a2f3a",
    image: loreMarketingImg,
    mockupLines: [
      { y: 0, w: "70%", color: "rgba(255,255,255,0.5)" },
      { y: 1, w: "45%", color: "rgba(56,189,248,0.6)" },
      { y: 2, w: "60%", color: "rgba(255,255,255,0.2)" },
      { y: 3, w: "35%", color: "rgba(255,255,255,0.2)" },
    ],
  },
  {
    name: "Viamigos",
    url: "https://viamigos.com/",
    description: "Travel platform with engaging and intuitive experiences for explorers worldwide.",
    tags: ["Travel", "UX Design", "Platform"],
    gradient: "from-[#c0392b] via-[#e67e22] to-[#f39c12]",
    accentColor: "#F59E0B",
    mockupBg: "#2d1a0e",
    mockupLines: [
      { y: 0, w: "55%", color: "rgba(255,255,255,0.5)" },
      { y: 1, w: "80%", color: "rgba(245,158,11,0.5)" },
      { y: 2, w: "40%", color: "rgba(255,255,255,0.2)" },
      { y: 3, w: "65%", color: "rgba(255,255,255,0.2)" },
    ],
  },
  {
    name: "Phase One Partners",
    url: "https://www.phaseonepartners.com.au/",
    description: "Corporate website focused on trust and professionalism for an Australian firm.",
    tags: ["Corporate", "Web Design", "Strategy"],
    gradient: "from-[#141E30] via-[#1c3557] to-[#243B55]",
    accentColor: "#6366F1",
    mockupBg: "#111827",
    mockupLines: [
      { y: 0, w: "65%", color: "rgba(255,255,255,0.5)" },
      { y: 1, w: "50%", color: "rgba(99,102,241,0.6)" },
      { y: 2, w: "75%", color: "rgba(255,255,255,0.2)" },
      { y: 3, w: "40%", color: "rgba(255,255,255,0.2)" },
    ],
  },
  {
    name: "Protect Group ANZ",
    url: "https://protectgroupanz.com/",
    description: "Security and protection service website with clean, authoritative UI design.",
    tags: ["Security", "UI Design", "Corporate"],
    gradient: "from-[#1a1a1a] via-[#2d2d2d] to-[#414345]",
    accentColor: "#10B981",
    mockupBg: "#1c1c1c",
    mockupLines: [
      { y: 0, w: "60%", color: "rgba(255,255,255,0.4)" },
      { y: 1, w: "42%", color: "rgba(16,185,129,0.6)" },
      { y: 2, w: "55%", color: "rgba(255,255,255,0.2)" },
      { y: 3, w: "70%", color: "rgba(255,255,255,0.15)" },
    ],
  },
  {
    name: "Bridge Appliances",
    url: "https://www.bridgeappliances.com/",
    description: "Modern business website with fully responsive layouts and clean visual hierarchy.",
    tags: ["Business", "Responsive", "Web Design"],
    gradient: "from-[#4a5568] via-[#718096] to-[#a0aec0]",
    accentColor: "#E2E8F0",
    mockupBg: "#2d3748",
    mockupLines: [
      { y: 0, w: "68%", color: "rgba(255,255,255,0.5)" },
      { y: 1, w: "48%", color: "rgba(226,232,240,0.6)" },
      { y: 2, w: "58%", color: "rgba(255,255,255,0.2)" },
      { y: 3, w: "38%", color: "rgba(255,255,255,0.2)" },
    ],
  },
];

function BrowserMockup({ project }: { project: Project }) {
  return (
    <div className="w-full rounded-[1.5rem] overflow-hidden border border-white/10 shadow-2xl bg-[#111] group-hover:border-white/20 transition-colors duration-500">
      {/* Browser chrome */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[#1a1a1a] border-b border-white/5">
        {/* Traffic dots */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
        </div>
        {/* Address bar */}
        <div className="flex-1 flex items-center gap-2 bg-[#0d0d0d] rounded-md px-3 py-1.5 border border-white/5">
          <div className="w-3 h-3 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
            <div className="w-1 h-1 rounded-full bg-white/30" />
          </div>
          <span className="text-[10px] text-white/30 font-mono truncate">
            {project.url.replace("https://", "")}
          </span>
        </div>
        <ArrowUpRight className="w-3.5 h-3.5 text-white/20 flex-shrink-0" />
      </div>

      {/* Mockup content area */}
      <div
        className={`relative aspect-[16/10] overflow-hidden ${project.image ? "" : `bg-gradient-to-br ${project.gradient}`}`}
        style={project.image ? {} : { backgroundColor: project.mockupBg }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <>
            {/* Dot grid */}
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />

            {/* Simulated layout elements */}
            <div className="absolute inset-0 p-6 flex flex-col gap-3">
              {/* Nav bar sim */}
              <div className="flex items-center justify-between mb-2">
                <div className="h-3 w-16 rounded bg-white/20" />
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-2 w-8 rounded bg-white/10" />
                  ))}
                </div>
                <div className="h-5 w-14 rounded-full" style={{ backgroundColor: `${project.accentColor}33` }} />
              </div>

              {/* Hero headline */}
              <div className="mt-2 flex flex-col gap-2">
                <div className="h-5 rounded" style={{ width: project.mockupLines[0].w, backgroundColor: project.mockupLines[0].color }} />
                <div className="h-5 rounded" style={{ width: project.mockupLines[1].w, backgroundColor: project.mockupLines[1].color }} />
              </div>

              {/* Subtitle lines */}
              <div className="flex flex-col gap-1.5 mt-1">
                <div className="h-2.5 rounded" style={{ width: project.mockupLines[2].w, backgroundColor: project.mockupLines[2].color }} />
                <div className="h-2.5 rounded" style={{ width: project.mockupLines[3].w, backgroundColor: project.mockupLines[3].color }} />
              </div>

              {/* CTA buttons */}
              <div className="flex gap-2 mt-2">
                <div className="h-7 w-20 rounded-full" style={{ backgroundColor: project.accentColor + "55" }} />
                <div className="h-7 w-20 rounded-full border border-white/20" />
              </div>

              {/* Content cards row */}
              <div className="flex gap-3 mt-auto">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex-1 rounded-xl bg-white/5 border border-white/5 p-3 flex flex-col gap-1.5">
                    <div className="h-2 w-full rounded bg-white/15" />
                    <div className="h-2 w-2/3 rounded bg-white/10" />
                    <div className="h-2 w-1/2 rounded bg-white/8" />
                  </div>
                ))}
              </div>
            </div>

            {/* Subtle vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </>
        )}

        {/* Hover overlay with link */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-500">
            <ArrowUpRight className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-[120px] bg-[#0A0A0A] relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="inline-block text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4">
            Projects
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            Featured Work
          </h2>
        </motion.div>

        <div className="flex flex-col gap-32 md:gap-44">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9 }}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 lg:gap-20 items-center group`}
              >
                {/* Browser Mockup */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full lg:w-[58%] block"
                  data-testid={`link-project-image-${index}`}
                >
                  <BrowserMockup project={project} />
                </a>

                {/* Content */}
                <div className="w-full lg:w-[42%] flex flex-col justify-center relative">
                  <div className="absolute -top-20 -right-4 lg:-right-10 text-[140px] md:text-[180px] font-black leading-none text-white opacity-[0.025] select-none pointer-events-none -z-10">
                    0{index + 1}
                  </div>

                  <div className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: project.accentColor }}>
                    {project.tags[0]}
                  </div>

                  <h3 className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 font-light leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors w-fit group/link relative"
                    data-testid={`link-project-${index}`}
                  >
                    View Live
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
