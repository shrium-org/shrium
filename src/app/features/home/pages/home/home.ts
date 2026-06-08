import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { EducationComponent } from '../../components/education/education.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MetricsBannerComponent } from '../../components/metrics-banner/metrics-banner.component';
import { PublicLayout } from '../../../../layouts/public-layout/public-layout';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PublicLayout,HeroComponent,EducationComponent,ExperienceComponent,MetricsBannerComponent,ProjectsComponent,SkillsComponent,FooterComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
