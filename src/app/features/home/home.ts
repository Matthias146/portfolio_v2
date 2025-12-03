import { Component } from '@angular/core';
import { GithubComponent } from '../../shared/ui/icons/github';
import { LinkedinComponent } from '../../shared/ui/icons/linkedin';
import { SocialCard } from '../../shared/ui/social-card/social-card';
import { Hero } from '../hero/hero';
import { Stack } from '../stack/stack';
import { ProjectCard } from '../projects/project-card/project-card';
import { Stats } from '../about/stats/stats';
import { CommonModule } from '@angular/common';
import { ContactCard } from '../about/contact-card/contact-card';
import { ToolkitCard } from '../about/toolkit-card/toolkit-card';
import { Location } from '../about/location/location';
import { Project } from '../../core/models/project.interface';

@Component({
  selector: 'app-home',
  imports: [
    GithubComponent,
    LinkedinComponent,
    SocialCard,
    Hero,
    Stack,
    ProjectCard,
    Stats,
    Location,
    CommonModule,
    ContactCard,
    ToolkitCard,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  projects: Project[] = [
    {
      title: 'E-Commerce Dashboard',
      description:
        'Ein hochperformantes Dashboard zur Analyse von Verkaufsdaten mit Echtzeit-Updates via WebSockets.',
      imageUrl:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      techStack: ['Angular 18', 'Tailwind', 'Highcharts'],
      liveDemoUrl: 'https://google.com',
      featured: true,
    },
    {
      title: 'Travel App',
      description: 'Eine interaktive Reiseplanung mit Maps-Integration und Animationen.',
      imageUrl:
        'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop',
      techStack: ['Angular', 'Mapbox', 'PWA'],
      liveDemoUrl: '#',
      featured: false,
    },
    {
      title: 'AI Chat Interface',
      description: 'Ein moderner Chat-Client mit Streaming-Response und Markdown Support.',
      imageUrl:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop',
      techStack: ['OpenAI API', 'RxJS', 'Marked'],
      liveDemoUrl: '#',
      featured: false,
    },
  ];
}
