import "./Contacts.scss";
import { ReactComponent as CategoryIcon } from "../../assets/category-arrow.svg";
import { ReactComponent as EmailIcon } from "../../assets/email.svg";
import { ReactComponent as PhoneIcon } from "../../assets/phone.svg";
import FormComponent from "./Form/Form";
import { useState } from "react";
import Comments from "../Comments/Comments";

const initialCodeRepresentation = [
  "const sendBtn = document.querySelector('#sendBtn');",
  "",
  "const message = {",
  " name: '',",
  " email: '',",
  " message: '',",
  "}",
  "",
  "sendBtn.addEventListener('click', () => { form.send(message); })",
];
const Contacts: React.FC = () => {
  const [codeRepresentation, setCodeRepresentation] = useState<string[]>(
    initialCodeRepresentation
  );

  const updateCodeRepresentation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setCodeRepresentation((prevCodeRepresentation) => {
      const updatedCode = [...prevCodeRepresentation];
      const fieldIndex = updatedCode.findIndex((line) =>
        line.includes(`${name}:`)
      );

      if (fieldIndex !== -1) {
        updatedCode[fieldIndex] = ` ${name}: '${value}',`;
      }

      return updatedCode;
    });
  };
  return (
    <div className="contacts-wrapper grid-container">
      <div className="info-panel">
        <div className="upper">
          <div>
            <CategoryIcon />
          </div>
          <span>contacts</span>
        </div>
        <div className="upper">
          <EmailIcon />
          <span>martinpandarski@gmail.com</span>
        </div>
        <div className="upper">
          <PhoneIcon />
          <span>+359886235381</span>
        </div>
      </div>
      <div className="right">
        <FormComponent updateCodeRepresentation={updateCodeRepresentation} />
        <div className="snippet">
          {codeRepresentation?.map((line: string, index: number) => (
            <div key={index} className="line">
              <span className="index">{index + 1}</span>
              <Comments code={line} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
