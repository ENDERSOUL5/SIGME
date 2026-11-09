// SIGME - Componente de Trazabilidad Interactiva con el Product Backlog
(function () {
  const TRACE_DATA = {
    'index.html': {
      pageName: 'Catálogo Público Comercial (Vista Principal)',
      stories: [
        {
          id: 'HU 4.1',
          wbs: 'WBS 4.2.1 (Issue #24)',
          title: 'Vitrina de Emprendimientos del Campus',
          desc: 'Exhibición pública de las marcas y módulos universitarios para la comunidad compradora.',
          component: 'Cuadrícula dinámica #catalogGrid con monogramas de marca.'
        },
        {
          id: 'HU 4.2.2',
          wbs: 'WBS 4.2.2',
          title: 'Priorización en Vivo de Módulos Abiertos',
          desc: 'Los emprendimientos que se encuentren atendiendo en su turno presencial aparecen de primeros en la lista.',
          component: 'Algoritmo de ordenamiento automático e indicador de estado abierto.'
        },
        {
          id: 'HU 4.3.1',
          wbs: 'WBS 3.1.1.1 (Issue #13)',
          title: 'Búsqueda en Tiempo Real y Filtros de Estado',
          desc: 'Filtrado predictivo por nombre, producto o módulo, y pestañas de selección rápida.',
          component: 'Barra de filtros #fOpen/#fClosed y campo #catalogSearch.'
        },
        {
          id: 'HU 4.3.2',
          wbs: 'WBS 4.3.2',
          title: 'Enlaces Directos de Pedidos (WhatsApp / IG)',
          desc: 'Canales de comunicación inmediata entre el cliente y el estudiante emprendedor.',
          component: 'Botones .btn-contact con enlaces dinámicos personalizados.'
        },
        {
          id: 'HU 1.3',
          wbs: 'WBS 3.3.1 (Issue #3)',
          title: 'Vinculación de Convocatoria Activa',
          desc: 'Banner dinámico que informa sobre la apertura de nuevas convocatorias y redirige hacia la postulación.',
          component: 'Sección #convBanner y botón reactivo #convActionBtn.'
        }
      ]
    },
    'login.html': {
      pageName: 'Ventana de Login Institucional',
      stories: [
        {
          id: 'HU 1.1',
          wbs: 'WBS 2.1.1 (Issue #1)',
          title: 'Inicio de Sesión de Estudiantes Vinculados',
          desc: 'Permite la autenticación con correo universitario. Valida que solo proyectos formalmente aprobados ingresen al panel de gestión; de lo contrario informa el estado pendiente.',
          component: 'Pestaña "Estudiante Vinculado", validación en handleLogin() y alerta condicional #reviewNotice.'
        },
        {
          id: 'HU 1.2',
          wbs: 'WBS 2.1.1 (Issue #1)',
          title: 'Inicio de Sesión de Administradores CIE',
          desc: 'Acceso seguro para el equipo de coordinación hacia el panel de administración directiva.',
          component: 'Pestaña "Administrador CIE" y redirección al panel directivo.'
        },
        {
          id: 'HU 2.2.2',
          wbs: 'WBS 2.2.2.2 (Issue #10)',
          title: 'Opciones Alternas: Postularse y Consultar Estado',
          desc: 'Permite a los visitantes sin usuario activo postular su propuesta o consultar el radicado de su postulación.',
          component: 'Enlaces en contenedor .login-alternatives.'
        }
      ]
    },
    'consulta.html': {
      pageName: 'Consulta y Seguimiento de Postulaciones',
      stories: [
        {
          id: 'HU 2.2.2',
          wbs: 'WBS 2.2.2.2 (Issue #10)',
          title: 'Seguimiento de Postulación con Indicador de Línea de Tiempo / Pasos',
          desc: 'Consulta en vivo del estado del trámite ingresando radicado o correo: Radicado -> Evaluación Rúbrica -> Dictamen Final.',
          component: 'Contenedor .timeline-track y nodos de paso .timeline-node.'
        },
        {
          id: 'HU 2.2.2',
          wbs: 'WBS 2.2.2.3 (Issue #11)',
          title: 'Visualización de Observaciones y Retroalimentación Institucional',
          desc: 'Presentación formal de las observaciones dictaminadas por el comité en caso de rechazo o ajustes requeridos.',
          component: 'Contenedor .outcome-box con observaciones oficiales del jurado.'
        },
        {
          id: 'HU 1.1',
          wbs: 'WBS 2.1.1',
          title: 'Habilitación hacia Inicio de Sesión',
          desc: 'Al consultar un proyecto con estado Aprobado, provee el acceso directo al portal de estudiantes.',
          component: 'Botón directo Iniciar Sesión en la tarjeta de dictamen aprobado.'
        },
        {
          id: 'HU 3.3',
          wbs: 'WBS 2.2.1.2 / Issue #6',
          title: 'Gestión y Actualización de Archivos del MVP en "En Revisión"',
          desc: 'Recibe archivos del MVP (PDF e imágenes), permite actualizarlos mientras esté "En Revisión", y despliega el estado, las observaciones y el módulo asignado.',
          component: 'Sección Archivos del MVP, input #mvpNewFileInput y lista de soportes actualizables.'
        }
      ]
    },
    'postulacion.html': {
      pageName: 'Postulación de Emprendimiento y MVP',
      stories: [
        {
          id: 'HU 2.1.1',
          wbs: 'WBS 2.2.1.1 (Issue #5)',
          title: 'Formulario de Datos del Estudiante y Propuesta',
          desc: 'Captura estructurada de nombres, correo, facultad, nombre comercial, categoría y descripción de validación de MVP.',
          component: 'Secciones 1 y 2 del formulario de postulación.'
        },
        {
          id: 'HU 2.1.2',
          wbs: 'WBS 2.2.1.2 (Issue #6)',
          title: 'Carga de Soportes Técnicos con Validación',
          desc: 'Zona de arrastre para documentos y fichas de prototipo (PDF, JPG, PNG) con límite de peso de 5 MB.',
          component: 'Área de carga dropzone-clean y selector de archivos #fileMock.'
        },
        {
          id: 'HU 2.1.3',
          wbs: 'WBS 2.2.1.4 (Issue #8)',
          title: 'Confirmación y Generación de Radicado',
          desc: 'Generación automática de radicado institucional (SIGME-2026-XXXX) y confirmación en estado En Revisión.',
          component: 'Pantalla de confirmación #boxSuccess y almacenamiento en historial.'
        },
        {
          id: 'HU 1.3',
          wbs: 'WBS 3.3.1 (Issue #3)',
          title: 'Bloqueo Institucional por Convocatoria Cerrada',
          desc: 'Verifica el estado del calendario; si las convocatorias están cerradas por el admin, bloquea el formulario.',
          component: 'Aviso institucional #boxClosed y función checkConvocatoria().'
        }
      ]
    },
    'admin.html': {
      pageName: 'Panel Directivo del CIE',
      stories: [
        {
          id: 'HU 2.1 / HU 3.1.2',
          wbs: 'WBS 3.1.2 (Issue #22)',
          title: 'Evaluación por Rúbrica Institucional',
          desc: 'Calificación técnica ponderada: Propuesta (30%), MVP (40%) y Viabilidad (30%), con justificación escrita obligatoria. Al aprobar, vincula al estudiante para login.',
          component: 'Modal de rúbrica #evalModal y función submitDecision().'
        },
        {
          id: 'HU 2.2',
          wbs: 'WBS 3.1.1 (Issues #14, #15, #17)',
          title: 'Consulta y Filtrado de Postulaciones',
          desc: 'Exploración de proyectos postulados con filtro múltiple de estados y orden cronológico.',
          component: 'Tabla de postulaciones y selector #filterStatus.'
        },
        {
          id: 'HU 3.1 & HU 3.2',
          wbs: 'WBS 3.2.1 (Issue #20)',
          title: 'Infraestructura Física y Asignación de Módulos',
          desc: 'Mapa interactivo de cuadrantes de la Zona de Emprendimiento. Permite vincular módulos libres a proyectos aprobados y liberar espacios.',
          component: 'Pestaña Infraestructura, cuadrícula #modulosGrid y panel de asignación.'
        },
        {
          id: 'HU 3.3.1',
          wbs: 'WBS 3.3.1 (Issue #3)',
          title: 'Apertura y Parámetros de Convocatorias',
          desc: 'Captura estructurada de cohorte, fechas límite de postulación y evaluación, cupos disponibles, líneas temáticas y switch maestro de apertura.',
          component: 'Pestaña Apertura de Convocatorias, formulario #formConvocatoria e historial de cohortes.'
        },
        {
          id: 'HU 2.2',
          wbs: 'WBS 2.2 (Issue #2.2)',
          title: 'Gestión de Excepciones de Disponibilidad (Festivos y Cierres)',
          desc: 'Registro de días festivos oficiales y cierres de campus con despacho automático de notificaciones a emprendedores asignados por Correo y WhatsApp.',
          component: 'Pestaña Disponibilidad y Cierres, formulario #formCierre y tabla de excepciones activas.'
        },
        {
          id: 'HU 5.1 & HU 5.3',
          wbs: 'WBS 5.3.1 (Issues #32, #35, #36)',
          title: 'Cuadro de Mando y Reportes Exportables',
          desc: 'Consolidado de proyectos activos, horas operadas, tasa de ocupación global y exportación formal a PDF para Rectoría.',
          component: 'Pestaña Métricas y Reportes y botón window.print().'
        }
      ]
    },
    'estudiante.html': {
      pageName: 'Panel del Estudiante Emprendedor Vinculado',
      stories: [
        {
          id: 'HU 2.1.4',
          wbs: 'WBS 2.4.2.1 (Issue #28)',
          title: 'Perfil de Usuario con Datos Bloqueados y Contacto Dinámico',
          desc: 'Visualización de datos personales bloqueados (nombre, facultad, código estudiantil) sincronizados con Registro Académico, y edición habilitada únicamente para teléfono, WhatsApp e Instagram.',
          component: 'Sección 1 (Campos readonly bloqueados) y Sección 2 (Datos dinámicos de contacto #profileForm).'
        },
        {
          id: 'HU 2.1.4',
          wbs: 'WBS 2.4.2.1',
          title: 'Preferencias de Notificación del Emprendedor',
          desc: 'Configuración personalizada de canales para recibir avisos del CIE: Correo Institucional, WhatsApp y alertas de mantenimiento.',
          component: 'Tarjeta de Preferencias de Notificación y formulario #notifPrefForm.'
        },
        {
          id: 'HU 2.2',
          wbs: 'WBS 2.2',
          title: 'Recepción de Avisos de Festivos y Cierres de Campus',
          desc: 'Visualización de avisos de días festivos y cierres programados para garantizar que no se computen penalizaciones por inactividad.',
          component: 'Banner superior #bannerCierresContainer y bandeja de circulares #notifStudentList.'
        },
        {
          id: 'HU 4.2',
          wbs: 'WBS 4.2.1 (Issue #24)',
          title: 'Switch Operativo de Turno en Vivo',
          desc: 'Apertura y cierre de turnos presenciales con cronómetro en tiempo real sincronizado con el catálogo público.',
          component: 'Botón #btnToggleTurn y contador #timerDisplay.'
        },
        {
          id: 'HU 2.4.2',
          wbs: 'WBS 2.4.2.3 (Issues #30, #31)',
          title: 'Consolidado de Horas Operadas y Turnos',
          desc: 'Métricas limpias de horas acumuladas en el mes y total de turnos completados en módulo físico.',
          component: 'Caja de estadística #valHours y tabla de historial reciente.'
        }
      ]
    },
    'catalogo.html': {
      pageName: 'Catálogo Público Comercial',
      stories: [
        {
          id: 'HU 4.1',
          wbs: 'WBS 4.2.1 (Issue #24)',
          title: 'Vitrina de Emprendimientos del Campus',
          desc: 'Exhibición pública de las marcas y módulos universitarios para la comunidad compradora.',
          component: 'Cuadrícula dinámica #catalogGrid con monogramas de marca.'
        },
        {
          id: 'HU 4.2.2',
          wbs: 'WBS 4.2.2',
          title: 'Priorización en Vivo de Módulos Abiertos',
          desc: 'Los emprendimientos que se encuentren atendiendo en su turno presencial aparecen de primeros en la lista.',
          component: 'Algoritmo de ordenamiento automático e indicador de estado abierto.'
        },
        {
          id: 'HU 4.3.1',
          wbs: 'WBS 3.1.1.1 (Issue #13)',
          title: 'Búsqueda en Tiempo Real y Filtros de Estado',
          desc: 'Filtrado predictivo por nombre, producto o módulo, y pestañas de selección rápida.',
          component: 'Barra de filtros #fOpen/#fClosed y campo #catalogSearch.'
        },
        {
          id: 'HU 4.3.2',
          wbs: 'WBS 4.3.2',
          title: 'Enlaces Directos de Pedidos (WhatsApp / IG)',
          desc: 'Canales de comunicación inmediata entre el cliente y el estudiante emprendedor.',
          component: 'Botones .btn-contact con enlaces dinámicos personalizados.'
        }
      ]
    }
  };

  function initTraceability() {
    // Detectar nombre de archivo actual
    const path = window.location.pathname;
    let fileName = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    if (!TRACE_DATA[fileName]) fileName = 'index.html';

    const data = TRACE_DATA[fileName];
    if (!data) return;

    // Crear botón flotante trigger
    const trigger = document.createElement('button');
    trigger.className = 'trace-trigger';
    trigger.id = 'traceTriggerBtn';
    trigger.setAttribute('aria-label', 'Ver trazabilidad con historias de usuario');
    trigger.innerHTML = `
      <span class="status-dot status-dot--active"></span>
      <span>Trazabilidad HU</span>
    `;
    trigger.onclick = toggleTraceModal;
    document.body.appendChild(trigger);

    // Crear modal de trazabilidad
    const overlay = document.createElement('div');
    overlay.className = 'trace-modal-overlay';
    overlay.id = 'traceModalOverlay';
    overlay.onclick = function (e) {
      if (e.target === overlay) toggleTraceModal();
    };

    let itemsHtml = data.stories.map(s => `
      <div class="trace-hu-item">
        <div class="trace-hu-title">
          <span>${s.id} &middot; ${s.title}</span>
          <span class="tag tag--accent" style="font-size:0.68rem;">${s.wbs}</span>
        </div>
        <p class="trace-hu-desc">${s.desc}</p>
        <div class="trace-hu-meta">Cumplido en pantalla por: ${s.component}</div>
      </div>
    `).join('');

    overlay.innerHTML = `
      <div class="trace-modal-box">
        <div class="trace-header">
          <div>
            <h3>Trazabilidad con el Backlog</h3>
            <p>Pantalla actual: <strong>${data.pageName}</strong> (${fileName})</p>
          </div>
          <button class="trace-close-btn" onclick="window.__toggleTraceModal()">&times;</button>
        </div>

        <div style="margin-bottom:1rem; font-size:0.84rem; color:var(--color-ink-muted); line-height:1.5;">
          Esta vista responde formalmente a las siguientes Historias de Usuario (HU) del Product Backlog:
        </div>

        <div class="trace-hu-list">
          ${itemsHtml}
        </div>

        <div style="border-top:1px solid var(--color-border); padding-top:1rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <span style="font-size:0.76rem; color:var(--color-ink-muted);">SIGME &middot; Prototipo Navegable HTML/CSS</span>
          <button class="btn btn--primary" style="padding:0.4rem 0.85rem; font-size:0.78rem;" onclick="window.__toggleTraceModal()">
            Entendido
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    window.__toggleTraceModal = toggleTraceModal;

    // Cerrar con Escape
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.style.display === 'grid') {
        toggleTraceModal();
      }
    });
  }

  function toggleTraceModal() {
    const overlay = document.getElementById('traceModalOverlay');
    if (!overlay) return;
    const isVisible = overlay.style.display === 'grid';
    overlay.style.display = isVisible ? 'none' : 'grid';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTraceability);
  } else {
    initTraceability();
  }
})();

