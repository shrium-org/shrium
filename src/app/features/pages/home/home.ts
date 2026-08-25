import { Component } from '@angular/core';
import { ThemeToggle } from "../../../shared/components/theme-toggle/theme-toggle";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.html',
  imports: [ThemeToggle]
})
export class Home {

  technologies = [
    'JAVA',
    'SPRING BOOT',
    'KUBERNETES',
    'DOCKER',
    'KAFKA',
    'ORACLE',
    'REDIS',
    'ANGULAR'
  ];

  services = [
    {
      number: '01',
      title: 'Backend Engineering',
      description:
        'Robust Java and Spring Boot systems designed around clean architecture, performance and maintainability.',
      icon: '⌘'
    },
    {
      number: '02',
      title: 'Distributed Systems',
      description:
        'Event-driven microservices built with Kafka, CQRS, Saga patterns and resilient architectures.',
      icon: '◇'
    },
    {
      number: '03',
      title: 'Cloud & DevOps',
      description:
        'Containerized infrastructure, Kubernetes deployments and automated delivery pipelines.',
      icon: '△'
    }
  ];

  stats = [
    {
      value: '01',
      label: 'Engineering First'
    },
    {
      value: '∞',
      label: 'Built To Scale'
    },
    {
      value: '24/7',
      label: 'Production Ready'
    }
  ];
}