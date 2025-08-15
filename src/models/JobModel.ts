import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface JobModel {
    company: string;
    title: string;
    years: string;
    location: string;
    description: ReactNode[];
    imageUrl: StaticImageData;
}