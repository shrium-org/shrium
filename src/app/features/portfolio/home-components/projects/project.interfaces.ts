export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  role: string;
  featured: boolean;
  githubUrl: string;
  liveUrl: string;
  responsibilities: string[];
  techStack: string[];
}