import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, shareReplay } from 'rxjs';
import { Question, Technology } from '../models/interview-prep.models';

@Injectable({ providedIn: 'root' })
export class InterviewPrepService {
  private http = inject(HttpClient);

  // ── Swap point ────────────────────────────────────────────
  // Local:   'assets/data'
  // Backend: 'https://api.yoursite.com/api'
  private baseUrl = 'assets/data';

  private technologies$?: Observable<Technology[]>;

  getTechnologies(): Observable<Technology[]> {
    if (!this.technologies$) {
      this.technologies$ = this.http
        .get<Technology[]>(`${this.baseUrl}/technologies.json`)
        .pipe(shareReplay(1));
      // Later: this.http.get<Technology[]>(`${this.baseUrl}/technologies`)
    }
    return this.technologies$;
  }

  getTechnology(slug: string): Observable<Technology | undefined> {
    return this.getTechnologies().pipe(
      map((techs) => techs.find((t) => t.slug === slug))
    );
    // Later: this.http.get<Technology>(`${this.baseUrl}/technologies/${slug}`)
  }

  getQuestionsByTechnology(technologyId: string): Observable<Question[]> {
    return this.http
      .get<Question[]>(`${this.baseUrl}/questions/${technologyId}.json`)
      .pipe(
        map((questions) =>
          questions.map((q) => ({ ...q, technologyId }))
        )
      );
    // Later: this.http.get<Question[]>(`${this.baseUrl}/questions?technologyId=${technologyId}`)
  }
}
