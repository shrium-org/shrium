import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggle } from '../../../../shared/components/theme-toggle/theme-toggle';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,ThemeToggle],
  styleUrl: './navbar.component.css',
  templateUrl: './navbar.components.html',
})
export class NavbarComponent {
  navLinks = [
    { label: 'Skills',     href: 'portfolio/#skills'     },
    { label: 'Experience', href: 'portfolio/#experience' },
    { label: 'Projects',   href: 'portfolio/#projects'   },
    { label: 'Education',  href: 'portfolio/#education'  },
  ];

}
