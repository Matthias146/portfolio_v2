import { Component, signal } from '@angular/core';
import { GithubComponent } from './shared/ui/icons/github';
import { LinkedinComponent } from './shared/ui/icons/linkedin';
import { SocialCard } from './shared/ui/social-card/social-card';
import { Hero } from './features/hero/hero';
import { Stack } from './features/stack/stack';
import { Project } from './core/models/project.interface';
import { ProjectCard } from './features/projects/project-card/project-card';
import { Stats } from './features/about/stats/stats';
import { Location } from './features/about/location/location';

@Component({
  selector: 'app-root',
  imports: [
    GithubComponent,
    LinkedinComponent,
    SocialCard,
    Hero,
    Stack,
    ProjectCard,
    Stats,
    Location,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  featuredProject: Project = {
    title: 'E-Commerce Dashboard',
    description:
      'Ein hochperformantes Dashboard zur Analyse von Verkaufsdaten mit Echtzeit-Updates.',
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    techStack: ['Angular 18', 'Tailwind', 'Highcharts'],
    liveDemoUrl: 'https://google.com',
    featured: true,
  };
}
