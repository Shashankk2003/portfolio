export function MarqueeStrip() {
  const items = [
    "UI/UX Design", "●", "Figma", "●", "Prototyping", "●",
    "User Research", "●", "Web Design", "●", "Design Systems", "●",
    "Adobe Illustrator", "●", "Wireframing", "●", "Responsive Design", "●"
  ];

  return (
    <div className="w-full bg-primary py-4 overflow-hidden flex whitespace-nowrap border-y border-primary">
      <div className="animate-marquee flex items-center shrink-0 min-w-full">
        {items.map((item, idx) => (
          <span 
            key={`a-${idx}`} 
            className={`mx-4 text-sm font-bold uppercase tracking-widest ${item === '●' ? 'text-primary-foreground/50 text-[10px]' : 'text-primary-foreground'}`}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="animate-marquee flex items-center shrink-0 min-w-full">
        {items.map((item, idx) => (
          <span 
            key={`b-${idx}`} 
            className={`mx-4 text-sm font-bold uppercase tracking-widest ${item === '●' ? 'text-primary-foreground/50 text-[10px]' : 'text-primary-foreground'}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
