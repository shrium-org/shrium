import { Component } from '@angular/core';
import { Logo } from '../logo/logo';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [Logo],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {}