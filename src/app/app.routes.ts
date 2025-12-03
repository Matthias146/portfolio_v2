import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Impressum } from './features/legal/impressum/impressum';
import { Privacy } from './features/legal/privacy/privacy';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'impressum', component: Impressum },
  { path: 'datenschutz', component: Privacy },
  { path: '**', redirectTo: '' },
];
