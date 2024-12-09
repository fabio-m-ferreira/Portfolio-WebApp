interface dataProps {
  icon: string;
  title: string;
  subTitle: string;
  iconWrapColor: string;
  delay?: number;
}

const skillsData: dataProps[] = [
  {
    icon: "/assets/tech/typescript.svg",
    title: "Typescript",
    subTitle: "JavaScript but better",
    iconWrapColor: "#007ACC",
  },
  {
    icon: "/assets/tech/react.svg",
    title: "React",
    subTitle: "Javascript library",
    iconWrapColor: "#61dafb",
  },
  {
    icon: "/assets/tech/nextjs.svg",
    title: "NextJS",
    subTitle: "React framework",
    iconWrapColor: "#000000",
  },
  {
    icon: "/assets/tech/git.svg",
    title: "Git",
    subTitle: "Version control",
    iconWrapColor: "#f03c2e",
  },
  {
    icon: "/assets/tech/figma.svg",
    title: "Figma",
    subTitle: "Design tool",
    iconWrapColor: "#ff7262",
  },
  {
    icon: "/assets/tech/css.svg",
    title: "CSS",
    subTitle: "Styling language",
    iconWrapColor: "#663399",
  },
  {
    icon: "/assets/tech/docker.svg",
    title: "Docker",
    subTitle: "Container platform",
    iconWrapColor: "#1d63ed",
  },
  {
    icon: "/assets/tech/vitest.svg",
    title: "Vitest",
    subTitle: "Testing library",
    iconWrapColor: "#fcc72b",
  },
  {
    icon: "/assets/tech/nodejs.svg",
    title: "NodeJS",
    subTitle: "Server runtime",
    iconWrapColor: "#8cc84b",
  },
  {
    icon: "/assets/tech/expressjs.svg",
    title: "ExpressJS",
    subTitle: "NodeJS framework",
    iconWrapColor: "#ffffff",
  },
  {
    icon: "/assets/tech/firebase.svg",
    title: "Firebase",
    subTitle: "Cloud platform",
    iconWrapColor: "#f6820c",
  },
  {
    icon: "/assets/tech/codeium.svg",
    title: "Codeium",
    subTitle: "AI assistant",
    iconWrapColor: "#09b6a2",
  },
];

export const aditionalSkills: dataProps[] = [
  {
    icon: "/assets/tech/typescript.svg",
    title: "Typescript",
    subTitle: "JavaScript but better",
    iconWrapColor: "#007ACC",
    delay: 0,
  },
  {
    icon: "/assets/tech/typescript.svg",
    title: "Typescript",
    subTitle: "JavaScript but better",
    iconWrapColor: "#007ACC",
    delay: 50,
  },
  {
    icon: "/assets/tech/typescript.svg",
    title: "NextJS",
    subTitle: "JavaScript but better",
    iconWrapColor: "#007ACC",
    delay: 100,
  },
  {
    icon: "/assets/tech/typescript.svg",
    title: "Git",
    subTitle: "JavaScript but better",
    iconWrapColor: "#007ACC",
    delay: 150,
  },
];

export default skillsData;
