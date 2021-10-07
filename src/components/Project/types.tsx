export type ProjectProps = {
  title: string;
  subtitle?: string;
  photos: string[];
  video?: string;
  websites: object[];
  desc: string;
  techStack: string[];
  projectLinks: ProjectLinks;
};

type ProjectLinks = {
  icon: string;
  websites: ProjectLinksWebsites[]
}

export type ProjectLinksWebsites = {
  name: string;
  url: string;
}