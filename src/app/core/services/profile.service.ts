import { Injectable } from '@angular/core';

export interface Profile {
  name: string;
  title: string;
  introduction: string;
  location: string;
  availability: string;

  about: {
    heading: string;
    paragraphs: string[];
  };

  primaryAction: {
    label: string;
    fragment: string;
  };

  secondaryAction: {
    label: string;
    fragment: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  readonly profile: Profile = {
    name: 'Ajay Malah',

    title: 'Software Engineer',

    introduction:
      'I build scalable backend systems, distributed services, and modern web applications.',

    location: 'Bengaluru, India',

    availability: 'Open to opportunities',

    about: {
      heading: 'Building systems, not just features.',
      paragraphs: [
        'I am a software engineer focused on building reliable backend systems and modern applications.',
        'My work spans Java, Spring Boot, microservices, distributed systems, databases, cloud infrastructure, and modern frontend development.',
        'I enjoy understanding how systems work end to end and turning complex requirements into maintainable software.'
      ]
    },

    primaryAction: {
      label: 'View Projects',
      fragment: 'projects'
    },

    secondaryAction: {
      label: 'Contact Me',
      fragment: 'contact'
    }
  };

  getProfile(): Profile {
    return this.profile;
  }
}