export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface Metric {
  value: string;
  unit: string;
  description: string;
}

export interface SkillGroup {
  label: string;
  icon: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  type: string;
  period: string;
  bullets: string[];
  tech: string[];
}

export interface Project {
  title: string;
  icon: string;
  description: string;
  highlights: string[];
  stack: string[];
}

export interface Certification {
  name: string;
  by: string;
  url?: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  cgpa: string;
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  available: boolean;
  summary: string;
  contacts: ContactLink[];
  heroStats: HeroStat[];
  metrics: Metric[];
  skillGroups: SkillGroup[];
  experience: ExperienceItem[];
  projects: Project[];
  education: Education;
  certifications: Certification[];
}
