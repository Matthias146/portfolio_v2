import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-privacy',
  imports: [RouterLink],
  templateUrl: './privacy.html',
  styleUrl: './privacy.scss',
})
export class Privacy {
  private seo = inject(SeoService);

  constructor() {
    this.seo.updateTags({
      title: 'Datenschutzerklärung',
      description: 'Informationen zur Verarbeitung Ihrer personenbezogenen Daten.',
    });
  }
}
