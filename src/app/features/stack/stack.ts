import { Component } from '@angular/core';
import { AngularComponent } from '../../shared/ui/icons/angular';
import { TypescriptComponent } from '../../shared/ui/icons/typescript';

@Component({
  selector: 'app-stack',
  imports: [AngularComponent, TypescriptComponent],
  templateUrl: './stack.html',
  styleUrl: './stack.scss',
})
export class Stack {}
