import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";

const BASE_URL = import.meta.env.BASE_URL;

export const DATA = {
  name: "Adeyomzy",
  initials: "AD",
  url: "https://adeyomzy.github.io",
  location: "Nigeria",
  locationLink: "https://www.google.com/maps/place/Nigeria",
  description:
    "Aspiring Data Analyst turning raw information into clear insights with Excel, Power BI, SQL, and practical reporting.",
  summary:
    "I am building practical experience in data analysis, reporting, and business intelligence. This portfolio documents the projects I complete, the decisions behind my work, and what I learn along the way. All text on this page is placeholder content and can be replaced when ready.",
  avatarUrl: `${BASE_URL}picofme.png`,
  ogImage: `${BASE_URL}og_image.png`,
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 5, enabled: false, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 6, enabled: false, heading: "Education" },
    skills: { order: 2, enabled: true, heading: "Skills" },
    projects: {
      order: 3,
      enabled: true,
      label: "My Projects",
      heading: "Selected data projects",
      text: "These are demonstration projects for now. Replace each card with your real project, the question you answered, the tools you used, and the result.",
    },
    hackathons: {
      order: 7,
      enabled: false,
      label: "Activities",
      heading: "Activities",
      text: "",
    },
    photos: {
      order: 8,
      enabled: false,
      heading: "Photos",
    },
    contact: {
      order: 4,
      enabled: true,
      label: "Contact",
      heading: "Let's Connect",
      text: "I am open to entry-level data, reporting, operations, and business intelligence opportunities. Replace the demo email and LinkedIn link below with your real details.",
    },
  },
  photos: [],
  skills: [
    { name: "Microsoft Excel", icon: null },
    { name: "Power BI", icon: null },
    { name: "SQL", icon: null },
    { name: "Data Cleaning", icon: null },
    { name: "Data Visualisation", icon: null },
    { name: "Business Reporting", icon: null },
  ],
  navbar: [
    { href: BASE_URL, icon: House, label: "Home" },
    { href: `${BASE_URL}blog`, icon: Library, label: "Blog" },
  ],
  contact: {
    email: "your-email@example.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Adeyomzy",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/your-linkedin-here/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/your-handle",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@your-channel",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:your-email@example.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [],
  education: [],
  projects: [
    {
      title: "Sales Performance Dashboard",
      href: "https://github.com/Adeyomzy",
      dates: "Demo project",
      active: true,
      description:
        "A Power BI dashboard that tracks revenue, product performance, and monthly trends. Replace this description with the business question, your method, and the result.",
      technologies: ["Power BI", "Excel", "Data Visualisation"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Adeyomzy",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: `${BASE_URL}example-website.webp`,
      video: "",
    },
    {
      title: "Customer Churn Analysis",
      href: "https://github.com/Adeyomzy",
      dates: "Demo project",
      active: true,
      description:
        "An exploratory analysis designed to identify patterns associated with customer churn and recommend practical retention actions.",
      technologies: ["SQL", "Excel", "Data Analysis"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Adeyomzy",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: `${BASE_URL}example-website.png`,
      video: "",
    },
    {
      title: "Operations Reporting Workbook",
      href: "https://github.com/Adeyomzy",
      dates: "Demo project",
      active: true,
      description:
        "A structured Excel reporting workbook for tracking operational KPIs, highlighting exceptions, and communicating weekly performance.",
      technologies: ["Excel", "Reporting", "KPI Tracking"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Adeyomzy",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
