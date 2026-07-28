// projects.component.ts
import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { ResumeDataService } from '../../core/services/resume-data.service';
import { ProjectService } from './project.service';



@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {

  private projectService = inject(ProjectService);

  projects = this.projectService.projectData;


  ngOnInit(): void {
    this.projectService.getProjects().subscribe();
  }

}