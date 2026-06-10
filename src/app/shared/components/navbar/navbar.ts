import { Component } from '@angular/core';
import { Logo } from '../logo/logo';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    Logo
  ],
  templateUrl: './navbar.html'
})
export class Navbar {}