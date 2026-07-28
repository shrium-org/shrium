import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { SuccessResponse } from '../../core/models/resume.model';
import { SkillCategory } from './skills.interfaces';


@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private skills = signal<SkillCategory[]>([]);

  skillsData = this.skills.asReadonly();

  constructor(
    private http: HttpClient
  ) {}


  getSkills() {

    return this.http
      .get<SuccessResponse<SkillCategory[]>>(
        'https://resume-backend-latest-hc32.onrender.com/api/v1/skills'
      )
      .pipe(
        tap({
          next: (res) => {
            this.skills.set(res.data);
          },
          error: (err) => {
            console.error(err.message);
          }
        })
      );

  }

}