
import { LucideIcon } from 'lucide-react';

export interface ServiceData {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  backgroundImage: string;
  features: string[];
  technologies: string[];
  startingPrice: string;
  timeline: string;
  color: ColorType;
  route: string;
}

export type ColorType = "blue" | "gray" | "slate" | "stone" | "zinc" | "indigo" | "purple" | "teal";
