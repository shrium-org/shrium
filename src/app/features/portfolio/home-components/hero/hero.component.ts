import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDataService } from '../../core/services/resume-data.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-start pb-16 mb-16 border-b border-white/[0.07]">

      <!-- Left -->
      <div>
        <!-- Availability badge -->
        <div class="flex items-center gap-2.5 mb-5">
          <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span class="text-xs font-medium tracking-widest uppercase text-primary">Open to opportunities</span>
        </div>

        <!-- Name -->
        <h1 class="font-serif text-5xl md:text-6xl leading-[1.05] tracking-[-2px] mb-3">
          {{ data.name.split(' ')[0] }}<br>
          <em class="text-primary not-italic">{{ data.name.split(' ')[1] }}</em>
        </h1>

        <!-- Primary stack badges — Java & Angular prominently shown -->
        <div class="flex items-center gap-2 flex-wrap mb-5">
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide
                       bg-[#e76f00]/10 border border-[#e76f00]/30 text-[#e76f00]">
            <i class="ti ti-coffee text-sm"></i> Java
          </span>
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide
                       bg-[#dd0031]/10 border border-[#dd0031]/30 text-[#dd0031]">
            <i class="ti ti-brand-angular text-sm"></i> Angular
          </span>
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide
                       bg-[#6db33f]/10 border border-[#6db33f]/30 text-[#6db33f]">
            <i class="ti ti-leaf text-sm"></i> Spring Boot
          </span>
          <span class="text-fg-subtle text-xs font-mono pl-1 pt-2">· Full-Stack Developer</span>
        </div>

        <p class="text-sm leading-relaxed max-w-xl text-justify mb-8">{{ data.summary }}</p>

        <!-- Contact chips -->
        <div class="flex flex-wrap gap-3">
          <a *ngFor="let c of data.contacts"
             [href]="c.href"
             target="_blank"
             class="flex items-center gap-2 px-3.5 py-2 bg-surface-2 border border-white/[0.07] rounded-md
                    text-xs text-fg-muted hover:border-primary hover:text-fg transition-all duration-200">
            <i [class]="c.icon + ' text-primary text-sm'"></i>
            {{ c.label }}
          </a>
        </div>
      </div>

      <!-- Right — stat cards -->
      <div class="flex justify-center  md:flex-col flex-row gap-3">
        <div *ngFor="let stat of data.heroStats"
             class="bg-surface-2 border border-white/[0.07] rounded-xl md:px-6 py-5 text-center min-w-[120px]">
          <div class="font-serif text-4xl text-primary leading-none">{{ stat.value }}</div>
          <div class="text-[11px] uppercase tracking-widest text-fg-subtle mt-1.5">{{ stat.label }}</div>
        </div>
      </div>

    </section>
  `,
})
export class HeroComponent {
  data = inject(ResumeDataService).data;
}
