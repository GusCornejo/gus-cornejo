interface SkillCardProps {
  title: string;
}

export default function FunctionalSkillCard(props: SkillCardProps) {
  return (
    <div className="p-4 flex items-center rounded-xl bg-linear-to-b from-sky-200 to-cyan-900 shadow-xl">
      <p className="text-lg lg:text-xl text-white">{props.title}</p>
    </div>
  );
}
