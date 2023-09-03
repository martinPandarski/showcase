import { ReactComponent as RedFolderIcon } from "../assets/red-folder.svg";
import { ReactComponent as GreenFolderIcon } from "../assets/green-folder.svg";
import { ReactComponent as BlueFolderIcon } from "../assets/blue-folder.svg";
import { ReactComponent as SubSectionIcon } from "../assets/subsection.svg";

interface SubSection {
  title: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface Section {
  title: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  subSections: SubSection[];
}

interface Category {
  title: string;
  sections: Section[];
}

interface PresentationContent {
  personal: {
    [key: string]: string[];
  };
  professional: {
    [key: string]: string[];
  };
}

const categoryContent: Record<"personal" | "professional", Category> = {
  personal: {
    title: "personal-info",
    sections: [
      {
        title: "bio",
        Icon: RedFolderIcon,
        subSections: [],
      },
      {
        title: "interests",
        Icon: GreenFolderIcon,
        subSections: [],
      },
      {
        title: "education",
        Icon: BlueFolderIcon,
        subSections: [
          {
            title: "post-university",
            Icon: SubSectionIcon,
          },
          {
            title: "university",
            Icon: SubSectionIcon,
          },
        ],
      },
    ],
  },
  professional: {
    title: "professional-info",
    sections: [
      {
        title: "bio",
        Icon: RedFolderIcon,
        subSections: [],
      },
      {
        title: "interests",
        Icon: GreenFolderIcon,
        subSections: [],
      },
      {
        title: "education",
        Icon: BlueFolderIcon,
        subSections: [
          {
            title: "post-university",
            Icon: SubSectionIcon,
          },
          {
            title: "university",
            Icon: SubSectionIcon,
          },
        ],
      },
    ],
  },
};

const presentation: PresentationContent = {
  personal: {
    bio: [
      "// About me",
      "// I have about 2 years of experience in web development",
      "// and I mainly specialize in web development with React",
      "// however I have worked on a couple of projects with NuxtJS and React Native.",
      "// I am constantly trying to perfect my skills by learning",
      "// new techniques and methodologies in Frontend development.",
    ],
    interests: [],
    university: [
      "// I have a Bachelors degree in International Relations from Sofia University.",
      "// During my 4 years studing I learned a lot about EU Law, Constitutional law,",
      "// Private and Maritime law.",
    ],
    ["post-university"]: [
      "// Shortly after graduating Sofia University I took up coding lessons at SoftUni",
      "// as it was a passion I intended to be as a hobby. During my studies there I learned",
      "// JavaScript, HTML and CSS. Also, after gaining confidence in vanilla JS I started making",
      "// small projects in Angular and React. However, React got me really interested and I decided",
      "// I will focus on it more.",
    ],
  },
  professional: {
    bio: [
      "// About me",
      "// I have about 2 years of experience in web development",
      "// and I mainly specialize in web development with React",
      "// however I have worked on a couple of projects with NuxtJS and React Native.",
      "// I am constantly trying to perfect my skills by learning",
      "// new techniques and methodologies in Frontend development.",
    ],
  },
};

export { categoryContent, presentation };
