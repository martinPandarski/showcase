import { motion } from "motion/react";

const rise = {
  initial: { y: "110%", opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.05 + i * 0.12, duration: 0.9, ease: [0.2, 0.7, 0.2, 1] },
  }),
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100svh] px-6 md:px-10 pt-32 pb-12 flex flex-col justify-between">
      <div className="my-auto pt-12">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mono text-xs uppercase tracking-[0.3em] text-muted mb-6"
        >
          <span className="inline-block w-8 h-px bg-muted align-middle mr-3" />
          Frontend Developer
        </motion.div>

        <h1 className="display text-[15vw] md:text-[13vw] leading-[0.85]">
          <span className="inline-block overflow-hidden align-bottom">
            <motion.span
              custom={0}
              variants={rise}
              initial="initial"
              animate="animate"
              className="inline-block font-extralight"
            >
              Martin
            </motion.span>
          </span>
          <br />
          <span className="inline-block overflow-hidden align-bottom">
            <motion.span
              custom={1}
              variants={rise}
              initial="initial"
              animate="animate"
              className="inline-block font-semibold"
            >
              Pandarski
            </motion.span>
          </span>
          <span className="inline-block overflow-hidden align-bottom">
            <motion.span
              custom={2}
              variants={rise}
              initial="initial"
              animate="animate"
              className="inline-block text-flame"
            >
              .
            </motion.span>
          </span>
        </h1>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 grid md:grid-cols-12 gap-6 items-end"
        >
          <p className="md:col-span-7 text-ink/80 text-lg md:text-xl max-w-2xl leading-snug">
            I build web and mobile experiences — interfaces with weight, motion,
            and craft. Shipping production frontends out of Sofia, Bulgaria.
          </p>
          <div className="md:col-span-4 md:col-start-9 mono text-xs uppercase tracking-[0.25em] text-muted space-y-2">
            <div className="flex justify-between border-b border-line pb-2">
              <span>Based</span>
              <span className="text-ink">Sofia, BG</span>
            </div>
            <div className="flex justify-between">
              <span>Focus</span>
              <span className="text-ink">React · React Native</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6, delay: 1 }}
        className="flex items-end justify-between mono text-[11px] uppercase tracking-[0.25em] text-muted"
      >
        <div className="flex items-center gap-3">
          <div className="inline-block w-px h-12 bg-gradient-to-b from-transparent via-ink to-transparent" />
          <span>scroll</span>
        </div>
        <span>(01 / 03)</span>
      </motion.div>
    </section>
  );
};

export default Hero;
