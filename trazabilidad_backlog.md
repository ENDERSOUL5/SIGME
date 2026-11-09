# Matriz de Trazabilidad: Prototipo Navegable vs. Historias del Backlog

> **Cumplimiento de la Guía de Evaluación:**
> 1. *Prototipo navegable en HTML y CSS: solo vistas, sin base de datos.*
> 2. *Trazabilidad: cada pantalla responde a historias del backlog (historias de usuario).*

Este documento detalla cómo cada una de las pantallas del prototipo funcional interactivo responde de manera exacta, directa y comprobable a las **Historias de Usuario (HU)**, entregables de la **WBS** e **Issues** del Product Backlog institucional de SIGME.

---

## 1. Mapeo General: Pantallas vs. Historias del Backlog

| Pantalla del Prototipo | Historias de Usuario (HU) del Backlog | Issues / WBS Asociados | Responsabilidad Funcional Demostrada |
| :--- | :--- | :--- | :--- |
| **`index.html`**<br>*(Portal de Acceso)* | **HU 1.1**, **HU 1.2**, **HU 1.3**, **HU 4.1** | Issue #1 / WBS 2.1.1<br>Issue #3 / WBS 3.3.1 | Autenticación institucional por roles (estudiante vs admin), verificación de proyecto aprobado para ingresar, visualización dinámica de la convocatoria activa (fechas, cupos) y acceso directo al catálogo. |
| **`postulacion.html`**<br>*(Formulario MVP)* | **HU 2.1.1**, **HU 2.1.2**, **HU 2.1.3**, **HU 2.2.1**, **HU 1.3** | Issue #5 / WBS 2.2.1.1<br>Issue #6 / WBS 2.2.1.2<br>Issue #8 / WBS 2.2.1.4<br>Issue #10 / WBS 2.2.2.2 | Captura de datos del estudiante, formulario de ficha técnica de MVP, carga de soportes con validación, radicación oficial automática (`SIGME-2026-XXXX`) y verificación de convocatoria activa. |
| **`admin.html`**<br>*(Panel Directivo)* | **HU 2.1**, **HU 2.2**, **HU 3.1**, **HU 3.2**, **HU 3.3**, **HU 3.3.1**, **HU 5.1**, **HU 5.3** | Issue #14, #15, #17 / WBS 3.1.1<br>Issue #20 / WBS 3.2.1<br>Issue #22 / WBS 3.1.2<br>Issue #2.2 / WBS 2.2<br>Issue #32, #35, #36 / WBS 5.3.1 | Evaluación por rúbrica ponderada con justificación obligatoria, mapa de cuadrantes de módulos, captura completa de parámetros de convocatoria con historial de cohortes, gestión de disponibilidad (festivos y cierres con notificación a interesados) y reportes en PDF. |
| **`estudiante.html`**<br>*(Panel de Turnos y Perfil)* | **HU 2.1.4**, **HU 2.2**, **HU 2.4.2**, **HU 4.1.2**, **HU 4.2** | Issue #24 / WBS 4.2.1<br>Issue #28 / WBS 2.4.2.1<br>Issue #30, #31 / WBS 2.4.2.3 | Visualización de datos personales bloqueados (nombre y facultad sincronizados con Registro Académico), edición de contacto dinámico (teléfono, WhatsApp, Instagram), preferencias de notificación (correo, WhatsApp), recepción de avisos de festivos/cierres, interruptor de turno con cronómetro en tiempo real y registro de horas. |
| **`catalogo.html`**<br>*(Catálogo Público)* | **HU 4.1**, **HU 4.2.2**, **HU 4.3.1**, **HU 4.3.2** | Issue #24 / WBS 4.2.1<br>Issue #13 / WBS 3.1.1.1 | Catálogo comercial para clientes del campus, priorización automática de módulos con turno abierto, filtros por estado, buscador en vivo y enlaces a WhatsApp e Instagram. |

---

## 2. Detalle de Trazabilidad por Pantalla

### 2.1. Pantalla: `index.html` (Portal de Acceso y Convocatorias)
* **HU 1.1 - Inicio de Sesión de Estudiantes:**
  * *Criterio de Backlog:* El estudiante vinculado debe identificarse con su correo institucional. Si su postulación no ha sido aprobada, el sistema debe negarle el acceso al panel operativo e informarle el estado.
  * *Componente en la pantalla:* Pestaña "Estudiante Vinculado", validación en `handleLogin()` y aviso condicional `reviewNotice`.
* **HU 1.2 - Inicio de Sesión Administrativa:**
  * *Criterio de Backlog:* La coordinación del CIE debe ingresar con credenciales autorizadas y acceder al control central.
  * *Componente en la pantalla:* Pestaña "Administrador CIE" y redirección a `admin.html`.
* **HU 1.3 - Trazabilidad de Periodo de Convocatoria:**
  * *Criterio de Backlog:* La pantalla debe reflejar si el periodo de inscripciones está abierto o cerrado, mostrando fechas límite, cupos y deshabilitando el registro cuando el administrador lo disponga.
  * *Componente en la pantalla:* Insignia de convocatoria, datos dinámicos de cohorte y contenedor reactivo `postulacionActionBox`.

---

### 2.2. Pantalla: `postulacion.html` (Postulación de Emprendimiento y MVP)
* **HU 2.1.1 (Issue #5 - WBS 2.2.1.1) - Campos de Formulario:**
  * *Criterio de Backlog:* Captura estructurada de nombres, correo institucional, facultad, nombre comercial, categoría y descripción de validación de MVP.
  * *Componente en la pantalla:* Secciones 1 y 2 del formulario.
* **HU 2.1.2 (Issue #6 - WBS 2.2.1.2) - Carga de Soportes:**
  * *Criterio de Backlog:* Zona de carga de archivos (PDF/JPG/PNG) para ficha técnica del prototipo o fotos de producto con límite de 5 MB.
  * *Componente en la pantalla:* Zona de arrastre `dropzone-clean` y entrada `#fileMock`.
* **HU 2.1.3 (Issue #8 - WBS 2.2.1.4) - Envío y Confirmación:**
  * *Criterio de Backlog:* Generación de radicado institucional y confirmación de recepción en estado inicial 'En Revisión'.
  * *Componente en la pantalla:* Sección `#boxSuccess` con número de radicado generado y datos del resumen.
* **HU 1.3 - Validación de Convocatoria Activa:**
  * *Criterio de Backlog:* Bloqueo institucional inmediato si el administrador tiene las convocatorias cerradas.
  * *Componente en la pantalla:* Contenedor de aviso institucional `#boxClosed`.

---

### 2.3. Pantalla: `admin.html` (Panel Directivo del CIE)
* **HU 2.1 / 3.1.2 (Issue #22 - WBS 3.1.2) - Evaluación con Rúbrica:**
  * *Criterio de Backlog:* Rúbrica institucional con criterios ponderados: Propuesta de Valor (30%), Validación de MVP (40%) y Viabilidad en Módulo Físico (30%), con justificación escrita obligatoria. Al aprobar, el estudiante queda habilitado para iniciar sesión.
  * *Componente en la pantalla:* Modal `#evalModal` y función `submitDecision()`.
* **HU 2.2 (Issue #2.2 - WBS 2.2) - Gestión de Excepciones de Disponibilidad (Festivos y Cierres):**
  * *Criterio de Backlog:* Configurar días en los que no habrá atención (festivos o cierres de universidad) y notificar automáticamente a los emprendimientos para suspender el control de asistencia sin generar penalizaciones.
  * *Componente en la pantalla:* Pestaña "Disponibilidad y Cierres (HU 2.2)", formulario `#formCierre`, canales de notificación (Correo y WhatsApp), modal de confirmación `#notifModal` y tabla `#cierresTableBody`.
* **HU 3.1 & 3.2 (Issue #20 - WBS 3.2.1) - Mapa de Módulos Físicos:**
  * *Criterio de Backlog:* Mapa visual de cuadrantes de la Zona de Emprendimiento, estado de ocupación y acción para vincular proyectos aprobados o liberar espacios.
  * *Componente en la pantalla:* Pestaña "Infraestructura y Módulos" con cuadrícula `#modulosGrid` y panel de asignación.
* **HU 3.3.1 - Apertura y Parámetros de Convocatorias:**
  * *Criterio de Backlog:* Captura detallada de parámetros de apertura (código de cohorte, fechas límite de postulación y evaluación, cupos disponibles, líneas priorizadas, descripción y requisitos institucionales) y conmutador maestro en tiempo real con historial de cohortes anteriores.
  * *Componente en la pantalla:* Pestaña "Apertura de Convocatorias", formulario `#formConvocatoria`, switch `#convocatoriaToggle` y tabla `#cohortHistoryTableBody`.
* **HU 5.1 & 5.3 (Issues #32, #35, #36 - WBS 5.3.1) - Métricas y Reporte:**
  * *Criterio de Backlog:* Consolidado de horas en campus, tasa de ocupación, tabla clasificatoria y exportación a PDF para las directivas.
  * *Componente en la pantalla:* Pestaña "Métricas y Reportes" y botón "Exportar Reporte a PDF" (`window.print()`).

---

### 2.4. Pantalla: `estudiante.html` (Panel del Emprendedor Vinculado)
* **HU 2.1.4 (Issue #28 - WBS 2.4.2) - Perfil de Usuario con Datos Bloqueados y Contacto Dinámico:**
  * *Criterio de Backlog:* Visualización de datos personales bloqueados (nombre completo, facultad y código estudiantil sincronizados directamente con la Universidad) y edición habilitada exclusivamente para datos dinámicos de contacto comercial (teléfono móvil, WhatsApp para pedidos, Instagram y descripción de producto).
  * *Componente en la pantalla:* Subsección 1 (campos `readonly` `#lockedName`, `#lockedFaculty`, `#lockedCode`, `#lockedEmail`) y Subsección 2 (formulario `#profileForm` de contacto dinámico).
* **HU 2.1.4 - Preferencias de Notificación:**
  * *Criterio de Backlog:* Configuración personalizada de los canales por los cuales el emprendedor desea ser notificado por el CIE (Correo Institucional, WhatsApp y Alertas de Mantenimiento).
  * *Componente en la pantalla:* Formulario de preferencias `#notifPrefForm` con persistencia en `SIGME_STATE`.
* **HU 2.2 - Recepción de Avisos de Festivos y Cierres Programados:**
  * *Criterio de Backlog:* Los emprendedores con módulo asignado reciben y visualizan las notificaciones de días no laborables o festivos para conocer que en esa fecha no se generan sanciones por inactividad.
  * *Componente en la pantalla:* Banner superior `#bannerCierresContainer` y bandeja de circulares del CIE `#notifStudentList`.
* **HU 4.2 (Issue #24 - WBS 4.2.1) - Switch de Turno Operativo:**
  * *Criterio de Backlog:* Control interactivo para abrir y cerrar turno con cronómetro digital, reflejando el estado en vivo en el catálogo de clientes.
  * *Componente en la pantalla:* Botón `#btnToggleTurn`, indicador `#timerDisplay` y sincronización en `localStorage`.
* **HU 2.4.2 (Issues #30, #31) - Contabilización de Horas:**
  * *Criterio de Backlog:* Acumulador de horas operadas y registro de turnos validados.
  * *Componente en la pantalla:* Cajas de estadísticas `#valHours` y tabla de historial de turnos recientes.

---

### 2.5. Pantalla: `catalogo.html` (Catálogo Comercial Universitario)
* **HU 4.1 (Issue #24 - WBS 4.2.1) - Vitrina Comercial Pública:**
  * *Criterio de Backlog:* Exhibición de las marcas del campus para compradores universitarios.
  * *Componente en la pantalla:* Grid interactivo `#catalogGrid`.
* **HU 4.2.2 - Priorización en Tiempo Real:**
  * *Criterio de Backlog:* Los emprendimientos que se encuentren atendiendo en su módulo (turno abierto) deben aparecer automáticamente al inicio de la lista con un indicador visual.
  * *Componente en la pantalla:* Algoritmo de ordenamiento en `renderCatalog()` (`a.isOpen ? -1 : 1`) e indicador de estado `badge-status--open`.
* **HU 4.3.1 & 4.3.2 - Búsqueda y Enlaces de Compra:**
  * *Criterio de Backlog:* Filtro rápido por estado, búsqueda predictiva por texto y botones directos a WhatsApp e Instagram.
  * *Componente en la pantalla:* Barra de filtros `#fOpen`/`#fClosed`, campo `#catalogSearch` y botones `.btn-contact`.

---

## 3. Relación con la Carpeta `vistas/`
La carpeta `vistas/` (con sus 21 archivos numerados por WBS e issue) contiene las **maquetas atómicas y de prueba individual** desarrolladas para sustentar cada tarea del Product Backlog por separado.

Las 5 pantallas principales en la raíz (`index.html`, `postulacion.html`, `admin.html`, `estudiante.html`, `catalogo.html`) corresponden a la **integración navegable final solicitada en la guía**:
> *"Prototipo navegable en HTML y CSS: solo vistas, sin base de datos. Trazabilidad: cada pantalla responde a historias del backlog."*
