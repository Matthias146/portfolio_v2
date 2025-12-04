import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-impressum',
  imports: [RouterLink],
  templateUrl: './impressum.html',
  styleUrl: './impressum.scss',
})
export class Impressum {
  private seo = inject(SeoService);

  constructor() {
    this.seo.updateTags({
      title: 'Impressum',
      description: 'Rechtliche Angaben und Kontaktinformationen.',
    });
  }
}
