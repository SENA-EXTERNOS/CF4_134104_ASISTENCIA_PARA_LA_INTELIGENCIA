export default {
  global: {
    componenteFormativo: 'Procesamiento estadístico de datos',
    descripcionCurso:
      'El procesamiento estadístico de datos se refiere a la interpretación de los datos cuantitativos obtenidos de los procesos de la empresa, o los datos externos a esta y a las técnicas estadísticas, a través de herramientas informáticas, de donde derive información específica de variables o conjunto de variables, para la toma de decisiones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La importancia de los datos en los procesos empresariales',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Los datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Introducción a la estadística',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Estadística descriptiva',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Población y muestra estadística',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Técnicas y herramientas de la estadística para el procesamiento de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Distribuciones de frecuencia',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Medidas de tendencia central',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Medidas de dispersión',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Procesamiento tecnológico de datos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Uso de la estadística en el manejo de la información empresarial',
      referencia:
        'Guevara, J. (2021). Importancia de los registros, la estadística y los sistemas de información para la gerencia de los servicios de salud. Revista Saluta, 4(3), p.10-30. ',
      tipo: 'Artículo',
      link:
        'https://revistas.umecit.edu.pa/flip/index.php?pdf=https://revistas.umecit.edu.pa/index.php/saluta/article/download/606/1257',
    },
    {
      tema: 'Medidas de tendencia central',
      referencia:
        'Tutorial Excel. (2022). Calcular la media aritmética y media ponderada en Excel (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=y7jBI8b2v4Q',
    },
    {
      tema: 'Distribución de frecuencias',
      referencia:
        'Vasen, F. y Lujano, I. (2017). Sistemas nacionales de clasificación de revistas científicas en América Latina: tendencias recientes e implicaciones para la evaluación académica en ciencias sociales. Revista Mexicana de Ciencias Políticas y Sociales, 62(231), p.199-228. ',
      tipo: 'Artículo',
      link:
        'https://www.sciencedirect.com/science/article/pii/S0185191817300430',
    },
    {
      tema: 'Medidas de dispersión',
      referencia:
        'Universidad Americana de Costa Rica. (2019). Cálculo de promedio y desviación estándar (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=U6x2tGTllNY',
    },
    {
      tema: 'Medidas de dispersión',
      referencia:
        'Universitat Politècnica de València. (2017). Cálculo de la varianza utilizando hoja de cálculo (video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=J57rJKiRPR4',
    },
  ],
  glosario: [
    {
      termino: 'Datos',
      significado:
        'son el conjunto de elementos cualitativos o cuantitativos descriptivos de un fenómeno, que al ser procesados se convierten en información (Barón, García & Sánchez, 2021).',
    },
    {
      termino: 'Entorno',
      significado:
        'contexto externo del sistema organizacional del cual se extraen datos para generar información analizada de manera oportuna e integrada con los datos internos de la empresa.',
    },
    {
      termino: 'Estadística',
      significado:
        'rama de la matemática que utiliza grandes conjuntos de datos numéricos para obtener inferencias basadas en el cálculo de probabilidades (Real Academia Española, RAE, 2022).',
    },
    {
      termino: 'Estadística descriptiva',
      significado:
        'el objetivo es describir cuantitativamente un conjunto de datos. Para ello se utilizan diferentes recursos estadísticos, tales como los estadígrafos de orden, centralización y variabilidad, que son números resúmenes de los datos recolectados, que pueden proceder de estudios poblacionales o muestrales. (Magdalena, 2019)',
    },
    {
      termino: 'Fuentes de datos',
      significado:
        'corresponde a cualquier nicho de datos interno o externo a la empresa, requerida para su procesamiento y obtención de información. Es común el manejo de bases de datos oficiales en cuanto a lo externo, o datos del sector empresarial o de la competencia. Al interior de la empresa, existen múltiples fuentes de entrada y salida en los procesos de trabajo.',
    },
    {
      termino: 'Gestión de datos',
      significado:
        'proceso sistemático de recolección, procesamiento, distribución y socialización de datos de forma oportuna e integrada en beneficio de los objetivos de la empresa (Ábrego, Sánchez & Medina, 2017).',
    },
    {
      termino: 'Información',
      significado:
        'comunicación o adquisición de conocimientos que permiten ampliar o precisar los que se poseen sobre una materia determinada (Real Academia Española, RAE, 2022).',
    },
    {
      termino: 'Procesamiento de datos',
      significado:
        'genera “información sobre algo concreto que permite su conocimiento exacto o sirve para deducir las consecuencias derivadas de un hecho” (Real Academia Española, RAE, 2022).',
    },
    {
      termino: 'Recolección de datos',
      significado:
        'es el proceso de extraer con precisión las cualidades o cantidades de personas, objetos, resultados, características para conocer su estado en un momento determinado (Magdalena, 2019). ',
    },
    {
      termino: 'Toma de decisiones',
      significado:
        'proceso analítico empresarial requerido para el direccionamiento de los objetivos estratégicos de la empresa, en lo cual se amerita el procesamiento de datos y la obtención de información. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Abrego, Y., Sánchez, Y. & Medina, J. (2017). Influencia de los sistemas de información en los resultados organizacionales. Contaduría y Administración, 62(2), p.303-320.',
      link:
        'https://www.sciencedirect.com/science/article/pii/S0186104216300432',
    },
    {
      referencia:
        'ArcGIS Pro. (2022). ¿Qué es una puntuación z? ¿Qué es un valor P? ',
      link:
        'https://pro.arcgis.com/es/pro-app/2.8/tool-reference/spatial-statistics/what-is-a-z-score-what-is-a-p-value.htm ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
