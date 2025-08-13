import { StaticImageData } from "next/image";

export interface CarouselModel {
  id: number;
  title: string;
  description: string;
  imageUrl: StaticImageData;
  link?: string;
}