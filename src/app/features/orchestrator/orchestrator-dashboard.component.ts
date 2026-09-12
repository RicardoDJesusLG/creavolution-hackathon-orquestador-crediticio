import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MOCK_FINANCIAL_METRICS, MOCK_B2B_CLIENTS, MOCK_AUCTION_OFFERS } from '../../core/mocks/fintech.mocks';
import { FinancialMonthData, B2BClientRisk, AuctionOfferMock } from '../../core/models/fintech.models';

@Component({
  selector: 'app-orchestrator-dashboard',
  standalone: true,
  imports: [RouterLink, CommonModule, CurrencyPipe],
  templateUrl: './orchestrator-dashboard.component.html'
})
export class OrchestratorDashboardComponent {
  // Data sources from mocks
  readonly financialMetrics: FinancialMonthData[] = MOCK_FINANCIAL_METRICS;
  readonly baseB2BClients: B2BClientRisk[] = MOCK_B2B_CLIENTS;
  readonly allOffersPool: AuctionOfferMock[] = MOCK_AUCTION_OFFERS;

  // Reactivity State with Angular Signals (Spec 02)
  readonly satConnected = signal<boolean>(false);
  readonly isLoadingSat = signal<boolean>(false);
  readonly showCiecModal = signal<boolean>(false);
  readonly scoreValue = signal<number>(0);
  readonly auctionStarted = signal<boolean>(false);
  readonly isAuctionLoading = signal<boolean>(false);
  readonly showAuctionModal = signal<boolean>(false);
  readonly simulateDelay = signal<boolean>(false);
  readonly isSyncingFiscal = signal<boolean>(false);
  readonly lastSyncMessage = signal<string | null>(null);

  // Dashboard Navigation Tabs (Originación vs Monitoreo de Créditos Otorgados)
  readonly activeTab = signal<'originacion' | 'monitoreo'>('originacion');

  // Real-time Bidding & Offers State
  readonly receivedOffers = signal<AuctionOfferMock[]>([]);
  readonly isRefreshingAuction = signal<boolean>(false);
  readonly selectedOffer = signal<AuctionOfferMock | null>(null);
  readonly acceptedOffer = signal<AuctionOfferMock | null>(null);
  readonly showOfferDetailModal = signal<boolean>(false);
  readonly showVoucherModal = signal<boolean>(false);
  readonly copiedConvenio = signal<boolean>(false);

  // Pre-filled demo CIEC credentials
  readonly demoRfc = signal<string>('ITC190412AA1');
  readonly demoCiecPassword = signal<string>('••••••••••••');
  readonly showPasswordText = signal<boolean>(false);

  // Semicircle arc length for Gauge: PI * radius (r=75) ≈ 235.62
  private readonly GAUGE_ARC_LENGTH = 235.62;

  // Computed signals
  readonly gaugeDashOffset = computed(() => {
    const score = this.scoreValue();
    const ratio = Math.min(Math.max(score / 100, 0), 1);
    return this.GAUGE_ARC_LENGTH * (1 - ratio);
  });

  readonly scoreStatusText = computed(() => {
    const score = this.scoreValue();
    if (score === 0) return 'Sin calificar';
    if (this.simulateDelay() || score < 80) return 'Riesgo Moderado por Retraso PPD (B+)';
    return 'Grado de Inversión Favorable (A+)';
  });

  readonly algorithmAssessment = computed(() => {
    if (this.scoreValue() === 0) {
      if (this.simulateDelay()) {
        return 'Simulación activa: Retraso PPD preconfigurado en cartera. Al conectar el SAT vía Syntage, el algoritmo ajustará la calificación máxima esperada debido al riesgo de mora de clientes clave.';
      }
      return 'Esperando sincronización de facturación SAT para analizar la solvencia de la red de compradores en Círculo de Crédito.';
    }
    if (this.simulateDelay()) {
      return 'Alerta preventiva: El retraso de 14 días detectado en Distribuidora Logística del Bajío reduce la solvencia estimada del flujo en un 16%. Se recomienda factoraje preventivo de cartera.';
    }
    return 'La solvencia sobresaliente de los compradores principales (Promedio Círculo: 768 pts) mitiga en 72% el riesgo intrínseco de la empresa solicitante.';
  });

  readonly displayClients = computed<B2BClientRisk[]>(() => {
    const isDelayActive = this.simulateDelay();
    return this.baseB2BClients.map(c => {
      if (c.rfc === 'DLB140512AB3' && isDelayActive) {
        return {
          ...c,
          estatusPago: 'Retraso PPD detectado' as const,
          calificacionCadena: 'B' as const
        };
      }
      return c;
    });
  });

  /**
   * Opens the CIEC authentication modal (pre-filled for demo)
   */
  openCiecModal(): void {
    if (this.satConnected() || this.isLoadingSat()) return;
    this.showCiecModal.set(true);
  }

  /**
   * Closes the CIEC authentication modal
   */
  closeCiecModal(): void {
    this.showCiecModal.set(false);
  }

  toggleShowPassword(): void {
    this.showPasswordText.update(v => !v);
  }

  /**
   * Confirms CIEC credentials and triggers SAT extraction via Syntage
   */
  submitCiecAndConnect(): void {
    this.showCiecModal.set(false);
    this.connectSat();
  }

  /**
   * Simulates SAT extraction via Syntage API (1.8s)
   */
  connectSat(): void {
    if (this.satConnected() || this.isLoadingSat()) return;

    this.isLoadingSat.set(true);

    setTimeout(() => {
      this.isLoadingSat.set(false);
      this.satConnected.set(true);
      // If delay was pre-activated, animate to 74; otherwise to 88
      const targetScore = this.simulateDelay() ? 74 : 88;
      this.animateScoreTo(targetScore, 1200);
    }, 1800);
  }

  /**
   * Manually triggers on-demand fiscal synchronization via Syntage (SAT CFDIs & SIC alerts).
   * Executes a live re-sync that updates payment status (PPD / CRPs) and detects
   * early payment delays or reconciliations within the 30-day billing window.
   */
  syncFiscalAndSic(): void {
    if (this.isSyncingFiscal()) return;

    this.isSyncingFiscal.set(true);

    setTimeout(() => {
      this.isSyncingFiscal.set(false);
      const newDelayState = !this.simulateDelay();
      this.simulateDelay.set(newDelayState);

      if (newDelayState) {
        this.lastSyncMessage.set('Alerta Syntage: Se detectó 1 factura PPD sin Complemento de Pago (14 días demora).');
      } else {
        this.lastSyncMessage.set('Sincronización Exitosa: Cartera y CRPs conciliados al 100% con el SAT.');
      }

      // If SAT is already connected, animate score smoothly
      if (this.satConnected()) {
        const targetScore = newDelayState ? 74 : 88;
        this.animateScoreTo(targetScore, 600);
      }

      // Clear toast message after 4.5s
      setTimeout(() => {
        this.lastSyncMessage.set(null);
      }, 4500);
    }, 1100);
  }

  /**
   * Legacy alias for backward compatibility
   */
  toggleDemoDelay(): void {
    this.syncFiscalAndSic();
  }

  /**
   * Launches auction and activates anti-fraud lock in Círculo de Crédito (1.5s)
   */
  startAuction(): void {
    if (this.scoreValue() === 0 || this.isAuctionLoading()) return;

    this.isAuctionLoading.set(true);

    setTimeout(() => {
      this.isAuctionLoading.set(false);
      this.auctionStarted.set(true);
      // Inicia con vista vacía: esperando propuestas de crédito de las entidades
      this.receivedOffers.set([]);
      this.showAuctionModal.set(true);
    }, 1500);
  }

  closeAuctionModal(): void {
    this.showAuctionModal.set(false);
  }

  /**
   * Refreshes the auction to fetch additional incoming bank offers
   */
  refreshAuction(): void {
    // Si la oferta ya fue aceptada, la subasta ha finalizado y no se reciben nuevas postulaciones
    if (this.acceptedOffer() || this.isRefreshingAuction() || this.receivedOffers().length >= this.allOffersPool.length) return;

    this.isRefreshingAuction.set(true);

    setTimeout(() => {
      this.isRefreshingAuction.set(false);
      // Double check in case an offer was accepted during timeout
      if (this.acceptedOffer()) return;

      const currentCount = this.receivedOffers().length;
      if (currentCount === 0) {
        // Primera vez que se refresca: ingresan Santander y Konfío
        this.receivedOffers.set([this.allOffersPool[0], this.allOffersPool[1]]);
      } else if (currentCount < this.allOffersPool.length) {
        // Siguientes actualizaciones: incorporan Banorte y BBVA progresivamente
        const nextOffer = this.allOffersPool[currentCount];
        this.receivedOffers.update(offers => [...offers, nextOffer]);
      }
    }, 850);
  }

  /**
   * Opens the detailed Term Sheet modal for a specific bank offer
   */
  viewOfferDetail(offer: AuctionOfferMock): void {
    this.selectedOffer.set(offer);
    this.showOfferDetailModal.set(true);
  }

  closeOfferDetailModal(): void {
    this.showOfferDetailModal.set(false);
    this.selectedOffer.set(null);
  }

  /**
   * Accepts an offer, locks in terms, and opens the official Convenio voucher
   * Prevents Loan Stacking by exclusively locking the remaining offers
   */
  acceptOffer(offer: AuctionOfferMock): void {
    this.showOfferDetailModal.set(false);
    this.acceptedOffer.set(offer);

    // Candado de Adjudicación Exclusiva: bloquea las demás ofertas en tiempo real
    this.receivedOffers.update(offers =>
      offers.map(o => {
        if (o.id === offer.id) {
          return { ...o, estatus: 'Aceptada' as const };
        } else {
          return { ...o, estatus: 'Bloqueada' as const };
        }
      })
    );

    this.showVoucherModal.set(true);
  }

  closeVoucherModal(): void {
    this.showVoucherModal.set(false);
    // Transiciona automáticamente a la vista de Monitoreo de Créditos Otorgados
    this.activeTab.set('monitoreo');
  }

  openVoucherModal(): void {
    this.showVoucherModal.set(true);
  }

  switchTab(tab: 'originacion' | 'monitoreo'): void {
    this.activeTab.set(tab);
  }

  /**
   * Copies the convenio token to clipboard
   */
  copyConvenioCode(code: string): void {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(code);
      this.copiedConvenio.set(true);
      setTimeout(() => this.copiedConvenio.set(false), 2200);
    }
  }

  /**
   * Helper to animate the score smoothly with requestAnimationFrame
   */
  private animateScoreTo(target: number, durationMs: number): void {
    const start = this.scoreValue();
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease out quad
      const ease = 1 - (1 - progress) * (1 - progress);
      const currentScore = Math.round(start + (target - start) * ease);

      this.scoreValue.set(currentScore);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        this.scoreValue.set(target);
      }
    };

    requestAnimationFrame(step);
  }
}
