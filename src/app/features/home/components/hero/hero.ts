import { Component, inject } from '@angular/core';
import { ProfileService } from '../../../../core/services/profile.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html'
})
export class HeroComponent {

  private readonly profileService = inject(ProfileService);

  readonly profile = this.profileService.profile;
}