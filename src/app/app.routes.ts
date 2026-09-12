import { Routes } from '@angular/router';
import { LandingPageComponent } from './features/landing/landing-page.component';
import { OrchestratorDashboardComponent } from './features/orchestrator/orchestrator-dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    title: 'NexoRisk AI | Orquestador de Crédito B2B'
  },
  {
    path: 'orquestador',
    component: OrchestratorDashboardComponent,
    title: 'NexoRisk AI | Panel de Orquestación y Licitación'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
