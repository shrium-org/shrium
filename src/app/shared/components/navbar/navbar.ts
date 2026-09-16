import { Component, inject, signal } from '@angular/core';
import { NavigationService } from '../../../core/services/navigation.service';
import { ThemeSwitcherComponent } from '../theme-switcher/theme.switcher.components';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ThemeSwitcherComponent],
  templateUrl: './navbar.html'
})
export class NavbarComponent {

  private readonly navigationService = inject(NavigationService);

  readonly navigationItems = this.navigationService.items;

  readonly mobileMenuOpen = signal(false);

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(open => !open);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}