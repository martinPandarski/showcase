import { useState } from "react";
import { Form, Formik, Field, ErrorMessage, type FormikHelpers } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import { object, string } from "yup";
import { motion, AnimatePresence } from "motion/react";
import { useMagnetic } from "../../hooks/useMagnetic";

const RECAPTCHA_KEY = "6LcpYAQoAAAAAElLP-DdbSBLZsBt3ibZl6jlm6lT";

interface FormData {
  name: string;
  email: string;
  message: string;
  [key: string]: string;
}

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

const schema = object().shape({
  name: string().required("Name is required"),
  email: string().email("Invalid email").required("Email is required"),
  message: string().required("Message is required"),
});

const ContactForm: React.FC = () => {
  const [token, setToken] = useState("");
  const magneticRef = useMagnetic<HTMLButtonElement>(0.2);

  const handleSubmit = async (
    values: FormData,
    actions: FormikHelpers<FormData>
  ) => {
    try {
      actions.setSubmitting(true);
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...(token ? { "g-recaptcha-response": token } : {}),
          ...values,
        }),
      });
      if (res.ok) {
        actions.resetForm();
        actions.setStatus("sent");
      } else {
        actions.setStatus("error");
      }
    } catch {
      actions.setStatus("error");
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      {({ isSubmitting, status, setStatus }) => (
        <AnimatePresence mode="wait">
          {status === "sent" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="pt-6 space-y-6"
            >
              <div className="display text-4xl md:text-5xl font-light">
                Message sent<span className="text-flame">.</span>
              </div>
              <p className="text-ink/70 text-lg">
                Thanks — I'll get back to you shortly.
              </p>
              <button
                type="button"
                onClick={() => setStatus("initial")}
                className="mono text-xs uppercase tracking-[0.3em] hover:text-flame transition"
              >
                Send another →
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-recaptcha="true"
                netlify-honeypot="bot-field"
                className="space-y-2 pt-2"
              >
                <Field type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don't fill this out: <Field name="bot-field" />
                  </label>
                </p>

                <div>
                  <label
                    htmlFor="name"
                    className="mono text-[11px] uppercase tracking-[0.3em] text-muted"
                  >
                    _name
                  </label>
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="input-line"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="mono text-[11px] uppercase tracking-[0.25em] text-flame mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mono text-[11px] uppercase tracking-[0.3em] text-muted"
                  >
                    _email
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@domain.com"
                    className="input-line"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="mono text-[11px] uppercase tracking-[0.25em] text-flame mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mono text-[11px] uppercase tracking-[0.3em] text-muted"
                  >
                    _message
                  </label>
                  <Field
                    id="message"
                    name="message"
                    as="textarea"
                    rows={4}
                    placeholder="Tell me about the project..."
                    className="input-line resize-none"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="mono text-[11px] uppercase tracking-[0.25em] text-flame mt-1"
                  />
                </div>

                <div className="pt-8">
                  <ReCAPTCHA
                    sitekey={RECAPTCHA_KEY}
                    onChange={(t) => t && setToken(t)}
                    theme="light"
                  />
                </div>

                {status === "error" && (
                  <div className="mono text-[11px] uppercase tracking-[0.25em] text-flame pt-2">
                    Something went wrong. Try again.
                  </div>
                )}

                <div className="pt-8 flex items-center justify-end">
                  <button
                    ref={magneticRef}
                    type="submit"
                    disabled={isSubmitting || !token}
                    className="magnetic group flex items-center gap-3 mono text-xs uppercase tracking-[0.3em] hover:text-flame disabled:opacity-40 disabled:hover:text-ink"
                  >
                    <span>
                      {isSubmitting ? "Sending..." : "Send message"}
                    </span>
                    <span className="inline-block w-12 h-px bg-ink group-hover:bg-flame transition" />
                    <span>→</span>
                  </button>
                </div>
              </Form>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </Formik>
  );
};

export default ContactForm;
