# ESPECIFICACIÓN 02: DASHBOARD DEL ORQUESTADOR DE CRÉDITO (VISTA PRIVADA)

## 1. Objetivo de la Vista
Construir el componente Standalone `OrchestratorDashboardComponent` en la ruta `/orquestador`.
Es el núcleo interactivo para grabar el video del pitch. Debe demostrar en una sola pantalla: la extracción de datos fiscales vía Syntage, el cálculo del Score de Red B2B, el monitoreo quincenal de pagos PPD y el lanzamiento a subasta con candado antifraude.

---

## 2. Barra Superior de Control y Estatus (TopBar)
* **Izquierda:** Botón de regreso `← Volver a Inicio` (`routerLink="/"`) y título: `Panel de Orquestación y Licitación PyME`.
* **Centro:** Identificador de la empresa de prueba: `Industrial Textil del Centro S.A. de C.V. | RFC: ITC190412AA1`.
* **Derecha (Badges de Estado reactivos):**
  * Badge 1: `● Syntage API: Conectada` (Verde esmeralda).
  * Badge 2: Indicador del Candado:
    * Si la subasta no ha iniciado: `○ Candado Círculo de Crédito: Standby` (Gris slate).
    * Si la subasta está activa: `🔒 Candado Activo: Protegido contra Loan Stacking` (Azul índigo con pulso animado).

---

## 3. Bloque de Acción Principal: Extracción Fiscal
Ubicado en la parte superior del dashboard:
* **Estado Inicial:**
  * Mensaje: *"Paso 1: Extrae tu facturación electrónica del SAT para activar el análisis de riesgo de red."*
  * Botón: `⚡ Conectar SAT vía Syntage (CIEC)` (`bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-xl shadow-lg`).
* **Estado de Carga (Simulado 1.8 segundos):**
  * El botón cambia a: `Leyendo CFDIs y declaraciones en el SAT...` con un spinner SVG animado.
* **Estado Completado:**
  * El botón se transforma en un chip de éxito: `✓ Expediente Fiscal Sincronizado (1,420 Facturas Procesadas)`.
  * Se habilitan automáticamente las tablas de datos y se dispara la animación del Score.

---

## 4. Grid Principal (Layout de 2 Columnas)

### Columna Izquierda (65% width): Datos Financieros y Red de Clientes

#### Panel A: Conciliación Financiera Semestral (Ingresos vs. Gastos)
* Encabezado: `Historial Financiero Operativo (Base SAT CFDI 4.0)`.
* **Tabla de Datos:**
  * Consume `MOCK_FINANCIAL_METRICS`.
  * Columnas: `Mes`, `Ventas (Ingresos)`, `Gastos (Egresos)`, `Flujo Neto Operativo`, `Facturación PPD`.
  * Cada fila muestra los montos formateados en moneda mexicana (`$X,XXX,XXX MXN`).
  * Si la extracción fiscal aún no se ejecuta, muestra un estado vacío con mensaje: *"Esperando conexión con el SAT..."*.

#### Panel B: Concentración de Clientes Clave (Base del Graph Scoring)
* Encabezado: `Cartera de Clientes B2B & Evaluación en Círculo de Crédito`.
* Subtítulo explicativo: *"Calificación basada en el comportamiento crediticio de las empresas que compran a crédito (PPD)."*
* **Tabla de Clientes:**
  * Consume `MOCK_B2B_CLIENTS`.
  * Columnas: `Razón Social del Cliente`, `Part. %`, `Plazo Promedio`, `Score Círculo de Crédito`, `Riesgo de Cadena`, `Estatus de Pago`.
  * Badges de calificación: Clientes con score > 750 muestran un badge `A+ / Excelente` en verde esmeralda.

---

### Columna Derecha (35% width): Medidores y Monitoreo

#### Tarjeta 1: Medidor de Calificación de Red B2B (Gauge SVG)
* Encabezado: `Score de Red NexoRisk`.
* **Componente Medidor:**
  * Semicírculo SVG de 180 grados con trazo de fondo gris oscuro y trazo de progreso en gradiente esmeralda.
  * Texto numérico central: Inicia en `0` y, al sincronizar el SAT, se incrementa progresivamente con animación fluida hasta llegar a `88`.
  * Subtexto dinámico:
    * Si Score = 0: `Sin calificar`.
    * Si Score = 88: `Grado de Inversión Favorable (A+)`.
    * Si el modo demo se activa (Score = 74): `Riesgo Moderado por Retraso PPD (B+)`.
* **Dictamen del Algoritmo:**
  * Caja informativa: *"La solvencia sobresaliente de los compradores principales (Promedio Círculo: 768 pts) mitiga en 72% el riesgo intrínseco de la empresa solicitante."*

---

#### Tarjeta 2: Monitor de Cartera B2B & Cobranza Preventiva (Feature Quincenal)
* Encabezado: `Monitoreo de Cobranza & Pagos PPD`.
* Descripción: *"Auditoría periódica de Complementos de Recepción de Pagos (CRP) ante el SAT y alertas de Círculo de Crédito."*
* **Componente de Ciclo:**
  * Barra de progreso horizontal sutil que indica: `Ciclo de Monitoreo: Quincenal (Día 4 de 15)`.
* **Botón de Consulta Restringido:**
  * Botón deshabilitado estilizado: `🔄 Sincronizar Conciliación Fiscal & Alertas SIC`.
  * Badge sobre el botón: `Disponible en 11 días (Próximo corte programado: 26 de Junio)`.
  * Texto al pie: *"Las consultas recurrentes se ejecutan automáticamente cada 15 días para proteger los costos operativos de la plataforma."*
* **Mecanismo de Simulación para el Pitch (Demo Switch):**
  * Un toggle o switch estilizado en la esquina de la tarjeta: `[Modo Demo: Simular retraso de cliente clave]`.
  * **Comportamiento al activarlo:**
    1. En la tabla de clientes, el cliente principal (*Distribuidora Logística del Bajío*) cambia su estatus a color ámbar: `Retraso de 14 días en Complemento de Pago (PPD)`.
    2. El medidor de Score de Red baja en tiempo real de **88 a 74**.
    3. Aparece una alerta preventiva pulsante: `Alerta Temprana Activada: Sugerida reestructura preventiva o factoraje de liquidez antes del corte bancario (Cumplimiento REDECO).`

---

## 5. Sección Inferior: Subasta Privada y Modal Antifraude

Debajo de las dos columnas, se ubica la barra de lanzamiento:

* **Contenedor de Subasta:**
  * Fondo `bg-slate-900/90 border border-indigo-500/30 p-6 rounded-2xl flex items-center justify-between`.
  * Texto: *"¿Deseas licitar este expediente anonimizado ante nuestra red de más de 25 instituciones financieras reguladas?"*
  * **Botón:** `🚀 Ingresar a Subasta Privada de Crédito`.
    * Deshabilitado con opacidad reducida mientras el score sea 0.
    * Habilitado con brillo perimetral índigo una vez que el score se calcule.
* **Comportamiento del Botón:**
  1. Al hacer clic, muestra un spinner por 1.5 segundos: *"Activando candado en Círculo de Crédito y notificando a la red..."*.
  2. Al concluir, el badge de la TopBar cambia a `🔒 Candado Activo` y se abre el **Modal de Confirmación**.

* **Modal de Confirmación (Overlay con efecto Blur):**
  * Ventana emergente centrada con borde sutil verde esmeralda.
  * Icono superior: Checkmark animado en círculo esmeralda.
  * Título: `¡Solicitud Publicada en la Subasta Privada!`
  * **Cuerpo del Modal:**
    * Resumen de la licitación:
      * Monto objetivo: `$1,500,000 MXN (Capital de Trabajo)`.
      * Tasa de salida estimada: `16.2% Anual (TIIE + Spread Preferencial)`.
      * Estatus Antifraude: `Protección Activa en Círculo de Crédito (Bloqueo de Loan Stacking)`.
    * Mensaje descriptivo:
      *"Tu expediente ha sido publicado de forma completamente anonimizada. Los bancos y SOFOMes están emitiendo sus Term Sheets. Te notificaremos cuando recibas la primera oferta formal."*
  * **Botón de Cierre:** `Entendido / Monitorear Subasta` (Cierra el modal y mantiene el estado activo en pantalla).

---

## 6. Lógica de Estado Reactivo (Angular Signals)
Definir en el componente las siguientes señales para orquestar la vista:

```typescript
satConnected = signal<boolean>(false);
isLoadingSat = signal<boolean>(false);
scoreValue = signal<number>(0);
auctionStarted = signal<boolean>(false);
isAuctionLoading = signal<boolean>(false);
showAuctionModal = signal<boolean>(false);
simulateDelay = signal<boolean>(false);
```