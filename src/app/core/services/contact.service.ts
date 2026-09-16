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
    email: 'ajaymalah.2003@gmail.com',
    links: [
      {
        label: 'GitHub',
        value: 'GitHub',
        url: 'https://github.com/ajaymalah'
      },
      {
        label: 'LinkedIn',
        value: 'LinkedIn',
        url: 'https://www.linkedin.com/in/ajay-malah-512153204/'
      },
            {
        label: 'Website',
        value: 'Website',
        url: 'https://sivaxi.com'
      }
    ]
  };

  getContact(): Contact {
    return this.contact;
  }
}