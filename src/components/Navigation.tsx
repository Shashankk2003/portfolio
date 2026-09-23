import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAccent, ACCENTS } from "@/contexts/AccentContext";

export function Navigation() {
  const { accent, setAccent } = useAccent();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const paletteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (paletteRef.current && !paletteRef.current.contains(e.target as Node)) {
        setPaletteOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      animate={{
        paddingTop: scrolled ? "10px" : "24px",
        paddingBottom: scrolled ? "10px" : "24px",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-2xl border-b border-border shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group flex-shrink-0" data-testid="link-home">
          <motion.div
            animate={{ width: scrolled ? 32 : 40, height: scrolled ? 32 : 40 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold tracking-tight group-hover:scale-105 transition-transform overflow-hidden"
            style={{ fontSize: scrolled ? 12 : 15 }}
          >
            SK
          </motion.div>
          <AnimatePresence>
            {!scrolled && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.25 }}
                className="font-bold text-lg tracking-widest uppercase text-foreground hidden sm:block overflow-hidden whitespace-nowrap"
              >
                Shashank Kapoor
              </motion.span>
            )}
          </AnimatePresence>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          <AnimatePresence mode="wait">
            {scrolled ? (
              <motion.nav
                key="collapsed"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-1 bg-foreground/5 backdrop-blur-xl border border-border rounded-full px-2 py-1.5"
              >
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground hover:text-foreground hover:bg-foreground/10 px-3 py-1.5 rounded-full transition-all"
                    data-testid={`link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </a>
                ))}
              </motion.nav>
            ) : (
              <motion.nav
                key="expanded"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-6"
              >
                <ul className="flex items-center gap-6">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-xs uppercase tracking-widest font-semibold text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                        data-testid={`link-${link.name.toLowerCase()}`}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>

        {/* Right controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* Palette picker */}
          <div className="relative" ref={paletteRef}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setPaletteOpen((o) => !o)}
              data-testid="button-palette"
              className="rounded-full hover:bg-foreground/5 w-8 h-8 relative"
              title="Change accent color"
            >
              <Palette className="h-4 w-4" />
              {/* Active color dot */}
              <span
                className="absolute bottom-0.5 right-0.5 w-2 h-2 rounded-full border border-background"
                style={{ backgroundColor: accent.hex }}
              />
            </Button>

            <AnimatePresence>
              {paletteOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -4 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -4 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute top-full right-0 mt-2 bg-popover border border-border rounded-2xl p-3 shadow-2xl min-w-[160px]"
                >
                  <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-2.5 px-1">
                    Accent Color
                  </p>
                  <div className="flex flex-col gap-1">
                    {ACCENTS.map((a) => (
                      <button
                        key={a.name}
                        onClick={() => { setAccent(a); setPaletteOpen(false); }}
                        className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-foreground/5 transition-colors w-full text-left group"
                      >
                        <span
                          className="w-5 h-5 rounded-full flex-shrink-0 ring-2 ring-offset-2 ring-offset-popover transition-all duration-200"
                          style={{
                            backgroundColor: a.hex,
                            boxShadow: accent.name === a.name ? `0 0 0 2px ${a.hex}` : "none",
                          }}
                        />
                        <span className={`text-xs font-bold transition-colors ${accent.name === a.name ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
                          {a.name}
                        </span>
                        {accent.name === a.name && (
                          <span className="ml-auto text-[10px] font-black" style={{ color: a.hex }}>✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Button
            className="rounded-full px-5 h-9 text-xs uppercase tracking-widest font-bold bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 transition-transform"
            data-testid="button-hire-me"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get in Touch
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile palette */}
          <div className="relative" ref={undefined}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setPaletteOpen((o) => !o)}
              className="rounded-full hover:bg-foreground/5 w-8 h-8 relative"
            >
              <Palette className="h-4 w-4" />
              <span
                className="absolute bottom-0.5 right-0.5 w-2 h-2 rounded-full border border-background"
                style={{ backgroundColor: accent.hex }}
              />
            </Button>
            <AnimatePresence>
              {paletteOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -4 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full right-0 mt-2 bg-popover border border-border rounded-2xl p-3 shadow-2xl min-w-[160px] z-50"
                >
                  <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-2.5 px-1">Accent Color</p>
                  <div className="flex flex-col gap-1">
                    {ACCENTS.map((a) => (
                      <button
                        key={a.name}
                        onClick={() => { setAccent(a); setPaletteOpen(false); }}
                        className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-foreground/5 transition-colors w-full text-left"
                      >
                        <span className="w-5 h-5 rounded-full flex-shrink-0" style={{ backgroundColor: a.hex, boxShadow: accent.name === a.name ? `0 0 0 2px ${a.hex}` : "none" }} />
                        <span className={`text-xs font-bold ${accent.name === a.name ? "text-foreground" : "text-muted-foreground"}`}>{a.name}</span>
                        {accent.name === a.name && <span className="ml-auto text-[10px] font-black" style={{ color: a.hex }}>✓</span>}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full hover:bg-foreground/5 w-8 h-8"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background/98 backdrop-blur-2xl border-b border-border p-6 shadow-2xl md:hidden"
          >
            <ul className="flex flex-col gap-5">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-lg font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-border">
                <Button
                  className="w-full h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm uppercase tracking-widest font-bold"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get in Touch
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
