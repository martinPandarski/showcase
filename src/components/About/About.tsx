/// <reference types="vite-plugin-svgr/client" />
import { useState } from "react";
import classNames from "classnames";
import { ReactComponent as ProfessionalInfoIcon } from "../../assets/professional-info.svg";
import { ReactComponent as PersonalInfoIcon } from "../../assets/personal-info.svg";
import { ReactComponent as CategoryIcon } from "../../assets/category-arrow.svg";
import { ReactComponent as ArrowIcon } from "../../assets/arrow.svg";

import { categoryContent } from "../../content/content";
import Presentation from "./Presentation/Presentation";
import "./About.scss";

const About = () => {
  const [selectedSection, setSelectedSection] = useState<
    "personal" | "professional"
  >("personal");
  const [selectedSubSection, setSelectedSubsection] = useState("personal");
  const [expandedSection, setExpandSection] = useState("");

  const handleSelection = (selection: "personal" | "professional") => {
    setSelectedSection(selection);
    setSelectedSubsection(selection);
  };
  return (
    <div className="about-wrapper layout-container">
      <div className="info-panel">
        <div className="info-sections">
          <ProfessionalInfoIcon
            className={selectedSection === "professional" ? "active" : ""}
            onClick={() => handleSelection("professional")}
          />
          <PersonalInfoIcon
            className={selectedSection === "personal" ? "active" : ""}
            onClick={() => handleSelection("personal")}
          />
        </div>
        <div className="categories">
          <div className="main-category">
            <div className="upper">
              <div>
                <CategoryIcon />
              </div>
              <span>{categoryContent[selectedSection].title}</span>
            </div>
            <div className="main">
              {categoryContent[selectedSection].sections.map(
                ({ Icon, title, subSections }, index) => {
                  const hasSubSections = subSections.length > 0;
                  const handleSelection = () => {
                    if (!hasSubSections) {
                      setSelectedSubsection(title);
                    }
                  };
                  const handleShouldExpand = (title: string) => {
                    if (hasSubSections) {
                      if (expandedSection) {
                        setExpandSection("");
                      } else {
                        setExpandSection(title);
                      }
                    }
                  };
                  return (
                    <div className="section-wrapper" key={index}>
                      <div className="section">
                        <div>
                          <ArrowIcon
                            onClick={() => handleShouldExpand(title)}
                            className={classNames("arrow-icon", {
                              expanded: expandedSection === title,
                            })}
                          />
                        </div>
                        <div
                          className="section-inner"
                          onClick={handleSelection}
                        >
                          <Icon />
                          <span>{title}</span>
                        </div>
                      </div>
                      {hasSubSections &&
                        expandedSection === title &&
                        subSections.map(
                          ({ Icon: SubIcon, title: subText }, i) => (
                            <div
                              className="section-inner"
                              key={i}
                              onClick={() => setSelectedSubsection(subText)}
                            >
                              <SubIcon />
                              <span>{subText}</span>
                            </div>
                          )
                        )}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
      <Presentation
        selectedSection={selectedSection}
        selectedSubSection={selectedSubSection}
      />
    </div>
  );
};

export default About;
