import { Component, inject, OnInit } from '@angular/core';
import { CertificationService } from './certification.service';


@Component({
  selector: 'app-certifications',
  standalone: true,
  templateUrl: './certification.html',
  

})
export class CertificationComponent implements OnInit {


  private certificationService = inject(CertificationService);

  certifications = this.certificationService.certificationData();


  ngOnInit(): void {
    this.certificationService.getCertifications().subscribe();
  }

}