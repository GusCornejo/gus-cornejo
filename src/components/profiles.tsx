import Image from "next/image";
import MicrosoftImg from "/public/Microsoft.png";
import GitHubImg from "/public/GitHub.png";
import LinkedInImg from "/public/LinkedIn.png";
import {
  GitHubURL,
  LinkedInURL,
  MicrosoftLearnURL,
  resumeLink,
} from "@/helper/constants";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";

export default function Profiles() {
  return (
    <div className="p-5 flex gap-5 justify-center">
      <Image
        src={LinkedInImg}
        alt="LinkedIn"
        title="LinkedIn"
        height={50}
        className="cursor-pointer transition-transform duration-200 hover:scale-105"
        onClick={() => window.open(LinkedInURL, "_blank")}
      />
      <Image
        src={GitHubImg}
        alt="GitHub"
        title="GitHub"
        height={50}
        className="cursor-pointer transition-transform duration-200 hover:scale-105"
        onClick={() => window.open(GitHubURL, "_blank")}
      />
      <Image
        src={MicrosoftImg}
        alt="Microsoft Learn"
        title="Microsoft Learn"
        height={50}
        className="cursor-pointer transition-transform duration-200 hover:scale-105"
        onClick={() => window.open(MicrosoftLearnURL, "_blank")}
      />
      <Link
        href={resumeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-sky-600 text-white text-lg px-5 py-3 rounded-lg shadow-md transition-transform duration-200 hover:scale-105"
      >
        <FaDownload />
        Resume
      </Link>
    </div>
  );
}
