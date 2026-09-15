import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);

  const springCfg = { stiffness: 120, damping: 22, mass: 0.6 };
  const ringX = useSpring(mouseX, springCfg);
  const ringY = useSpring(mouseY, springCfg);

  useEffect(() => {
    // Hide system cursor globally
    document.documentElement.style.cursor = "none";

    function onMove(e: MouseEvent) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    }

    function onEnter(e: MouseEvent) {
      const el = e.target as HTMLElement;
      if (el.closest("a, button, [role='button'], input, textarea, select, label")) {
        setHovering(true);
      }
    }

    function onLeave(e: MouseEvent) {
      const el = e.target as HTMLElement;
      if (el.closest("a, button, [role='button'], input, textarea, select, label")) {
        setHovering(false);
      }
    }

    function onDown() { setClicking(true); }
    function onUp() { setClicking(false); }

    function onLeaveWindow() { setVisible(false); }
    function onEnterWindow() { setVisible(true); }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onEnter);
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeaveWindow);
    document.addEventListener("mouseenter", onEnterWindow);

    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onEnter);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeaveWindow);
      document.removeEventListener("mouseenter", onEnterWindow);
    };
  }, [mouseX, mouseY, visible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Dot — exact position, no lag */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: clicking ? 0.5 : hovering ? 1.6 : 1,
          backgroundColor: hovering ? "hsl(var(--primary))" : "#ffffff",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "inherit" }} />
      </motion.div>

      {/* Ring — spring-lagged */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: "hsl(var(--primary) / 0.6)",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          width: clicking ? 24 : hovering ? 56 : 40,
          height: clicking ? 24 : hovering ? 56 : 40,
          borderWidth: hovering ? "2px" : "1.5px",
          backgroundColor: hovering ? "hsl(var(--primary) / 0.06)" : "transparent",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />

      {/* Ambient glow following ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: 200,
          height: 200,
          background: "radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, transparent 70%)",
        }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
}
