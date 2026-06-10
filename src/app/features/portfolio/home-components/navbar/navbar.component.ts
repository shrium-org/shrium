// navbar.component.ts
import { Component, inject } from '@angular/core';
import { ResumeDataService } from '../../core/services/resume-data.service';
import { ThemeToggle } from '../../../../shared/components/theme-toggle/theme-toggle';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ThemeToggle],
  templateUrl: './navbar.components.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  data = inject(ResumeDataService).data;

  navLinks = [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects',   href: '#projects'   },
    { label: 'Skills',     href: '#skills'      },
    { label: 'Education',  href: '#education'   },
    { label: 'Contact',    href: '#contact'     },
  ];
}