import { Component } from '@angular/core';
import { HeroComponent } from '../../home-components/hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
