import { Routes } from '@angular/router';
import { AppComponent } from './features/portfolio/app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    title: 'Shrium | Home',
  },

  {
    path: 'dev-tools',
    pathMatch: 'full',
    redirectTo: 'dev-tools/branding',
  },

  {
    path: 'dev-tools',
    title: 'Shrium | Dev Tools',
    children: [
  
      {
        path: 'branding',
        loadComponent: () =>
          import('./features/branding/pages/branding/branding')
            .then((m) => m.Branding),
      },
          {
        path: 'logo-generator',
        loadComponent: () =>
          import('./features/branding/pages/logo-generator/logo-generator.component')
            .then((m) => m.LogoGeneratorComponent),
      },
    ],
  },

  // Redirect /products -> /products/interview-prep
  {
    path: 'products',
    pathMatch: 'full',
    redirectTo: 'products/interview-prep',
  },

  {
    path: 'products',
    children: [
      {
        path: 'interview-prep',
        title: 'Shrium | Interview Prep',
        loadChildren: () =>
          import('./interview-prep/interview-prep.routes').then(
            (m) => m.INTERVIEW_PREP_ROUTES
          ),
      },
    ],
  },

  // Optional 404
  {
    path: '**',
    redirectTo: '',
  },
];