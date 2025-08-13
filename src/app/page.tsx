"use client";
import Hero from "@/components/hero";
import SkillCard from "@/components/skillCard";
import homeImg from "/public/hero.jpg";
import myImg from "/public/gus.jpeg";
import Image from "next/image";
import { Bio1, Bio2, Bio3, FunctionalSkills, Skills } from "@/helper/constants";
import Profiles from "@/components/profiles";
import FunctionalSkillCard from "@/components/functionalSkillCard";

export default function Home() {
  return (
    <>
      <Hero heroImg={homeImg} />
      <div className="pt-30 lg:pt-40 flex justify-center items-center">
        <h1 className="text-white text-4xl lg:text-7xl text-center">
          Gustavo Cornejo
        </h1>
      </div>
      <div className="mt-5 p-5 flex flex-row flex-wrap justify-center items-center gap-10">
        <Image
          src={myImg}
          alt="Gustavo Cornejo"
          className="xl:w-[20vw] xl:h-[20vw] lg:w-[20vw] lg:h-[20vw] md:w-[30vw] md:h-[30vw] rounded-2xl border-2 border-black shadow-xl"
        />
        <div className="flex flex-col items-center">
          <p className="lg:text-xl md:text-lg sm:text-md xl:w-[50vw] lg:w-[50vw] md:w-[50vw] sm:w-[80vw] bg-white rounded-lg shadow-xl border-1 p-5">
            {Bio1} <br />
            <br /> {Bio2} <br />
            <br /> {Bio3}
          </p>
          <Profiles />
        </div>
      </div>

      <div className="p-5 flex flex-col justify-center items-center ">
        <p className="mb-6 align text-white text-center text-3xl lg:text-5xl">
          Technical Skills
        </p>
        <div className="flex flex-wrap justify-center  gap-5">
          {Skills.map((skill) => (
            <SkillCard image={skill.image} title={skill.title} />
          ))}
        </div>
      </div>
      <div className="p-5 flex flex-col justify-center items-center ">
        <p className="mb-6 align text-white text-center text-3xl lg:text-5xl">
          Functional Skills
        </p>
        <div className="flex flex-wrap justify-center  gap-5">
          {FunctionalSkills.map((skill) => (
            <FunctionalSkillCard title={skill} />
          ))}
        </div>
      </div>
      <br />
    </>
  );
}
