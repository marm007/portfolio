import DescriptionModel from "../../models/description";

export type ProjectProps = {
  title: string;
  photos: string[];
  video?: string;
  frontendURL?: string;
  backendURL?: string;
  desc: DescriptionModel;
  techStack: string[];
  repositoryURL: string;
};