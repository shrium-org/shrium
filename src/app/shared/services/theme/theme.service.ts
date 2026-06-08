import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly key = 'theme';

  init() {
    const theme =
      localStorage.getItem(this.key) ?? 'dark';

    document.documentElement.setAttribute(
      'data-theme',
      theme
    );
  }

  toggle() {
    const current =
      document.documentElement.getAttribute('data-theme');

    const next = current === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute(
      'data-theme',
      next
    );

    localStorage.setItem(this.key, next);
  }
}