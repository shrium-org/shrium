import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDataService } from '../../core/services/resume-data.service';

// Tech pills that get a colored accent in the experience cards
const TECH_ACCENTS: Record<string, string> = {
  'Java':        'bg-[#e76f00]/10 border-[#e76f00]/30 text-[#e76f00]',
  'Spring Boot': 'bg-[#6db33f]/10 border-[#6db33f]/30 text-[#6db33f]',
  'Angular':     'bg-[#dd0031]/10 border-[#dd0031]/30 text-[#dd0031]',
};

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="mb-16">

      <div class="flex items-center gap-4 mb-8">
        <span class="font-mono text-xs text-primary tracking-widest">02</span>
        <h2 class="font-serif text-3xl tracking-tight">Work Experience</h2>
        <div class="flex-1 h-px bg-white/[0.07]"></div>
      </div>

      <div class="flex flex-col gap-1">
        <div *ngFor="let exp of data.experience; let last = last"
             class="relative pl-7">
          <div *ngIf="!last" class="absolute left-0 top-2 bottom-0 w-px bg-white/[0.07]"></div>
          <div class="absolute -left-1 top-2 w-2.5 h-2.5 rounded-full bg-primary border-2 border-[#07080c]"></div>

          <div class="bg-surface border border-white/[0.07] rounded-xl p-6 mb-1 hover:border-white/[0.15] transition-colors duration-200">

            <!-- Header -->
            <div class="flex flex-wrap items-start justify-between gap-3 mb-1">
              <h3 class="text-[17px] font-semibold tracking-tight">{{ exp.role }}</h3>
              <span class="font-mono text-[11px] px-2.5 py-1 rounded bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
                {{ exp.period }}
              </span>
            </div>

            <p class="text-sm text-fg-muted mb-5">
              {{ exp.company }}
              <span class="text-fg-subtle mx-1.5">·</span>
              {{ exp.location }}
              <span class="text-fg-subtle mx-1.5">·</span>
              {{ exp.type }}
            </p>

            <!-- Bullets -->
            <ul class="exp-bullets flex flex-col gap-2.5 mb-5">
              <li *ngFor="let bullet of exp.bullets"
                  class="relative pl-5 text-sm text-fg-muted leading-relaxed"
                  [innerHTML]="bullet">
              </li>
            </ul>

            <!-- Tech pills — Java, Angular, Spring Boot get colour accents -->
            <div class="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.07]">
              <span *ngFor="let t of exp.tech"
                    class="px-2.5 py-1 rounded font-mono text-[11px] font-medium border"
                    [ngClass]="getTechClass(t)">
                {{ t }}
              </span>
            </div>

          </div>
        </div>
      </div>

    </section>
  `,
  styles: [`
    .exp-bullets li::before {
      content: '→';
      position: absolute;
      left: 0;
      color: #c8841a;
      font-size: 12px;
      top: 2px;
    }
    .exp-bullets li :deep(strong) {
      color: #e8e6e0;
      font-weight: 500;
    }
  `],
})
export class ExperienceComponent {
  data = inject(ResumeDataService).data;

  getTechClass(tech: string): string {
    return TECH_ACCENTS[tech] ?? 'bg-surface-3 border-white/[0.07] text-fg-subtle';
  }
}
