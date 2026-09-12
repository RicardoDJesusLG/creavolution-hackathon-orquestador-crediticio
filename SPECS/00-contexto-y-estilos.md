# ESPECIFICACIÓN 00: CONTEXTO, SISTEMA DE DISEÑO Y MOCKS GLOBALES

## 1. Contexto del Proyecto
* **Nombre:** NexoRisk AI (Orquestador de Crédito B2B).
* **Propósito:** Prototipo frontend para el Hackathon Crevolution 2026. Muestra un orquestador que evalúa PyMEs mediante facturación viva del SAT y Círculo de Crédito, blindando la originación con un candado antifraude y anticipando la cobranza temprana mediante pagos PPD.

---

## 2. Sistema de Diseño (Light Mode Fintech Premium)

Configurado en `tailwind.config.js` y `src/styles.css` con los siguientes tokens visuales:

* **Colores de Fondo y Superficies:**
  * Fondo base (`bg-surface-ground` / `body`): `#F8FAFC` (Slate ultra claro) con sutiles halos degradados radiales en índigo y esmeralda.
  * Tarjetas y Contenedores (`bg-surface-card`): `#FFFFFF` con borde sutil `border border-slate-200/90 shadow-sm`.
  * Efecto Glassmorphism Claro (`glass-panel`): `bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-sm`.
  * Paneles Elevados (`glass-panel-elevated`): `bg-white/95 backdrop-blur-lg border border-indigo-200/80 shadow-glass-card`.
* **Colores de Acento y Marca:**
  * Acento Positivo / Éxito: `#059669` (Emerald 600) y `#10B981` (Emerald 500) para aprobaciones, scores favorables y métricas positivas.
  * Acento Primario de Acción: `#4F46E5` (Indigo 600) hacia `#7C3AED` (Violet 600) para botones principales.
  * Acento de Alerta: `#D97706` (Amber 600) y `#F59E0B` (Amber 500) para estados de advertencia y retrasos PPD.
  * Colores Institucionales: `#004F9F` (Azul Círculo de Crédito), `#78BE20` (Verde Círculo de Crédito), `#4F46E5` (Púrpura Syntage).
* **Tipografía y Jerarquía:**
  * Fuente sans-serif moderna (Inter de Google Fonts).
  * Texto primario y títulos: `#0F172A` (Slate 900).
  * Texto secundario y descriptivo: `#334155` (Slate 700) y `#475569` (Slate 600).
  * Texto atenuado y metadatos: `#64748B` (Slate 500).

---

## 3. Configuración de Rutas (Angular Router)

Configurado en `app.routes.ts`:

1. Path `''`: Carga `LandingPageComponent` (Vista pública informativa con CTA).
2. Path `'orquestador'`: Carga `OrchestratorDashboardComponent` (Vista interactiva de extracción, score y subasta).
3. Path `'**'`: Redirección a `''`.

---

## 4. Modelos e Interfaces TypeScript

Ubicado en `src/app/core/models/fintech.models.ts`:

```typescript
export interface FinancialMonthData {
  mes: string;
  ingresosCfdi: number;
  egresosCfdi: number;
  flujoOperativo: number;
  facturacionPpd: number;
}

export interface B2BClientRisk {
  cliente: string;
  rfc: string;
  participacionPorcentaje: number;
  plazoPromedioDias: number;
  scoreCirculoCredito: number;
  calificacionCadena: 'A+' | 'A' | 'B' | 'C';
  estatusPago: 'Al corriente' | 'Retraso PPD detectado';
}

export interface AuctionOfferMock {
  institucion: string;
  tipoEntidad: 'Banco' | 'SOFOM' | 'Fondo Privado';
  montoAprobado: number;
  tasaInteresAnual: string;
  plazoMeses: number;
  estatus: 'Recibida' | 'En evaluación';
}
```

---

## 5. Datos Mock Compartidos

Ubicado en `src/app/core/mocks/fintech.mocks.ts`:

```typescript
import { FinancialMonthData, B2BClientRisk } from '../models/fintech.models';

export const MOCK_FINANCIAL_METRICS: FinancialMonthData[] = [
  { mes: 'Enero 2026', ingresosCfdi: 1250000, egresosCfdi: 820000, flujoOperativo: 430000, facturacionPpd: 980000 },
  { mes: 'Febrero 2026', ingresosCfdi: 1410000, egresosCfdi: 890000, flujoOperativo: 520000, facturacionPpd: 1100000 },
  { mes: 'Marzo 2026', ingresosCfdi: 1380000, egresosCfdi: 870000, flujoOperativo: 510000, facturacionPpd: 1050000 },
  { mes: 'Abril 2026', ingresosCfdi: 1560000, egresosCfdi: 940000, flujoOperativo: 620000, facturacionPpd: 1280000 },
  { mes: 'Mayo 2026', ingresosCfdi: 1690000, egresosCfdi: 990000, flujoOperativo: 700000, facturacionPpd: 1350000 },
  { mes: 'Junio 2026', ingresosCfdi: 1820000, egresosCfdi: 1050000, flujoOperativo: 770000, facturacionPpd: 1490000 }
];

export const MOCK_B2B_CLIENTS: B2BClientRisk[] = [
  { cliente: 'Distribuidora Logística del Bajío S.A.', rfc: 'DLB140512AB3', participacionPorcentaje: 42, plazoPromedioDias: 45, scoreCirculoCredito: 792, calificacionCadena: 'A+', estatusPago: 'Al corriente' },
  { cliente: 'Cadenas Comerciales del Norte S.A. de C.V.', rfc: 'CCN090821TR9', participacionPorcentaje: 28, plazoPromedioDias: 30, scoreCirculoCredito: 765, calificacionCadena: 'A+', estatusPago: 'Al corriente' },
  { cliente: 'Operadora Mayorista de Alimentos S.A.', rfc: 'OMA180211KL2', participacionPorcentaje: 18, plazoPromedioDias: 60, scoreCirculoCredito: 710, calificacionCadena: 'A', estatusPago: 'Al corriente' },
  { cliente: 'Soluciones Industriales de Occidente S.A.', rfc: 'SIO160304MN1', participacionPorcentaje: 12, plazoPromedioDias: 30, scoreCirculoCredito: 685, calificacionCadena: 'B', estatusPago: 'Al corriente' }
];
```