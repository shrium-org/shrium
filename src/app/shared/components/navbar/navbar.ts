import { Component } from '@angular/core';
import { Logo } from '../logo/logo';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink
],
  templateUrl: './navbar.html'
})
export class Navbar {}