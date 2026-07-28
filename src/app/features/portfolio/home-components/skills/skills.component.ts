// skills.component.ts
import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { ResumeDataService } from '../../core/services/resume-data.service';
import { SkillsService } from './skills.service';

const PRIMARY_SKILLS = new Set(['Java', 'Angular', 'Spring Boot', 'Flutter']);
const SECONDARY_SKILLS = new Set(['TypeScript', 'NestJS', 'PostgreSQL', 'Redis']);

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
    private skillsService = inject(SkillsService);

  skills = this.skillsService.skillsData;


  ngOnInit(): void {
    this.skillsService.getSkills().subscribe();
  }

}