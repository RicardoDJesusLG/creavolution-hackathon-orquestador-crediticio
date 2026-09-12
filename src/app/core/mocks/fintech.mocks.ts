import { FinancialMonthData, B2BClientRisk, AuctionOfferMock } from '../models/fintech.models';

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

export const MOCK_AUCTION_OFFERS: AuctionOfferMock[] = [
  {
    id: 'ofr-santander',
    institucion: 'Banco Santander México',
    tipoEntidad: 'Banco',
    montoAprobado: 1500000,
    tasaInteresAnual: '15.8% Anual (TIIE + Spread)',
    plazoMeses: 24,
    pagoMensualEstimado: 73250,
    comisionApertura: '1.0%',
    badge: '⭐ Mejor Tasa de Interés',
    codigoConvenio: 'SAN-NXR-2026-9812-B2B',
    folioCirculo: 'SIC-CC-2026-SAN-88492',
    vigenciaOfertaDias: 15,
    logoType: 'santander',
    logoUrl: '/images/banks/santander.svg',
    estatus: 'Recibida'
  },
  {
    id: 'ofr-konfio',
    institucion: 'Konfío (SOFOM E.N.R.)',
    tipoEntidad: 'SOFOM',
    montoAprobado: 1200000,
    tasaInteresAnual: '17.2% Anual (TIIE + Spread)',
    plazoMeses: 18,
    pagoMensualEstimado: 76100,
    comisionApertura: '0.0% (Sin comisión)',
    badge: '⚡ Desembolso Express 24h',
    codigoConvenio: 'KNF-NXR-2026-4421-B2B',
    folioCirculo: 'SIC-CC-2026-KNF-33219',
    vigenciaOfertaDias: 10,
    logoType: 'konfio',
    logoUrl: '/images/banks/konfio.svg',
    estatus: 'Recibida'
  },
  {
    id: 'ofr-banorte',
    institucion: 'Grupo Financiero Banorte',
    tipoEntidad: 'Banco',
    montoAprobado: 1800000,
    tasaInteresAnual: '16.1% Anual (TIIE + Spread)',
    plazoMeses: 36,
    pagoMensualEstimado: 63300,
    comisionApertura: '1.5%',
    badge: '🏆 Mayor Monto Aprobado',
    codigoConvenio: 'BTE-NXR-2026-1184-B2B',
    folioCirculo: 'SIC-CC-2026-BTE-77294',
    vigenciaOfertaDias: 20,
    logoType: 'banorte',
    logoUrl: '/images/banks/banorte.svg',
    estatus: 'Recibida'
  },
  {
    id: 'ofr-bbva',
    institucion: 'BBVA México',
    tipoEntidad: 'Banco',
    montoAprobado: 1400000,
    tasaInteresAnual: '16.5% Anual (TIIE + Spread)',
    plazoMeses: 24,
    pagoMensualEstimado: 68900,
    comisionApertura: '1.2%',
    badge: '💳 Línea Revolvente PYME',
    codigoConvenio: 'BBV-NXR-2026-7209-B2B',
    folioCirculo: 'SIC-CC-2026-BBV-90145',
    vigenciaOfertaDias: 15,
    logoType: 'bbva',
    logoUrl: '/images/banks/bbva.svg',
    estatus: 'Recibida'
  }
];
