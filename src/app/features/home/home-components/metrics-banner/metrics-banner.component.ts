import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDataService } from '../../core/services/resume-data.service';

@Component({
  selector: 'app-metrics-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
      <div *ngFor="let m of data.metrics"
           class="relative bg-surface-2 border border-white/[0.07] rounded-xl p-5 text-center overflow-hidden">
        <!-- top accent line -->
        <div class="absolute top-0 left-0 right-0 h-[2px] bg-primary opacity-60"></div>
        <div class="font-serif text-3xl text-primary leading-none">
          {{ m.value }}<span *ngIf="m.unit" class="text-base font-sans font-light align-super">{{ m.unit }}</span>
        </div>
        <div class="text-[11.5px] text-fg-subtle mt-2 leading-relaxed whitespace-pre-line">{{ m.description }}</div>
      </div>
    </div>
  `,
})
export class MetricsBannerComponent {
  data = inject(ResumeDataService).data;
}
