// education.component.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDataService } from '../../core/services/resume-data.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  // styleUrl: './education.component.scss',
})
export class EducationComponent {
  private svc = inject(ResumeDataService);
  edu = this.svc.data.education;
  certs = this.svc.data.certifications;
}