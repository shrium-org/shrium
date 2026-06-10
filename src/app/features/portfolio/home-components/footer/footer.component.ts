// footer.component.ts
import { Component, inject } from '@angular/core';
import { ResumeDataService } from '../../core/services/resume-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  data = inject(ResumeDataService).data;
}