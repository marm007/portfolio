export type ProjectProps = {
  title: string;
  subtitle?: string;
  photos: string[];
  video?: string;
  frontendURL?: string;
  backendURL?: string;
  desc: string;
  techStack: string[];
  repositoryURL: RepositoryURL[];
};

export type RepositoryURL = {
  name: string;
  url: string;
}