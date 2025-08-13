import { JobModel } from "@/models/JobModel";
import Image from "next/image";

interface JobCardProps {
  job: JobModel;
  noPadding?: boolean;
}

export default function JobCard(props: JobCardProps) {
  return (
    <div className="px-[5vw] flex flex-col flew-wrap justify-center items-left gap-4">
      <div className="flex flex-row justify-start items-center gap-4">
        <Image
          src={props.job.imageUrl}
          alt="Capgemini"
          className={`max-w-30  ${
            props.noPadding ? "p-0" : "p-5"
          } bg-white h-auto rounded-lg border-black border-1 shadow`}
        />
        <div className="p-2 text-white text-center text-left bg-black/20 rounded-lg">
          <p className="text-2xl lg:text-4xl">{props.job.company}</p>
          <p className="text-xl lg:text-3xl">
            <b>{props.job.title}</b>
          </p>
          <p className="text-lg lg:text-xl italic">
            {props.job.years} - {props.job.location}
          </p>
        </div>
      </div>
      <ul className="flex flex-row flex-wrap gap-3">
        {props.job.description.map((item, index) => (
          <li
            key={index}
            className="flex-2 p-5 text-sm lg:text-xl text-black bg-white rounded-lg border-1 shadow"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
