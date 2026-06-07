import { Component } from '@angular/core';
import { PublicLayout } from '../../../../layouts/public-layout/public-layout';

import { Products } from "../../../../shared/components/products/products";
import { Hero } from '../../../../shared/components/hero/hero';
import { About } from '../../../../shared/components/about/about';
import { Projects } from '../../../../shared/components/projects/projects';

@Component({
  selector: 'app-home',
  imports: [PublicLayout, Hero, About, Projects],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
