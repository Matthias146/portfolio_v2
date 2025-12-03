import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  imports: [CommonModule],
  templateUrl: './contact-card.html',
  styleUrl: './contact-card.scss',
})
export class ContactCard {
  copied = signal(false);
  email = 'mahammelehle@outlook.de';

  copyEmail() {
    navigator.clipboard.writeText(this.email);
    this.copied.set(true);

    setTimeout(() => {
      this.copied.set(false);
    }, 2000);
  }
}
