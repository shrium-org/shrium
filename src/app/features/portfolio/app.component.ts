import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener } from '@angular/core';
import {
  profile,
  experience,
  projects,
  skillGroups,
  certifications,
  blogs,
  education,
} from './data/portfolio-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  profile = profile;
  experience = experience;
  projects = projects;
  skillGroups = skillGroups;
  certifications = certifications;
  blogs = blogs;
  education = education;

  currentYear = new Date().getFullYear();
  yearsExperience = 3;

  navOpen = false;
  scrolled = false;

  navLinks = [
    { label: 'Profile', href: '#profile' },
    { label: 'Stack', href: '#stack' },
    { label: 'Log', href: '#experience' },
    { label: 'Builds', href: '#projects' },
    { label: 'Certs', href: '#certifications' },
    { label: 'Notes', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  bootLines = [
    'init ajay.malah@bengaluru:~$',
    'loading modules... spring-boot, angular, kafka, axon',
    'status: 3+ yrs backend/full-stack — ONLINE',
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 24;
  }

  ngAfterViewInit(): void {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
  }

  closeNav() {
    this.navOpen = false;
  }

  mailtoHref(): string {
    return `mailto:${this.profile.email}?subject=Project%20Discussion`;
  }
}
