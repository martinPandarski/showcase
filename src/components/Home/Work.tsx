import { motion } from "motion/react";
import clsx from "clsx";
import { workItems } from "../../content/work";

const weights = {
  extralight: "font-extralight",
  light: "font-light",
  semibold: "font-semibold",
} as const;

const Work: React.FC = () => (
  <section id="work" className="px-6 md:px-10 py-32">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="flex items-baseline justify-between mb-16"
    >
      <div className="mono text-xs uppercase tracking-[0.3em] text-muted">
        (02) Selected Work
      </div>
      <div className="mono text-xs uppercase tracking-[0.3em] text-muted">
        2022 — Now
      </div>
    </motion.div>

    <div>
      {workItems.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            delay: i * 0.08,
            ease: [0.2, 0.7, 0.2, 1],
          }}
          className="work-row hairline py-10 grid grid-cols-12 gap-4 items-center"
        >
          <div className="col-span-1 mono text-xs text-muted">{item.year}</div>
          <div
            className={clsx(
              "col-span-8 display text-4xl md:text-6xl leading-none",
              weights[item.weight ?? "light"]
            )}
          >
            {item.title}
            {item.titleAccent && (
              <span className="text-muted"> {item.titleAccent}</span>
            )}
          </div>
          <div className="col-span-3 mono text-xs text-muted uppercase tracking-widest text-right">
            {item.role}
          </div>
        </motion.div>
      ))}
      <div className="hairline" />
    </div>
  </section>
);

export default Work;
