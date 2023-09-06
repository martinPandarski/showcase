import { Form, Formik, Field, ErrorMessage } from "formik";
import "./Form.scss";

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
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      onSubmit={(values, actions) => {
        console.log("v", values);
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...values }),
        })
          .then(() => {
            alert("Success");
            actions.resetForm();
          })
          .catch(() => {
            alert("Error");
          })
          .finally(() => actions.setSubmitting(false));
      }}
      //   validate={(values) => {
      //     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      //     const errors = {
      //       name: "",
      //       email: "",
      //       message: "",
      //     };
      //     if (!values.name) {
      //       errors.name = "Name Required";
      //     }
      //     if (!values.email || !emailRegex.test(values.email)) {
      //       errors.email = "Valid Email Required";
      //     }
      //     if (!values.message) {
      //       errors.message = "Message Required";
      //     }
      //     return errors;
      //   }}
    >
      {({ isSubmitting, handleChange }) => (
        //@ts-ignore
        <Form
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          name="contact"
        >
          <Field type="hidden" name="form-name" />
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
  );
};

export default FormComponent;
