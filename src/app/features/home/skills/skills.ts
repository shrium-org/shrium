import { Component, inject } from '@angular/core';
import { SkillService } from '../../../core/services/skill.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html'
})
export class SkillsComponent {

  private readonly skillService = inject(SkillService);

  readonly groups = this.skillService.groups;
}