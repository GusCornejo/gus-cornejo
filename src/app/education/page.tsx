import Image from "next/image";
import educationImg from "/public/education.jpg";
import Hero from "@/components/hero";
import UcfImage from "/public/UCF.jpg";
import UcfDiploma from "/public/Diploma.jpg";
import Carousel from "@/components/carousel/carousel";
import { Certifications, MicrosoftCerts } from "@/helper/constants";

export default function EducationPage() {
  return (
    <>
      <Hero heroImg={educationImg} />
      <div className="pt-30 lg:pt-40 flex justify-center items-center">
        <h1 className="text-white text-4xl lg:text-7xl">Education</h1>
      </div>
      <div className="p-5 mt-5 flex flex-wrap justify-center gap-4">
        <Carousel
          slides={Certifications}
          title="Certifications"
          options={{ loop: true }}
        />
        <Carousel
          slides={MicrosoftCerts}
          title="Microsoft Certifications"
          options={{ loop: true }}
        />
      </div>
      <div className="flex justify-center">
        <h2 className="text-white text-2xl lg:text-5xl">Higher Education</h2>
      </div>
      <div className="p-5 lg:mt-5 flex flex-wrap justify-center gap-4">
        <div className="flex md:flex-col justify-center items-center gap-4">
          <div className="p-4 flex flex-col justify-center items-center gap-1 bg-white rounded-lg border-1 shadow-lg">
            <p className="text-lg lg:text-2xl text-center">
              Bachelor of Science
            </p>
            <p className="text-md lg:text-xl">
              <b>Computer Science</b>
            </p>
            <p className="text-md lg:text-lg">2018 - 2022</p>
          </div>
          <Image
            src={UcfImage}
            alt="UCF Emblem"
            className="w-[40vw] max-w-120 rounded-xl shadow-xl"
          />
        </div>
        <Image
          src={UcfDiploma}
          alt="UCF Diploma"
          className="border-1 border-black rounded-xl shadow-xl"
        />
      </div>
    </>
  );
}
