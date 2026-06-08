import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDataService } from '../../core/services/resume-data.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="education" class="mb-16">

      <div class="flex items-center gap-4 mb-8">
        <span class="font-mono text-xs text-primary tracking-widest">04</span>
        <h2 class="font-serif text-3xl tracking-tight">Education & Certifications</h2>
        <div class="flex-1 h-px bg-white/[0.07]"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

        <!-- Education card -->
        <div class="bg-surface border border-white/[0.07] rounded-xl p-6">
          <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <i class="ti ti-school text-primary text-lg"></i>
            </div>
            <div>
              <div class="text-base font-semibold tracking-tight">{{ edu.degree }}</div>
              <div class="text-sm text-fg-muted">{{ edu.school }}</div>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="font-mono text-xs px-2.5 py-1 rounded bg-surface-3 text-fg-muted">{{ edu.period }}</span>
            <span class="font-mono text-xs px-2.5 py-1 rounded bg-primary/10 text-primary border border-primary/20">CGPA {{ edu.cgpa }}</span>
          </div>
        </div>

        <!-- Certifications card -->
        <div class="bg-surface border border-white/[0.07] rounded-xl p-6">
          <div class="text-[11px] font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
            <i class="ti ti-certificate"></i> Certifications
          </div>
          <div *ngFor="let cert of certs; let last = last"
               class="flex items-center justify-between gap-3 py-3"
               [class.border-b]="!last"
               [class.border-white/[0.07]]="!last">
            <div>
              <div class="text-sm font-medium">{{ cert.name }}</div>
              <div class="text-xs text-fg-subtle mt-0.5">{{ cert.by }}</div>
            </div>
            <a *ngIf="cert.url" [href]="cert.url" target="_blank"
               class="text-[11px] text-primary font-mono whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity">
              View ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  `,
})
export class EducationComponent {
  private svc = inject(ResumeDataService);
  edu = this.svc.data.education;
  certs = this.svc.data.certifications;
}
