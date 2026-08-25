import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
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
  imports: [CommonModule, RouterLink, TitleCasePipe],
  templateUrl: './interview-prep-detail.component.html',
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

  readonly difficultyOptions: (Difficulty | 'all')[] = ['all', 'easy', 'medium', 'hard'];

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
      easy: 'text-emerald-600 border-emerald-600/30 bg-emerald-600/10',
      medium: 'text-amber-600 border-amber-600/30 bg-amber-600/10',
      hard: 'text-red-600 border-red-600/30 bg-red-600/10',
    }[difficulty];
  }

  difficultyTextClass(difficulty: Difficulty): string {
  return {
    easy: 'text-emerald-600',
    medium: 'text-amber-600',
    hard: 'text-red-600',
  }[difficulty];
}

searchQuery = signal('');
setSearchQuery(value: string) { this.searchQuery.set(value); }

totalQuestions = computed(() => this.questions()?.length ?? 0);

hasActiveFilters = computed(() =>
  this.activeDifficulty() !== 'all' ||
  this.activeCategory() !== 'all' ||
  this.searchQuery().trim().length > 0
);

clearFilters() {
  this.setDifficulty('all');
  this.setCategory('all');
  this.setSearchQuery('');
}

difficultyCount(level: string) {
  const qs = this.questions() ?? [];
  return level === 'all' ? qs.length : qs.filter(q => q.difficulty === level).length;
}

categoryCount(cat: string) {
  const qs = this.questions() ?? [];
  return cat === 'all' ? qs.length : qs.filter(q => q.category === cat).length;
}
}