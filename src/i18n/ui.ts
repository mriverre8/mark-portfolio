export const languages = {
    es: 'ES',
    en: 'EN',
    ca: 'CA',
};

/** Full locale codes for Open Graph, which expects language_TERRITORY. */
export const ogLocales = {
    es: 'es_ES',
    en: 'en_US',
    ca: 'ca_ES',
};

export const defaultLang = 'es';

export const ui = {
    es: {
        'meta.title': 'Mark Portafolio - Desarrollador de Software',
        'meta.title.projects': 'Mark Portafolio - Proyectos',
        'meta.description':
            'Portafolio de Mark Rivera, Desarrollador de Software titulado en Ingeniería Informática. Experiencia laboral, proyectos y stack técnico.',
        'meta.description.projects':
            'Biblioteca completa de los proyectos desarrollados por Mark Rivera, Desarrollador de Software.',
        'header.experience': 'Experiencia',
        'header.projects': 'Proyectos',
        'header.stack': 'Habilidades',
        'header.light': 'Claro',
        'header.dark': 'Oscuro',
        'header.system': 'Sistema',
        'header.lightAlt': 'Tema Claro',
        'header.darkAlt': 'Tema Oscuro',
        'header.systemAlt': 'Tema del Sistema',
        'header.themeAlt': 'Tema',
        'about.description':
            'Desarrollador de Software titulado en Ingeniería Informática.',
        'about.workingStatus': 'Disponible para trabajar',
        'experience.experience': 'Trayectoria Laboral',
        'experience.years': '+4 años de experiencia',
        'experience.showMore': 'Ver más',
        'experience.showLess': 'Ver menos',
        'projects.projects': 'Proyectos',
        'projects.iconAlt': 'Icono de código',
        'projects.description':
            'Aquí encontrarás una selección de proyectos realizados a lo largo de mi trayectoria. De vez en cuando colaboro con ',
        'projects.repo': 'Código',
        'projects.visit': 'Visitar',
        'projects.all': 'Ver todos los proyectos',
        'projects.library': 'Biblioteca',
        'projects.back': 'Volver',
        'stack.habilities': 'Habilidades',
        'footer.portfolio': 'Portafolio',
        'footer.about': 'Sobre mí',
        'footer.contact': 'Contacto',
        'footer.build': 'Hecho con ',
    },
    en: {
        'meta.title': 'Mark Portfolio - Software Developer',
        'meta.title.projects': 'Mark Portfolio - Projects',
        'meta.description':
            'Portfolio of Mark Rivera, Software Developer with a degree in Computer Engineering. Work experience, projects and tech stack.',
        'meta.description.projects':
            'Full library of the projects built by Mark Rivera, Software Developer.',
        'header.experience': 'Experience',
        'header.projects': 'Projects',
        'header.stack': 'Stack',
        'header.light': 'Light',
        'header.dark': 'Dark',
        'header.system': 'System',
        'header.lightAlt': 'Light Theme',
        'header.darkAlt': 'Dark Theme',
        'header.systemAlt': 'System Theme',
        'header.themeAlt': 'Theme',
        'about.description':
            'Software Developer with a degree in Computer Engineering.',
        'about.workingStatus': 'Available for work',
        'experience.experience': 'Work history',
        'experience.years': '+4 years of experience',
        'experience.showMore': 'Show more',
        'experience.showLess': 'Show less',
        'projects.projects': 'Projects',
        'projects.iconAlt': 'Code icon',
        'projects.description':
            'Here you will find a selection of projects carried out throughout my career. From time to time I collaborate with ',
        'projects.repo': 'Code',
        'projects.visit': 'Visit',
        'projects.all': 'View all projects',
        'projects.library': 'Library',
        'projects.back': 'Back',
        'stack.habilities': 'Stack',
        'footer.portfolio': 'Portfolio',
        'footer.about': 'About me',
        'footer.contact': 'Contact',
        'footer.build': 'Built with ',
    },
    ca: {
        'meta.title': 'Mark Portafoli - Desenvolupador de Software',
        'meta.title.projects': 'Mark Portafoli - Projectes',
        'meta.description':
            'Portafoli de Mark Rivera, Desenvolupador de Software titulat en Enginyeria Informàtica. Experiència laboral, projectes i stack tècnic.',
        'meta.description.projects':
            'Biblioteca completa dels projectes desenvolupats per Mark Rivera, Desenvolupador de Software.',
        'header.experience': 'Experiència',
        'header.projects': 'Projectes',
        'header.stack': 'Habilitats',
        'header.light': 'Clar',
        'header.dark': 'Fosc',
        'header.system': 'Sistema',
        'header.lightAlt': 'Tema Clar',
        'header.darkAlt': 'Tema Fosc',
        'header.systemAlt': 'Tema del Sistema',
        'header.themeAlt': 'Tema',
        'about.description':
            'Desenvolupador de Software titulat en Enginyeria Informàtica.',
        'about.workingStatus': 'Disponible per treballar',
        'experience.experience': 'Trajectòria Laboral',
        'experience.years': "+4 anys d'experiència",
        'experience.showMore': "Veure'n més",
        'experience.showLess': "Veure'n menys",
        'projects.projects': 'Projectes',
        'projects.iconAlt': 'Icona de codi',
        'projects.description':
            'Aquí trobaràs una selecció de projectes realitzats al llarg de la meva trajectòria. De tant en tant col·laboro amb ',
        'projects.repo': 'Codi',
        'projects.visit': 'Visitar',
        'projects.all': 'Veure tots els projectes',
        'projects.library': 'Biblioteca',
        'projects.back': 'Tornar',
        'stack.habilities': 'Habilitats',
        'footer.portfolio': 'Portafoli',
        'footer.about': 'Sobre mi',
        'footer.contact': 'Contacte',
        'footer.build': 'Fet amb ',
    },
};

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)[typeof defaultLang];
