import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  name: string;
  url: string;
  description: string;
  tags: string[];
  accentColor: string;
  image: string;
}

const projects: Project[] = [
  {
    name: "Lore Marketing",
    url: "https://loremarketing.com.au/",
    description: "Marketing website with modern layouts and strong branding for an Australian agency.",
    tags: ["Marketing", "Branding", "Web Design"],
    accentColor: "#38BDF8",
    image: "/images/Lore Marketing.png",
  },
  {
    name: "Gemini Glow Medspa",
    url: "https://geminiglowut.com/",
    description: "Skin aesthetics clinic website with modern layouts and strong branding for a medspa in the USA.",
    tags: ["Skin Aesthetics", "UX Design", "Web Design"],
    accentColor: "#F59E0B",
    image: "/images/Gemini Glow Medspa.png",
  },
  {
    name: "Phase One Partners",
    url: "https://www.phaseonepartners.com.au/",
    description: "Corporate website focused on trust and professionalism for an Australian firm.",
    tags: ["Corporate", "Web Design", "Strategy"],
    accentColor: "#6366F1",
    image: "/images/phase one.png",
  },
  {
    name: "Protect Group ANZ",
    url: "https://protectgroupanz.com/",
    description: "Security and protection service website with clean, authoritative UI design.",
    tags: ["Security", "UI Design", "Corporate"],
    accentColor: "#10B981",
    image: "/images/protect group.png",
  },
];

function BrowserMockup({ project }: { project: Project }) {
  return (
    <div className="relative w-full overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-2xl transition-colors duration-500 group-hover:border-foreground/20">
      <img
        src={project.image}
        alt={project.name}
        className="block h-auto w-full"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-primary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="flex h-14 w-14 scale-75 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-transform duration-500 group-hover:scale-100">
          <ArrowUpRight className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-[120px] bg-background relative z-10 overflow-hidden">
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
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground">
            Featured  <span style={{ WebkitTextStroke: "2px hsl(var(--primary))", color: "transparent" }}>Work</span>
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
                  <div className="absolute -top-20 -right-4 lg:-right-10 text-[140px] md:text-[180px] font-black leading-none text-foreground opacity-[0.04] select-none pointer-events-none -z-10">
                    0{index + 1}
                  </div>

                  <div className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: project.accentColor }}>
                    {project.tags[0]}
                  </div>

                  <h3 className="text-4xl md:text-5xl font-black text-foreground mb-5 tracking-tight leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 font-light leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full border border-border bg-foreground/5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground"
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
