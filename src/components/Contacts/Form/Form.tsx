import { Form, Formik, Field, ErrorMessage, FormikHelpers } from "formik";
import "./Form.scss";
import { createRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { object, string } from "yup";

const RECAPTCHA_KEY = "6LcpYAQoAAAAAElLP-DdbSBLZsBt3ibZl6jlm6lT";
interface FormComponentProps {
  updateCodeRepresentation: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
  [key: string]: string;
}

const encode = (data: FormData) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const FormSchema = object().shape({
  name: string().required("Name is required"),
  message: string().required("Message is required"),
  email: string().email("Invalid email").required("Email is required"),
});

const FormComponent: React.FC<FormComponentProps> = ({
  updateCodeRepresentation,
}) => {
  const recaptchaRef = createRef<ReCAPTCHA>();
  const recaptchaValue = recaptchaRef.current?.getValue();

  const handleSubmit = async (
    values: FormData,
    actions: FormikHelpers<FormData>
  ) => {
    try {
      actions.setSubmitting(true);
      const result = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...(recaptchaValue ? { "g-recaptcha-response": recaptchaValue } : {}),
          ...values,
        }),
      });
      if (result.status === 200) {
        actions.resetForm();
        actions.setSubmitting(false);
        actions.setStatus("sent");
      }
    } catch {
      alert("Error");
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <div className="form-wrapper">
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={FormSchema}
      >
        {({ isSubmitting, handleChange, status, setStatus }) => {
          if (status !== "sent") {
            return (
              <Form name="contact" method="POST" className="form">
                <Field type="hidden" name="form-name" value="contact" />
                <Field type="hidden" name="bot-field" />
                <div className="form-group">
                  <label htmlFor="name">_name:</label>
                  <Field
                    name="name"
                    type="text"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      updateCodeRepresentation(e);
                      handleChange(e);
                    }}
                  />
                  <ErrorMessage name="name" component="div" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">_email:</label>
                  <Field
                    name="email"
                    type="email"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      updateCodeRepresentation(e);
                      handleChange(e);
                    }}
                  />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">_message:</label>
                  <Field
                    name="message"
                    as="textarea"
                    rows="4"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      updateCodeRepresentation(e);
                      handleChange(e);
                    }}
                  />
                  <ErrorMessage name="message" component="div" />
                </div>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={RECAPTCHA_KEY}
                  size="normal"
                  id="recaptcha-google"
                />
                <button
                  disabled={isSubmitting || !recaptchaValue}
                  type="submit"
                >
                  submit-message
                </button>
              </Form>
            );
          }
          return (
            <div className="success">
              <div>Thank You! 🤘</div>
              <p>
                Your message has been accepted. You will recieve answer really
                soon!
              </p>
              <button onClick={() => setStatus("initial")}>
                send-new-message
              </button>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormComponent;
