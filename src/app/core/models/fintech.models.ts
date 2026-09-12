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
