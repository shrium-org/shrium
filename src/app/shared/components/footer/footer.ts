import { Component, inject } from '@angular/core';
import { ProfileService } from '../../../core/services/profile.service';
import { NavigationService } from '../../../core/services/navigation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html'
})
export class FooterComponent {

  readonly currentYear = new Date().getFullYear();
  private readonly profileService = inject(ProfileService);
  private readonly navigationService = inject(NavigationService);

  readonly profile = this.profileService.profile;
  readonly navigationItems = this.navigationService.items;
}