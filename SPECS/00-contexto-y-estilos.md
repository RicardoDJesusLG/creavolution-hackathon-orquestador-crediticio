# ESPECIFICACIÓN 00: CONTEXTO, SISTEMA DE DISEÑO Y MOCKS GLOBALES

## 1. Contexto del Proyecto
* **Nombre:** NexoRisk AI (Orquestador de Crédito B2B).
* **Propósito:** Prototipo frontend para el Hackathon Crevolution 2026. Muestra un orquestador que evalúa PyMEs mediante facturación viva del SAT y Círculo de Crédito, blindando la originación con un candado antifraude y anticipando la cobranza temprana mediante pagos PPD.

---

## 2. Sistema de Diseño (Dark Mode Fintech)

Configurar en `tailwind.config.js` (o variables CSS globales) los siguientes tokens visuales:

* **Colores de Fondo:**
  * Fondo base (`bg-surface-ground`): `#0B0F19` (Slate ultra oscuro).
  * Tarjetas y Contenedores (`bg-surface-card`): `#111827` con borde sutil `border border-slate-800`.
  * Efecto Glassmorphism: `bg-slate-900/60 backdrop-blur-md border border-slate-800/80`.
* **Colores de Acento y Marca:**
  * Acento Positivo/Éxito: `#10B981` (Emerald 500) para aprobaciones, scores altos y métricas positivas.
  * Acento Primario de Acción: `#6366F1` (Indigo 500) y gradientes hacia `#8B5CF6` (Violet 500) para botones principales.
  * Acento de Alerta: `#F59E0B` (Amber 500) para estados de advertencia y revisiones.
* **Tipografía:**
  * Fuente sans-serif moderna (Inter, System Sans o Roboto).
  * Texto primario: `#F9FAFB` (Slate 50).
  * Texto secundario y metadatos: `#9CA3AF` (Slate 400).
  * Texto atenuado: `#6B7280` (Slate 500).

---

## 3. Configuración de Rutas (Angular Router)

Configurar en `app.routes.ts`:

1. Path `''`: Carga `LandingPageComponent` (Vista pública informativa con CTA).
2. Path `'orquestador'`: Carga `OrchestratorDashboardComponent` (Vista interactiva de extracción, score y subasta).
3. Path `'**'`: Redirección a `''`.

---

## 4. Modelos e Interfaces TypeScript

Crear en `src/app/core/models/fintech.models.ts`:

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

Crear en `src/app/core/mocks/fintech.mocks.ts`:

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