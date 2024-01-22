import { ReactComponent as RedFolderIcon } from "../assets/red-folder.svg";
import { ReactComponent as GreenFolderIcon } from "../assets/green-folder.svg";
import { ReactComponent as BlueFolderIcon } from "../assets/blue-folder.svg";
import { ReactComponent as PurpleFolderIcon } from "../assets/purple-folder.svg";
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
        title: "Bio",
        Icon: RedFolderIcon,
        subSections: [],
      },
      {
        title: "Interests",
        Icon: GreenFolderIcon,
        subSections: [],
      },
      {
        title: "Education",
        Icon: BlueFolderIcon,
        subSections: [
          {
            title: "Post-university",
            Icon: SubSectionIcon,
          },
          {
            title: "University",
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
        title: "MM Fintech",
        Icon: RedFolderIcon,
        subSections: [],
      },
      {
        title: "FidWeb",
        Icon: GreenFolderIcon,
        subSections: [],
      },
      {
        title: "BoomDev",
        Icon: BlueFolderIcon,
        subSections: [],
      },
      {
        title: "SoftUni",
        Icon: PurpleFolderIcon,
        subSections: [],
      },
    ],
  },
};

const presentation: PresentationContent = {
  personal: {
    Bio: [
      "// About me",
      "// I have about 3 years of experience in web development",
      "// and I mainly specialize in web development with React",
      "// however I have worked on a couple of projects with NuxtJS and React Native.",
      "// I am constantly trying to perfect my skills by learning",
      "// new techniques and methodologies in Frontend development.",
    ],
    Interests: [],
    University: [
      "// I have a Bachelors degree in International Relations from Sofia University.",
      "// During my 4 years studing I learned a lot about EU Law, Constitutional law,",
      "// Private and Maritime law.",
    ],
    ["Post-university"]: [
      "// Shortly after graduating Sofia University I took up coding lessons at SoftUni",
      "// as it was a passion I intended to be as a hobby. During my studies there I learned",
      "// JavaScript, HTML and CSS. Also, after gaining confidence in vanilla JS I started making",
      "// small projects in Angular and React. However, React got me really interested and I decided",
      "// I will focus on it more.",
    ],
  },
  professional: {
    ["MM Fintech"]: [
      "// Working in the sphere of FinTech providing clients with a Payment Service Provider solution and offshore banking.",
      "// I have worked on several projects which have different stacks:",
      "// Portal platforms, built with React and Redux for global state management, for clients who can use the services of our solution",
      "// A mobile app for both Android and iOS which utilizes the features of the web portal.",
      "// Built using React Native, TypeScript, Redux toolkit with RTK query for managing data fetching and caching.",
      "// Landing pages for our clients using NextJS and Styled Components.",
    ],
    FidWeb: [
      "// Worked on several projects. One was an enterprise platform for a commercial client built using React.",
      "// Mostly independently built a chat web platform using React and Socket.io",
      "// clients to directly communicate with the support team.",
    ],
    BoomDev: [
      "// Helped on several projects which included a landing page built with NextJS, TypeScript and Framer Motion for animations.",
      "// Participated in the creation of new features for a platform which users can study to become Game developers.",
      "// It was built with Nuxt and I got to experience what VueJS had to offer.",
      "// Wrote optimized end to end tests using Cypress.",
    ],
    SoftUni: [
      "// Participated and oversaw the creation of various JavaScript and Java courses in a Udemy inspired platform with which SoftUni wanted to expand beyond Bulgaria.",
      "// Creating such courses which consisted of videos of explaining JavaScript concepts and solving tasks really cemented my knowledge of the language.",
    ],
  },
};

export { categoryContent, presentation };
