// SIGME - Estado Compartido y Datos Hardcodeados Iniciales
(function () {
  const INITIAL_CONVOCATORIA_DATA = {
    isOpen: true,
    code: 'CONV-2026-2',
    title: 'Convocatoria General Zona de Emprendimiento 2026-2',
    semester: '2026-2',
    startDate: '2026-09-01',
    endDate: '2026-11-30',
    evalDate: '2026-12-05',
    availableSlots: 6,
    categories: ['Alimentos Funcionales', 'Tecnología y Software', 'Diseño y Sostenibilidad', 'Servicios Universitarios'],
    description: 'Recepción de propuestas de negocio y validación de Productos Mínimos Viables (MVP) para asignación de módulos físicos en la plazoleta central.',
    requirements: [
      'Estudiante activo de pregrado o posgrado con matrícula vigente.',
      'Contar con un Producto Mínimo Viable (MVP) testeado con clientes reales.',
      'Disponibilidad horaria para atender presencialmente en el módulo asignado.',
      'Acatar los lineamientos de bioseguridad, salubridad y convivencia institucional.'
    ],
    guidelinesDoc: 'terminos_referencia_convocatoria_2026_2.pdf',
    cohortHistory: [
      { code: 'CONV-2026-1', title: 'Cohorte 2026-1', status: 'Cerrada', slots: 5, applications: 18, assigned: 5, dateRange: '01/02/2026 - 15/05/2026' },
      { code: 'CONV-2025-2', title: 'Cohorte 2025-2', status: 'Cerrada', slots: 4, applications: 14, assigned: 4, dateRange: '01/08/2025 - 30/11/2025' }
    ]
  };

  const INITIAL_USERS = [
    {
      email: 'admin@universidad.edu.co',
      password: 'admin',
      role: 'admin',
      name: 'Coordinación CIE',
      title: 'Administrador de la Zona de Emprendimiento',
      phone: '573009998877',
      whatsapp: '573009998877'
    },
    {
      email: 'maria.lopez@universidad.edu.co',
      password: '123',
      role: 'student',
      studentCode: 'EST-202210450',
      name: 'María Fernanda López',
      faculty: 'Ingeniería de Sistemas',
      ventureName: 'EcoSnacks Saludables Campus',
      ventureCat: 'Alimentos Funcionales',
      moduleAssigned: 'E-03',
      status: 'Aprobado', // VINCULADA: Puede iniciar sesión
      phone: '573001234567',
      whatsapp: '573001234567',
      ig: 'ecosnacks_campus',
      hoursWorked: 48,
      description: 'Barras energéticas a base de quinua, frutos secos y miel agroecológica local sin azúcares añadidos.',
      notifEmail: true,
      notifWhatsapp: true,
      notifMaintenance: true
    },
    {
      email: 'carlos.ramirez@universidad.edu.co',
      password: '123',
      role: 'student',
      studentCode: 'EST-202310120',
      name: 'Carlos Andrés Ramírez',
      faculty: 'Ciencias Agrarias',
      ventureName: 'Café de Origen Estudiantil',
      ventureCat: 'Bebidas y Gastronomía',
      moduleAssigned: null,
      status: 'En Revisión', // NO VINCULADO: Aún no aprobado
      phone: '573119876543',
      whatsapp: '573119876543',
      ig: 'cafedeorigen_campus',
      hoursWorked: 0,
      description: 'Café especial cultivado por familias campesinas asociadas a estudiantes de agronomía.',
      notifEmail: true,
      notifWhatsapp: true,
      notifMaintenance: false
    },
    {
      email: 'laura.martinez@universidad.edu.co',
      password: '123',
      role: 'student',
      studentCode: 'EST-202120890',
      name: 'Laura Sofía Martínez',
      faculty: 'Diseño Industrial',
      ventureName: 'Moda Upcycling Universitaria',
      ventureCat: 'Diseño y Sostenibilidad',
      moduleAssigned: 'E-05',
      status: 'Aprobado', // VINCULADA
      phone: '573204567890',
      whatsapp: '573204567890',
      ig: 'upcycling_u',
      hoursWorked: 35,
      description: 'Prendas denim y accesorios rediseñados a partir de residuos textiles universitarios.',
      notifEmail: true,
      notifWhatsapp: false,
      notifMaintenance: true
    }
  ];

  const INITIAL_MODULOS = [
    { id: 'E-01', status: 'disponible', project: null, student: null, faculty: null },
    { id: 'E-02', status: 'ocupado', project: 'BioCosmética Natural U', student: 'Daniela Méndez', faculty: 'Química' },
    { id: 'E-03', status: 'ocupado', project: 'EcoSnacks Saludables Campus', student: 'María Fernanda López', faculty: 'Ingeniería' },
    { id: 'E-04', status: 'disponible', project: null, student: null, faculty: null },
    { id: 'E-05', status: 'ocupado', project: 'Moda Upcycling Universitaria', student: 'Laura Sofía Martínez', faculty: 'Diseño' },
    { id: 'E-06', status: 'disponible', project: null, student: null, faculty: null },
    { id: 'E-07', status: 'ocupado', project: 'Impresión 3D Tech Labs', student: 'Diego Pardo', faculty: 'Ingeniería' },
    { id: 'E-08', status: 'disponible', project: null, student: null, faculty: null },
    { id: 'E-09', status: 'mantenimiento', project: null, student: null, faculty: null },
    { id: 'E-10', status: 'disponible', project: null, student: null, faculty: null }
  ];

  const INITIAL_VENTURES = [
    {
      id: 'v-03',
      name: 'EcoSnacks Saludables Campus',
      category: 'Alimentos Funcionales',
      student: 'María Fernanda López',
      module: 'Módulo E-03',
      isOpen: false,
      monogram: 'ES',
      phone: '573001234567',
      ig: 'ecosnacks_campus',
      desc: 'Barras energéticas a base de quinua, frutos secos y miel agroecológica local sin azúcares añadidos.'
    },
    {
      id: 'v-02',
      name: 'BioCosmética Natural U',
      category: 'Cuidado Personal',
      student: 'Daniela Méndez',
      module: 'Módulo E-02',
      isOpen: true,
      monogram: 'BC',
      phone: '573127778899',
      ig: 'biocosmetica_campus',
      desc: 'Jabones artesanales y bálsamos botánicos elaborados con extractos del jardín botánico.'
    },
    {
      id: 'v-05',
      name: 'Moda Upcycling Universitaria',
      category: 'Diseño y Sostenibilidad',
      student: 'Laura Sofía Martínez',
      module: 'Módulo E-05',
      isOpen: false,
      monogram: 'MU',
      phone: '573204567890',
      ig: 'upcycling_u',
      desc: 'Prendas denim y accesorios rediseñados a partir de residuos textiles universitarios.'
    },
    {
      id: 'v-07',
      name: 'Impresión 3D Tech Labs',
      category: 'Tecnología y Prototipado',
      student: 'Diego Pardo',
      module: 'Módulo E-07',
      isOpen: true,
      monogram: '3D',
      phone: '573153334455',
      ig: 'techprint_lab',
      desc: 'Servicio express de prototipado rápido para maquetas de arquitectura e ingeniería.'
    }
  ];

  const INITIAL_PROYECTOS = [
    {
      radicado: 'SIGME-2026-0142',
      name: 'EcoSnacks Saludables Campus',
      student: 'María Fernanda López',
      email: 'maria.lopez@universidad.edu.co',
      faculty: 'Ingeniería de Sistemas',
      category: 'Alimentos Funcionales',
      date: '20/09/2026',
      status: 'Aprobado',
      score: 85,
      comments: 'Excelente propuesta con validación de MVP en el campus.',
      module: 'E-03'
    },
    {
      radicado: 'SIGME-2026-0187',
      name: 'Café de Origen Estudiantil',
      student: 'Carlos Andrés Ramírez',
      email: 'carlos.ramirez@universidad.edu.co',
      faculty: 'Ciencias Agrarias',
      category: 'Bebidas y Gastronomía',
      date: '24/09/2026',
      status: 'En Revisión',
      score: null,
      comments: null,
      module: null
    },
    {
      radicado: 'SIGME-2026-0203',
      name: 'App Tutorías Peer-to-Peer',
      student: 'Felipe Herrera',
      email: 'felipe.herrera@universidad.edu.co',
      faculty: 'Ciencias Económicas',
      category: 'Servicios Educativos',
      date: '28/09/2026',
      status: 'En Revisión',
      score: null,
      comments: null,
      module: null
    },
    {
      radicado: 'SIGME-2026-0091',
      name: 'Snacks Hidropónicos U',
      student: 'Paula Sánchez',
      email: 'paula.sanchez@universidad.edu.co',
      faculty: 'Nutrición',
      category: 'Alimentos',
      date: '15/09/2026',
      status: 'Rechazado',
      score: 52,
      comments: 'No cuenta con concepto sanitario básico para venta presencial en campus.',
      module: null
    }
  ];

  // Excepciones de disponibilidad (Festivos y Cierres) - HU 2.2
  const INITIAL_CIERRES = [
    {
      id: 'cie-01',
      title: 'Festivo Nacional: Independencia de Cartagena',
      type: 'festivo',
      typeLabel: 'Festivo Oficial',
      dateStart: '2026-11-16',
      dateEnd: '2026-11-16',
      reason: 'Feriado nacional oficial según calendario del Ministerio. Suspensión total de actividades presenciales en campus.',
      scope: 'all',
      scopeLabel: 'Todos los módulos de la Zona',
      notifiedAt: '05/11/2026 · 09:30',
      notifiedChannels: ['Correo Institucional', 'WhatsApp']
    },
    {
      id: 'cie-02',
      title: 'Mantenimiento Eléctrico en Plazoleta Central',
      type: 'mantenimiento',
      typeLabel: 'Mantenimiento Técnico',
      dateStart: '2026-11-21',
      dateEnd: '2026-11-21',
      reason: 'Mantenimiento preventivo en acometidas eléctricas y redes hidrosanitarias de la zona de módulos.',
      scope: 'all',
      scopeLabel: 'Todos los módulos de la Zona',
      notifiedAt: '07/11/2026 · 14:15',
      notifiedChannels: ['Correo Institucional', 'WhatsApp']
    }
  ];

  // Registro de Notificaciones a Interesados
  const INITIAL_NOTIFICATIONS = [
    {
      id: 'notif-01',
      date: '07/11/2026 14:15',
      title: 'Cierre Programado: Mantenimiento Eléctrico (21/11/2026)',
      message: 'Se informa a todos los emprendimientos con módulo activo que el sábado 21 de noviembre no habrá atención presencial. Las horas no se computarán como inactividad.',
      type: 'mantenimiento',
      channels: ['Correo Institucional', 'WhatsApp']
    },
    {
      id: 'notif-02',
      date: '05/11/2026 09:30',
      title: 'Aviso de Festivo Oficial: Lunes 16 de Noviembre',
      message: 'Recordatorio institucional: El lunes 16 de noviembre es festivo oficial. Los módulos permanecerán cerrados sin penalización.',
      type: 'festivo',
      channels: ['Correo Institucional', 'WhatsApp']
    }
  ];

  window.SIGME_STATE = {
    // --- CONVOCATORIAS ---
    getConvocatoria: function () {
      const data = this.getConvocatoriaData();
      return data.isOpen;
    },
    setConvocatoria: function (isOpen) {
      const data = this.getConvocatoriaData();
      data.isOpen = isOpen;
      this.saveConvocatoriaData(data);
      localStorage.setItem('sigme_convocatoria', JSON.stringify(isOpen));
    },
    getConvocatoriaData: function () {
      const val = localStorage.getItem('sigme_convocatoria_data');
      if (val !== null) {
        try { return JSON.parse(val); } catch (e) {}
      }
      return INITIAL_CONVOCATORIA_DATA;
    },
    saveConvocatoriaData: function (data) {
      localStorage.setItem('sigme_convocatoria_data', JSON.stringify(data));
      localStorage.setItem('sigme_convocatoria', JSON.stringify(data.isOpen));
    },

    // --- USUARIOS ---
    getUsers: function () {
      const val = localStorage.getItem('sigme_users');
      return val !== null ? JSON.parse(val) : INITIAL_USERS;
    },
    saveUsers: function (users) {
      localStorage.setItem('sigme_users', JSON.stringify(users));
    },
    getCurrentUser: function () {
      const val = localStorage.getItem('sigme_current_user');
      return val !== null ? JSON.parse(val) : null;
    },
    setCurrentUser: function (user) {
      localStorage.setItem('sigme_current_user', JSON.stringify(user));
    },
    updateUserProfile: function (email, dynamicData) {
      const users = this.getUsers();
      const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
      if (user) {
        // Solo actualizar campos dinámicos de contacto
        if (dynamicData.phone !== undefined) user.phone = dynamicData.phone;
        if (dynamicData.whatsapp !== undefined) user.whatsapp = dynamicData.whatsapp;
        if (dynamicData.ig !== undefined) user.ig = dynamicData.ig;
        if (dynamicData.description !== undefined) user.description = dynamicData.description;
        this.saveUsers(users);

        // Si es el usuario activo en sesión
        const current = this.getCurrentUser();
        if (current && current.email.toLowerCase() === email.toLowerCase()) {
          Object.assign(current, dynamicData);
          this.setCurrentUser(current);
        }

        // Sincronizar también con ventures del catálogo
        if (user.ventureName) {
          const ventures = this.getVentures();
          const v = ventures.find(x => x.name.toLowerCase() === user.ventureName.toLowerCase());
          if (v) {
            if (dynamicData.phone) v.phone = dynamicData.phone;
            if (dynamicData.ig) v.ig = dynamicData.ig;
            if (dynamicData.description) v.desc = dynamicData.description;
            this.saveVentures(ventures);
          }
        }
      }
    },
    updateUserNotifPreferences: function (email, prefs) {
      const users = this.getUsers();
      const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
      if (user) {
        user.notifEmail = !!prefs.notifEmail;
        user.notifWhatsapp = !!prefs.notifWhatsapp;
        user.notifMaintenance = !!prefs.notifMaintenance;
        this.saveUsers(users);

        const current = this.getCurrentUser();
        if (current && current.email.toLowerCase() === email.toLowerCase()) {
          user.notifEmail = !!prefs.notifEmail;
          user.notifWhatsapp = !!prefs.notifWhatsapp;
          user.notifMaintenance = !!prefs.notifMaintenance;
          this.setCurrentUser(current);
        }
      }
    },
    logout: function () {
      localStorage.removeItem('sigme_current_user');
      window.location.href = 'index.html';
    },

    // --- MÓDULOS FÍSICOS ---
    getModulos: function () {
      const val = localStorage.getItem('sigme_modulos');
      return val !== null ? JSON.parse(val) : INITIAL_MODULOS;
    },
    saveModulos: function (modulos) {
      localStorage.setItem('sigme_modulos', JSON.stringify(modulos));
    },

    // --- VENTURES / CATÁLOGO ---
    getVentures: function () {
      const val = localStorage.getItem('sigme_ventures');
      return val !== null ? JSON.parse(val) : INITIAL_VENTURES;
    },
    saveVentures: function (v) {
      localStorage.setItem('sigme_ventures', JSON.stringify(v));
    },

    // --- PROYECTOS ---
    getProyectos: function () {
      const val = localStorage.getItem('sigme_proyectos');
      return val !== null ? JSON.parse(val) : INITIAL_PROYECTOS;
    },
    saveProyectos: function (p) {
      localStorage.setItem('sigme_proyectos', JSON.stringify(p));
    },

    // --- DISPONIBILIDAD: FESTIVOS Y CIERRES (HU 2.2) ---
    getCierres: function () {
      const val = localStorage.getItem('sigme_cierres');
      return val !== null ? JSON.parse(val) : INITIAL_CIERRES;
    },
    saveCierres: function (c) {
      localStorage.setItem('sigme_cierres', JSON.stringify(c));
    },
    addCierre: function (cierre) {
      const cierres = this.getCierres();
      cierre.id = 'cie-' + Date.now();
      const now = new Date();
      cierre.notifiedAt = now.toLocaleDateString('es-CO') + ' · ' + now.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
      cierres.unshift(cierre);
      this.saveCierres(cierres);

      // Registrar notificación automática para emprendedores
      const notif = {
        id: 'notif-' + Date.now(),
        date: cierre.notifiedAt,
        title: `Cierre Programado: ${cierre.title} (${cierre.dateStart})`,
        message: `${cierre.reason}. Horario de módulos suspendido sin penalización para emprendimientos.`,
        type: cierre.type,
        channels: cierre.notifiedChannels || ['Correo Institucional', 'WhatsApp']
      };
      this.addNotification(notif);
      return cierre;
    },
    deleteCierre: function (id) {
      let cierres = this.getCierres();
      cierres = cierres.filter(c => c.id !== id);
      this.saveCierres(cierres);
    },

    // --- NOTIFICACIONES ---
    getNotifications: function () {
      const val = localStorage.getItem('sigme_notifications');
      return val !== null ? JSON.parse(val) : INITIAL_NOTIFICATIONS;
    },
    addNotification: function (notif) {
      const notifs = this.getNotifications();
      notifs.unshift(notif);
      localStorage.setItem('sigme_notifications', JSON.stringify(notifs));
    },

    // --- INICIALIZACIÓN Y MIGRACIONES ---
    initIfEmpty: function () {
      // Convocatoria data
      if (!localStorage.getItem('sigme_convocatoria_data')) {
        localStorage.setItem('sigme_convocatoria_data', JSON.stringify(INITIAL_CONVOCATORIA_DATA));
      }
      if (localStorage.getItem('sigme_convocatoria') === null) {
        localStorage.setItem('sigme_convocatoria', JSON.stringify(INITIAL_CONVOCATORIA_DATA.isOpen));
      }

      // Usuarios: asegurar campos institucionales bloqueados y dinámicos
      if (!localStorage.getItem('sigme_users')) {
        localStorage.setItem('sigme_users', JSON.stringify(INITIAL_USERS));
      } else {
        try {
          const storedUsers = JSON.parse(localStorage.getItem('sigme_users'));
          let modified = false;
          storedUsers.forEach(u => {
            if (u.role === 'student') {
              if (!u.studentCode) {
                u.studentCode = 'EST-2022' + Math.floor(10000 + Math.random() * 90000);
                modified = true;
              }
              if (!u.whatsapp) {
                u.whatsapp = u.phone || '573001234567';
                modified = true;
              }
              if (u.notifEmail === undefined) {
                u.notifEmail = true;
                modified = true;
              }
              if (u.notifWhatsapp === undefined) {
                u.notifWhatsapp = true;
                modified = true;
              }
              if (u.notifMaintenance === undefined) {
                u.notifMaintenance = true;
                modified = true;
              }
            }
          });
          if (modified) {
            localStorage.setItem('sigme_users', JSON.stringify(storedUsers));
          }
        } catch (e) {}
      }

      // Módulos
      if (!localStorage.getItem('sigme_modulos')) {
        localStorage.setItem('sigme_modulos', JSON.stringify(INITIAL_MODULOS));
      }

      // Ventures / Catálogo
      if (!localStorage.getItem('sigme_ventures')) {
        localStorage.setItem('sigme_ventures', JSON.stringify(INITIAL_VENTURES));
      } else {
        try {
          const storedVentures = JSON.parse(localStorage.getItem('sigme_ventures'));
          let modified = false;
          storedVentures.forEach(v => {
            if (v.icon) {
              delete v.icon;
              modified = true;
            }
            if (!v.monogram) {
              const words = (v.name || 'EM').split(' ');
              v.monogram = (words[0][0] + (words[1] ? words[1][0] : words[0][1] || '')).toUpperCase();
              modified = true;
            }
          });
          if (modified) {
            localStorage.setItem('sigme_ventures', JSON.stringify(storedVentures));
          }
        } catch (e) {}
      }

      // Proyectos
      if (!localStorage.getItem('sigme_proyectos')) {
        localStorage.setItem('sigme_proyectos', JSON.stringify(INITIAL_PROYECTOS));
      }

      // Cierres y Excepciones
      if (!localStorage.getItem('sigme_cierres')) {
        localStorage.setItem('sigme_cierres', JSON.stringify(INITIAL_CIERRES));
      }

      // Notificaciones
      if (!localStorage.getItem('sigme_notifications')) {
        localStorage.setItem('sigme_notifications', JSON.stringify(INITIAL_NOTIFICATIONS));
      }
    },

    // --- RESTABLECIMIENTO DE REGISTROS DE PRUEBA ---
    resetAll: function (keepAuth = true) {
      const currentUser = this.getCurrentUser();
      localStorage.removeItem('sigme_convocatoria_data');
      localStorage.removeItem('sigme_convocatoria');
      localStorage.removeItem('sigme_users');
      localStorage.removeItem('sigme_modulos');
      localStorage.removeItem('sigme_ventures');
      localStorage.removeItem('sigme_proyectos');
      localStorage.removeItem('sigme_cierres');
      localStorage.removeItem('sigme_notifications');
      localStorage.removeItem('sigme_current_user');
      this.initIfEmpty();
      if (keepAuth && currentUser) {
        this.setCurrentUser(currentUser);
      }
    },

    resetProyectosOnly: function () {
      localStorage.setItem('sigme_proyectos', JSON.stringify(INITIAL_PROYECTOS));
      localStorage.setItem('sigme_users', JSON.stringify(INITIAL_USERS));
      localStorage.setItem('sigme_modulos', JSON.stringify(INITIAL_MODULOS));
      localStorage.setItem('sigme_ventures', JSON.stringify(INITIAL_VENTURES));
    }
  };

  window.SIGME_STATE.initIfEmpty();
})();
