import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDataService } from '../../core/services/resume-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="border-t border-white/[0.07] pt-8 pb-12 flex flex-wrap items-center justify-between gap-4">
      <p class="text-xs text-fg-subtle">
        {{ data.name }} · {{ data.location }} · {{ data.contacts[0].value }}
      </p>
      <div class="flex gap-5">
        <a *ngFor="let c of data.contacts"
           [href]="c.href" target="_blank"
           class="text-xs text-fg-subtle hover:text-primary transition-colors duration-200">
          {{ c.label }}
        </a>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  data = inject(ResumeDataService).data;
}
