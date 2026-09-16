import { Injectable } from '@angular/core';

export interface Experience {
  company: string;
  role: string;
  employmentType: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  readonly experiences: Experience[] = [
    {
      company: 'Robokriti India Pvt Ltd',
      role: 'Software Engineer',
      employmentType: 'Full-time',
      period: '2024 — Present',
      location: 'India',
      summary:
        'Worked across backend engineering, distributed systems, IoT platforms, and application development.',
      highlights: [
        'Designed and developed backend services for an Indian Railways IoT monitoring platform.',
        'Built and maintained Spring Boot microservices supporting high-volume device and application communication.',
        'Worked across the software development lifecycle from system design and implementation to deployment and monitoring.',
        'Developed integrations involving Kafka, MQTT, authentication, caching, databases, and cloud-native infrastructure.'
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'Spring Security',
        'Microservices',
        'PostgreSQL',
        'Kafka',
        'Redis',
        'Docker',
        'Kubernetes'
      ]
    }
  ];

  getExperiences(): Experience[] {
    return this.experiences;
  }
}