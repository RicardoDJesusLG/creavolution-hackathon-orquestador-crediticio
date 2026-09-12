# ESPECIFICACIÓN 01: LANDING PAGE INFORMATIVA (VISTA PÚBLICA)

## 1. Objetivo de la Vista
Construir el componente Standalone `LandingPageComponent` en la ruta `/`.
Funciona como la carta de presentación institucional de **NexoRisk AI**, proyectando seguridad financiera, estética *Light Mode Fintech Premium* (fondo blanco, transparencias y bordes suaves), integrando los logotipos oficiales de **Syntage** y **Círculo de Crédito**, y un llamado a la acción claro hacia el orquestador interactivo.

---

## 2. Estructura y Secciones del Componente

### A. Barra de Navegación (Navbar)
* **Izquierda:** Logo de **NexoRisk AI** con isotipo geométrico en gradiente índigo-esmeralda y el badge `Fintech B2B`.
* **Centro (Enlaces ancla):** `Solución`, `Graph Scoring`, `Seguridad Antifraude`, `Cobranza Preventiva`.
* **Derecha (CTA):** Botón `Probar Orquestador` que navega mediante `routerLink="/orquestador"`.

---

### B. Hero Section (Propuesta de Valor)
* **Tag superior:** Badge redondeado con **Logo Oficial de Círculo de Crédito**: `● Hackathon Crevolution 2026 | Impulsado con Círculo de Crédito`.
* **Titular Principal (H1):** 
  *"El Orquestador de Crédito B2B que Evalúa a tu PyME por la Solvencia de tu Red Comercial."*
* **Subtítulo:** 
  *"Olvídate de trámites de 8 semanas y rechazos por falta de historial crediticio. Extraemos tu facturación viva del SAT, analizamos la solidez de tus compradores recurrentes y abrimos una subasta privada con los mejores bancos y SOFOMes del país."*
* **Botones de Acción:**
  * Primario: `Iniciar Evaluación Gratuita` (botón con gradiente `bg-indigo-600 hover:bg-indigo-500` y `routerLink="/orquestador"`).
  * Secundario: `Ver Demo de Extracción` (botón con icono play que despliega el modal interactivo del flujo de extracción).
* **Métricas de Impacto (Barra horizontal de 3 KPIs en fondo claro):**
  * `48 Horas` | Tiempo promedio de colocación (vs. 6 a 8 semanas en banca tradicional).
  * `0% Fraude` | Blindaje de originación mediante candado transaccional.
  * `+35%` | Tasa de aprobación para PyMEs de reciente creación.

---

### C. Sección de Muestra: El Reporte Inteligente (Motor Syntage)
Contenedor interactivo que simula la tarjeta de conciliación fiscal generada por el orquestador en estética translúcida:
* **Encabezado del contenedor:** Incluye el **Logo Oficial de Syntage** y el título `Vista previa del reporte de salud financiera (Motor Syntage)`.
* **Tabla de Conciliación Semestral (Mock visual estático en fondo claro):**
  * Despliega una vista previa compacta de la tabla de ingresos vs. egresos de los últimos 4 meses con formato de moneda en pesos mexicanos.
  * Etiquetas de estado: `CFDIs Validados 100%`, `Listas Negras 69-B: Sin Coincidencias`.
  * Barras de progreso horizontales estilizadas que representen el flujo operativo positivo mensual.

---

### D. Los Tres Pilares Diferenciadores (Grid de 3 Tarjetas en White Glass)

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
* Tarjeta destacada en gradiente luminoso `bg-gradient-to-r from-indigo-50 via-white to-emerald-50`: *"¿Listo para descubrir la capacidad crediticia real de tu empresa?"*
* Botón destacado: `Acceder al Orquestador de Crédito →` (`routerLink="/orquestador"`).

---

### F. Footer
* Mención de cumplimiento: *"Plataforma conceptual diseñada para el ecosistema financiero mexicano. Integración de pruebas con APIs de Círculo de Crédito y Syntage."*
* Enlaces simulados de privacidad, términos de servicio y regulación CONDUSEF.