import Hero from "@/components/hero";
import experienceImg from "/public/experience.jpg";
import JobCard from "@/components/jobCard";
import { Capgemini, UcfJob, UniversalJob } from "@/helper/constants";

export default function ExperiencePage() {
  return (
    <>
      <Hero heroImg={experienceImg} />
      <div className="pt-30 lg:pt-40 flex justify-center items-center">
        <h1 className="text-white text-4xl lg:text-7xl">Experience</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-7 py-10">
        <JobCard job={Capgemini} />
        <JobCard job={UcfJob} />
        <JobCard job={UniversalJob} noPadding />
      </div>
    </>
  );
}
