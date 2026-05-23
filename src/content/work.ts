export type WorkItem = {
  year: string;
  title: string;
  titleAccent?: string;
  role: string;
  href: string;
  weight?: "extralight" | "light" | "semibold";
};

export const workItems: WorkItem[] = [
  {
    year: "2024 — Now",
    title: "Nexo",
    role: "Software Engineer",
    href: "https://nexo.com",
    weight: "semibold",
  },
  {
    year: "2022 — 2024",
    title: "M&M Fintech",
    role: "Frontend Developer",
    href: "#",
    weight: "light",
  },
];
