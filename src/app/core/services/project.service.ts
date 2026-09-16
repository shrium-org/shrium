import { Injectable } from '@angular/core';

export interface Project {
  name: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  status?: string;
  githubUrl?: string;
  liveUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  readonly projects: Project[] = [
    {
      name: 'Indian Railways IoT Monitoring Platform',
      category: 'Distributed Systems · IoT',
      description:
        'A distributed IoT monitoring platform designed to process device telemetry and provide reliable monitoring capabilities.',
      highlights: [
        'Designed and developed 11 Spring Boot microservices for the platform.',
        'Handled workloads of 10,000+ requests per hour.',
        'Reduced database latency from approximately 800 ms to 120 ms through indexing and JPA optimization.',
        'Improved throughput by approximately 60% using Redis caching.',
        'Implemented authentication and authorization using Keycloak, OAuth2, JWT, and RBAC.',
        'Integrated Kafka, MQTT, Resilience4j, Docker, Kubernetes, and monitoring infrastructure.'
      ],
      technologies: [
        'Java 17',
        'Spring Boot',
        'Spring Security',
        'JPA',
        'PostgreSQL',
        'Kafka',
        'Redis',
        'MQTT',
        'Keycloak',
        'Docker',
        'Kubernetes'
      ]
    },

    {
      name: 'Renewly',
      category: 'Backend · Distributed Systems',
      description:
        'A backend platform built around domain-driven architecture, CQRS, and event-driven processing.',
      highlights: [
        'Implemented command and query separation using CQRS.',
        'Used Axon Framework and event sourcing for domain operations.',
        'Integrated Kafka, Redis, MongoDB, PostgreSQL, MinIO, and Keycloak.',
        'Designed the platform as independently deployable services.'
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'Axon Framework',
        'CQRS',
        'Event Sourcing',
        'Kafka',
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'MinIO',
        'Keycloak'
      ]
    },

    {
      name: 'AI Orchestration Platform',
      category: 'AI · Backend · Distributed Systems',
      description:
        'A provider-agnostic AI orchestration system designed to route conversations across different models and services.',
      highlights: [
        'Built an AI orchestration architecture using LangGraph.',
        'Implemented provider abstraction for multiple LLM providers and local models.',
        'Integrated conversational persistence and long-term memory.',
        'Designed the system around dynamic routing, context handling, and extensibility.'
      ],
      technologies: [
        'Python',
        'LangGraph',
        'FastAPI',
        'LLMs',
        'Ollama',
        'Gemini',
        'PostgreSQL',
        'Qdrant',
        'Neo4j',
        'Mem0'
      ]
    },

    {
      name: 'Personal Portfolio',
      category: 'Full Stack · AI',
      description:
        'A modern personal portfolio platform built as a full-stack application with an AI-powered conversational interface.',
      highlights: [
        'Built the frontend using Angular and Tailwind CSS.',
        'Developed a Spring Boot backend with a modular service architecture.',
        'Integrated Keycloak authentication and user-aware application features.',
        'Implemented AI conversations using Spring AI with support for multiple model providers.',
        'Added real-time communication using WebSocket and STOMP.'
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'Tailwind CSS',
        'Java',
        'Spring Boot',
        'Spring AI',
        'WebSocket',
        'STOMP',
        'Keycloak',
        'Oracle'
      ]
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}