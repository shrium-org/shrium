// education.component.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDataService } from '../../core/services/resume-data.service';
import { EducationService } from './education.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  // styleUrl: './education.component.scss',
})
export class EducationComponent {
   private educationService = inject(EducationService);

  education = this.educationService.educationData;


  ngOnInit(): void {
    this.educationService.getEducation().subscribe();
  }

}