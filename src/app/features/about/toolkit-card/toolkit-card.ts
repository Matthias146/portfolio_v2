import { Component } from '@angular/core';

@Component({
  selector: 'app-toolkit-card',
  imports: [],
  templateUrl: './toolkit-card.html',
  styles: [
    `
      .tool-item {
        @apply p-3 rounded-xl bg-white/5 text-secondary hover:bg-white/10 hover:scale-110 transition-all cursor-default;
      }
    `,
  ],
})
export class ToolkitCard {}
