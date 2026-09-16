import { Component, inject } from '@angular/core';
import { ProfileService } from '../../../core/services/profile.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html'
})
export class AboutComponent {

  private readonly profileService = inject(ProfileService);

  readonly about = this.profileService.profile.about;
}