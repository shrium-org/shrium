import { Component } from '@angular/core';
import { PublicLayout } from "../../../layouts/public-layout/public-layout";

@Component({
  selector: 'app-home',
  imports: [PublicLayout],
  standalone:true,
  templateUrl: './home.html'
})
export class Home {}
