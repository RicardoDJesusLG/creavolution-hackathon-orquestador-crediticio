# ESPECIFICACIÓN 02: DASHBOARD DEL ORQUESTADOR DE CRÉDITO (VISTA PRIVADA)

## 1. Objetivo de la Vista
Construir el componente Standalone `OrchestratorDashboardComponent` en la ruta `/orquestador`.
Es el núcleo interactivo para el pitch del Hackathon Crevolution 2026. Diseñado en estética *Light Mode Fintech Premium* (fondo blanco `#F8FAFC`, tarjetas con *Glassmorphism* `backdrop-blur-md` y acentos corporativos), demuestra en una sola pantalla:
1. La extracción de datos fiscales en vivo del SAT vía **Syntage**.
2. El cálculo reactivo del Score de Red B2B mediante un medidor semicircular (Gauge SVG 180°).
3. El monitoreo quincenal de pagos PPD con interruptor flexible de simulación de mora de cliente clave.
4. El lanzamiento a subasta privada con blindaje de candado antifraude de **Círculo de Crédito**.

---

## 2. Barra Superior de Control y Estatus (TopBar)
* **Izquierda:** Botón de regreso `← Inicio` (`routerLink="/"`) y título: `Panel de Orquestación y Licitación PyME`.
* **Centro:** Identificador de la empresa de prueba: `Industrial Textil del Centro S.A. de C.V. | RFC: ITC190412AA1`.
* **Derecha (Badges de Estado con Logos Oficiales):**
  * **Badge 1 (Syntage):** Isotipo oficial de Syntage + `Syntage API: Conectada` (chip verde esmeralda).
  * **Badge 2 (Círculo de Crédito):** 
    * Si la subasta no ha iniciado: Isotipo oficial concéntrico + `Candado Círculo de Crédito: Standby` (borde slate).
    * Si la subasta está activa: Isotipo oficial + `🔒 Candado Activo: Protegido contra Loan Stacking` (fondo índigo con pulso animado).

---

## 3. Bloque de Acción Principal: Extracción Fiscal SAT con Widget CIEC de Syntage
* **Estado Inicial:**
  * Mensaje: *"Paso 1: Extrae tu facturación electrónica viva del SAT para activar el análisis de solvencia de red y conciliación de clientes PPD."*
  * Botón: `Conectar SAT vía Syntage (CIEC)` con **Logo Oficial de Syntage** integrado.
  * **Interacción:** Al hacer clic, despliega el **Modal de Autenticación CIEC**.
* **Modal de Autenticación CIEC (Widget Syntage):**
  * Ventana emergente con certificación de seguridad: `Cifrado TLS 1.3 / 256-bit`, `Modo Solo Lectura` y `Padrón Fiscal Verificado`.
  * **Credenciales Prellenadas (Fines de Demo):**
    * RFC: `ITC190412AA1` (Industrial Textil del Centro S.A. de C.V.).
    * Contraseña CIEC: `••••••••••••` con botón interactivo de alternar visibilidad (`CiecTextil2026*`).
  * Aviso de privacidad: Garantía de no almacenamiento de credenciales y conexión directa en sesión temporal con el SAT.
  * Botón: **`Autenticar y Sincronizar Bóveda Fiscal →`** que cierra el modal e inicia la extracción.
* **Estado de Carga (Simulado 1.8 segundos):**
  * El botón del dashboard cambia a: `Leyendo CFDIs y declaraciones en el SAT...` con spinner SVG animado.
* **Estado Completado:**
  * El botón se transforma en un chip de éxito: `✓ Expediente Fiscal Sincronizado (1,420 Facturas Procesadas)` con el logotipo de Syntage en verde esmeralda.
  * Se habilitan automáticamente las tablas de datos y se dispara la animación fluida del Score Gauge.

---

## 4. Grid Principal (Layout de 2 Columnas: 65% / 35%)

### Columna Izquierda (65% width): Datos Financieros y Red de Clientes

#### Panel A: Conciliación Financiera Semestral (Ingresos vs. Gastos)
* Encabezado: `Historial Financiero Operativo (Base SAT CFDI 4.0)`.
* **Tabla de Datos:**
  * Consume `MOCK_FINANCIAL_METRICS`.
  * Columnas: `Mes`, `Ventas (Ingresos)`, `Gastos (Egresos)`, `Flujo Neto Operativo`, `Facturación PPD`.
  * Cada fila muestra los montos formateados en moneda mexicana (`$X,XXX,XXX MXN`) con badges de flujo positivo.
  * Si la extracción fiscal aún no se ejecuta, muestra un estado vacío con mensaje: *"Esperando conexión con el SAT..."*.

#### Panel B: Concentración de Clientes Clave (Base del Graph Scoring)
* Encabezado: `Cartera de Clientes B2B & Evaluación en Círculo de Crédito` (con isotipo de Círculo de Crédito).
* Subtítulo explicativo: *"Calificación basada en el comportamiento crediticio de las empresas que compran a crédito (PPD)."*
* **Tabla de Clientes:**
  * Consume `displayClients()`.
  * Columnas: `Razón Social del Cliente`, `Part. %`, `Plazo Promedio`, `Score Círculo de Crédito`, `Riesgo de Cadena`, `Estatus de Pago`.
  * Badges de calificación: Clientes con score > 750 muestran un badge `A+ / Excelente` en verde esmeralda.

---

### Columna Derecha (35% width): Medidores y Monitoreo

#### Tarjeta 1: Medidor de Calificación de Red B2B (Gauge SVG en Fondo Claro)
* Encabezado: `Score de Red NexoRisk` con badge `Graph Engine`.
* **Componente Medidor:**
  * Semicírculo SVG de 180 grados con trazo de fondo gris claro (`#E2E8F0`) y trazo de progreso en gradiente esmeralda-índigo.
  * Texto numérico central de alto contraste en slate oscuro (`#0F172A`).
  * Subtexto dinámico:
    * Si Score = 0: `Sin calificar`.
    * Si Score = 88: `Grado de Inversión Favorable (A+)`.
    * Si la simulación de mora está activa (Score = 74): `Riesgo Moderado por Retraso PPD (B+)`.
* **Dictamen del Algoritmo:**
  * Caja informativa con texto reactivo que explica la mitigación de riesgo comercial o el impacto del retraso en mora según el estado de la simulación.

---

#### Tarjeta 2: Monitor de Cartera B2B & Cobranza Preventiva (Feature Quincenal)
* Encabezado: `Monitoreo de Cobranza & Pagos PPD`.
* Descripción: *"Auditoría periódica de Complementos de Recepción de Pagos (CRP) ante el SAT y alertas de Círculo de Crédito."*
* **Componente de Ciclo:**
  * Barra de progreso horizontal que indica: `Ciclo de Monitoreo: Quincenal (Día 4 de 15)`.
* **Botón de Consulta Restringido:**
  * Botón estilizado: `🔄 Sincronizar Conciliación Fiscal & Alertas SIC`.
  * Badge sobre el botón: `Disponible en 11 días (Próximo corte programado: 26 de Junio)`.
  * Texto al pie: *"Las consultas recurrentes se ejecutan automáticamente cada 15 días para proteger los costos operativos de la plataforma."*

* **Mecanismo de Simulación Flexible (Toggle `Simulación`):**
  * Etiqueta: **`Simulación`** (sin la palabra 'Pitch').
  * Subtexto: *Simular retraso de cliente clave*.
  * **Comportamiento Flexible (Pre y Post Conexión SAT):**
    1. **Activación Previa a Conectar el SAT:**
       - El usuario puede encender el switch **antes** de conectar el SAT.
       - *Distribuidora Logística del Bajío S.A.* se marca en mora en la tabla de clientes (`Retraso de 14 días (PPD)` en ámbar).
       - Se despliega la alerta temprana: `Alerta Temprana Activada: Sugerida reestructura preventiva o factoraje de liquidez antes del corte bancario (Cumplimiento REDECO).`
       - Al pulsar **`Conectar SAT vía Syntage`**, tras la extracción el Score Gauge anima **directamente hasta 74 puntos (`Riesgo Moderado B+`)**, demostrando el impacto inicial de la morosidad.
    2. **Activación Posterior a Conectar el SAT:**
       - Si el SAT ya estaba conectado con score en 88, al pulsar el switch el score baja fluidamente a 74 puntos.
    3. **Desactivación del Switch:**
       - Al apagar el switch, el cliente vuelve a `Al corriente`, la alerta se retira y el score asciende en tiempo real a 88 puntos.

---

## 5. Sección Inferior: Subasta Privada, Mesa de Licitación en Tiempo Real y Voucher

### 5.1 Estado Inicial: Convocatoria a la Subasta
* **Contenedor:** `bg-gradient-to-r from-indigo-50/70 via-white to-emerald-50/70 border border-indigo-200/80 shadow-glass-card`.
* Encabezado con **Logo Oficial de Círculo de Crédito**: *"Licitación Institucional Blindada | Círculo de Crédito"*.
* Texto explicativo sobre publicación anonimizada ante más de 25 bancos, SOFOMes y fondos de deuda, con candado antifraude contra *loan stacking*.
* **Botón de Ingreso:** `Ingresar a Subasta Privada de Crédito` (con isotipo oficial de Círculo de Crédito).

### 5.2 Modal de Publicación Inicial
* Al pulsar el botón, activa spinner por 1.5s (*"Activando candado en Círculo de Crédito..."*).
* Despliega modal de confirmación con checkmark y logos oficiales, informando el blindaje del expediente.
* Botón: `Ver Posturas en Vivo en la Mesa de Subasta →`.

### 5.3 Mesa de Licitación Multibancaria en Tiempo Real (Live Bidding Room)
* Se despliega al cerrar el modal de confirmación.
* **Header de la Mesa:**
  * Indicador parpadeante en verde esmeralda: `MESA DE LICITACIÓN EN TIEMPO REAL`.
  * Candado activo de Círculo de Crédito.
  * Contador de posturas: `X de 4 posturas recibidas` (+25 instituciones conectadas).
  * **Botón de Simulación para el Pitch:** `Refrescar Licitación` (con spinner y carga progresiva de ofertas adicionales).
* **Mocks de Entidades Financieras con Imágenes Oficiales:**
  * Cada objeto en `MOCK_AUCTION_OFFERS` contiene su respectiva imagen institucional (`logoUrl`):
    - **Banco Santander México:** `/images/banks/santander.svg` (Llama icónica Santander sobre fondo rojo).
    - **Konfío (SOFOM E.N.R.):** `/images/banks/konfio.svg` (K estilizada con gradiente violeta/índigo).
    - **Grupo Financiero Banorte:** `/images/banks/banorte.svg` (Emblema circular estilizado Banorte sobre fondo rojo).
    - **BBVA México:** `/images/banks/bbva.svg` (Tipografía geométrica oficial BBVA sobre azul marino).
  * Cada tarjeta de postura muestra:
    - Logo oficial de la entidad financiera.
    - Tipo de entidad regulada (Banco / SOFOM).
    - Badge de ventaja competitiva (*⭐ Mejor Tasa*, *⚡ Desembolso Express 24h*, *🏆 Mayor Monto*, *💳 Línea Revolvente*).
    - Monto Aprobado, Tasa Anual y Plazo / Pago mensual estimado.
    - Botón de acción: `Visualizar Oferta (Term Sheet) →`.

### 5.4 Modal de Term Sheet Oficial (Visualizar Oferta)
* Se abre al pulsar `Visualizar Oferta (Term Sheet)` en cualquier tarjeta de banco.
* Despliega la imagen institucional oficial del banco seleccionado.
* Detalle desglosado:
  - Línea de crédito aprobada y mensualidad estimada.
  - Tasa anualizada (TIIE + Spread).
  - Plazo de amortización en meses.
  - Comisión por apertura y garantía requerida (Sin garantía hipotecaria).
  - Folio de dictamen en Círculo de Crédito.
* Botón principal: `Aceptar Oferta y Generar Código de Convenio →`.

### 5.5 Modal de Formalización: Pase de Originación de Crédito (Voucher Oficial)
* Despliega encabezado con checkmark esmeralda y la imagen de la institución financiera elegida.
* **Token Único de Convenio (B2B):** Formato alfanumérico bancario (e.g. `SAN-NXR-2026-9812-B2B`) con botón de copiado rápido al portapapeles y feedback visual instantáneo.
* **Código QR Vectorial Nítido:** Para escaneo en ventanilla bancaria, terminal o portal empresarial.
* **Instrucciones para la PyME:**
  1. Presentar el token o QR en sucursal o portal web del banco seleccionado.
  2. Expediente fiscal y score ya precargados y sincronizados.
  3. Firma digital con e.firma SAT para dispersión de fondos en menos de 24 horas hábiles.
* Botón: `Finalizar y Volver al Dashboard`.

---

## 6. Lógica de Estado Reactivo (Angular Signals)
```typescript
satConnected = signal<boolean>(false);
isLoadingSat = signal<boolean>(false);
scoreValue = signal<number>(0);
auctionStarted = signal<boolean>(false);
isAuctionLoading = signal<boolean>(false);
showAuctionModal = signal<boolean>(false);
simulateDelay = signal<boolean>(false);
showCiecModal = signal<boolean>(false);
receivedOffers = signal<AuctionOfferMock[]>([]);
isRefreshingAuction = signal<boolean>(false);
selectedOffer = signal<AuctionOfferMock | null>(null);
acceptedOffer = signal<AuctionOfferMock | null>(null);
showOfferDetailModal = signal<boolean>(false);
showVoucherModal = signal<boolean>(false);
copiedConvenio = signal<boolean>(false);
```