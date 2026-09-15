import { createContext, useContext, useEffect, useState } from "react";

export type AccentPreset = {
  name: string;
  hsl: string;
  hex: string;
};

export const ACCENTS: AccentPreset[] = [
  { name: "Blue",    hsl: "225 100% 67%", hex: "#5B8CFF" },
  { name: "Purple",  hsl: "258 82% 76%",  hex: "#A78BFA" },
  { name: "Rose",    hsl: "350 89% 60%",  hex: "#F43F5E" },
  { name: "Emerald", hsl: "160 60% 45%",  hex: "#2DB87D" },
  { name: "Amber",   hsl: "38 92% 50%",   hex: "#F59E0B" },
];

const STORAGE_KEY = "portfolio-accent";

type AccentCtx = {
  accent: AccentPreset;
  setAccent: (a: AccentPreset) => void;
};

const AccentContext = createContext<AccentCtx>({
  accent: ACCENTS[0],
  setAccent: () => {},
});

export function AccentProvider({ children }: { children: React.ReactNode }) {
  const [accent, setAccentState] = useState<AccentPreset>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return ACCENTS.find((a) => a.name === saved) ?? ACCENTS[0];
  });

  function applyAccent(a: AccentPreset) {
    const root = document.documentElement;
    root.style.setProperty("--primary", a.hsl);
    root.style.setProperty("--sidebar-primary", a.hsl);
  }

  useEffect(() => { applyAccent(accent); }, [accent]);

  function setAccent(a: AccentPreset) {
    setAccentState(a);
    localStorage.setItem(STORAGE_KEY, a.name);
    applyAccent(a);
  }

  return (
    <AccentContext.Provider value={{ accent, setAccent }}>
      {children}
    </AccentContext.Provider>
  );
}

export function useAccent() {
  return useContext(AccentContext);
}
