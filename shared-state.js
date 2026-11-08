// SIGME - Estado Compartido y Datos Hardcodeados Iniciales
(function () {
  const INITIAL_CONVOCATORIA = true;

  const INITIAL_USERS = [
    {
      email: 'admin@universidad.edu.co',
      password: 'admin',
      role: 'admin',
      name: 'Coordinación CIE',
      title: 'Administrador de la Zona de Emprendimiento'
    },
    {
      email: 'maria.lopez@universidad.edu.co',
      password: '123',
      role: 'student',
      name: 'María Fernanda López',
      faculty: 'Ingeniería de Sistemas',
      ventureName: 'EcoSnacks Saludables Campus',
      ventureCat: 'Alimentos Funcionales',
      moduleAssigned: 'E-03',
      status: 'Aprobado', // VINCULADA: Puede iniciar sesión
      phone: '573001234567',
      ig: 'ecosnacks_campus',
      hoursWorked: 48,
      description: 'Barras energéticas a base de quinua, frutos secos y miel agroecológica local sin azúcares añadidos.'
    },
    {
      email: 'carlos.ramirez@universidad.edu.co',
      password: '123',
      role: 'student',
      name: 'Carlos Andrés Ramírez',
      faculty: 'Ciencias Agrarias',
      ventureName: 'Café de Origen Estudiantil',
      ventureCat: 'Bebidas y Gastronomía',
      moduleAssigned: null,
      status: 'En Revisión', // NO VINCULADO: Aún no aprobado
      phone: '573119876543',
      ig: 'cafedeorigen_campus',
      hoursWorked: 0,
      description: 'Café especial cultivado por familias campesinas asociadas a estudiantes de agronomía.'
    },
    {
      email: 'laura.martinez@universidad.edu.co',
      password: '123',
      role: 'student',
      name: 'Laura Sofía Martínez',
      faculty: 'Diseño Industrial',
      ventureName: 'Moda Upcycling Universitaria',
      ventureCat: 'Diseño y Sostenibilidad',
      moduleAssigned: 'E-05',
      status: 'Aprobado', // VINCULADA
      phone: '573204567890',
      ig: 'upcycling_u',
      hoursWorked: 35,
      description: 'Prendas denim y accesorios rediseñados a partir de residuos textiles universitarios.'
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

  window.SIGME_STATE = {
    getConvocatoria: function () {
      const val = localStorage.getItem('sigme_convocatoria');
      return val !== null ? JSON.parse(val) : INITIAL_CONVOCATORIA;
    },
    setConvocatoria: function (isOpen) {
      localStorage.setItem('sigme_convocatoria', JSON.stringify(isOpen));
    },
    getUsers: function () {
      const val = localStorage.getItem('sigme_users');
      return val !== null ? JSON.parse(val) : INITIAL_USERS;
    },
    getModulos: function () {
      const val = localStorage.getItem('sigme_modulos');
      return val !== null ? JSON.parse(val) : INITIAL_MODULOS;
    },
    saveModulos: function (modulos) {
      localStorage.setItem('sigme_modulos', JSON.stringify(modulos));
    },
    getVentures: function () {
      const val = localStorage.getItem('sigme_ventures');
      return val !== null ? JSON.parse(val) : INITIAL_VENTURES;
    },
    saveVentures: function (v) {
      localStorage.setItem('sigme_ventures', JSON.stringify(v));
    },
    getProyectos: function () {
      const val = localStorage.getItem('sigme_proyectos');
      return val !== null ? JSON.parse(val) : INITIAL_PROYECTOS;
    },
    saveProyectos: function (p) {
      localStorage.setItem('sigme_proyectos', JSON.stringify(p));
    },
    getCurrentUser: function () {
      const val = localStorage.getItem('sigme_current_user');
      return val !== null ? JSON.parse(val) : null;
    },
    setCurrentUser: function (user) {
      localStorage.setItem('sigme_current_user', JSON.stringify(user));
    },
    logout: function () {
      localStorage.removeItem('sigme_current_user');
      window.location.href = 'index.html';
    },
    initIfEmpty: function () {
      if (!localStorage.getItem('sigme_users')) {
        localStorage.setItem('sigme_users', JSON.stringify(INITIAL_USERS));
      }
      if (!localStorage.getItem('sigme_modulos')) {
        localStorage.setItem('sigme_modulos', JSON.stringify(INITIAL_MODULOS));
      }
      if (!localStorage.getItem('sigme_ventures')) {
        localStorage.setItem('sigme_ventures', JSON.stringify(INITIAL_VENTURES));
      } else {
        // Migrar y sanitizar ventures existentes para asegurar diseño minimalista sin emojis
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
      if (!localStorage.getItem('sigme_proyectos')) {
        localStorage.setItem('sigme_proyectos', JSON.stringify(INITIAL_PROYECTOS));
      }
      if (localStorage.getItem('sigme_convocatoria') === null) {
        localStorage.setItem('sigme_convocatoria', JSON.stringify(INITIAL_CONVOCATORIA));
      }
    }
  };

  window.SIGME_STATE.initIfEmpty();
})();

