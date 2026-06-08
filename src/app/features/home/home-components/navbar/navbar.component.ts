import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.07] bg-[#07080c]/90 backdrop-blur-md">
      <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        <!-- Logo + primary stack indicators -->
        <div class="flex items-center gap-4">
          <span class="font-serif text-xl text-primary tracking-tight">AM.</span>
        </div>

        <div class="hidden md:flex items-center gap-8">
          <a *ngFor="let link of navLinks"
             [href]="link.href"
             class="text-xs font-medium tracking-widest uppercase text-fg-muted hover:text-primary transition-colors duration-200">
            {{ link.label }}
          </a>
        </div>

        <a href="assets/Ajay_Malah_Resume.pdf" download
           class="bg-primary text-[#07080c] text-xs font-semibold px-5 py-2.5 rounded-md tracking-wide
                  hover:bg-primary-hover transition-colors duration-200">
          Download CV
        </a>

      </div>
    </nav>
  `,
})
export class NavbarComponent {
  navLinks = [
    { label: 'Skills',     href: '#skills'     },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects',   href: '#projects'   },
    { label: 'Education',  href: '#education'  },
  ];
}
