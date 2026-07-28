import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { SuccessResponse } from '../../core/models/resume.model';
import { Project } from './project.interfaces';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  private projects = signal<Project[]>([]);

  projectData = this.projects.asReadonly();


  constructor(
    private http: HttpClient
  ) {}


  getProjects() {

    return this.http
      .get<SuccessResponse<Project[]>>(
        'https://resume-backend-latest-hc32.onrender.com/api/v1/projects'
      )
      .pipe(
        tap({
          next: (res) => {
            this.projects.set(res.data);
          },
          error: (err) => {
            console.error(err.message);
          }
        })
      );

  }

}