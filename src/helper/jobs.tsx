import { JobModel } from "@/models/JobModel";
import CapImage from "/public/Capgemini.png";
import UcfImage from "/public/UCF2.png";
import UniversalImage from "/public/Universal.jpg";

export const Capgemini: JobModel = {
  company: "Capgemini",
  title: "Software Developer",
  years: "Aug. 2022 - Present",
  location: "Columbia, SC",
  description: [
    <>
      Spearheaded full-stack development of an{" "}
      <b>enterprise-grade web application</b> using <b>TypeScript</b>,{" "}
      <b>React</b>, <b>Azure API Management</b>, <b>Cosmos DB</b>, and{" "}
      <b>MSAL</b>, delivering secure, scalable, and high-performance solutions
      for business operations.
    </>,
    <>
      Contributed to <b>end-to-end testing</b>,{" "}
      <b>CI/CD pipeline integration</b>, and <b>production deployment</b> of the
      enterprise web application, ensuring reliability, performance, and
      maintainability across environments.
    </>,
    <>
      Worked on a <b>cross-platform mobile application</b> using{" "}
      <b>.NET MAUI</b>, delivering a unified codebase and native performance
      across <b>Android</b> and <b>iOS</b> platforms.
    </>,
    <>
      Designed and implemented <b>custom APIs</b> using <b>Azure Functions</b>,{" "}
      <b>Data Factory</b>, <b>Power Automate</b>, and <b>Azure KeyVault</b>,
      while providing strategic guidance on <b>Azure Cloud architecture</b> to
      align technical solutions with business goals.
    </>,
    <>
      Collaborated with project managers, domain experts, and engineering teams
      to deliver high-impact solutions while earning professional certifications
      and completing trainings aligned with my work experience.
    </>,
  ],
  imageUrl: CapImage,
};

export const UcfJob: JobModel = {
  company: "University of Central Florida",
  title: "Undergraduate Learning Assistant",
  years: "May 2021 – May 2022",
  location: "Orlando, FL",
  description: [
    <>
      Held weekly virtual and in-person office hours for a high-enrollment
      computer science course with over 150 students, fostering academic support
      and engagement.
    </>,
    <>
      Assisted students with homework, exam preparation, and conceptual
      understanding of core course topics, contributing to improved performance
      and confidence.
    </>,
    <>
      Completed structured training sessions and participated in regular
      pedagogical meetings to develop effective teaching strategies and
      classroom techniques.
    </>,
  ],
  imageUrl: UcfImage,
};

export const UniversalJob: JobModel = {
  company: "Universal Orlando Resort",
  title: "Deep Water Lifeguard",
  years: "May 2017 – Sep. 2021",
  location: "Orlando, FL",
  description: [
    "Oversaw the development and growth of aquatics team members as first responders and problem solvers, while ensuring consistent delivery of quality guest hospitality.",
    "Supported the launch of a new theme park by assisting in staff preparation and operational readiness for the high-profile event.",
    "Contributed to the recruitment and onboarding of a new team of lifeguards following operational closures during the COVID-19 pandemic.",
    "Designed and implemented training strategies focused on safety, efficiency, and recovery, maintaining performance audit scores above 90% for all trained employees.",
  ],
  imageUrl: UniversalImage,
};
