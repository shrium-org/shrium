import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDataService } from '../../core/services/resume-data.service';

const TECH_ACCENTS: Record<string, string> = {
  'Java':        'bg-[#e76f00]/10 border-[#e76f00]/30 text-[#e76f00]',
  'Spring Boot': 'bg-[#6db33f]/10 border-[#6db33f]/30 text-[#6db33f]',
  'Angular':     'bg-[#dd0031]/10 border-[#dd0031]/30 text-[#dd0031]',
  'Flutter':    'bg-[#e76f00]/10 border-[#e76f00]/30 text-[#e76f00]',
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="mb-16">

      <div class="flex items-center gap-4 mb-8">
        <span class="font-mono text-xs text-primary tracking-widest">03</span>
        <h2 class="font-serif text-3xl tracking-tight">Projects</h2>
        <div class="flex-1 h-px bg-white/[0.07]"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div *ngFor="let proj of data.projects"
             class="bg-surface border border-white/[0.07] rounded-xl p-6
                    hover:border-white/[0.15] hover:-translate-y-0.5 transition-all duration-200">

          <div class="flex items-start justify-between gap-4 mb-3">
            <h3 class="text-[17px] font-semibold tracking-tight">{{ proj.title }}</h3>
            <div class="w-9 h-9 flex-shrink-0 rounded-lg bg-primary/10 border border-primary/20
                        flex items-center justify-center">
              <i [class]="proj.icon + ' text-primary text-lg'"></i>
            </div>
          </div>

          <!-- Primary stack quick-glance badges at top of each card -->
          <!-- <div class="flex flex-wrap gap-1.5 mb-3">
            <ng-container *ngFor="let s of proj.stack">
              <span *ngIf="isAccented(s)"
                    class="inline-flex items-center gap-1 px-2 py-0.5 rounded font-mono text-[11px] font-semibold border"
                    [ngClass]="getTechClass(s)">
                {{ s }}
              </span>
            </ng-container>
          </div> -->

          <p class="text-sm text-fg-muted leading-relaxed mb-4">{{ proj.description }}</p>

          <ul class="flex flex-col gap-1.5 mb-4">
            <li *ngFor="let h of proj.highlights"
                class="relative pl-4 text-[13px] text-fg-muted">
              <span class="absolute left-1 text-primary">·</span>
              {{ h }}
            </li>
          </ul>

          <!-- Full stack row — non-accented only (accented shown above) -->
          <div class="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.07]">
            <span *ngFor="let s of proj.stack"
                  class="px-2 py-0.5 rounded font-mono text-[11px] border"
                  [ngClass]="getTechClass(s)">
              {{ s }}
            </span>
          </div>

        </div>
      </div>

    </section>
  `,
})
export class ProjectsComponent {
  data = inject(ResumeDataService).data;

  isAccented(tech: string): boolean { return tech in TECH_ACCENTS; }

  getTechClass(tech: string): string {
    return TECH_ACCENTS[tech] ?? 'bg-surface-3 border-white/[0.07] text-fg-subtle';
  }
}
