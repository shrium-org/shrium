import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss',
})
export class ThemeToggle {

  isDark = true;

  ngOnInit() {
    const theme = localStorage.getItem('theme') ?? 'dark';

    document.documentElement.setAttribute('data-theme', theme);

    this.isDark = theme === 'dark';
  }

  toggleTheme() {
    this.isDark = !this.isDark;

    const theme = this.isDark ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
}