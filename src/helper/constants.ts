import { CarouselModel } from "@/models/CarouselModel";
import AiFundamentals from "../../public/AiFundamentals.png";
import AiEngineer from "../../public/AiEngineer.png";
import PowerFundamentals from "../../public/PowerPlatformFundamentals.png";
import AzureFundamentals from "../../public/AzureFundamentals.png";
import DataFundamentals from "../../public/DataFundamentals.png";
import PSM1 from "../../public/PSM1.jpg";
import iOS from "../../public/iOS.jpg";
import CodePath from "../../public/CodePath.jpg";
import ClaudeAssociate from "../../public/ClaudeAssociate.png";
import ClaudeDeveloper from "../../public/ClaudeDeveloper.png";
import { SkillModel } from "@/models/SkillModel";
//images
import tsImage from "../../public/Typescript.png";
import jsImage from "../../public/Javascript.png";
import reactImage from "../../public/React.png";
import nextImage from "../../public/Next.png";
import htmlImage from "../../public/HTML.png";
import cssImage from "../../public/CSS.png";
import gitImage from "../../public/Git.png";
import nodeImage from "../../public/Node.png";
import tailwindImage from "../../public/Tailwind.png";
import swiftImage from "../../public/Swift.png";
import dotnetImage from "../../public/Dotnet.png"
import azureImage from "../../public/Azure.png"
import angularImage from "../../public/Angular.png"
import claudeImage from "../../public/Claude.png"
//badges
import azureBadge from "../../public/AIEngineerBadge.svg"
import claudeDeveloperBadge from "../../public/ClaudeDeveloperBadge.svg"
import claudeAssociateBadge from "../../public/ClaudeAssociateBadge.svg"
import psm1Badge from "../../public/PSMIBadge.svg"


export const phoneNumber = "407-624-8456";
export const email = "gus.cornejo@icloud.com";
export const resumeURL = "/Users/gustavocornejo/Documents/Resumes/Resume.pdf";
export const LinkedInURL = "https://linkedin.com/in/guscornejov ";
export const GitHubURL = "https://github.com/GusCornejo";
export const MicrosoftLearnURL = "https://learn.microsoft.com/en-us/users/guscornejo/transcript/de6w2a2wnzoe0y5?tab=credentials-tab";

export const Bio: string[] = [
  "Hi, I’m Gustavo Cornejo, but most people just call me Gus 👋. I’m a Full-Stack Software Engineer with a solid foundation in computer science and a love for crafting intuitive, high-performance web experiences.",
  "I specialize in building modern applications with React and TypeScript, backed by ASP.NET and Azure on the server side. I’ve developed a web-based platform that integrates Azure API Management and Cosmos DB, boosting both user experience and backend efficiency. I also build with agentic development workflows using Claude Code, which helps me ship faster and keep quality high.",
  "Outside of work, I like to tinker with native iOS apps in Swift as personal projects.",
  "Whether I’m collaborating with a team under tight deadlines or exploring new technologies, I thrive in environments that challenge me to think creatively and build solutions that make a real impact. I’m excited to keep pushing boundaries and bring thoughtful, innovative products to life."
];

export const Badges = [azureBadge, psm1Badge,  claudeDeveloperBadge, claudeAssociateBadge  ]

export const Skills: SkillModel[] = [
  {image:reactImage, title:"React.js"},
  {image:nextImage, title:"Next.js"},
  {image:angularImage, title:"Angular"},
  {image:jsImage, title:"JavaScript"},
  {image:tsImage, title:"TypeScript"},
  {image:nodeImage, title:"Node.js"},
  {image:claudeImage, title:"Claude Code"},
  {image:azureImage, title:"Azure"},
  {image:htmlImage, title:"HTML5"},
  {image:cssImage, title:"CSS3"},
  {image:tailwindImage, title:"Tailwind CSS"},
  {image:swiftImage, title:"Swift"},
  {image:dotnetImage, title:".NET MAUI"},
  {image:gitImage, title:"Git"}
]

export const FunctionalSkills = ["Team-player","Communication","Attention to detail","Adaptability and flexibility","Problem-solving","Multilingual: 🇬🇧 🇪🇸 🇧🇷"]

export const Certifications: CarouselModel[] = [
  {
    id: 1, 
    title: "Professional Scrum Master I", 
    description: "", 
    imageUrl: PSM1, 
    link: "https://www.credly.com/badges/50074238-57dd-418e-8acf-a45bf8f08910"
  },
  {
    id: 2, 
    title: "CodePath iOS Development", 
    description: "", 
    imageUrl: CodePath
  },
  {
    id: 3, 
    title: "iOS & Swift - The Complete iOS App Development Bootcamp", 
    description: "", 
    imageUrl: iOS, 
    link: "https://www.udemy.com/certificate/UC-178d9bda-caaa-4bef-8451-e6e03494f355/"
  },
];

export const MicrosoftCerts: CarouselModel[] = [
    {
      id: 1,
      title: "Azure AI Engineer Associate",
      description:
        "Design and implement an Azure AI solution using Azure AI services, Azure AI Search, and Azure Open AI.",
      imageUrl: AiEngineer,
      link: "https://learn.microsoft.com/api/credentials/share/en-us/GusCornejo/4B8EF20F1E52B5DB?sharingId=CD5FBAEF0692883B",
    },
    {
      id: 2,
      title: "Azure AI Fundamentals",
      description:
        "Demonstrate fundamental AI concepts related to the development of software and services of Microsoft Azure to create AI solutions.",
      imageUrl: AiFundamentals,
      link: "https://learn.microsoft.com/api/credentials/share/en-us/GusCornejo/926842132C3885B7?sharingId=CD5FBAEF0692883B",
    },
    {
      id: 3,
      title: "Azure Fundamentals",
      description:
        "Demonstrate foundational knowledge of cloud concepts, core Azure services, plus Azure management and governance features and tools.",
      imageUrl: AzureFundamentals,
      link: "https://learn.microsoft.com/api/credentials/share/en-us/GusCornejo/E85F040AD889AB47?sharingId=CD5FBAEF0692883B",
    },
    {
      id: 4,
      title: "Azure Data Fundamentals",
      description:
        "Demonstrate foundational knowledge of core data concepts related to Microsoft Azure data services.",
      imageUrl: DataFundamentals,
      link: "https://learn.microsoft.com/api/credentials/share/en-us/GusCornejo/AAB517BA53B16718?sharingId=CD5FBAEF0692883B",
    },
    {
      id: 5,
      title: "Power Platform Fundamentals",
      description:
        "Demonstrate the business value and product capabilities of Microsoft Power Platform, such as Power Apps, data connections with Dataverse, and Power Automate.",
      imageUrl: PowerFundamentals,
      link: "https://learn.microsoft.com/api/credentials/share/en-us/GusCornejo/1CA09EE7DCC24201?sharingId=CD5FBAEF0692883B",
    },
  ];

  export const AnthropicCerts: CarouselModel[] = [
    {
      id: 1,
      title: "Claude Certified Developer - Foundations",
      description:
        "",
      imageUrl: ClaudeDeveloper,
      link: "https://www.credly.com/badges/6659d83e-6374-4711-bdda-80ea525ebcbb/public_url",
    },
    {
      id: 2,
      title: "Claude Certified Associate - Foundations",
      description:
        "",
      imageUrl: ClaudeAssociate,
      link: "https://www.credly.com/badges/b99ae56b-8afa-44e6-afb9-6553236e3a65/public_url",
    },

  ];

