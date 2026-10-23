import Image from "next/image";
import MicrosoftImg from "../../public/Microsoft.png";
import GitHubImg from "../../public/GitHub.png";
import LinkedInImg from "../../public/LinkedIn.png";
import {
  GitHubURL,
  LinkedInURL,
  MicrosoftLearnURL,
  resumeURL,
} from "@/helper/constants";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";

export default function Profiles() {
  return (
    <div className="p-5 flex gap-5 justify-center items-center">
      <Link
        href={LinkedInURL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        className="transition-transform duration-200 hover:scale-105"
      >
        <Image src={LinkedInImg} alt="" title="LinkedIn" height={50} />
      </Link>
      <Link
        href={GitHubURL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        className="transition-transform duration-200 hover:scale-105"
      >
        <Image src={GitHubImg} alt="" title="GitHub" height={50} />
      </Link>
      <Link
        href={MicrosoftLearnURL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Microsoft Learn transcript"
        className="transition-transform duration-200 hover:scale-105"
      >
        <Image
          src={MicrosoftImg}
          alt=""
          title="Microsoft Learn"
          height={50}
        />
      </Link>
      <Link
        href={resumeURL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-sky-600 text-white text-lg px-5 py-3 rounded-lg shadow-md transition-transform duration-200 hover:scale-105"
      >
        <FaDownload aria-hidden />
        Resume
      </Link>
    </div>
  );
}
