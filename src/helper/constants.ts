import { CarouselModel } from "@/models/CarouselModel";
import AiFundamentals from "/public/AiFundamentals.png";
import AiEngineer from "/public/AiEngineer.png";
import PowerFundamentals from "/public/PowerPlatformFundamentals.png";
import AzureFundamentals from "/public/AzureFundamentals.png";
import DataFundamentals from "/public/DataFundamentals.png";
import PSM1 from "/public/PSM1.jpg";
import iOS from "/public/iOS.jpg";
import CodePath from "/public/CodePath.jpg";
import { SkillModel } from "@/models/SkillModel";
//images
import tsImage from "/public/Typescript.png";
import jsImage from "/public/Javascript.png";
import reactImage from "/public/React.png";
import nextImage from "/public/Next.png";
import htmlImage from "/public/HTML.png";
import cssImage from "/public/CSS.png";
import gitImage from "/public/Git.png";
import nodeImage from "/public/Node.png";
import tailwindImage from "/public/Tailwind.png";
import swiftImage from "/public/Swift.png";
import dotnetImage from "/public/Dotnet.png"
import azureImage from "/public/Azure.png"

export const phoneNumber = "407-624-8456"
export const email = "gustavoxcornejo@gmail.com"
export const resumeLink = "https://www.icloud.com/iclouddrive/0e1wJdsBHLPZVE7ddcv-z8Wng#Gus_Cornejo_Resume"

export const LinkedInURL = "https://linkedin.com/in/guscornejov ";
export const GitHubURL = "https://github.com/GusCornejo";
export const MicrosoftLearnURL = "https://learn.microsoft.com/en-us/users/guscornejo/transcript/de6w2a2wnzoe0y5?tab=credentials-tab";

export const Bio1: string = "Hi, I'm Gustavo Cornejo - but most people just call me Gus 👋. I'm a passionate Frontend Software Engineer with a solid foundation in computer science and a love for crafting intuitive, high-performance web experiences."

export const Bio2: string = "I specialize in building modern applications using React and TypeScript, and I've had the opportunity to develop a web-based platform that integrates Azure API Management and Cosmos DB - boosting both user experience and backend efficiency."

export const Bio3: string = "Whether I'm collaborating with a team under tight deadlines or exploring new frontend technologies, I thrive in environments that challenge me to think creatively and build solutions that make a real impact. I'm excited to keep pushing boundaries and bring thoughtful, innovative interfaces to life.";

export const Skills: SkillModel[] = [
  {image:reactImage, title:"React.js"},
  {image:nextImage, title:"Next.js"},
  {image:jsImage, title:"JavaScript"},
  {image:tsImage, title:"TypeScript"},
  {image:nodeImage, title:"Node.js"},
   {image:azureImage, title:"Azure"},
  {image:htmlImage, title:"HTML5"},
  {image:cssImage, title:"CSS3"},
  {image:tailwindImage, title:"Tailwind CSS"},
  {image:swiftImage, title:"Swift"},
  {image:dotnetImage, title:".NET MAUI"},
  {image:gitImage, title:"Git"}
]

export const FunctionalSkills = ["Team-player","Communication","Attention to detail","Adaptability and flexibility","Problem-solving","Bilingual (English, Spanish)"]

export const Certifications: CarouselModel[] = [
  {
    id: 1, 
    title: "Professional Scrum Master I", 
    description: "", 
    imageUrl: PSM1, 
    link: "https://www.scrum.org/certificates/860510"
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