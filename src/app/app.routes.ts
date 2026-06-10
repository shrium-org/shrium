import { Routes } from '@angular/router';
import { Branding } from './features/branding/pages/branding/branding';
import { Portfolio } from './features/portfolio/pages/portfolio/portfolio';
import { Home } from './features/landing-home/landing-home/home';
import { LogoGeneratorComponent } from './features/branding/pages/logo-generator/logo-generator.component';


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
    path: 'logo-generator',
    component: LogoGeneratorComponent
  },
  {
    path: 'branding',
    component: Branding
  }
];