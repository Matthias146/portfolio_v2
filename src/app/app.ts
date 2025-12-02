import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GithubComponent } from './icons/github';
import { AngularComponent } from './icons/angular';
import { LinkedinComponent } from './icons/linkedin';
import { TypescriptComponent } from './icons/typescript';

@Component({
  selector: 'app-root',
  imports: [GithubComponent, AngularComponent, LinkedinComponent, TypescriptComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio_v2');
}
