// skills.component.ts
import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { ResumeDataService } from '../../core/services/resume-data.service';

const PRIMARY_SKILLS = new Set(['Java', 'Angular', 'Spring Boot', 'Flutter']);
const SECONDARY_SKILLS = new Set(['TypeScript', 'NestJS', 'PostgreSQL', 'Redis']);

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgClass],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  data = inject(ResumeDataService).data;

  isPrimary(skill: string)   { return PRIMARY_SKILLS.has(skill); }
  isSecondary(skill: string) { return SECONDARY_SKILLS.has(skill); }

  getPrimaryClass(skill: string): string {
    if (skill === 'Java')        return 'bg-[#e76f00]/10 border-[#e76f00]/40 text-[#e76f00]';
    if (skill === 'Angular')     return 'bg-[#dd0031]/10 border-[#dd0031]/40 text-[#dd0031]';
    if (skill === 'Spring Boot') return 'bg-[#6db33f]/10 border-[#6db33f]/40 text-[#6db33f]';
    if (skill === 'Flutter')     return 'bg-[#027DFD]/10 border-[#027DFD]/40 text-[#027DFD]';
    return 'bg-primary/10 border-primary/30 text-primary';
  }

  getPrimaryIcon(skill: string): string {
    if (skill === 'Java')        return 'ti ti-coffee';
    if (skill === 'Angular')     return 'ti ti-brand-angular';
    if (skill === 'Spring Boot') return 'ti ti-leaf';
    if (skill === 'Flutter')     return 'ti ti-brand-flutter';
    return 'ti ti-star';
  }
}