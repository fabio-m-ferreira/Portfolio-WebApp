import Button from "@/components/button/Button";
import styles from "./portfolio.module.css";

interface dataProps {
  id: number;
  image: string;
  title: string;
  sourceButton: React.ReactNode;
  demoButton: React.ReactNode;
}

const portfolioData: dataProps[] = [
  {
    id: 1,
    image: "/assets/gestix-portfolio.jpg",
    title: "Gestix Software | Professional Project",
    sourceButton: (
      <Button className={styles.btn} text="Private Source" variant="disabled" />
    ),
    demoButton: (
      <Button
        className={styles.btn}
        text="Live Demo"
        href="https://www.gestixsoftware.com/"
        target="_blank"
        variant="primary"
      />
    ),
  },
  {
    id: 2,
    image: "/assets/facepalm-portfolio.jpg",
    title: "Social Media App - Android | Academic Project",
    sourceButton: (
      <Button
        className={styles.btn}
        text="GitHub"
        href="https://github.com/fabio-m-ferreira/Facepalm"
        target="_blank"
        variant="secondary"
      />
    ),
    demoButton: (
      <Button
        className={styles.btn}
        text="See More"
        href="/projects/facepalm"
        target="_blank"
        variant="primary"
      />
    ),
  },
  {
    id: 3,
    image: "/assets/portfolio-template.jpg",
    title: "Portfolio Template",
    sourceButton: (
      <Button
        className={styles.btn}
        text="GitHub"
        href="https://github.com/fabio-m-ferreira/React-Portfolio-WebApp"
        target="_blank"
        variant="secondary"
      />
    ),
    demoButton: (
      <Button
        className={styles.btn}
        text="Live Demo"
        href="https://ff-react-portfolio-template.vercel.app/"
        target="_blank"
        variant="primary"
      />
    ),
  },
  {
    id: 4,
    image: "/assets/project_js.jpg",
    title: "Travel Agency | Academic Project",
    sourceButton: (
      <Button
        className={styles.btn}
        text="GitHub"
        href="https://github.com/fabio-m-ferreira/travel-agency"
        target="_blank"
        variant="secondary"
      />
    ),
    demoButton: (
      <Button
        className={styles.btn}
        text="Live Demo"
        href="#"
        target="_blank"
        variant="primary"
      />
    ),
  },
];

export default portfolioData;
