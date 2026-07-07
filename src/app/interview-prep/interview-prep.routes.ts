import { Routes } from '@angular/router';

export const INTERVIEW_PREP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./interview-prep-landing/interview-prep-landing.component').then(
        (m) => m.InterviewPrepLandingComponent
      ),
    title: 'Interview Prep',
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./interview-prep-detail/interview-prep-detail.component').then(
        (m) => m.InterviewPrepDetailComponent
      ),
    title: 'Interview Prep',
  },
];

/*
  Wire this into your top-level routes (e.g. app.routes.ts):

  {
    path: 'interview-prep',
    loadChildren: () =>
      import('./interview-prep/interview-prep.routes').then(
        (m) => m.INTERVIEW_PREP_ROUTES
      ),
  }

  This gives you:
    /interview-prep       -> InterviewPrepLandingComponent
    /interview-prep/:id   -> InterviewPrepDetailComponent (id = technology slug, e.g. "java")
*/
