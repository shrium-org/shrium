import { Component, inject } from '@angular/core';
import { ProjectService } from '../../../../core/services/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html'
})
export class ProjectsComponent {

  private readonly projectService = inject(ProjectService);

  readonly projects = this.projectService.projects;
}