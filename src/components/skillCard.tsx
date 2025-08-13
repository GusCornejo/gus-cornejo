import Image, { StaticImageData } from "next/image";

interface SkillCardProps {
  image: StaticImageData;
  title: string;
}

export default function SkillCard(props: SkillCardProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <div className="p-8 aspect-square flex items-center rounded-full bg-radial to-sky-900 border-1 shadow-xl">
        <Image src={props.image} alt={props.title} className="w-12 lg:w-20" />
      </div>
      <p className="text-xl text-white">{props.title}</p>
    </div>
  );
}
