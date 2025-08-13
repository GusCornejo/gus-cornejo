import Image, { StaticImageData } from "next/image";

interface HeroProps {
  heroImg: StaticImageData;
}

export default function Hero(props: HeroProps) {
  return (
    <div className="fixed -z-10 inset-0">
      <Image
        src={props.heroImg}
        alt={"hero image"}
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-600" />
    </div>
  );
}
