import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MOCK_FINANCIAL_METRICS } from '../../core/mocks/fintech.mocks';
import { FinancialMonthData } from '../../core/models/fintech.models';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink, CommonModule, CurrencyPipe],
  templateUrl: './landing-page.component.html'
})
export class LandingPageComponent {
  // Financial metrics for preview table (last 4 months)
  readonly previewMetrics: FinancialMonthData[] = MOCK_FINANCIAL_METRICS.slice(2, 6);
  
  // Interactive modal for demo preview
  readonly showDemoModal = signal<boolean>(false);

  openDemoModal(): void {
    this.showDemoModal.set(true);
  }

  closeDemoModal(): void {
    this.showDemoModal.set(false);
  }

  getFlowPercentage(flujo: number): number {
    const maxFlujo = 850000;
    return Math.min(Math.round((flujo / maxFlujo) * 100), 100);
  }
}
