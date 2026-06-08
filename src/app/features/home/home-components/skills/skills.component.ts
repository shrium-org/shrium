import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDataService } from '../../core/services/resume-data.service';

// Skills that get special highlight treatment
const PRIMARY_SKILLS = new Set(['Java', 'Angular', 'Spring Boot']);
const SECONDARY_SKILLS = new Set(['Flutter', 'TypeScript', 'NestJS', 'PostgreSQL', 'Redis']);

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="mb-16">

      <div class="flex items-center gap-4 mb-8">
        <span class="font-mono text-xs text-primary tracking-widest">01</span>
        <h2 class="font-serif text-3xl tracking-tight">Technical Skills</h2>
        <div class="flex-1 h-px bg-white/[0.07]"></div>
      </div>

      <!-- Legend -->
      <div class="flex items-center gap-5 mb-6 pl-1">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-primary"></span>
          <span class="text-xs text-fg-subtle">Primary stack</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-white/20"></span>
          <span class="text-xs text-fg-subtle">Proficient</span>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div *ngFor="let group of data.skillGroups"
             class="bg-surface border border-white/[0.07] rounded-xl p-5 hover:border-white/[0.15] transition-colors duration-200">

          <div class="text-[11px] font-semibold tracking-widest uppercase text-primary mb-3.5 flex items-center gap-2">
            <i [class]="group.icon"></i>
            {{ group.label }}
          </div>

          <div class="flex flex-wrap gap-1.5">
            <ng-container *ngFor="let skill of group.skills">

              <!-- Primary: Java or Angular -->
              <span *ngIf="isPrimary(skill)"
                    class="px-2.5 py-1 rounded font-mono text-[12px] font-semibold
                           border flex items-center gap-1.5"
                    [ngClass]="getPrimaryClass(skill)">
                <i [class]="getPrimaryIcon(skill) + ' text-[11px]'"></i>
                {{ skill }}
              </span>

              <!-- Secondary highlight -->
              <span *ngIf="isSecondary(skill) && !isPrimary(skill)"
                    class="px-2.5 py-1 bg-surface-3 border border-white/[0.15] rounded
                           font-mono text-[12px] text-fg font-medium">
                {{ skill }}
              </span>

              <!-- Regular -->
              <span *ngIf="!isPrimary(skill) && !isSecondary(skill)"
                    class="px-2.5 py-1 bg-surface-3 border border-white/[0.07] rounded
                           font-mono text-[12px] text-fg-muted">
                {{ skill }}
              </span>

            </ng-container>
          </div>
        </div>
      </div>

    </section>
  `,
})
export class SkillsComponent {
  data = inject(ResumeDataService).data;

  isPrimary(skill: string)   { return PRIMARY_SKILLS.has(skill); }
  isSecondary(skill: string) { return SECONDARY_SKILLS.has(skill); }

  getPrimaryClass(skill: string): string {
    if (skill === 'Java')        return 'bg-[#e76f00]/10 border-[#e76f00]/40 text-[#e76f00]';
    if (skill === 'Angular')     return 'bg-[#dd0031]/10 border-[#dd0031]/40 text-[#dd0031]';
    if (skill === 'Spring Boot') return 'bg-[#6db33f]/10 border-[#6db33f]/40 text-[#6db33f]';
    return 'bg-primary/10 border-primary/30 text-primary';
  }

  getPrimaryIcon(skill: string): string {
    if (skill === 'Java')        return 'ti ti-coffee';
    if (skill === 'Angular')     return 'ti ti-brand-angular';
    if (skill === 'Spring Boot') return 'ti ti-leaf';
    return 'ti ti-star';
  }
}
