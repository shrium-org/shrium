// experience.component.ts
import { Component, inject } from '@angular/core';
import { ResumeDataService } from '../../core/services/resume-data.service';
import { ExperienceService } from './experience.service';

const TECH_ACCENTS: Record<string, string> = {
  'Java':        'bg-[#e76f00]/10 border-[#e76f00]/30 text-[#e76f00]',
  'Spring Boot': 'bg-[#6db33f]/10 border-[#6db33f]/30 text-[#6db33f]',
  'Angular':     'bg-[#dd0031]/10 border-[#dd0031]/30 text-[#dd0031]',
};

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html'

})
export class ExperienceComponent {
  private experienceService = inject(ExperienceService);

  experiences = this.experienceService.experienceData;


  ngOnInit(): void {
    this.experienceService.getExperience().subscribe();
  }
}