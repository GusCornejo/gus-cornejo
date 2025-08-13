import { StaticImageData } from "next/image";

export interface JobModel {
    company: string;
    title: string;
    years: string;
    location: string;
    description: string[];
    imageUrl: StaticImageData;
}