import { Component } from '@angular/core';
import { HeroComponent } from '../../home-components/hero/hero.component';
import { EducationComponent } from '../../home-components/education/education.component';
import { ExperienceComponent } from '../../home-components/experience/experience.component';
import { MetricsBannerComponent } from '../../home-components/metrics-banner/metrics-banner.component';
import { ProjectsComponent } from '../../home-components/projects/projects.component';
import { SkillsComponent } from '../../home-components/skills/skills.component';
import { FooterComponent } from '../../home-components/footer/footer.component';
import { NavbarComponent } from '../../home-components/navbar/navbar.component';
import { CertificationComponent } from '../../home-components/certification/certification.component';


@Component({
  selector: 'app-portfolio',
  imports: [HeroComponent, EducationComponent, ExperienceComponent, MetricsBannerComponent, ProjectsComponent, SkillsComponent, FooterComponent, NavbarComponent, CertificationComponent],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {

  animatedSkills = [

  {
    name: 'Java',
    icon: 'ti ti-coffee',
    x:'10%',
    y:'20%',
    delay:'0s'
  },

  {
    name:'Spring Boot',
    icon:'ti ti-leaf',
    x:'80%',
    y:'15%',
    delay:'2s'
  },

  {
    name:'Angular',
    icon:'ti ti-brand-angular',
    x:'15%',
    y:'70%',
    delay:'4s'
  },

  {
    name:'Kafka',
    icon:'ti ti-brand-kafka',
    x:'75%',
    y:'60%',
    delay:'1s'
  },

  {
    name:'Docker',
    icon:'ti ti-brand-docker',
    x:'50%',
    y:'10%',
    delay:'3s'
  },

  {
    name:'Kubernetes',
    icon:'ti ti-cloud',
    x:'85%',
    y:'80%',
    delay:'5s'
  },

  {
    name:'Redis',
    icon:'ti ti-database',
    x:'30%',
    y:'40%',
    delay:'2.5s'
  },

  {
    name:'CQRS',
    icon:'ti ti-code',
    x:'65%',
    y:'35%',
    delay:'1.5s'
  }

];

}
