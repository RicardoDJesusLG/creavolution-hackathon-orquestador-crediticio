# ESPECIFICACIÓN 01: LANDING PAGE INFORMATIVA (VISTA PÚBLICA)

## 1. Objetivo de la Vista
Construir el componente Standalone `LandingPageComponent` en la ruta `/`.
Debe funcionar como la carta de presentación institucional de **NexoRisk AI**, proyectando seguridad financiera, estética *Dark Fintech* moderna y un llamado a la acción claro hacia el orquestador interactivo.

---

## 2. Estructura y Secciones del Componente

### A. Barra de Navegación (Navbar)
* **Izquierda:** Logo de **NexoRisk AI** con isotipo geométrico en gradiente índigo-esmeralda y el badge `Fintech B2B`.
* **Centro (Enlaces ancla):** `Solución`, `Graph Scoring`, `Seguridad Antifraude`, `Cobranza Preventiva`.
* **Derecha (CTA):** Botón `Probar Orquestador` que navega mediante `routerLink="/orquestador"`.

---

### B. Hero Section (Propuesta de Valor)
* **Tag superior:** Badge redondeado `● Hackathon Crevolution 2026 | Impulsado con Círculo de Crédito`.
* **Titular Principal (H1):** 
  *"El Orquestador de Crédito B2B que Evalúa a tu PyME por la Solvencia de tu Red Comercial."*
* **Subtítulo:** 
  *"Olvídate de trámites de 8 semanas y rechazos por falta de historial crediticio. Extraemos tu facturación viva del SAT, analizamos la solidez de tus compradores recurrentes y abrimos una subasta privada con los mejores bancos y SOFOMes del país."*
* **Botones de Acción:**
  * Primario: `Iniciar Evaluación Gratuita` (botón con gradiente `bg-indigo-600 hover:bg-indigo-500` y `routerLink="/orquestador"`).
  * Secundario: `Ver Demo de Extracción` (botón outline sutil con icono de video/play).
* **Métricas de Impacto (Barra horizontal de 3 KPIs):**
  * `48 Horas` | Tiempo promedio de colocación (vs. 6 semanas en banca tradicional).
  * `0% Fraude` | Blindaje de originación mediante candado transaccional.
  * `+35%` | Tasa de aprobación para PyMEs de reciente creación.

---

### C. Sección de Muestra: El Reporte Inteligente (Estilo Syntage)
Contenedor interactivo que simula la tarjeta de conciliación fiscal generada por el orquestador para ilustrar el valor antes del registro:
* **Encabezado del contenedor:** `Vista previa del reporte de salud financiera (Extracción directa SAT/CIEC)`.
* **Tabla de Conciliación Semestral (Mock visual estático):**
  * Despliega una vista previa compacta de la tabla de ingresos vs. egresos de los últimos 4 meses.
  * Etiquetas de estado: `CFDIs Validados 100%`, `Listas Negras 69-B: Sin Coincidencias`.
  * Barras de progreso horizontales estilizadas que representen el flujo operativo positivo mensual.

---

### D. Los Tres Pilares Diferenciadores (Grid de 3 Tarjetas)

* **Tarjeta 1: Graph Scoring B2B (Evaluación de Red)**
  * *Icono:* Red de nodos / Conexiones.
  * *Contenido:* No evaluamos balances contables pasados; leemos tus facturas PPD y consultamos la solvencia de tus clientes en **Círculo de Crédito**. Si tus compradores pagan a tiempo, tu PyME obtiene mejores montos y tasas preferenciales.
* **Tarjeta 2: Candado Antifraude Institucional**
  * *Icono:* Escudo criptográfico con candado.
  * *Contenido:* Filtro en tiempo real contra empresas fachada (EFOS/SAT) y bloqueo transaccional temporal en **Círculo de Crédito** para erradicar el *loan stacking* (solicitudes paralelas simultáneas).
* **Tarjeta 3: Cobranza Preventiva por Flujo PPD**
  * *Icono:* Pulso cardíaco / Radar predictivo.
  * *Contenido:* Auditoría periódica de los Complementos de Recepción de Pagos (CRP). Detectamos atrasos de tus clientes hasta 15 días antes de tu corte para ofrecer reestructuraciones amigables bajo regulación **REDECO/CONDUSEF**.

---

### E. Banner Inferior de Conversión (Pre-Footer)
* Caja destacada con gradiente perimetral: *"¿Listo para descubrir la capacidad crediticia real de tu empresa?"*
* Botón destacado: `Acceder al Orquestador de Crédito →` (`routerLink="/orquestador"`).

---

### F. Footer
* Mención de cumplimiento: *"Plataforma conceptual diseñada para el ecosistema financiero mexicano. Integración de pruebas con APIs de Círculo de Crédito y Syntage."*
* Enlaces simulados de privacidad y términos legales.