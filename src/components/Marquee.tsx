const items = [
  { text: "TypeScript", weight: "font-light" },
  { text: "React", weight: "font-extralight" },
  { text: "React Native", weight: "font-semibold" },
  { text: "Expo", weight: "font-light" },
  { text: "Framer Motion", weight: "font-extralight" },
];

const Row: React.FC<{ ariaHidden?: boolean }> = ({ ariaHidden }) => (
  <div
    className="flex shrink-0 items-center gap-10 pr-10 display text-5xl md:text-7xl"
    aria-hidden={ariaHidden}
  >
    {items.map((item, i) => (
      <span key={i} className="flex items-center gap-10">
        <span className={item.weight}>{item.text}</span>
        <span className={i % 2 === 0 ? "text-flame" : "text-ink/40"}>
          {i % 2 === 0 ? "✦" : "/"}
        </span>
      </span>
    ))}
  </div>
);

const Marquee: React.FC = () => (
  <section className="hairline py-10 overflow-hidden relative">
    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bone to-transparent z-10" />
    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bone to-transparent z-10" />
    <div className="flex whitespace-nowrap marquee-track">
      <Row />
      <Row ariaHidden />
    </div>
  </section>
);

export default Marquee;
