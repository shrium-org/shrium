import { Component } from '@angular/core';
import { PublicLayout } from '../../../../layouts/public-layout/public-layout';
import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';
import { Experience } from "../../components/experience/experience";
import { Projects } from '../../components/projects/projects';
import { Products } from "../../../../shared/components/products/products";
import { Skills } from '../../components/skills/skills';
import { Contact } from '../../components/contact/contact';
import { ImpactComponent } from '../../components/impact.component/impact.component';

@Component({
  selector: 'app-home',
  imports: [PublicLayout, Hero, About, Experience, Projects, Skills,Contact,ImpactComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
