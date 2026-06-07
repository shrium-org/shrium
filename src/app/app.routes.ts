import { Routes } from '@angular/router';
import { Branding } from './features/branding/pages/branding/branding';
import { Home } from './features/home/pages/home/home';


export const routes: Routes = [
    {
        path:'',
        component:Home
    },
  {
    path: 'branding',
    component: Branding
  }
];