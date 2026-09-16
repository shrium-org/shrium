import { Component } from '@angular/core';
import { NavbarComponent } from './shared/components/navbar/navbar';
import { HeroComponent } from './features/home/hero/hero';
import { AboutComponent } from './features/home/about/about';
import { SkillsComponent } from './features/home/skills/skills';
import { ExperienceComponent } from './features/home/experience/experience';
import { ProjectsComponent } from './features/home/projects/projects';
import { ContactComponent } from './features/home/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, AboutComponent, SkillsComponent, ExperienceComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.html'
})
export class AppComponent {}