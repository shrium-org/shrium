import { Routes } from '@angular/router';
import { Branding } from './features/branding/pages/branding/branding';
import { Portfolio } from './features/portfolio/pages/portfolio/portfolio';
import { Home } from './features/landing-home/landing-home/home';


export const routes: Routes = [
  {
    path:'',
    component: Home
  }
  ,
  {
    path: 'portfolio',
    component: Portfolio
  },
  {
    path: 'branding',
    component: Branding
  }
];