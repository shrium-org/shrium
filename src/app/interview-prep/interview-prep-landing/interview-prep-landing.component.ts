import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InterviewPrepService } from '../services/interview-prep.service';
import { Technology } from '../models/interview-prep.models';

@Component({
  selector: 'app-interview-prep-landing',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './interview-prep-landing.component.html',
})
export class InterviewPrepLandingComponent implements OnInit {
  private prepService = inject(InterviewPrepService);

  technologies = signal<Technology[]>([]);
  loading = signal(true);
  errorMessage = signal<string | null>(null);
  searchTerm = signal('');

  filteredTechnologies = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    if (!term) return this.technologies();
    return this.technologies().filter(
      (t) =>
        t.name.toLowerCase().includes(term) ||
        t.description.toLowerCase().includes(term)
    );
  });

  totalQuestions = computed(() =>
    this.technologies().reduce((sum, t) => sum + t.questionCount, 0)
  );

  ngOnInit(): void {
    this.prepService.getTechnologies().subscribe({
      next: (techs) => {
        this.technologies.set(techs);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(
          'Could not load the technology list. Refresh the page to try again.'
        );
        this.loading.set(false);
      },
    });
  }
}
