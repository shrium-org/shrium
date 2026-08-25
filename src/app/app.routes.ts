import { Routes } from '@angular/router';
import { Home } from './features/pages/home/home';

export const routes: Routes = [

  {
    path: '',
    title: "Shrium",
    component: Home
  },

  {
    path: 'dev-tools',
    title: 'Shrium | Dev Tools',
    children: [
  
      {
        path: 'branding',
        loadComponent: () =>
          import('./features/pages/branding/branding')
            .then((m) => m.Branding),
      },
          {
        path: 'logo-generator',
        loadComponent: () =>
          import('./features/pages/logo-generator/logo-generator.component')
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
          import('./features/interview-prep/interview-prep.routes').then(
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