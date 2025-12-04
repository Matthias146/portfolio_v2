import { Component } from '@angular/core';
import { AngularComponent } from '../../shared/ui/icons/angular';
import { TypescriptComponent } from '../../shared/ui/icons/typescript';

@Component({
  selector: 'app-stack',
  // imports: [AngularComponent, TypescriptComponent],
  templateUrl: './stack.html',
})
export class Stack {
  skills = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Tailwind',
    'Firebase',
    'Rest-API',
    'Git',
    'Scrum',
    'Material Design',
  ];
}
