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

## 3. Bloque de Acción Principal: Extracción Fiscal SAT con Logo Syntage
* **Estado Inicial:**
  * Mensaje: *"Paso 1: Extrae tu facturación electrónica viva del SAT para activar el análisis de solvencia de red y conciliación de clientes PPD."*
  * Botón: `Conectar SAT vía Syntage (CIEC)` con **Logo Oficial de Syntage** integrado.
* **Estado de Carga (Simulado 1.8 segundos):**
  * El botón cambia a: `Leyendo CFDIs y declaraciones en el SAT...` con spinner SVG animado.
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

## 5. Sección Inferior: Subasta Privada y Modal Antifraude

* **Contenedor de Subasta:**
  * Fondo `bg-gradient-to-r from-indigo-50/70 via-white to-emerald-50/70 border border-indigo-200/80 shadow-glass-card`.
  * Encabezado con **Logo Oficial de Círculo de Crédito**: *"Licitación Institucional Blindada | Círculo de Crédito"*.
  * Texto: *"¿Deseas licitar este expediente anonimizado ante nuestra red de más de 25 instituciones financieras reguladas?"*
  * **Botón:** `Ingresar a Subasta Privada de Crédito` (con isotipo de Círculo de Crédito).
    * Deshabilitado con opacidad reducida mientras el score sea 0.
    * Habilitado con brillo perimetral una vez que el score se calcule.
* **Comportamiento del Botón:**
  1. Al hacer clic, muestra spinner por 1.5 segundos: *"Activando candado en Círculo de Crédito y notificando a la red..."*.
  2. Al concluir, el badge de la TopBar cambia a `🔒 Candado Activo` y se abre el **Modal de Confirmación**.

* **Modal de Confirmación (Overlay con efecto Blur en Fondo Blanco):**
  * Ventana emergente centrada con bordes suaves y sombra profunda.
  * Iconos superiores: **Logo de Círculo de Crédito** + Checkmark animado en verde esmeralda.
  * Título: `¡Solicitud Publicada en la Subasta Privada!`
  * **Cuerpo del Modal:**
    * Monto objetivo: `$1,500,000 MXN (Capital de Trabajo)`.
    * Tasa de salida estimada: `16.2% Anual (TIIE + Spread Preferencial)`.
    * Estatus Antifraude: `Protección Activa en Círculo de Crédito (Bloqueo de Loan Stacking)`.
    * Mensaje descriptivo de anonimización y emisión de Term Sheets por parte de bancos y SOFOMes.
  * **Botón de Cierre:** `Entendido / Monitorear Subasta`.

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
```