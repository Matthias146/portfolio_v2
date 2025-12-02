import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-social-card',
  imports: [CommonModule],
  templateUrl: './social-card.html',
  styleUrl: './social-card.scss',
})
export class SocialCard {
  link = input.required<string>();
  label = input.required<string>();
  type = input<string>('');
}
