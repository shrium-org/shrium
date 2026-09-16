import { Injectable } from '@angular/core';

export interface ContactLink {
  label: string;
  value: string;
  url: string;
}

export interface Contact {
  heading: string;
  description: string;
  email: string;
  links: ContactLink[];
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  readonly contact: Contact = {
    heading: 'Let’s build something useful.',
    description:
      'I am open to discussing software engineering opportunities, interesting projects, and technical collaborations.',
    email: 'your-email@example.com',
    links: [
      {
        label: 'GitHub',
        value: 'GitHub',
        url: '#'
      },
      {
        label: 'LinkedIn',
        value: 'LinkedIn',
        url: '#'
      }
    ]
  };

  getContact(): Contact {
    return this.contact;
  }
}