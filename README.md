# NexoRisk AI | Orquestador de Crédito B2B

> **Prototipo interactivo de alta fidelidad desarrollado para el Hackathon Crevolution 2026.**  
> *Evaluación crediticia de PyMEs por la solvencia de su red comercial, extracción SAT en vivo vía Syntage y subasta privada con blindaje antifraude en Círculo de Crédito.*

---

## 📌 Acerca del Proyecto

**NexoRisk AI** es una plataforma Fintech B2B diseñada para democratizar el acceso al financiamiento para pequeñas y medianas empresas en México, eliminando los procesos burocráticos tradicionales de 8 semanas.

A través de la extracción automatizada de facturación electrónica (CFDI 4.0) del SAT mediante **Syntage** y el análisis de comportamiento crediticio de los compradores recurrentes (ventas a crédito PPD) en **Círculo de Crédito**, el orquestador determina la solvencia real del flujo de la empresa y permite licitar expedientes anonimizados ante bancos y SOFOMes regulados con un candado temporal que erradica el *loan stacking*.

---

## 🚀 Pilares Tecnológicos y Diferenciadores

1. **Graph Scoring B2B (Solvencia de Red):**
   - Evalúa a la PyME en función de la salud crediticia y puntualidad de pago de sus clientes recurrentes en Círculo de Crédito, en lugar de depender únicamente de balances pasados.
2. **Candado Antifraude Institucional:**
   - Filtro contra empresas fantasma (EFOS / SAT 69-B) y bloqueo transaccional temporal en Círculo de Crédito para impedir solicitudes crediticias simultáneas (*loan stacking*).
3. **Cobranza Preventiva por Flujo PPD:**
   - Monitoreo quincenal de Complementos de Recepción de Pagos (CRP) ante el SAT para anticipar retrasos de cartera hasta 15 días antes del corte bancario, facilitando reestructuras amigables bajo regulación **REDECO / CONDUSEF**.

---

## 🛠️ Stack Tecnológico

- **Framework:** [Angular 18+](https://angular.dev/) (Arquitectura 100% Standalone Components).
- **Manejo de Estado Reactivo:** **Angular Signals** (`signal()`, `computed()`).
- **Sistema de Diseño:** [Tailwind CSS](https://tailwindcss.com/) adaptado a estética *Light Mode Fintech Premium* (fondo blanco `#F8FAFC`, superficies con *Glassmorphism* `backdrop-blur-md` y acentos corporativos).
- **Visualización de Datos:** Medidores semicirculares (Gauge SVG 180°) e iconos vectoriales inline optimizados (sin librerías pesadas externas).
- **Integraciones Simuladas:** Bóveda fiscal de **Syntage** y buró de crédito de **Círculo de Crédito**.

---

## 🗺️ Estructura de Vistas (Rutas)

| Ruta | Componente | Descripción |
| :--- | :--- | :--- |
| `/` | `LandingPageComponent` | Vista institucional con propuesta de valor, KPIs de impacto, preview de conciliación fiscal SAT y los 3 pilares del proyecto. |
| `/orquestador` | `OrchestratorDashboardComponent` | Panel operativo con extracción CIEC/SAT, medidor de Score dinámico (0 a 88), monitor PPD, switch de simulación y modal de subasta privada. |

---

## 💻 Instalación y Ejecución Local

### Requisitos Previos
- **Node.js:** Versión 18 o superior (recomendado `v22.x`).
- **npm:** Versión 9 o superior.

### Pasos de Instalación

1. **Instalar dependencias del proyecto:**
   ```bash
   npm install
   ```

2. **Iniciar el servidor de desarrollo:**
   ```bash
   npm start
   # o bien: npx ng serve
   ```

3. **Abrir en el navegador:**
   Navega a [http://localhost:4200/](http://localhost:4200/). La aplicación se recargará automáticamente ante cualquier cambio en el código fuente.

### Compilación para Producción
Para generar el paquete optimizado de producción:
```bash
npm run build
```
Los artefactos compilados se almacenarán en la carpeta `dist/nexorisk`.

---

## 🎬 Guía para la Demostración del Pitch

El dashboard (`/orquestador`) ofrece dos flujos interactivos para la presentación:

### Opción A: Demostración Tradicional (Camino Feliz)
1. **Paso 1:** Ingresar a `/orquestador`. El medidor inicia en `0` (Sin calificar) y las tablas muestran estado de espera.
2. **Paso 2:** Hacer clic en **`⚡ Conectar SAT vía Syntage (CIEC)`**. Se despliega el **Widget Modal de Autenticación CIEC de Syntage** con credenciales prellenadas para demo (RFC `ITC190412AA1` y contraseña confidencial con botón de alternar visibilidad). Al hacer clic en **`Autenticar y Sincronizar Bóveda Fiscal →`**, se ejecuta la lectura en vivo y el medidor anima fluidamente hasta los **88 puntos (`Grado de Inversión A+`)**.
3. **Paso 3:** Activar el interruptor **`Simulación`** (*Simular retraso de cliente clave*). El cliente principal pasa a estado ámbar por retraso de 14 días en PPD, el score cae en tiempo real a **74 puntos (`Riesgo Moderado B+`)** y aparece la alerta temprana REDECO.
4. **Paso 4:** Desactivar la simulación para restaurar los 88 puntos.
5. **Paso 5:** Hacer clic en **`🚀 Ingresar a Subasta Privada de Crédito`**. Se activa el candado antifraude contra *loan stacking* en la barra superior y se despliega el modal de confirmación con las condiciones anonimizadas.

### Opción B: Demostración Pre-Extracción (Caso con Riesgo Comercial Inicial)
1. **Paso 1:** Antes de conectar el SAT, activar el interruptor **`Simulación`**.
2. **Paso 2:** El cliente principal se marca en mora de inmediato y la alerta REDECO se activa.
3. **Paso 3:** Hacer clic en **`⚡ Conectar SAT vía Syntage (CIEC)`**. El algoritmo procesa la facturación y calcula el Score directamente en **74 puntos**, demostrando cómo la morosidad de la red afecta el límite de crédito desde la originación.
4. **Paso 4:** Desactivar la simulación para mostrar cómo la subsanación del retraso eleva la calificación a **88 puntos**.

---

## ⚖️ Aviso Legal y Cumplimiento
*Prototipo conceptual desarrollado exclusivamente con fines de evaluación técnica y demostración de producto en el marco del Hackathon Crevolution 2026. Los datos fiscales y de personas morales mostrados son simulados para fines de demostración.*
