import DescriptionModel from "../../models/description";
import TechStackModel from "../../models/tech-stack";

export type ProjectProps = {
  title: string;
  photos: string[];
  video?: string;
  website?: string;
  desc: DescriptionModel;
  techStack: TechStackModel[];
  repo: string;
};