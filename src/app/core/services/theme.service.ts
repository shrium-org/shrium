import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type Theme = 'light' | 'dark' | 'system';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  private readonly storageKey = 'portfolio-theme';

  readonly theme = signal<Theme>(this.getInitialTheme());

  private mediaQuery?: MediaQueryList;

constructor() {
  if (!isPlatformBrowser(this.platformId)) {
    return;
  }

  this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  this.applyTheme(this.theme());

  this.mediaQuery.addEventListener(
    'change',
    this.handleSystemThemeChange
  );
}

  setTheme(theme: Theme): void {
    this.theme.set(theme);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.storageKey, theme);
    }

    this.applyTheme(theme);
  }

  toggle(): void {
    const current = this.getResolvedTheme();

    this.setTheme(current === 'dark' ? 'light' : 'dark');
  }

  getResolvedTheme(): 'light' | 'dark' {
    const theme = this.theme();

    if (theme === 'system') {
      return this.isSystemDark() ? 'dark' : 'light';
    }

    return theme;
  }

    readonly availableThemes = [
  {
    value: 'light' as const,
    label: 'Light'
  },
  {
    value: 'system' as const,
    label: 'System'
  },
  {
    value: 'dark' as const,
    label: 'Dark'
  }
];

  private applyTheme(theme: Theme): void {
    const resolvedTheme =
      theme === 'system'
        ? (this.isSystemDark() ? 'dark' : 'light')
        : theme;

    const html = this.document.documentElement;

    html.classList.toggle('dark', resolvedTheme === 'dark');
    html.style.colorScheme = resolvedTheme;
  }

  private getInitialTheme(): Theme {
    if (!isPlatformBrowser(this.platformId)) {
      return 'system';
    }

    const storedTheme = localStorage.getItem(this.storageKey);

    if (
      storedTheme === 'light' ||
      storedTheme === 'dark' ||
      storedTheme === 'system'
    ) {
      return storedTheme;
    }

    return 'system';
  }

  private isSystemDark(): boolean {
    return window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
  }

  private readonly handleSystemThemeChange = (): void => {
    if (this.theme() === 'system') {
      this.applyTheme('system');
    }
  };
}