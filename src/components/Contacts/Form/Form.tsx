import { Form, Formik, Field, ErrorMessage } from "formik";
import "./Form.scss";
import { createRef } from "react";
import Recaptcha from "react-google-recaptcha";

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

const FormComponent: React.FC<FormComponentProps> = ({
  updateCodeRepresentation,
}) => {
  const recaptchaRef = createRef<any>();

  const handleSubmit = (values: any, actions: any) => {
    const recaptchaValue = recaptchaRef.current.getValue();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        "g-recaptcha-response": recaptchaValue,
        ...values,
      }),
    })
      .then(() => {
        alert("Success");
        actions.resetForm();
      })
      .catch(() => {
        alert("Error");
      })
      .finally(() => actions.setSubmitting(false));
  };
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        onSubmit={handleSubmit}
        validate={(values) => {
          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
          const errors = {
            name: "",
            email: "",
            message: "",
          };
          if (!values.name) {
            errors.name = "Name Required";
          }
          if (!values.email || !emailRegex.test(values.email)) {
            errors.email = "Valid Email Required";
          }
          if (!values.message) {
            errors.message = "Message Required";
          }
          return errors;
        }}
      >
        {({ isSubmitting, handleChange }) => (
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

            <button disabled={isSubmitting} type="submit">
              submit-message
            </button>
          </Form>
        )}
      </Formik>
      <Recaptcha
        ref={recaptchaRef}
        sitekey={RECAPTCHA_KEY}
        size="normal"
        id="recaptcha-google"
      />
    </>
  );
};

export default FormComponent;
