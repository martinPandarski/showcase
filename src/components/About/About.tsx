/// <reference types="vite-plugin-svgr/client" />
import { useState } from "react";
import classNames from "classnames";
import { ReactComponent as ProfessionalInfoIcon } from "../../assets/professional-info.svg";
import { ReactComponent as PersonalInfoIcon } from "../../assets/personal-info.svg";
import { ReactComponent as CategoryIcon } from "../../assets/category-arrow.svg";
import { ReactComponent as ArrowIcon } from "../../assets/arrow.svg";
import { ReactComponent as EmailIcon } from "../../assets/email.svg";
import { ReactComponent as PhoneIcon } from "../../assets/phone.svg";

import "./About.scss";
import { categoryContent } from "../../content/content";
import Presentation from "./Presentation/Presentation";

const About = () => {
  const [selectedSection, setSelectedSection] = useState<
    "personal" | "professional"
  >("personal");
  const [selectedSubSection, setSelectedSubsection] = useState("");
  const [expandedSection, setExpandSection] = useState("");
  return (
    <div className="about-wrapper">
      <div className="info-panel">
        <div className="info-sections">
          <ProfessionalInfoIcon
            className={selectedSection === "professional" ? "active" : ""}
            onClick={() => setSelectedSection("professional")}
          />
          <PersonalInfoIcon
            className={selectedSection === "personal" ? "active" : ""}
            onClick={() => setSelectedSection("personal")}
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
            <div className="upper">
              <CategoryIcon />
              <span>contacts</span>
            </div>
            <div className="contacts">
              <EmailIcon />
              <span>martinpandarski@gmail.com</span>
            </div>
            <div className="contacts">
              <PhoneIcon />
              <span>+359886235381</span>
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
