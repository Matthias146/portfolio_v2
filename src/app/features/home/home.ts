import { Component, inject } from '@angular/core';
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
import { SeoService } from '../../core/services/seo.service';

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
  private seo = inject(SeoService);

  constructor() {
    this.seo.updateTags({
      title: 'Frontend Developer',
      description:
        'Ich baue performante Web-Apps mit Angular 18+. Schau dir meine Projekte und Skills an.',
    });
  }

  projects: Project[] = [
    {
      title: 'El pollo loco',
      description:
        'Ein einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe, Münzen und Salsaflaschen zu sammeln, um das Killerhuhn zu bekämpfen.',
      imageUrl: 'Pollo loco 1.png',
      techStack: ['JavaScript', 'HTML', 'CSS'],
      liveDemoUrl: 'https://elpolloloco.matthias-hammelehle.dev',
      featured: true,
    },
    {
      title: 'DaBubble',
      description:
        'Chat-Anwendung mit Firebase als Backend. Sie können Ihr eigenes Konto erstellen und mit anderen Benutzern chatten.',
      imageUrl: 'DABubble.png',
      techStack: ['Angular', 'SCSS', 'Firebase'],
      liveDemoUrl: 'https://dabubble.matthias-hammelehle.dev',
      featured: false,
    },
    {
      title: 'Join',
      description:
        'Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstellen und organisieren Sie Aufgaben mit Drag & Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      imageUrl: 'join.png',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      liveDemoUrl: 'https://join.matthias-hammelehle.dev',
      featured: false,
    },
  ];
}
