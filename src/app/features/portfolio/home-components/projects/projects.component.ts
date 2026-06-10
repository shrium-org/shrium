// projects.component.ts
import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { ResumeDataService } from '../../core/services/resume-data.service';

const TECH_ACCENTS: Record<string, string> = {
  'Java':        'bg-[#e76f00]/10 border-[#e76f00]/30 text-[#e76f00]',
  'Spring Boot': 'bg-[#6db33f]/10 border-[#6db33f]/30 text-[#6db33f]',
  'Angular':     'bg-[#dd0031]/10 border-[#dd0031]/30 text-[#dd0031]',
  'Flutter':     'bg-[#027DFD]/10 border-[#027DFD]/30 text-[#027DFD]',
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgClass],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  data = inject(ResumeDataService).data;

  isAccented(tech: string): boolean {
    return tech in TECH_ACCENTS;
  }

  hasAccented(stack: string[]): boolean {
    return stack.some(s => this.isAccented(s));
  }

  getTechClass(tech: string): string {
    return TECH_ACCENTS[tech] ?? 'bg-surface-3 border-white/[0.07] text-fg-subtle';
  }
}