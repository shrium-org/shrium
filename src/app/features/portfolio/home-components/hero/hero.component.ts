// hero.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { ResumeDataService } from '../../core/services/resume-data.service';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {

  
 
  
  profileServce = inject(HeroService)
   data = this.profileServce.profileData();

  ngOnInit(): void {
      this.profileServce.getProfile().subscribe();
  }
  
  copyToClipboard(value: string) {

  if (!value) return;

  navigator.clipboard.writeText(value);

}

}