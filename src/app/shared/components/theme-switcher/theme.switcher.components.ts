import { Component, inject } from '@angular/core';
import { Theme, ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  templateUrl: './theme-switcher.component.html'
})
export class ThemeSwitcherComponent {

  readonly themeService = inject(ThemeService);
readonly themes = this.themeService.availableThemes;



  setTheme(theme: Theme): void {
    this.themeService.setTheme(theme);
  }
}