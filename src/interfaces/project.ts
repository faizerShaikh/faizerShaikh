export interface ProjectInterface {
  id: number;
  name: string;
  projectDescription: string;
  features: Array<{
    name: string;
    description: string;
  }>;
  images: Array<string>;
  role: string;
  responsibilites: Array<string>;
  techStack: Array<string>;
}
