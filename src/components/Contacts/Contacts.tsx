import { motion } from "motion/react";
import PageWrap from "../PageWrap";
import ContactForm from "./ContactForm";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

const Contacts: React.FC = () => (
  <PageWrap>
    <section id="contact" className="px-6 md:px-10 pt-32 pb-12">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-6">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="mono text-xs uppercase tracking-[0.3em] text-muted mb-8"
          >
            (contact) Open for collaborations
          </motion.div>
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="display text-[14vw] md:text-[9vw] leading-[0.85]"
          >
            <span className="font-extralight">Let's build</span>
            <br />
            <span className="font-semibold">something</span>
            <span className="text-flame">.</span>
          </motion.h2>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 space-y-6 mono text-sm"
          >
            <div>
              <div className="text-muted uppercase tracking-[0.25em] text-[11px] mb-2">
                Email
              </div>
              <a
                href="mailto:martinpandarski@gmail.com"
                className="text-ink text-lg hover:text-flame transition"
              >
                martinpandarski@gmail.com
              </a>
            </div>
            <div>
              <div className="text-muted uppercase tracking-[0.25em] text-[11px] mb-2">
                Phone
              </div>
              <a
                href="tel:+359886235381"
                className="text-ink text-lg hover:text-flame transition"
              >
                +359 886 235 381
              </a>
            </div>
            <div>
              <div className="text-muted uppercase tracking-[0.25em] text-[11px] mb-2">
                Elsewhere
              </div>
              <div className="flex gap-6 text-ink">
                <a
                  href="https://github.com/martinPandarski"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-flame transition"
                >
                  GitHub
                </a>
                <a
                  href="https://bg.linkedin.com/in/martin-pandarski"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-flame transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="md:col-span-5 md:col-start-8"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  </PageWrap>
);

export default Contacts;
