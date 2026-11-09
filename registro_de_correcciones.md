# Registro de Correcciones y Rediseño Visual - SIGME

## 1. Objetivo del Rediseño
Transformar la interfaz del prototipo interactivo en un diseño armónico, minimalista y de alto estándar editorial, alineado con la identidad institucional y profesional del Centro de Innovación y Emprendimiento (CIE).

---

## 2. Paleta de Colores Implementada

| Rol del Color | Tono / Nombre | Código Hexadecimal | Aplicación en la Interfaz |
| :--- | :--- | :--- | :--- |
| **Principal 1** | **Crema** | `#F3EEE3` | Fondos de pantalla, tarjetas contrastantes (`#FAF7F2`), tonos suaves de superficie. |
| **Principal 2** | **Ink Black** | `#111111` | Tipografía principal, botones prioritarios, topbars, bordes estructurales y contenedores contrastantes. |
| **Secundario / Acento** | **Burn Orange** | `#D9541E` | Detalles mínimos: indicadores de estado activo, foco de inputs, subrayado de pestañas activas, micro-pills y resaltados sutiles. |

---

## 3. Principios de Diseño y Correcciones Aplicadas

### A. Eliminación Total de Emojis
Se eliminaron por completo todos los emojis de la plataforma, tanto en el código HTML como en el estado JavaScript y datos de prueba (`shared-state.js`):
- Se sustituyeron iconos emoji (`🛍️`, `📝`, `👑`, `✅`, `⏳`, `🟢`, `🔴`, `⚪`, `🚫`, `📁`, `🎉`, `💬`, `📷`, `📋`, `🏢`, `⚙️`, `📊`, `🖨️`, etc.) por:
  - **Monogramas tipográficos** elegantes de dos letras para cada marca (ej. `ES`, `BC`, `MU`, `3D`).
  - **Puntos de estado geométricos y micro-tags** (`status-dot`, `status-dot--active`, `tag`, `tag--accent`).
  - **Etiquetas de texto limpias** en botones de acción y canales de contacto (`WhatsApp`, `Instagram`, `Catálogo Público`, `Postular Proyecto`, `Abrir Turno`, `Cerrar Turno`).

### B. Depuración de Métricas
- Se eliminaron todas las menciones a *"asistencia"*, *"porcentaje de asistencia"* y *"meta mínima"*.
- El panel de estudiante conserva únicamente métricas operativas limpias:
  - **Horas Acumuladas Este Mes**
  - **Turnos Completados**

### C. Trazabilidad con el Product Backlog (Historias de Usuario)
- Se desarrolló el componente interactivo de auditoría `traceability.js`, presente en todas las vistas mediante un pill discreto en la esquina inferior derecha: **`[Trazabilidad HU]`**.
- Al hacer clic, abre un modal minimalista que expone de forma directa para el docente o evaluador:
  - Código de la Historia de Usuario (HU).
  - Tarea / Issue WBS del backlog.
  - Criterio de aceptación correspondiente.
  - Componente de la pantalla que lo satisface.
- Se documentó la matriz exhaustiva en `trazabilidad_backlog.md` y se añadieron metadatos de comentarios en la cabecera HTML de cada pantalla.

### D. Armonización de Vistas
1. **`styles.css`**: Hoja de estilos centralizada con variables semánticas, tipografía nativa depurada (`system-ui`, `-apple-system`, `Roboto`), componentes de botones (`btn--primary`, `btn--accent`, `btn--outline`, `btn--ghost`), campos de formulario con foco en Burn Orange y tarjetas minimalistas.
2. **`index.html`**: Portal con acceso dividido, tabs elegantes sin bordes pesados, botones de prueba directa con micro-indicadores y banner informativo de alto contraste.
3. **`catalogo.html`**: Tarjetas con cabecera de monograma minimalista, etiquetas de estado `ABIERTO` / `CERRADO` con acento Burn Orange y enlaces de contacto limpios.
4. **`admin.html`**: Panel con pestañas de navegación con indicador inferior en Burn Orange, tabla minimalista de postulaciones, mapa matricial de módulos físicos con código limpio y modal de evaluación técnica.
5. **`estudiante.html`**: Selector de apertura/cierre de turno en tiempo real con cronómetro digital monospace, sin emojis, y formulario comercial editable.
6. **`postulacion.html`**: Formulario de recepción estructurado en 3 pasos con área de carga de MVP sobria y confirmación institucional con radicado.
7. **`shared-state.js`**: Estado reactivo actualizado, campos de monogramas sin emojis y migración automática de datos cacheados en `localStorage`.

---

## 4. Nuevas Implementaciones Funcionales (Sprint de Ajustes y Especificación)

### A. Mejora en la Captura de Datos para Convocatorias (`admin.html` - HU 3.3.1)
- **Motivo de la implementación**: Anteriormente la apertura de convocatorias era un simple interruptor binario (*Abierta/Cerrada*), lo cual no cumplía con los requerimientos del CIE ni con la trazabilidad del proceso de selección por cohortes.
- **Campos incorporados**:
  - **Identificadores oficiales**: Nombre formal de la convocatoria y código alfanumérico de cohorte (ej. `CIE-2026-2`).
  - **Periodo y cronograma**: Periodo semestral, fecha exacta de apertura, fecha límite improrrogable de cierre y fecha fijada para publicación de resultados del comité evaluador.
  - **Capacidad y focalización**: Número de cupos de módulos físicos disponibles a concursar y líneas temáticas priorizadas (ej. *Tecnología, Moda Sostenible, Alimentos*).
  - **Descripción y términos**: Texto con el objeto de la convocatoria y checklist de criterios institucionales exigidos.
- **Sincronización reactiva**: Los parámetros configurados por el administrador se propagan instantáneamente a `index.html` (portal general) y `postulacion.html` (formulario de postulación de proyectos), mostrando fechas, cupos y requisitos actualizados sin recargar la página.
- **Historial de cohortes**: Se añadió una tabla de cohortes anteriores (`CIE-2026-1`, `CIE-2025-2`) para dar trazabilidad histórica al proceso de vinculación.

### B. Gestión de Excepciones de Disponibilidad y Cierres (`admin.html` & `estudiante.html` - HU 2.2)
- **Motivo de la implementación**: La regla de negocio estipula que en días festivos oficiales, cierres imprevistos del campus o mantenimientos locativos, los módulos no operan presencialmente y los emprendedores **no deben ser penalizados por inactividad**.
- **Panel Administrativo (`admin.html` -> Tab "Disponibilidad y Cierres")**:
  - Formulario para registrar excepciones con tipo (*Festivo Nacional, Mantenimiento, Receso Académico, Evento Institucional, Emergencia*), fechas de inicio/fin, alcance de módulos (*Todos, Zona Norte, Zona Sur*) y justificación.
  - Selección de canales de despacho de notificación (*Correo Institucional, Línea WhatsApp*).
  - Modal interactivo de simulación de despacho que lista los emprendimientos activos que recibirán la circular institucional.
  - Tabla de control de excepciones registradas con opción de cancelación y auditoría.
- **Panel del Estudiante (`estudiante.html`)**:
  - **Banner de alerta superior**: Cuando existe un cierre programado próximo, se despliega un aviso destacado informando las fechas y confirmando explícitamente: *"Durante esta fecha no se registrarán penalizaciones por inactividad"*.
  - **Bandeja de Circulares y Notificaciones del CIE**: Tarjeta dedicada que lista en tiempo real las comunicaciones formales de disponibilidad enviadas por la administración.

### C. Arquitectura del Perfil de Usuario (`estudiante.html` - HU 2.1.4)
- **Motivo de la implementación**: Garantizar la integridad de los registros académicos institucionales mientras se brinda autonomía comercial al estudiante.
- **Datos Personales Bloqueados (Sincronizados con la Universidad)**:
  - Campos: Nombres y apellidos completos, código estudiantil único, facultad/programa académico y correo institucional oficial.
  - Estado: Atributo `readonly` HTML nativo, estilizado con fondo crema atenuado y cursor inactivo. Se incluye una etiqueta institucional explícita: `[Bloqueado por Universidad]` y nota aclaratoria de que provienen de Registro Académico.
- **Datos de Contacto Dinámicos (Edición Habilitada)**:
  - Campos: Teléfono móvil de contacto, línea WhatsApp para pedidos, usuario de Instagram de la marca y descripción comercial.
  - Estado: Edición abierta y guardado reactivo que actualiza inmediatamente la ficha del emprendimiento en el catálogo público (`catalogo.html`).
- **Preferencias de Notificación Institucional**:
  - Formulario de configuración con casillas de verificación para:
    1. *Notificaciones por Correo Institucional* (citaciones de comité, dictámenes de rúbrica).
    2. *Alertas Rápidas por WhatsApp* (avisos de festivos, recordatorios de turnos).
    3. *Alertas de Mantenimiento de Infraestructura* (reparaciones locativas, contingencias).
  - Persistencia reactiva en el estado compartido (`shared-state.js`).

### D. Mecanismo de Restablecimiento de Registros de Demostración (`shared-state.js`, `admin.html`, `index.html`)
- **Motivo de la implementación**: Durante las pruebas y evaluaciones docentes, al evaluar todos los proyectos o registrar múltiples cierres, el evaluador se quedaba sin registros en estado inicial para repetir las pruebas en el navegador (`localStorage`).
- **Control en `admin.html`**:
  - Se agregó el botón **"Restablecer Registros"** en la cabecera de la tabla de proyectos (junto al filtro de estados) y el botón **"Restablecer Datos Demo"** en la barra superior.
  - Al presionarlo se despliega un modal institucional con dos modalidades:
    1. *Reiniciar Solo Postulaciones de Proyectos*: Vuelve a poner a los estudiantes en estado 'En Revisión' y limpia las rúbricas para repetir la evaluación sin alterar las convocatorias ni los cierres.
    2. *Restablecer TODO el Sistema (Fábrica)*: Restablece todo el `localStorage` a los datos demo iniciales (postulaciones, módulos E-01 a E-10, convocatorias, festivos y catálogos).
- **Control en `index.html`**:
  - Enlace al pie del bloque de accesos rápidos para reiniciar los datos de fábrica antes de comenzar una demostración en vivo.

### E. Rediseño de Navegación: Catálogo como Entrada Principal, Login Normalizado y Consulta de Postulación
- **Motivo de la implementación**: Facilitar la navegación natural y profesional del usuario: la cara pública de la plataforma debe ser la vitrina comercial de emprendimientos para el campus (`index.html`), mientras que el inicio de sesión (`login.html`) debe ser una pantalla sobria y enfocada sin elementos artificiales que desvirtúen la experiencia de una aplicación real.
- **Catálogo Público como Entrada Principal (`index.html`)**:
  - La raíz del sitio (`/`) ahora es el catálogo de emprendimientos universitarios.
  - Barra superior con menú integral: **Catálogo de Negocios**, **Postular Emprendimiento** y **Consultar Estado de Postulación**.
  - Botón prioritario **Iniciar Sesión →** para el acceso de estudiantes vinculados y administradores.
  - Banner informativo dinámico con el estado de la convocatoria activa.
- **Normalización de la Ventana de Login (`login.html`)**:
  - Se eliminaron por completo los botones grandes de acceso rápido manual ("trampas de demo").
  - Formulario limpio enfocado en correo institucional y contraseña con selector de rol (*Estudiante Vinculado* / *Administrador CIE*).
  - Regla de negocio activa: Los estudiantes con proyecto en estado 'En Revisión' reciben una notificación explicativa con enlace directo a la consulta de su trámite.
  - Incorporación de opciones alternas requeridas:
    - *Postularse a la Convocatoria* (`postulacion.html`).
    - *Consultar estado de postulación* (`consulta.html`).
  - Nota institucional discreta con las credenciales sugeridas para prueba.
- **Nueva Vista de Consulta y Seguimiento (`consulta.html` - HU 2.2.2 / Issues #10 y #11)**:
  - Formulario de búsqueda por número de radicado institucional (`SIGME-2026-XXXX`) o correo del estudiante.
  - Indicador de línea de tiempo de 3 pasos: *1. Radicación y MVP* → *2. Evaluación Rúbrica* → *3. Dictamen Final*.
  - En caso de aprobación: Notificación de selección, puntaje y botón directo para iniciar sesión como estudiante vinculado.
  - En caso de rechazo: Despliegue de las observaciones y retroalimentación técnica del jurado evaluador para orientar al estudiante.

### F. Código Cromático Semántico para Estados Operativos (Verde / Rojo)
- **Motivo de la implementación**: Facilitar el reconocimiento visual inmediato para los clientes y compradores del campus universitario respecto a qué módulos están atendiendo presencialmente en tiempo real.
- **Estado ABIERTO (Verde Institucional `#1B8755`)**:
  - Borde superior distintivo de la tarjeta de emprendimiento: `border-top: 4px solid #1B8755`.
  - Pastilla de estado `.badge-status--open`: fondo suave `rgba(27, 135, 85, 0.12)`, borde `rgba(27, 135, 85, 0.35)`, tipografía `#136A42` y punto indicador `.status-dot--open` en verde.
  - Botón de filtro *Abiertos Ahora* con realce verde al seleccionarse.
- **Estado CERRADO (Rojo Institucional `#C53030`)**:
  - Borde superior distintivo de la tarjeta de emprendimiento: `border-top: 4px solid #C53030`.
  - Pastilla de estado `.badge-status--closed`: fondo suave `rgba(197, 48, 48, 0.10)`, borde `rgba(197, 48, 48, 0.30)`, tipografía `#A82020` y punto indicador `.status-dot--closed` en rojo.
  - Botón de filtro *Cerrados* con realce rojo al seleccionarse.

### G. Corrección en el Flujo de Autenticación y Persistencia de Sesión
- **Diagnóstico del problema**: En el paso de refactorización hacia `login.html`, no se había expuesto el método `SIGME_STATE.login(email, pass)` en `shared-state.js`, y faltaba persistir la sesión activa mediante `SIGME_STATE.setCurrentUser(user)` antes de la redirección. Esto causaba que `estudiante.html`, al validar la existencia de sesión, detectara `null` y expulsara inmediatamente la navegación.
- **Solución implementada**:
  1. Se implementó formalmente `SIGME_STATE.login(email, pass)` con búsqueda insensible a mayúsculas y validación de credenciales.
  2. En `login.html`, se asegura el guardado del usuario en `localStorage` con `SIGME_STATE.setCurrentUser(user)` antes de redirigir hacia `admin.html` o `estudiante.html`.
  3. Se añadieron eventos de auto-completado al hacer clic sobre las credenciales de prueba en la nota institucional inferior, facilitando la prueba inmediata sin errores tipográficos.

### H. Recepción y Actualización de Archivos del MVP en Estado "En Revisión" (HU 3.3)
- **Motivo de la implementación**: Cumplir con el requerimiento de negocio: *"Recibe los archivos del MVP (PDF e imágenes), permite actualizarlos mientras esté 'En revisión' y muestra el estado, las observaciones y, ya asignado, el módulo (HU 3.3)"*.
- **Pantalla de Seguimiento (`consulta.html`)**:
  - Se implementó la sección **"Archivos y Soportes del MVP (PDF e Imágenes)"**, que lista todos los soportes vinculados con etiquetas institucionales `[PDF]` / `[IMG]`.
  - **Edición condicional activa**: Mientras la postulación esté en estado **'En Revisión'** (ej. Carlos Ramírez `SIGME-2026-0187`), se habilita el selector de archivos para anexar o sustituir fichas técnicas o fotografías de validación, registrando la fecha/hora de la última actualización.
  - **Bloqueo tras dictamen**: Si el proyecto pasa a estado **'Aprobado'** o **'Rechazado'**, la sección de archivos pasa a modo de *Solo Lectura* y se informa que la edición ha sido cerrada por decisión del comité.
  - Muestra explícitamente el **estado oficial**, las **observaciones del comité** y, al estar aprobado, el **módulo físico asignado** (ej. `E-03`).
- **Pantalla de Rúbrica Administrativa (`admin.html`)**:
  - El modal de evaluación con rúbrica expone los archivos y soportes actualizados por el estudiante para que los jurados puedan revisarlos antes de dictaminar la propuesta.
- **Formulario de Postulación Inicial (`postulacion.html`)**:
  - Almacena el soporte adjunto en el arreglo `mvpFiles` e informa al postulante que podrá actualizarlo mientras permanezca en revisión.

---

## 5. Verificación de Cumplimiento Técnico y Estético

1. **Zero Emojis**: Auditado mediante script de expresiones regulares en todas las vistas HTML, scripts JS y hojas CSS (`[\u2600-\u27bf\U00010000-\U0010ffff]`), arrojando 0 coincidencias.
2. **Paleta Estricta**: Crema (`#F3EEE3`), Ink Black (`#111111`) y acento Burn Orange (`#D9541E`) aplicados rigurosamente en todos los nuevos componentes, modales y formularios.
3. **Sintaxis y Ejecución**: Validado mediante Node.js (`node -c` y `node --check`), garantizando 0 errores de sintaxis en todos los archivos.
4. **Trazabilidad HU**: El componente `traceability.js` y el documento `trazabilidad_backlog.md` contemplan todas las nuevas historias (HU 2.1.4, HU 2.2, HU 3.3.1).
