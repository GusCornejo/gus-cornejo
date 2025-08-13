interface SkillCardProps {
  title: string;
}

export default function FunctionalSkillCard(props: SkillCardProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <div className="p-5 flex items-center rounded-xl bg-linear-to-b from-sky-200 to-cyan-900 shadow-xl">
        <p className="text-xl text-white">{props.title}</p>
      </div>
    </div>
  );
}
