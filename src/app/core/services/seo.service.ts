import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PageMetadata } from '../models/pageMetaData.interface';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  private readonly defaultTitle = 'Matthias Hammelehle - Frontend Developer';
  private readonly defaultDesc =
    'Portfolio von Matthias Hammelehle. Frontend Developer spezialisiert auf Angular, Tailwind CSS und modernes Webdesign.';
  private readonly defaultImage = 'assets/preview-image.jpg';

  updateTags(metadata: Partial<PageMetadata>) {
    const title = metadata.title ? `${metadata.title} | Matthias Hammelehle` : this.defaultTitle;

    const description = metadata.description || this.defaultDesc;
    const image = metadata.image || this.defaultImage;

    this.titleService.setTitle(title);

    this.metaService.updateTag({ name: 'description', content: description });

    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:image', content: image });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });

    // Twitter Card (optional, aber gut)
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: title });
    this.metaService.updateTag({ name: 'twitter:description', content: description });
    this.metaService.updateTag({ name: 'twitter:image', content: image });
  }
}
