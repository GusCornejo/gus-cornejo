import { JobModel } from "@/models/JobModel";
import CapImage from "../../public/Capgemini.png";
import UcfImage from "../../public/UCF2.png";
import UniversalImage from "../../public/Universal.jpg";

export const Capgemini: JobModel = {
  company: "Capgemini",
  title: "Senior Software Engineer",
  years: "Aug. 2022 - Present",
  location: "Columbia, SC",
  description: [
    <>
      Architected and deployed full-stack user administration applications
      managing <b>3,000+ user accounts</b>, built with <b>TypeScript</b>,{" "}
      <b>React</b>, and <b>Azure APIM</b>, using <b>Cosmos DB</b> for scalable
      data modeling and <b>MSAL</b> for secure, enterprise-grade authentication.
    </>,
    <>
      Developed and orchestrated agentic AI workflows using{" "}
      <b>Claude Code</b> and the <b>Anthropic API</b>, building an{" "}
      <b>MCP server</b>, custom subagents, skills, and hooks to enable
      autonomous multi-step task execution and intelligent tool use within
      internal developer tooling.
    </>,
    <>
      Designed and deployed a custom-trained computer vision model in{" "}
      <b>Microsoft Foundry</b>, automating users&apos; daily image capture and
      analysis tasks at over <b>5,000 uses per day</b> while aligning the
      architecture with client business goals.
    </>,
    <>
      Engineered cross-platform mobile solutions with <b>.NET MAUI</b>,
      integrating <b>ASP.NET Web APIs</b> and <b>Microsoft Graph API</b> to
      deliver seamless UX and unified functionality across Android and iOS
      devices.
    </>,
    <>
      Developed high-performance serverless APIs via <b>Azure Functions</b> and
      managed complex ETL workflows with <b>Data Factory</b>; implemented{" "}
      <b>Azure Key Vault</b> to maintain a zero-trust security posture for
      sensitive client data.
    </>,
  ],
  imageUrl: CapImage,
};

export const UcfJob: JobModel = {
  company: "University of Central Florida",
  title: "Undergraduate Learning Assistant",
  years: "May 2021 – Aug 2022",
  location: "Orlando, FL",
  description: [
    <>
      Facilitated weekly virtual and in-person office hours for{" "}
      <b>150+ students</b>, providing targeted support on assignments and exam
      preparation to improve academic performance.
    </>,
    <>
      Applied professional teaching strategies and classroom techniques gained
      through specialized training to boost student engagement and confidence in
      core CS topics.
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
