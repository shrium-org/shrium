import { Component, inject } from '@angular/core';
import { ContactService } from '../../../core/services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html'
})
export class ContactComponent {

  private readonly contactService = inject(ContactService);

  readonly contact = this.contactService.contact;
}