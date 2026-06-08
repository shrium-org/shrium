import { Injectable } from '@angular/core';
import { ResumeData } from '../models/resume.model';

@Injectable({ providedIn: 'root' })
export class ResumeDataService {
  readonly data: ResumeData = {
    name: 'Ajay Malah',
    title: 'Full-Stack Developer · Java & Angular · Bengaluru',
    location: 'Bengaluru, India',
    available: true,
    summary:
      '3+ years shipping production systems at scale — from a live IoT platform sustaining 10,000 req/hr on Indian Railways infrastructure to microservice architectures with 85% latency reduction. Specialist in TypeScript, event-driven systems, and real-time data pipelines.',

    contacts: [
      {
        label: 'ajaymalah.2003@gmail.com',
        value: 'ajaymalah.2003@gmail.com',
        href: 'mailto:ajaymalah.2003@gmail.com',
        icon: 'ti ti-mail',
      },
      {
        label: '+91 748 946 3450',
        value: '+917489463450',
        href: 'tel:+917489463450',
        icon: 'ti ti-phone',
      },
      {
        label: 'LinkedIn',
        value: 'ajay-malah-512153204',
        href: 'https://linkedin.com/in/ajay-malah-512153204',
        icon: 'ti ti-brand-linkedin',
      },
    ],

    heroStats: [
      { value: '3Y', label: 'Experience' },
      { value: '11', label: 'Microservices' },
      { value: '8.19', label: 'CGPA' },
    ],

    metrics: [
      { value: '85', unit: '%', description: 'DB latency reduction\n800ms → 120ms' },
      { value: '60', unit: '%', description: 'API throughput\ngain via Redis' },
      { value: '10K', unit: '', description: 'Requests/hour\nsustained in prod' },
      { value: '99.9', unit: '%', description: 'Uptime during\nnetwork instability' },
    ],

    skillGroups: [
      {
        label: 'Languages',
        icon: 'ti ti-code',
        skills: ['Java', 'Dart', 'Python', 'TypeScript', 'JavaScript', 'SQL'],
      },
      {
        label: 'Backend',
        icon: 'ti ti-server',
        skills: ['Spring Boot', 'NestJS', 'Express.js', 'GraphQL', 'REST API', 'Microservices'],
      },
      {
        label: 'Frontend',
        icon: 'ti ti-layout',
        skills: ['Angular', 'Flutter', 'React.js', 'Next.js', 'React Query', 'Tailwind CSS'],
      },
      {
        label: 'Databases & Cache',
        icon: 'ti ti-database',
        skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
      },
      {
        label: 'Messaging & IoT',
        icon: 'ti ti-message-2',
        skills: ['RabbitMQ', 'Apache Kafka', 'MQTT', 'ESP32', 'Arduino'],
      },
      {
        label: 'Security & DevOps',
        icon: 'ti ti-shield-lock',
        skills: ['Keycloak SSO', 'OAuth2', 'JWT', 'Docker', 'Kubernetes', 'CI/CD'],
      },
    ],

    experience: [
      {
        role: 'Full-Stack Developer',
        company: 'Robokriti India Private Limited',
        location: 'Jabalpur, MP',
        type: 'Full-time',
        period: 'Jul 2023 – Present',
        bullets: [
          'Architected a production API gateway with <strong>Spring Boot</strong> & <strong>NestJS</strong> orchestrating 11 microservices processing live telemetry from <strong>1,000 IoT sensors</strong> across Indian Railways — <strong>10,000 req/hr</strong> at under 1s response time.',
          'Cut DB latency <strong>85%</strong> (800ms → 120ms) via composite index redesign and query plan optimization.',
          'Raised API throughput <strong>60%</strong> by introducing a <strong>Redis distributed cache</strong> layer for high-concurrency sensor bursts.',
          'Built event-driven inter-service pipelines with <strong>RabbitMQ</strong> & <strong>Apache Kafka</strong> pub-sub for fault isolation.',
          'Secured the service mesh with <strong>Keycloak SSO</strong>, OAuth2, JWT, and RBAC — removed 60% of duplicated auth logic with zero downtime.',
          'Delivered an <strong>Angular</strong> operator dashboard with real-time data feeds, supporting role-specific views for admins, operators, and field engineers.',
        ],
        tech: ['Java', 'Spring Boot', 'Angular', 'RabbitMQ', 'Redis', 'Keycloak', 'PostgreSQL', 'MQTT'],
      },
    ],

    projects: [
      {
        title: 'IoT Device Monitoring System',
        icon: 'ti ti-cpu',
        description:
          'Enterprise full-stack IoT platform — Spring Boot backend spanning 11 microservices ingesting sensor telemetry from ESP32 and Arduino devices over MQTT, paired with an Angular observability frontend.',
        highlights: [
          'Circuit breakers, retry policies & exception filters → 99.9% uptime',
          'Full data pipeline: firmware MQTT → Kafka → PostgreSQL/Redis → REST API',
          'JWT auth + RBAC scoping views for admins, operators & engineers',
        ],
        stack: ['Java', 'Spring Boot', 'Angular', 'Kafka', 'MQTT', 'PostgreSQL', 'Redis'],
      },
      {
        title: 'Track Measuring System',
        icon: 'ti ti-route',
        description:
          'Spring Boot platform processing inspection data from 100+ Bluetooth-enabled field devices, with a Flutter desktop app for data capture and real-time Angular dashboards for maintenance visibility.',
        highlights: [
          'Flutter desktop app cut manual reporting effort by 70%',
          'Bluetooth-to-cloud pipeline reduced sync time by 80%',
          'Angular dashboards tracking 10,000+ inspection records',
        ],
        stack: ['Java', 'Spring Boot', 'Angular', 'Flutter', 'PostgreSQL', 'Redis'],
      },
      {
        title: 'Developer Portfolio & Blog',
        icon: 'ti ti-writing',
        description:
          'Personal portfolio with Next.js App Router and Tailwind CSS, backed by a NestJS headless CMS with TypeORM and PostgreSQL for managing blog posts and project entries.',
        highlights: [
          'Server components, dynamic routing & static generation for SEO',
          'NestJS CMS protected by JWT auth and role-based guards',
        ],
        stack: ['Next.js', 'NestJS', 'TypeORM', 'PostgreSQL', 'Tailwind CSS'],
      },
    ],

    education: {
      degree: 'B.Tech — Computer Science & Engineering',
      school: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal, MP',
      period: 'Aug 2020 – May 2024',
      cgpa: '8.19 / 10',
    },

    certifications: [
      {
        name: 'Master Microservices with Spring Boot, Docker, Kubernetes',
        by: 'Eazy Bytes — Madan Reddy · Udemy 2024',
        url: 'https://www.udemy.com/certificate/UC-c11fa7ac-3d20-4d90-9746-d6eb2142f14a/',
      },
      {
        name: 'Event-Driven Microservices: CQRS, Saga, Event Sourcing',
        by: 'Eazy Bytes — Madan Reddy · Udemy 2024',
        url: 'https://www.udemy.com/certificate/UC-683373e2-bae8-4b11-89fd-70eab435d68a/',
      },
      {
        name: 'Full-Stack TypeScript Development: NestJS and React',
        by: 'Udemy 2024',
      },
    ],
  };
}
