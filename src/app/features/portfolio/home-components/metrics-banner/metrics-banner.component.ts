// metrics-banner.component.ts
import { Component, inject } from '@angular/core';
import { ResumeDataService } from '../../core/services/resume-data.service';

@Component({
  selector: 'app-metrics-banner',
  standalone: true,
  templateUrl: './metrics-banner.component.html',
})
export class MetricsBannerComponent {
  data = inject(ResumeDataService).data;
}