import { JobModel } from "@/models/JobModel";
import CapImage from "/public/Capgemini.png";
import UcfImage from "/public/UCF2.png";
import UniversalImage from "/public/Universal.jpg";

export const Capgemini: JobModel = {
  company: "Capgemini",
  title: "Senior Software Developer",
  years: "Aug. 2022 - Present",
  location: "Columbia, SC",
  description: [
    <>
      Built and shipped a production enterprise web app from the ground up{" "}
      <b>TypeScript</b>, <b>React</b>, <b>Azure APIM</b>, and <b>Cosmos DB</b>{" "}
      with <b>MSAL</b> handling enterprise auth for real client users.
    </>,
    <>
      Owned the full deployment lifecycle: end-to-end testing,{" "}
      <b>CI/CD pipeline</b> setup, and production releases across multiple
      environments.
    </>,
    <>
      Developed a cross-platform mobile app in <b>.NET MAUI</b> that runs
      natively on both <b>Android</b> and <b>iOS</b> from a single shared
      codebase.
    </>,
    <>
      Designed and deployed serverless APIs using <b>Azure Functions</b> and{" "}
      <b>Data Factory</b>, with <b>Azure Key Vault</b> managing secrets across
      all environments.
    </>,
    <>
      Contributed to cloud architecture decisions and helped align technical
      solutions with client business requirements across multiple engagements.
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
      Ran weekly office hours for a <b>150+ student</b> CS course, helping
      students work through assignments and prep for exams.
    </>,
    <>
      Broke down complex CS concepts in ways that clicked focusing on
      understanding, not just getting answers.
    </>,
    <>
      Took part in structured teaching workshops to sharpen instructional skills
      and improve how I communicated technical ideas.
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
    "Mentored and developed junior team members as first responders, maintaining safety standards and guest experience simultaneously.",
    "Helped staff and prepare a team for the launch of a new theme park, which was a high-visibility, high-pressure operational milestone.",
    "Led post-COVID rehiring and onboarding of a new lifeguard team, rebuilding operations from the ground up.",
    "Designed safety training programs that kept audit scores above 90% across all trained staff.",
  ],
  imageUrl: UniversalImage,
};
