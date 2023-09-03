import { presentation } from "../../../content/content";
import Comments from "../../Comments/Comments";
import "./Presentation.scss";

const Presentation = ({
  selectedSection,
  selectedSubSection,
}: {
  selectedSection: "personal" | "professional";
  selectedSubSection: string;
}) => {
  return (
    <div className="presentation-container">
      <div className="selection">
        <div>{selectedSection}</div>
      </div>
      <div className="inner">
        {presentation[selectedSection]?.[selectedSubSection]?.map(
          (line: string, index: number) => (
            <div key={index} className="line">
              <span>{index + 1}</span>
              <Comments code={line} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Presentation;
