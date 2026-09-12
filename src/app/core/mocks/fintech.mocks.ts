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
