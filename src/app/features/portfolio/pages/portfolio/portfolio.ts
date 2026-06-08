import { Component } from '@angular/core';
import { HeroComponent } from '../../home-components/hero/hero.component';
import { EducationComponent } from '../../home-components/education/education.component';
import { ExperienceComponent } from '../../home-components/experience/experience.component';
import { MetricsBannerComponent } from '../../home-components/metrics-banner/metrics-banner.component';
import { ProjectsComponent } from '../../home-components/projects/projects.component';
import { SkillsComponent } from '../../home-components/skills/skills.component';
import { FooterComponent } from '../../home-components/footer/footer.component';
import { NavbarComponent } from '../../home-components/navbar/navbar.component';


@Component({
  selector: 'app-portfolio',
  imports: [HeroComponent,EducationComponent,ExperienceComponent,MetricsBannerComponent,ProjectsComponent,SkillsComponent,FooterComponent,NavbarComponent],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {}
