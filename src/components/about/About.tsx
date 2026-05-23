import { motion } from "motion/react";
import PageWrap from "../PageWrap";

const sections = [
  { n: "01", label: "Background", line: "Five years building interfaces." },
  { n: "02", label: "Stack", line: "TypeScript, React, React Native, Expo, Framer Motion." },
  { n: "03", label: "Approach", line: "Craft over template." },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
};

const About: React.FC = () => (
  <PageWrap>
    <section className="px-6 md:px-10 pt-32 pb-32">
      <motion.div
        {...fadeUp}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mono text-xs uppercase tracking-[0.3em] text-muted mb-16"
      >
        (about) Notes & Process
      </motion.div>

      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="sticky top-32 space-y-12">
            {sections.map((s, i) => (
              <motion.div
                key={s.n}
                {...fadeUp}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex items-start gap-6"
              >
                <div
                  className={
                    "display text-7xl leading-none font-semibold " +
                    (i === 0 ? "text-flame" : "text-ink/20")
                  }
                >
                  {s.n}
                </div>
                <div>
                  <div className="mono text-[11px] uppercase tracking-[0.3em] text-muted mb-2">
                    {s.label}
                  </div>
                  <div className="display text-2xl font-light">{s.line}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7 space-y-12">
          <motion.p
            {...fadeUp}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="display text-3xl md:text-4xl leading-tight font-light"
          >
            I'm a frontend developer with a bias for{" "}
            <span className="text-flame">motion</span>, type, and the small
            details that make a product feel inevitable.
          </motion.p>
          <motion.p
            {...fadeUp}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-ink/70 text-lg leading-relaxed"
          >
            I've spent the last few years building production interfaces in
            fintech — first at M&M Fintech, now at Nexo — across both web and
            mobile. TypeScript end-to-end, React on the web, React Native and
            Expo on mobile, and Framer Motion to make the boring parts feel less
            boring.
          </motion.p>
          <motion.blockquote
            {...fadeUp}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="border-l-2 border-flame pl-6 display text-3xl font-light text-ink/95"
          >
            "The interface is the product. Everything else is the bill."
          </motion.blockquote>
          <motion.p
            {...fadeUp}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-ink/70 text-lg leading-relaxed"
          >
            Outside work: long walks around Sofia, books, and the occasional
            side project I'll probably never ship.
          </motion.p>
        </div>
      </div>
    </section>
  </PageWrap>
);

export default About;
