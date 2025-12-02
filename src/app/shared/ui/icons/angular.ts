import { Component } from '@angular/core';

@Component({
  selector: 'icon-angular',
  standalone: true,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="w-full h-full"
    >
      <path
        d="M12 2.5l-10.7 3.8 1.6 13.8 9.1 5.4 9.1-5.4 1.6-13.8-10.7-3.8zm0 2.2l7.7 2.7-1.1 9.9-6.6 3.9-6.6-3.9-1.1-9.9 7.7-2.7zm0 3.8l-4.5 10h1.8l.9-2.2h3.6l.9 2.2h1.8l-4.5-10zm-1.1 2.5h2.2l-1.1 2.8-1.1-2.8z"
      />
    </svg>
  `,
})
export class AngularComponent {}
