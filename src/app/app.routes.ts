import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/homepage/homepage').then(m => m.Homepage) },
  { path: 'planner', loadComponent: () => import('./pages/planner/planner').then(m => m.Planner) },
];
