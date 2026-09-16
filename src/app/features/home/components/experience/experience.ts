import { Component, inject } from '@angular/core';
import { ExperienceService } from '../../../../core/services/experience.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.html'
})
export class ExperienceComponent {

  private readonly experienceService = inject(ExperienceService);

  readonly experiences = this.experienceService.experiences;
}