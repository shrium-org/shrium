import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap, of } from 'rxjs';
import { InterviewPrepService } from '../services/interview-prep.service';
import {
  Difficulty,
  Question,
  Technology,
} from '../models/interview-prep.models';

@Component({
  selector: 'app-interview-prep-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './interview-prep-detail.component.html',
  styleUrl: './interview-prep-detail.component.scss',
})
export class InterviewPrepDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private prepService = inject(InterviewPrepService);

  technology = signal<Technology | undefined>(undefined);
  questions = signal<Question[]>([]);
  loading = signal(true);
  notFound = signal(false);
  errorMessage = signal<string | null>(null);

  expandedId = signal<string | null>(null);
  activeDifficulty = signal<Difficulty | 'all'>('all');
  activeCategory = signal<string>('all');

  categories = computed(() => {
    const set = new Set(this.questions().map((q) => q.category));
    return ['all', ...Array.from(set)];
  });

  filteredQuestions = computed(() => {
    const difficulty = this.activeDifficulty();
    const category = this.activeCategory();
    return this.questions().filter(
      (q) =>
        (difficulty === 'all' || q.difficulty === difficulty) &&
        (category === 'all' || q.category === category)
    );
  });

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const slug = params.get('id');
          if (!slug) return of(null);
          this.loading.set(true);
          this.notFound.set(false);
          this.errorMessage.set(null);
          this.expandedId.set(null);
          this.activeDifficulty.set('all');
          this.activeCategory.set('all');
          return this.prepService.getTechnology(slug);
        })
      )
      .subscribe({
        next: (tech) => {
          if (!tech) {
            this.notFound.set(true);
            this.loading.set(false);
            return;
          }
          this.technology.set(tech);
          this.prepService.getQuestionsByTechnology(tech.id).subscribe({
            next: (qs) => {
              this.questions.set(qs);
              this.loading.set(false);
            },
            error: () => {
              this.errorMessage.set(
                'Could not load questions for this stack. Refresh to try again.'
              );
              this.loading.set(false);
            },
          });
        },
        error: () => {
          this.errorMessage.set('Something went wrong loading this stack.');
          this.loading.set(false);
        },
      });
  }

  toggleQuestion(id: string): void {
    this.expandedId.set(this.expandedId() === id ? null : id);
  }

  setDifficulty(value: Difficulty | 'all'): void {
    this.activeDifficulty.set(value);
  }

  setCategory(value: string): void {
    this.activeCategory.set(value);
  }

  difficultyBadgeClass(difficulty: Difficulty): string {
    return {
      easy: 'badge-success',
      medium: 'badge-warning',
      hard: 'badge-danger',
    }[difficulty];
  }
}
