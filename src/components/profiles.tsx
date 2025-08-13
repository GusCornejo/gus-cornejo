import Image from "next/image";
import MicrosoftImg from "/public/Microsoft.png";
import GitHubImg from "/public/GitHub.png";
import LinkedInImg from "/public/LinkedIn.png";
import { GitHubURL, LinkedInURL, MicrosoftLearnURL } from "@/helper/constants";

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
    </div>
  );
}
