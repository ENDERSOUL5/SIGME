# Manual Técnico y de Operación de SIGME

**Sistema Integral de Gestión y Monitoreo de Emprendimientos (SIGME)**
Zona de Emprendimiento · Centro de Innovación y Emprendimiento (CIE) · Universidad del Magdalena

| Campo | Detalle |
|:--- |:--- |
| Documento | Manual técnico y de operación (despliegue y administración) |
| Versión | 1.0 |
| Fecha | 20/11/2026 |
| Equipo | Equipo SIGME |
| Producto documentado | Prototipo navegable de SIGME, rama `main` |
| Sitio publicado | https://funny-pegasus-abc158.netlify.app/ |

### Control de versiones

| Versión | Fecha | Autor(es) | Descripción del cambio |
|:--- |:--- |:--- |:--- |
| 1.0 | 20/11/2026 | Equipo SIGME | Versión inicial para la transición del producto |

---

## Contenido

1. [Introducción](#1-introducción)
2. [Descripción técnica general](#2-descripción-técnica-general)
3. [Estructura del repositorio](#3-estructura-del-repositorio)
4. [Requisitos del entorno](#4-requisitos-del-entorno)
5. [Instalación y ejecución local](#5-instalación-y-ejecución-local)
6. [Configuración](#6-configuración)
7. [Despliegue en Netlify](#7-despliegue-en-netlify)
8. [Componentes del prototipo](#8-componentes-del-prototipo)
9. [Modelo de datos](#9-modelo-de-datos)
10. [Seguridad y control de acceso](#10-seguridad-y-control-de-acceso)
11. [Operación y administración](#11-operación-y-administración)
12. [Mantenimiento y extensión](#12-mantenimiento-y-extensión)
13. [Solución de problemas](#13-solución-de-problemas)
14. [Problemas conocidos y limitaciones](#14-problemas-conocidos-y-limitaciones)
15. [Lineamientos de operación para el sistema objetivo](#15-lineamientos-de-operación-para-el-sistema-objetivo)
16. [Transición y soporte](#16-transición-y-soporte)

---

## 1. Introducción

### 1.1 Propósito

Este manual explica cómo instalar, ejecutar, desplegar, administrar y mantener SIGME. Atiende el requisito de entrega técnica del Acta de Inicio v2.0 (sección 12: manuales de despliegue y administración) y el elemento "Manual técnico y de operación" del acta de cierre.

### 1.2 Alcance

- Las secciones 2 a 14 describen el producto que existe en este repositorio: un **prototipo navegable** en HTML, CSS y JavaScript, sin servidor ni base de datos, publicado en Netlify.
- La sección 15 fija lineamientos de operación para el **sistema objetivo** descrito en la documentación de la arquitectura, que se construirá en la fase de desarrollo.

### 1.3 Público

| Público | Secciones de mayor interés |
|:--- |:--- |
| Desarrolladores que mantengan o extiendan el prototipo | 3, 5, 8, 9, 12 y 14 |
| Responsable del despliegue (DevOps) | 6, 7 y 15 |
| Quien opere las demostraciones (CIE, docente, equipo) | 11 y 13 |

### 1.4 Documentos relacionados

| Documento | Ubicación |
|:--- |:--- |
| Documentación de la arquitectura | `doc/documentacion_arquitectura.md` |
| Manual de usuario | `doc/manual_usuario.md` |
| Acta de Inicio de Proyecto v2.0 | `doc/Acta de Inicio de Proyecto - SIGME.pdf` |
| Matriz de trazabilidad | `trazabilidad_backlog.md` |
| Registro de correcciones del prototipo | `registro_de_correcciones.md` |
| Product Backlog | `backlog.pdf` y `.issues/open/` |

---

## 2. Descripción técnica general

| Aspecto | Detalle |
|:--- |:--- |
| Tipo de aplicación | Sitio web estático de varias páginas |
| Lenguajes | HTML5, CSS3 y JavaScript (ES6) sin frameworks |
| Dependencias externas | Ninguna: no hay `package.json`, compilación ni librerías de terceros |
| Persistencia | `localStorage` del navegador, gestionado por `shared-state.js` |
| Servidor | No tiene. Netlify sirve los archivos tal cual |
| Navegadores | Versiones recientes de Chrome, Edge, Firefox y Safari, en computador o celular |
| Datos | De ejemplo; no contiene datos reales de estudiantes |

Cada página carga tres recursos comunes: `styles.css`, `shared-state.js` (estado y datos) y `traceability.js` (panel de trazabilidad). Toda la lógica corre en el navegador, por lo que cada navegador tiene su propia copia independiente de los datos.

---

## 3. Estructura del repositorio

```text
SIGME/
├── index.html                  Catálogo público (página de inicio)
├── catalogo.html               Redirección a index.html
├── login.html                  Inicio de sesión por rol
├── postulacion.html            Formulario de postulación y radicado
├── consulta.html               Consulta del estado de una postulación
├── estudiante.html             Panel del emprendedor vinculado
├── admin.html                  Panel del CIE (cinco pestañas)
├── styles.css                  Estilos comunes y variables de diseño
├── shared-state.js             Datos de ejemplo y API SIGME_STATE
├── traceability.js             Panel "Trazabilidad HU" por pantalla
├── netlify.toml                Configuración de publicación en Netlify
├── vistas/                     Una maqueta HTML por issue de interfaz
│   └── prin.html               Índice de las maquetas
├── css/                        Hojas de estilo de las maquetas de vistas/
├── .issues/open/               Issues del backlog y comentarios de trazabilidad
├── doc/
│   ├── manual_usuario.md
│   ├── manual_tecnico_operacion.md
│   ├── documentacion_arquitectura.md
│   ├── diagramas/              Figuras de arquitectura (.png) y sus fuentes (.mmd)
│   └── Acta de Inicio de Proyecto - SIGME.pdf
├── backlog.pdf                 Product Backlog
├── trazabilidad_backlog.md     Matriz pantalla - historia de usuario
├── issues-interfaz.txt         Lista de issues de interfaz y su estado
├── registro_de_correcciones.md Registro de cambios de diseño y funcionalidad
└── contexto.md                 Reglas de trabajo con issues y trazabilidad
```

Las maquetas de `vistas/` y `css/` siguen el patrón `<número de issue>-<código EDT>-<descripción>.html`, por ejemplo `24-4-2-1-catalogo-publico-turnos.html`.

---

## 4. Requisitos del entorno

### 4.1 Para desarrollo

| Herramienta | Uso | Obligatoria |
|:--- |:--- |:--- |
| Git | Clonar el repositorio y versionar cambios | Sí |
| Navegador reciente con herramientas de desarrollo | Ejecutar, depurar e inspeccionar `localStorage` | Sí |
| Editor de código (por ejemplo, Visual Studio Code) | Editar HTML, CSS y JavaScript | Sí |
| Servidor estático local: Python 3, Node.js (`npx serve`) o la extensión Live Server de Visual Studio Code | Servir los archivos como en producción | Recomendada |
| Node.js | Regenerar las figuras de arquitectura con Mermaid CLI | Solo para diagramas |

### 4.2 Para operación

| Recurso | Uso |
|:--- |:--- |
| Cuenta de Netlify con acceso al sitio | Publicar, revisar despliegues y revertir versiones |
| Acceso de escritura al repositorio en GitHub | Integrar cambios en la rama `main` |
| Navegador reciente | Ejecutar demostraciones |

---

## 5. Instalación y ejecución local

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/ENDERSOUL5/SIGME.git
   cd SIGME
   ```

2. Levantar un servidor estático en la raíz del repositorio con cualquiera de estas opciones:

   ```bash
   # Python 3 (Linux o macOS)
   python3 -m http.server 8080

   # Python 3 (Windows)
   py -m http.server 8080

   # Node.js
   npx serve .
   ```

   En Visual Studio Code también sirve la extensión Live Server: clic derecho sobre `index.html` y "Open with Live Server".

3. Abrir en el navegador la dirección que indique el servidor (con Python, `http://localhost:8080/`).

Abrir los archivos con doble clic (`file://`) también funciona en la mayoría de navegadores, pero se recomienda el servidor local: así `localStorage` se comporta igual que en el sitio publicado.

**Primera ejecución.** Al cargar cualquier página, `SIGME_STATE.initIfEmpty()` crea las claves `sigme_*` con los datos de ejemplo. No hay que preparar nada más.

---

## 6. Configuración

### 6.1 Netlify (`netlify.toml`)

| Parámetro | Valor | Efecto |
|:--- |:--- |:--- |
| `[build] publish` | `"."` | Publica la raíz del repositorio; no hay comando de compilación |
| `X-Content-Type-Options` | `nosniff` | Impide que el navegador interprete archivos con un tipo distinto al declarado |
| `X-Frame-Options` | `SAMEORIGIN` | Impide que otros sitios incrusten SIGME en un marco |

### 6.2 Datos de ejemplo (`shared-state.js`)

No hay variables de entorno. Los parámetros de la demostración son constantes al inicio de `shared-state.js`:

| Constante | Contenido |
|:--- |:--- |
| `INITIAL_CONVOCATORIA_DATA` | Convocatoria vigente (estado, código, fechas, cupos, líneas, requisitos) e historial de cohortes |
| `INITIAL_USERS` | Usuarios de prueba (un administrador y tres estudiantes) |
| `INITIAL_MODULOS` | Módulos físicos E-01 a E-10 con su estado |
| `INITIAL_VENTURES` | Emprendimientos que aparecen en el catálogo |
| `INITIAL_PROYECTOS` | Postulaciones con radicado, estado, puntaje y archivos del MVP |
| `INITIAL_CIERRES` | Festivos y cierres programados |
| `INITIAL_NOTIFICATIONS` | Avisos del CIE en la bandeja del estudiante |

`initIfEmpty()` solo escribe estas constantes cuando la clave no existe. Por eso, después de cambiar un dato inicial hay que restablecer los datos del navegador (sección 11.3) para verlo.

### 6.3 Identidad visual (`styles.css`)

Las variables de `:root` definen la paleta: crema `#F3EEE3` (fondos), negro `#111111` (texto y botones) y naranja `#D9541E` (acentos y foco). Los estados del catálogo usan verde `#1B8755` (abierto) y rojo `#C53030` (cerrado). Cualquier cambio de color debe hacerse en las variables, no en cada página.

---

## 7. Despliegue en Netlify

### 7.1 Despliegue continuo (recomendado)

Si el sitio de Netlify está vinculado al repositorio de GitHub, cada `push` a la rama `main` publica una nueva versión de forma automática. Para comprobar o crear la vinculación: Netlify, sitio de SIGME, *Site configuration*, *Build & deploy*, *Continuous deployment*. La configuración correcta es:

| Opción | Valor |
|:--- |:--- |
| Repositorio | `ENDERSOUL5/SIGME` |
| Rama de producción | `main` |
| Comando de compilación | vacío |
| Directorio de publicación | `.` (lo toma de `netlify.toml`) |

### 7.2 Despliegue manual

Con Netlify CLI, desde la raíz del repositorio:

```bash
npm install -g netlify-cli
netlify login
netlify link          # una sola vez: elegir el sitio existente de SIGME
netlify deploy        # publica una versión de prueba y devuelve su URL
netlify deploy --prod # publica en producción
```

Otra opción, sin CLI, es arrastrar la carpeta del repositorio a la sección *Deploys* del sitio en el panel de Netlify.

### 7.3 Verificación después de publicar

Repetir esta lista en una ventana de incógnito tras cada despliegue:

| # | Prueba | Resultado esperado |
|:--- |:--- |:--- |
| 1 | Abrir la URL del sitio | Carga el catálogo con cuatro emprendimientos, dos de ellos abiertos y primeros en la lista |
| 2 | Pulsar "Trazabilidad HU" | Se abre el panel con las historias de la pantalla |
| 3 | Iniciar sesión con `admin@universidad.edu.co` / `admin` | Abre `admin.html` con sus cinco pestañas |
| 4 | Iniciar sesión con `maria.lopez@universidad.edu.co` / `123` | Abre `estudiante.html` con el módulo E-03 |
| 5 | Abrir turno en el panel de la estudiante y mirar el catálogo en otra pestaña | EcoSnacks pasa a Abierto y sube al primer lugar |
| 6 | Consultar `SIGME-2026-0091` en `consulta.html` | Muestra Rechazado con las observaciones del comité |
| 7 | Abrir `postulacion.html` | Muestra el formulario si la convocatoria está abierta |
| 8 | Abrir `estudiante.html` sin sesión | Redirige a `login.html` |
| 9 | Revisar la consola del navegador en cada página | Sin errores |

### 7.4 Reversión

En Netlify, *Deploys*: elegir el último despliegue correcto y pulsar *Publish deploy*. La reversión es inmediata y no altera el repositorio; después se corrige el error en GitHub y se vuelve a publicar.

---

## 8. Componentes del prototipo

### 8.1 Páginas

| Página | Rol que la usa | Historias de usuario | Funciones principales |
|:--- |:--- |:--- |:--- |
| `index.html` | Todos, sin sesión | HU 4.3, HU 1.3 | `renderCatalog`, `setCatalogFilter`, `handleSearch`, `checkConvocatoriaBanner` |
| `login.html` | Estudiante y administrador | HU 1.2 | `switchLoginRole`, `fillCredentials`, `handleLogin` |
| `postulacion.html` | Estudiante sin cuenta | RF-03, HU 1.3 | `checkConvocatoria`, `fileSelected`, `handlePostulacion` |
| `consulta.html` | Postulante, sin sesión | HU 3.3, HU 2.1 | `executeSearch`, `renderProjectResult`, `handleUploadMvpFile`, `handleDeleteMvpFile` |
| `estudiante.html` | Estudiante aprobado | HU 4.1, HU 4.2, HU 2.2 | `initStudent`, `toggleTurn`, `setTurnState`, `handleSaveContactProfile`, `handleSaveNotifPreferences` |
| `admin.html` | Administrador del CIE | HU 2.1, 2.2, 2.3, 3.1, 3.2, 5.1, 5.2, 5.3 | `renderProjectsTable`, `submitDecision`, `confirmAssign`, `releaseModulo`, `saveConvocatoriaParams`, `handleCrearCierre`, `executeReset` |

La relación completa entre componentes de pantalla e historias está en `trazabilidad_backlog.md` y en el panel "Trazabilidad HU" de cada página.

**Parámetro de URL.** `consulta.html?query=<radicado o correo>` ejecuta la consulta al cargar. Lo usan `postulacion.html` (tras radicar) y `login.html`.

### 8.2 API de estado (`SIGME_STATE`)

`shared-state.js` crea el objeto global `window.SIGME_STATE`. Es la única puerta de acceso a los datos; las páginas no deberían escribir en `localStorage` directamente.

| Grupo | Función | Qué hace |
|:--- |:--- |:--- |
| Convocatoria | `getConvocatoria()` / `setConvocatoria(isOpen)` | Lee o cambia si la convocatoria está abierta |
| | `getConvocatoriaData()` / `saveConvocatoriaData(data)` | Lee o guarda todos los parámetros de la convocatoria |
| Usuarios | `getUsers()` / `saveUsers(users)` | Lee o guarda la lista de usuarios |
| | `login(email, pass)` | Devuelve el usuario si el correo (sin distinguir mayúsculas) y la clave coinciden; si no, `null` |
| | `getCurrentUser()` / `setCurrentUser(user)` | Lee o guarda la sesión activa |
| | `logout()` | Borra la sesión y redirige a `index.html` |
| | `updateUserProfile(email, datos)` | Actualiza teléfono, WhatsApp, Instagram y descripción, y los replica en el catálogo |
| | `updateUserNotifPreferences(email, prefs)` | Guarda las preferencias de aviso del estudiante |
| Módulos | `getModulos()` / `saveModulos(modulos)` | Lee o guarda los módulos físicos |
| Catálogo | `getVentures()` / `saveVentures(lista)` | Lee o guarda los emprendimientos del catálogo |
| Proyectos | `getProyectos()` / `saveProyectos(lista)` | Lee o guarda las postulaciones |
| | `addMvpFile(radicado, nombre)` / `deleteMvpFile(radicado, índice)` / `updateMvpFiles(radicado, lista)` | Gestionan los archivos del MVP; responden `{ success, message }` y solo actúan si la postulación está En Revisión |
| Cierres | `getCierres()` / `saveCierres(lista)` | Lee o guarda festivos y cierres |
| | `addCierre(cierre)` | Registra el cierre y genera el aviso correspondiente |
| | `deleteCierre(id)` | Elimina un cierre |
| Avisos | `getNotifications()` / `addNotification(aviso)` | Lee o agrega avisos del CIE |
| Inicio y restablecimiento | `initIfEmpty()` | Crea las claves faltantes con los datos de ejemplo y completa campos de versiones anteriores |
| | `resetAll(keepAuth)` | Restablece todas las claves; con `true` conserva la sesión activa |
| | `resetProyectosOnly()` | Restablece postulaciones, usuarios, módulos y catálogo; conserva convocatoria, cierres y avisos |

### 8.3 Panel de trazabilidad (`traceability.js`)

Agrega a cada página un botón "Trazabilidad HU" que abre un panel con las historias de usuario, la tarea de la EDT, el criterio y el componente de pantalla que la cumple. El contenido está en la constante `TRACE_DATA`, indexada por nombre de archivo (`'index.html'`, `'login.html'`, etc.). Si una página no tiene entrada, el panel muestra la de `index.html`.

### 8.4 Sincronización entre pestañas

`index.html` escucha el evento `storage` del navegador y vuelve a dibujar el catálogo y el banner de convocatoria cuando otra pestaña cambia los datos. Por eso, al abrir un turno en `estudiante.html`, el catálogo abierto en otra pestaña se actualiza sin recargar. La sincronización solo funciona entre pestañas del mismo navegador.

---

## 9. Modelo de datos

### 9.1 Claves de `localStorage`

| Clave | Tipo | Contenido |
|:--- |:--- |:--- |
| `sigme_convocatoria_data` | Objeto | Parámetros de la convocatoria vigente |
| `sigme_convocatoria` | Booleano | Copia de `isOpen`, por compatibilidad |
| `sigme_users` | Lista | Usuarios (administrador y estudiantes) |
| `sigme_current_user` | Objeto | Copia del usuario con sesión activa; no existe si nadie ha iniciado sesión |
| `sigme_proyectos` | Lista | Postulaciones |
| `sigme_modulos` | Lista | Módulos físicos |
| `sigme_ventures` | Lista | Emprendimientos del catálogo |
| `sigme_cierres` | Lista | Festivos y cierres |
| `sigme_notifications` | Lista | Avisos del CIE |

### 9.2 Campos por entidad

| Entidad | Campos | Valores permitidos o formato |
|:--- |:--- |:--- |
| Convocatoria | `isOpen`, `code`, `title`, `semester`, `startDate`, `endDate`, `evalDate`, `availableSlots`, `categories[]`, `description`, `requirements[]`, `guidelinesDoc`, `cohortHistory[]` | Fechas `AAAA-MM-DD` |
| Usuario | `email`, `password`, `role`, `name`, `studentCode`, `faculty`, `ventureName`, `ventureCat`, `moduleAssigned`, `status`, `phone`, `whatsapp`, `ig`, `hoursWorked`, `description`, `notifEmail`, `notifWhatsapp`, `notifMaintenance` | `role`: `admin` o `student`; `status`: `Aprobado`, `En Revisión` o `Rechazado`. El administrador usa además `title` |
| Proyecto | `radicado`, `name`, `student`, `email`, `faculty`, `category`, `date`, `status`, `score`, `comments`, `module`, `mvpFiles[]`, `lastUpdatedFiles` | `radicado`: `SIGME-2026-NNNN`; `date`: `DD/MM/AAAA` |
| Módulo | `id`, `status`, `project`, `student`, `faculty` | `id`: `E-01` a `E-10`; `status`: `disponible`, `ocupado` o `mantenimiento` |
| Emprendimiento | `id`, `name`, `category`, `student`, `module`, `isOpen`, `monogram`, `phone`, `ig`, `desc` | `module`: texto `Módulo E-NN`; `monogram`: dos letras |
| Cierre | `id`, `title`, `type`, `typeLabel`, `dateStart`, `dateEnd`, `reason`, `scope`, `scopeLabel`, `notifiedAt`, `notifiedChannels[]` | `type`: `festivo`, `mantenimiento`, `receso`, `evento` o `emergencia`; `scope`: `all`, `impares` o `pares` |
| Aviso | `id`, `date`, `title`, `message`, `type`, `channels[]` | `type` igual al del cierre que lo generó |

### 9.3 Relaciones

Las relaciones no se validan; se resuelven por coincidencia de texto:

- Usuario y proyecto: por `email`.
- Proyecto, emprendimiento y módulo: por nombre del proyecto (`name`, `ventureName`, `project`).
- Proyecto y módulo: además, `proyecto.module` guarda el `id` del módulo.

Cambiar el nombre de un emprendimiento en un solo lugar rompe la relación. El diagrama del modelo está en la documentación de la arquitectura, sección 8.4.

---

## 10. Seguridad y control de acceso

| Control | Implementación en el prototipo |
|:--- |:--- |
| Autenticación | `SIGME_STATE.login` compara correo y clave contra `sigme_users` en el navegador |
| Regla de acceso del estudiante | Solo entra al panel si su proyecto está `Aprobado` |
| Protección de páginas | `estudiante.html` redirige a `login.html` si no hay sesión de estudiante. `admin.html` no tiene esta protección (sección 14) |
| Transporte | HTTPS provisto por Netlify |
| Encabezados | `nosniff` y `SAMEORIGIN` (sección 6.1) |
| Datos personales | Solo datos ficticios; nada sale del navegador del usuario |

El prototipo **no es seguro por diseño**: las claves están en texto plano dentro de `shared-state.js` y cualquiera puede modificar `localStorage` desde las herramientas del navegador. Es aceptable porque solo contiene datos de ejemplo, pero ninguna de estas prácticas debe pasar al sistema objetivo, que exige JWT, validación en el servidor, contraseñas protegidas y defensa contra inyección SQL, XSS y CSRF (RNF-02).

---

## 11. Operación y administración

### 11.1 Usuarios de prueba

| Rol | Correo | Clave | Resultado al entrar |
|:--- |:--- |:--- |:--- |
| Administrador del CIE | `admin@universidad.edu.co` | `admin` | Panel del CIE |
| Estudiante aprobado | `maria.lopez@universidad.edu.co` | `123` | Panel del emprendedor, módulo E-03 |
| Estudiante aprobado | `laura.martinez@universidad.edu.co` | `123` | Panel del emprendedor, módulo E-05 |
| Estudiante en revisión | `carlos.ramirez@universidad.edu.co` | `123` | No entra al panel; su proyecto no está aprobado |

| Radicado | Estado |
|:--- |:--- |
| `SIGME-2026-0187` | En Revisión (permite editar archivos del MVP) |
| `SIGME-2026-0203` | En Revisión |
| `SIGME-2026-0142` | Aprobado, módulo E-03 |
| `SIGME-2026-0091` | Rechazado, con observaciones |

Cada postulación nueva crea un usuario estudiante con la clave `123`; podrá iniciar sesión cuando el administrador apruebe su proyecto.

### 11.2 Preparar una demostración

1. Abrir el sitio en una ventana de incógnito o restablecer los datos (sección 11.3).
2. Comprobar en el panel del CIE, pestaña Apertura de Convocatorias, que la convocatoria esté abierta si se va a mostrar la postulación.
3. Tener dos pestañas: el catálogo (`index.html`) y el panel de la estudiante, para mostrar el cambio de turno en vivo.
4. Recorrer el flujo completo en este orden: catálogo, postulación, consulta del radicado, evaluación en el panel del CIE, asignación de módulo, inicio de sesión del estudiante y apertura de turno.

### 11.3 Restablecer los datos

| Opción | Dónde | Efecto |
|:--- |:--- |:--- |
| Restablecer solo postulaciones | Panel del CIE, botón "Restablecer Registros" o "Restablecer Datos Demo", opción "Reiniciar Solo Postulaciones" | Vuelve postulaciones, usuarios, módulos y catálogo a su estado inicial; conserva convocatoria, cierres y avisos |
| Restablecer todo el sistema | Panel del CIE, mismo diálogo, opción "Restablecer Todo el Sistema" | Vuelve todas las claves a su estado inicial y conserva la sesión del administrador |
| Restablecer desde el inicio de sesión | `login.html`, enlace "Restablecer registros demo a valores iniciales" | Vuelve todas las claves a su estado inicial y cierra la sesión |
| Borrado manual | Herramientas del navegador, *Application* (o *Almacenamiento*), *Local Storage*, borrar las claves `sigme_*` y recargar | Igual al anterior |

### 11.4 Tareas administrativas frecuentes

| Tarea | Dónde | Notas |
|:--- |:--- |:--- |
| Abrir o cerrar la convocatoria | Panel del CIE, pestaña Apertura de Convocatorias | El banner del catálogo y el formulario de postulación cambian de inmediato |
| Evaluar una postulación | Pestaña Postulaciones, botón Evaluar | La justificación es obligatoria. Al aprobar, el estudiante queda habilitado para iniciar sesión |
| Asignar o liberar un módulo | Pestaña Infraestructura y Módulos | Asignar crea la tarjeta del emprendimiento en el catálogo si no existía |
| Registrar un festivo o cierre | Pestaña Disponibilidad y Cierres | Genera un aviso en la bandeja de los estudiantes |
| Generar el reporte | Pestaña Métricas y Reportes, "Exportar Reporte a PDF" | Usa la impresión del navegador; elegir "Guardar como PDF" |

El paso a paso para usuarios finales está en `doc/manual_usuario.md`.

### 11.5 Respaldo y restauración de datos de una demostración

Los datos de una demostración preparada se pueden guardar y recuperar desde la consola del navegador (F12, pestaña *Console*), estando en cualquier página de SIGME del mismo sitio.

**Respaldo** (descarga `sigme_respaldo.json`):

```js
const datos = {};
Object.keys(localStorage).filter(k => k.startsWith('sigme_')).forEach(k => { datos[k] = localStorage.getItem(k); });
const a = document.createElement('a');
a.href = URL.createObjectURL(new Blob([JSON.stringify(datos, null, 2)], { type: 'application/json' }));
a.download = 'sigme_respaldo.json';
a.click();
```

**Restauración** (pegar el contenido del archivo donde se indica):

```js
const datos = /* pegar aquí el contenido de sigme_respaldo.json */;
Object.entries(datos).forEach(([k, v]) => localStorage.setItem(k, v));
location.reload();
```

El respaldo es por sitio: uno tomado en `localhost` se restaura en `localhost`, y uno tomado en Netlify, en Netlify.

---

## 12. Mantenimiento y extensión

### 12.1 Flujo de trabajo con Git

Durante el semestre la falta de reglas de ramas causó conflictos de integración de última hora. Para los cambios futuros se establece este flujo:

| Regla | Detalle |
|:--- |:--- |
| Rama estable | `main` siempre publicable; no se trabaja directamente sobre ella |
| Ramas de trabajo | `feature/<issue>-<descripcion>`, `fix/<descripcion>` o `docs/<descripcion>`, creadas desde `main` actualizada |
| Mensajes de commit | En español, en imperativo y con el número de issue cuando exista: `Agrega filtro por fecha (#15)` |
| Integración | Pull request hacia `main` revisado por otro integrante; se integra solo si la verificación de la sección 7.3 pasa en local |
| Actualización | `git pull --rebase origin main` antes de abrir el pull request, para resolver conflictos en la propia rama |

### 12.2 Agregar o modificar una pantalla

1. Crear el archivo HTML en la raíz con la misma estructura de las páginas existentes: `styles.css` en el `<head>`, y al final del `<body>`, en este orden, `shared-state.js`, `traceability.js` y el script propio de la página.
2. Leer y escribir datos solo con `SIGME_STATE` (sección 8.2).
3. Agregar la entrada de la página en `TRACE_DATA` de `traceability.js` con sus historias de usuario.
4. Actualizar `trazabilidad_backlog.md` y, si la pantalla atiende un issue, crear su comentario de trazabilidad en `.issues/open/<issue>.comment.md` según `contexto.md`.
5. Ejecutar la verificación de la sección 7.3.

### 12.3 Agregar un campo a una entidad

1. Agregar el campo en la constante `INITIAL_*` correspondiente.
2. En `initIfEmpty()`, completar el campo en los registros que ya existen en `localStorage`, siguiendo el patrón usado para `studentCode` o `mvpFiles`. Así no se pierden los datos de quien ya usó el prototipo.
3. Documentar el campo en la sección 9.2 de este manual.

### 12.4 Convenciones

- No usar emojis en interfaz, código ni datos; el registro de correcciones lo establece como criterio de diseño.
- Usar las variables de color de `styles.css`; no escribir colores sueltos en cada página.
- Nombrar las maquetas de `vistas/` con el patrón de la sección 3 y registrar su estado en `issues-interfaz.txt`.
- Mantener los textos de la interfaz en español.

### 12.5 Diagramas de arquitectura

Las fuentes de las figuras están en `doc/diagramas/*.mmd`. El procedimiento para regenerarlas está en la documentación de la arquitectura, sección 12.

---

## 13. Solución de problemas

| Síntoma | Causa probable | Solución |
|:--- |:--- |:--- |
| Un cambio en `shared-state.js` no se ve | `initIfEmpty()` no sobrescribe datos que ya existen | Restablecer los datos (sección 11.3) |
| Al entrar a `estudiante.html` vuelve al inicio de sesión | No hay sesión de estudiante | Iniciar sesión con un estudiante aprobado |
| Un estudiante no puede entrar a su panel | Su proyecto no está aprobado | Aprobarlo en el panel del CIE o consultar su radicado |
| El catálogo no cambia al abrir turno | El catálogo está en otro navegador o dispositivo | Abrir el catálogo en otra pestaña del mismo navegador |
| El formulario de postulación aparece bloqueado | La convocatoria está cerrada | Abrirla en el panel del CIE |
| Un radicado no aparece en la consulta | Error de escritura o datos restablecidos | Verificar el formato `SIGME-2026-NNNN` o consultar por correo |
| El reporte PDF no se descarga | Usa el diálogo de impresión del navegador | Elegir "Guardar como PDF" como destino |
| Los datos desaparecieron | Se borraron los datos del sitio o se usa una ventana de incógnito | Restaurar un respaldo (sección 11.5) o restablecer los datos de ejemplo |
| El panel de trazabilidad muestra historias de otra página | La página no tiene entrada en `TRACE_DATA` | Agregarla (sección 12.2) |
| El sitio publicado no muestra el último cambio | El despliegue no se ejecutó o la caché del navegador | Revisar *Deploys* en Netlify y recargar sin caché (Ctrl + F5) |

---

## 14. Problemas conocidos y limitaciones

Problemas verificados en la versión de este manual. Al corregir uno, se retira de la tabla y se registra en `registro_de_correcciones.md`.

| ID | Problema | Efecto | Corrección propuesta |
|:--- |:--- |:--- |:--- |
| PC-01 | En `login.html`, si el estudiante está En Revisión, `handleLogin` llama a `SIGME_STATE.logout()`, que redirige a `index.html` | El aviso de estado en revisión no llega a verse | Reemplazar esa llamada por `localStorage.removeItem('sigme_current_user')` |
| PC-02 | `admin.html` no verifica la sesión | El panel del CIE abre sin iniciar sesión | Al cargar, redirigir a `login.html` si `getCurrentUser()` no tiene `role === 'admin'` |
| PC-03 | `confirmAssign` no actualiza `moduleAssigned` del usuario, y `estudiante.html` muestra `E-03` por defecto | Un estudiante con módulo recién asignado ve E-03 en su panel | Actualizar `moduleAssigned` en `sigme_users` al asignar y al liberar, y quitar el valor por defecto |
| PC-04 | `updateUserNotifPreferences` modifica el usuario guardado pero no la sesión activa | Las preferencias de aviso vuelven a su valor anterior al recargar el panel | Asignar los tres valores a `current` antes de `setCurrentUser(current)` |
| PC-05 | Las horas y turnos del panel del estudiante y las métricas del CIE son valores fijos; cerrar turno no suma tiempo | Las horas no se acumulan | Sumar los minutos del turno a `hoursWorked` y calcular los indicadores desde los datos |
| PC-06 | El radicado se genera al azar entre `SIGME-2026-0250` y `SIGME-2026-0299` | Dos postulaciones pueden recibir el mismo radicado | Generar el siguiente número a partir del mayor existente |
| PC-07 | Las tarjetas y tablas se construyen con `innerHTML` sin escapar los textos | Un texto con etiquetas HTML se interpreta como código en el mismo navegador | En el sistema objetivo, escapar toda salida (RNF-02); en el prototipo, usar `textContent` en los campos editables |

**Limitaciones propias del prototipo** (no son errores):

- Los datos son por navegador: no se comparten entre usuarios ni dispositivos.
- No hay correo real, carga real de archivos, exportación a Excel ni conexión con la Universidad.
- El rol de directivo (A-03) no tiene acceso propio.
- Las diferencias con la arquitectura objetivo están en la documentación de la arquitectura, sección 9.

---

## 15. Lineamientos de operación para el sistema objetivo

Estos lineamientos aplican cuando se construya el sistema descrito en la documentación de la arquitectura. Se basan en el Acta v2.0 y deben confirmarse al elegir el alojamiento y el framework del servidor.

### 15.1 Entornos

| Entorno | Uso | Datos | Publicación |
|:--- |:--- |:--- |:--- |
| Desarrollo | Trabajo diario de cada integrante | Ficticios | Local |
| Pruebas (staging) | Pruebas funcionales, de carga y UAT con el CIE (30/11/2026 a 11/12/2026) | Ficticios o anonimizados | Automática al integrar en `main` |
| Producción | Operación con usuarios reales | Reales | Manual y aprobada, con subdominio institucional y HTTPS (INT-05) |

### 15.2 Configuración y secretos

Toda credencial se configura como variable de entorno del alojamiento, nunca en el repositorio:

| Variable (nombre sugerido) | Uso |
|:--- |:--- |
| `DATABASE_URL` | Conexión a PostgreSQL |
| `REDIS_URL` | Cola de correos |
| `JWT_SECRET` y `JWT_EXPIRES_IN` | Firma y duración de las sesiones |
| `UNIVERSIDAD_API_URL` y `UNIVERSIDAD_API_KEY` | Conexión de solo lectura con la base de estudiantes (INT-01) |
| `MAIL_API_KEY` y `MAIL_FROM` | Proveedor de correo (INT-02) |
| `STORAGE_BUCKET` y credenciales del proveedor | Almacenamiento de archivos (INT-03) |

Los secretos se rotan al cierre del proyecto y cada vez que un integrante deja de tener acceso.

### 15.3 Integración y despliegue continuos

GitHub Actions ejecuta pruebas en cada pull request y despliega en pruebas al integrar en `main`. El paso a producción requiere la aprobación del Product Owner y la verificación del certificado SSL.

### 15.4 Monitoreo

| Indicador | Meta (RNF-01) | Acción si se incumple |
|:--- |:--- |:--- |
| Tiempo de carga de página | 3 s o menos | Revisar consultas e índices (RS-02) |
| Tiempo de respuesta de operaciones | 500 ms o menos | Revisar consultas e índices; escalar el servidor |
| Entrega de correos | Menos de 1 minuto | Revisar la cola de Redis y los reintentos del worker (RS-04) |
| Disponibilidad del API de la Universidad | Respuesta correcta | Activar el Mock Server mientras TI resuelve (RS-01) |

### 15.5 Respaldos

- Respaldo diario automático de PostgreSQL, con retención mínima de 7 días.
- Prueba de restauración al menos una vez antes de la salida a producción.
- Los archivos de S3 o Cloudinary se respaldan con el versionado del propio servicio.

### 15.6 Atención de incidentes

1. Registrar el incidente con fecha, síntoma y usuarios afectados.
2. Si el último despliegue lo causó, revertir de inmediato a la versión anterior.
3. Corregir en una rama `fix/`, probar en pruebas y publicar.
4. Registrar la causa y la corrección en el registro de cambios del proyecto.

### 15.7 Liberación de recursos al cierre

Al cerrar el proyecto se dan de baja los entornos de nube que no pasen a operación, se cancelan las suscripciones (correo, almacenamiento, alojamiento), se revocan los accesos de los integrantes al repositorio y a los servicios, y se rotan los secretos. Cada acción se registra en la sección de liberación de recursos del acta de cierre.

---

## 16. Transición y soporte

| Elemento | Detalle |
|:--- |:--- |
| Código fuente | Repositorio `ENDERSOUL5/SIGME`, rama `main` |
| Sitio publicado | https://funny-pegasus-abc158.netlify.app/ |
| Credenciales | Solo de ejemplo, en la sección 11.1; el prototipo no usa servicios con credenciales |
| Documentación | Este manual, la documentación de la arquitectura y el manual de usuario, en `doc/` |
| Área responsable de la operación | La que se defina en el acta de cierre (sección de transición del producto) |

**Equipo del proyecto (Acta v2.0, sección 11):**

| Integrante | Rol | Consultar sobre |
|:--- |:--- |:--- |
| Jean Carlos Delgado | Gerente del Proyecto / Scrum Master y especialista BI | Gestión, alcance y métricas (M-04) |
| Adrián Sebastián Botía | Product Owner y Líder Frontend | Prioridades del backlog, interfaz y M-01 |
| Rafael José Camargo | Líder Backend | Reglas de negocio, datos y M-02 |
| José Carlos Aguilar de la Hoz | Arquitecto Cloud / DevOps y desarrollador Fullstack | Repositorio, despliegue en Netlify y M-03 |

Patrocinador: Dr. Carlos Eduardo Gómez Mantilla, Director del Centro de Innovación y Emprendimiento (CIE).
