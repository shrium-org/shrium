import { Component } from '@angular/core';
import { PublicLayout } from '../../../../layouts/public-layout/public-layout';

import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';
import { Experience } from '../../components/experience/experience';
import { Project } from '../../components/project/project';
import { Skills } from '../../components/skills/skills';

@Component({
  selector: 'app-home',
  imports: [PublicLayout, Hero, About, Experience, Project, Project,Skills],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
