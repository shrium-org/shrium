import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { SuccessResponse } from '../../core/models/resume.model';
import { Certification } from './certification.interfaces';


@Injectable({
  providedIn: 'root'
})
export class CertificationService {


  private certifications = signal<Certification[]>([]);

  certificationData = this.certifications.asReadonly();


  constructor(
    private http: HttpClient
  ) {}


  getCertifications() {

    return this.http
      .get<SuccessResponse<Certification[]>>(
        'https://resume-backend-latest-hc32.onrender.com/api/v1/certifications'
      )
      .pipe(
        tap({
          next: (res) => {
            this.certifications.set(res.data);
          },
          error: (err) => {
            console.error(err.message);
          }
        })
      );

  }

}