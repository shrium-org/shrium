import { Injectable, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly storageKey = 'theme';

  private readonly _theme = signal<Theme>(this.getInitialTheme());

  readonly theme = this._theme.asReadonly();

  readonly isDark = signal(
    this._theme() === 'dark'
  );

  constructor() {
    this.applyTheme(this._theme());
  }

  toggle(): void {
    const nextTheme: Theme =
      this._theme() === 'dark' ? 'light' : 'dark';

    this.setTheme(nextTheme);
  }

  setTheme(theme: Theme): void {
    this._theme.set(theme);
    this.isDark.set(theme === 'dark');

    this.applyTheme(theme);

    localStorage.setItem(this.storageKey, theme);
  }

  private getInitialTheme(): Theme {
    const storedTheme = localStorage.getItem(this.storageKey);

    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    }

    return 'dark';
  }

  private applyTheme(theme: Theme): void {
    document.documentElement.setAttribute(
      'data-theme',
      theme
    );
  }
}