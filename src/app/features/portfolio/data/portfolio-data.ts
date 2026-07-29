export const profile = {
  name: 'Ajay Malah',
  title: 'Java Full Stack Developer',
  summary:
    'Java Full Stack Developer with 3+ years of experience building scalable backend systems, microservices, and modern web applications. Experienced in Spring Boot, CQRS, Event Sourcing, distributed systems, and frontend development with Angular. Passionate about clean architecture, system design, and building reliable software solutions.',
  email: 'ajaymalah.2003@gmai.com',
  phone: '+91-7489463450',
  location: 'Bengaluru, India',
  socialLinks: {
    linkedin: 'linkedin.com/in/ajay-malah-512153204',
    github: 'github.com/ajaymalah',
    portfolio: 'https://shrium.com/portifolio',
  },
  tagline: [
    'Building scalable backend systems',
    'Java & Spring Boot enthusiast',
    'Clean architecture advocate',
    'Exploring distributed systems and cloud technologies',
  ],
};

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  techStack: string[];
}

export const experience: Experience[] = [
  {
    id: 'exp-001',
    company: 'Robokriti India Pvt Limited',
    role: 'Software Engineer',
    location: 'Jabalpur, India',
    startDate: '2024-06',
    endDate: 'Present',
    responsibilities: [
      'Designed and developed scalable backend services using Java and Spring Boot.',
      'Built RESTful APIs and implemented microservices-based architecture.',
      'Worked on CQRS and Event Sourcing patterns using Axon Framework.',
      'Developed frontend applications using Angular and integrated them with backend services.',
      'Implemented authentication and authorization using Keycloak.',
      'Worked with Kafka for event-driven communication between services.',
      'Optimized application performance through clean architecture and efficient design patterns.',
    ],
    techStack: [
      'Java 8', 'Java 11', 'Java 17', 'Spring Boot', 'Spring Cloud', 'Spring Security',
      'Angular', 'PostgreSQL', 'Kafka', 'Redis', 'Axon Framework', 'Keycloak', 'Docker',
    ],
  },
  {
    id: 'exp-002',
    company: 'Robokriti India Pvt Limited',
    role: 'Software Developer Intern',
    location: 'Jabalpur, India',
    startDate: '2023-06',
    endDate: '2024-06',
    responsibilities: [
      'Developed backend components using Java and Spring Boot.',
      'Created REST APIs and worked on database integration.',
      'Fixed bugs and improved existing application features.',
      'Collaborated with senior developers to understand enterprise application development practices.',
    ],
    techStack: ['Java', 'Spring Boot', 'Hibernate', 'REST API', 'PostgreSQL', 'Git'],
  },
];

export interface Project {
  id: string;
  name: string;
  description: string;
  role: string;
  category: string;
  featured: boolean;
  responsibilities: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: 'project-001',
    name: 'Renewly Platform',
    description:
      'A scalable multi-tenant platform built using microservices architecture with CQRS and Event Sourcing patterns.',
    role: 'Java Full Stack Developer',
    category: 'Enterprise Platform',
    featured: true,
    responsibilities: [
      'Designed and developed Spring Boot microservices.',
      'Implemented CQRS and Event Sourcing using Axon Framework.',
      'Built command and query separation with dedicated read models.',
      'Integrated Kafka for asynchronous event communication.',
      'Implemented authentication and authorization using Keycloak.',
      'Developed Angular-based frontend applications.',
    ],
    techStack: ['Java 17', 'Spring Boot', 'Axon Framework', 'CQRS', 'Event Sourcing', 'Kafka', 'PostgreSQL', 'MongoDB', 'Redis', 'Angular', 'Docker'],
    githubUrl: '',
    liveUrl: '',
  },
  {
    id: 'project-002',
    name: 'IoT Monitoring Platform',
    description:
      'Real-time IoT monitoring solution for collecting and visualizing sensor data from embedded devices.',
    role: 'Backend Developer',
    category: 'IoT Platform',
    featured: true,
    responsibilities: [
      'Developed backend services for IoT device communication.',
      'Integrated MQTT-based messaging for real-time sensor data.',
      'Designed APIs for monitoring device status and measurements.',
      'Worked with embedded devices and sensor data processing.',
    ],
    techStack: ['Spring Boot', 'MQTT', 'Kafka', 'Redis', 'PostgreSQL', 'ESP32', 'Angular'],
    githubUrl: '',
    liveUrl: '',
  },
  {
    id: 'project-003',
    name: 'Shrium Tech Portfolio',
    description: 'Personal developer portfolio platform showcasing projects, experience, and technical journey.',
    role: 'Full Stack Developer',
    category: 'Personal Project',
    featured: true,
    responsibilities: [
      'Designed backend API architecture using Spring Boot.',
      'Implemented JSON-based content management.',
      'Built modern frontend experience for portfolio presentation.',
    ],
    techStack: ['Java', 'Spring Boot', 'Angular', 'JSON Storage', 'REST API'],
    githubUrl: '',
    liveUrl: 'https://shrium.com',
  },
];

export interface SkillGroup {
  id: string;
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  { id: 'skill-001', category: 'Backend Development', skills: ['Java', 'Spring Boot', 'Spring Security', 'Spring Cloud', 'REST APIs', 'Microservices', 'CQRS', 'Event Sourcing', 'Axon Framework'] },
  { id: 'skill-002', category: 'Frontend Development', skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Material UI'] },
  { id: 'skill-003', category: 'Database & Messaging', skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Kafka'] },
  { id: 'skill-004', category: 'DevOps & Cloud', skills: ['Docker', 'GitHub Actions', 'CI/CD', 'Kubernetes', 'Helm', 'OCI Cloud'] },
];

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialUrl: string;
  skills: string[];
}

export const certifications: Certification[] = [
  {
    id: 'cert-004',
    name: 'Angular - The Complete Guide',
    issuer: 'Udemy · Maximilian Schwarzmüller',
    issueDate: '07/28/2026',
    credentialUrl: 'https://www.udemy.com/certificate/UC-071dc974-fb79-41bf-8c5c-8c333ed04985/',
    skills: ['Angular', 'Tailwind CSS', 'HTML 5'],
  },
  {
    id: 'cert-002',
    name: 'Event Driven Microservices with CQRS, Saga, Event Sourcing',
    issuer: 'Udemy · Madan Reddy (Eazy Bytes)',
    issueDate: '09/22/2025',
    credentialUrl: 'https://www.udemy.com/certificate/UC-683373e2-bae8-4b11-89fd-70eab435d68a/',
    skills: ['CQRS', 'Event Sourcing', 'SAGA', 'Event Driven Architectures'],
  },
  {
    id: 'cert-003',
    name: 'Flutter Advanced: Multi-Modular & Clean Architecture',
    issuer: 'Udemy · Mina Farid',
    issueDate: '09/22/2025',
    credentialUrl: 'https://www.udemy.com/certificate/UC-64ae13d9-9ad7-4199-b319-a06dd98ac60e/',
    skills: ['Flutter', 'Flutter BLOC', 'Clean Architecture'],
  },
  {
    id: 'cert-001',
    name: '[NEW] Master Microservices with SpringBoot, Docker, Kubernetes',
    issuer: 'Udemy · Madan Reddy (Eazy Bytes)',
    issueDate: '08/23/2025',
    credentialUrl: 'https://www.udemy.com/certificate/UC-c11fa7ac-3d20-4d90-9746-d6eb2142f14a/',
    skills: ['Java', 'Spring Boot', 'Kubernetes', 'Docker', 'Microservice', 'OOP', 'Collections', 'Concurrency'],
  },
];

export interface Blog {
  id: string;
  title: string;
  slug: string;
  summary: string;
  publishedDate: string;
  category: string;
  tags: string[];
}

export const blogs: Blog[] = [
  {
    id: 'blog-003',
    title: 'Learning DSA as a Backend Developer',
    slug: 'learning-dsa-as-backend-developer',
    summary: 'Documenting my journey of improving problem-solving skills through data structures and algorithms.',
    publishedDate: '2026-07-10',
    category: 'DSA',
    tags: ['Java', 'Data Structures', 'Algorithms'],
  },
  {
    id: 'blog-001',
    title: 'Understanding CQRS and Event Sourcing with Spring Boot',
    slug: 'understanding-cqrs-event-sourcing-spring-boot',
    summary: 'A practical guide to designing scalable systems using CQRS and Event Sourcing patterns.',
    publishedDate: '2026-07-01',
    category: 'Backend Architecture',
    tags: ['Spring Boot', 'CQRS', 'Event Sourcing', 'Axon Framework'],
  },
  {
    id: 'blog-002',
    title: 'My Journey Building Microservices',
    slug: 'my-journey-building-microservices',
    summary: 'Lessons learned while designing and developing distributed backend systems.',
    publishedDate: '2026-06-15',
    category: 'Software Engineering',
    tags: ['Microservices', 'Kafka', 'Docker', 'Cloud'],
  },
];

export const education = {
  degree: 'Bachelor of Technology (B.Tech)',
  fieldOfStudy: 'Computer Science Engineering',
  institution: 'Oriental Institute of Science & Technology',
  location: 'Madhya Pradesh, India',
  startDate: '2020',
  endDate: '2024',
  grade: '8.19 CGPA',
};
