import { Injectable } from '@angular/core';

export interface Skill {
  name: string;
  level?: string;
}

export interface SkillGroup {
  title: string;
  description: string;
  skills: Skill[];
}

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  readonly groups: SkillGroup[] = [
    {
      title: 'Backend',
      description: 'Building APIs, services, and distributed backend systems.',
      skills: [
        { name: 'Java' },
        { name: 'Spring Boot' },
        { name: 'Spring Security' },
        { name: 'Microservices' },
        { name: 'REST APIs' },
        { name: 'Kafka' }
      ]
    },
    {
      title: 'Data',
      description: 'Working with relational databases, persistence, and caching.',
      skills: [
        { name: 'PostgreSQL' },
        { name: 'Oracle' },
        { name: 'JPA / Hibernate' },
        { name: 'Redis' },
        { name: 'SQL' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      description: 'Containerization, orchestration, automation, and deployment.',
      skills: [
        { name: 'Docker' },
        { name: 'Kubernetes' },
        { name: 'CI/CD' },
        { name: 'GitHub Actions' },
        { name: 'AWS' },
        { name: 'Terraform' }
      ]
    },
    {
      title: 'Frontend',
      description: 'Building modern, responsive application interfaces.',
      skills: [
        { name: 'Angular' },
        { name: 'TypeScript' },
        { name: 'Tailwind CSS' },
        { name: 'Flutter' }
      ]
    }
  ];

  getGroups(): SkillGroup[] {
    return this.groups;
  }
}