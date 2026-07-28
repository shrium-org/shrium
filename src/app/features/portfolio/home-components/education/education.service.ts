import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { SuccessResponse } from '../../core/models/resume.model';
import { Education } from './education.interfaces';


@Injectable({
  providedIn: 'root'
})
export class EducationService {


  private education = signal<Education[]>([]);

  educationData = this.education.asReadonly();


  constructor(
    private http: HttpClient
  ) {}


  getEducation() {

    return this.http
      .get<SuccessResponse<Education[]>>(
        'https://resume-backend-latest-hc32.onrender.com/api/v1/education'
      )
      .pipe(
        tap({
          next: (res) => {
            this.education.set(res.data);
          },
          error: (err) => {
            console.error(err.message);
          }
        })
      );

  }

}