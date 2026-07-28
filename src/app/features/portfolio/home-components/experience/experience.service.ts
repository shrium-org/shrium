import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { SuccessResponse } from '../../core/models/resume.model';
import { Experience } from './experience.interfaces';


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private experiences = signal<Experience[]>([]);

  experienceData = this.experiences.asReadonly();


  constructor(
    private http: HttpClient
  ) {}


  getExperience() {

    return this.http
      .get<SuccessResponse<Experience[]>>(
        'https://resume-backend-latest-hc32.onrender.com/api/v1/experience'
      )
      .pipe(
        tap({
          next: (res) => {
            this.experiences.set(res.data);
          },
          error: (err) => {
            console.error(err.message);
          }
        })
      );

  }

}