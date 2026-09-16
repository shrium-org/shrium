import { Component } from "@angular/core";
import { FooterComponent } from "./shared/components/footer/footer";
import { NavbarComponent } from "./shared/components/navbar/navbar";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [FooterComponent, NavbarComponent, RouterOutlet]
})
export class AppComponent {}