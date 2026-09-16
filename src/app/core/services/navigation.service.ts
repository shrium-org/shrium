import { Injectable } from '@angular/core';

export interface NavigationItem {
  label: string;
  fragment: string;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  readonly items: NavigationItem[] = [
    {
      label: 'About',
      fragment: 'about'
    },
    {
      label: 'Skills',
      fragment: 'skills'
    },
    {
      label: 'Experience',
      fragment: 'experience'
    },
    {
      label: 'Projects',
      fragment: 'projects'
    },
    {
      label: 'Contact',
      fragment: 'contact'
    }
  ];
}