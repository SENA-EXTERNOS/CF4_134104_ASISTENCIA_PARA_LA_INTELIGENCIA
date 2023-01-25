<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bg1.p-4.p-md-5.mb-5

      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 La importancia de los datos en los procesos empresariales 

      .row.justify-content-center
        .tarjeta
          .row.justify-content-left
            .col-sm-3.mb-3.mt-5
              figure
                img(src="@/assets/curso/temas/tema1/img1.png", alt="alt")
            .col-sm-8.mb-3
              p.mt-5 Los datos son el insumo principal para el proceso de análisis de la economía de una empresa. El mundo, en su globalidad, se mueve a través de los datos: se generan en un solo minuto millones de datos, se procesan datos, se origina información y se toman decisiones. Esto se convierte en un ciclo permanente en todos los niveles de la empresa, desde lo operativo hasta lo gerencial. Sin datos no se pueden iniciar procesos; los procesos generan datos; los datos se procesan y emiten información acerca de la efectividad de los procesos; la gerencia toma decisiones a partir de esa información. 
              .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-5
                .fila.justificar-contenido-entre.alinear-elementos-centro 
                  .col-md-12                 
                    p Un dato oportuno y bien recolectado, puede ser la clave para la sostenibilidad empresarial en el mercado. Las empresas usan los datos del entorno para administrar sus procesos. En general, los datos conforman uno de los activos intangibles de mayor importancia en los procesos empresariales, siendo su manejo asertivo, una gran clave en la inteligencia empresarial. 



      .row.align-items-end.bg2.h4.p-3 Fuente de datos en las empresas

      p.mt-5.mb-5 La empresa es un sistema de trabajo y, al ser un sistema, posee 4 elementos claves: las entradas (<i>inputs</i>), los procesos, las salidas (<i>outputs</i>) y la retroalimentación.
      p.mb-5 A continuación, se profundiza sobre cada elemento clave en una empresa:

      .row.mb-5
        .col-lg-8.position-relative         
          .avatar
            figure
              img(src="@/assets/curso/temas/tema1/img4.png", alt="alt").img250
          .crd.crd--avatarHorizontal.crd--first.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema1/img5.png", alt="alt").img100
              .col
                  h5 Entradas
                  p Se refieren a todos los elementos que se ameritan para dar inicio a un proceso. Las entradas son reconocidas, por la gerencia, como bienes intangibles donde la #[span.text-bold información] se presenta como la protagonista. La información se fundamenta en datos oportunos, pertinentes y precisos, que orientan hacia el logro de procesos efectivos de trabajo. Entre las entradas se cuentan también los requerimientos de procesos, el diseño organizacional y las necesidades del mercado, entre otras opciones. 

          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema1/img6.png", alt="alt").img100
              .col
                h5 Procesos
                p Ya sea que se trate de empresas manufacturas o de servicios, los procesos corresponden a la etapa de transformación de los insumos, en un entregable tangible o intangible, para un cliente. 
                |En el caso de las empresas manufactureras, se logra visualizar, con facilidad, el producto terminado. No obstante, en la prestación del servicio, la producción se fundamenta en el proceso mismo de la prestación del servicio al cliente.

          .crd.crd--avatarHorizontal.crd--three.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema1/img7.png", alt="alt").img100
              .col
                h5 Salidas
                p Se refieren a los resultados de los procesos. Normalmente, suelen relacionarse con la cantidad de productos fabricados, o con servicios, o con la cantidad de clientes atendidos. Ahora bien, las salidas cubren un amplio espectro de resultados, en los que convergen los logros y las falencias, porque se desarrolla un proceso con un objetivo claro.
          .crd.crd--avatarHorizontal.crd--last.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema1/img8.png", alt="alt").img100
              .col
                h5 Retroalimentación
                p Es el ingrediente clave del sistema organizacional, debido a que permite la mejora del sistema a través del análisis de los resultados, la detección de falencias, la identificación de oportunidades de mejora y, de ser posible, el rediseño de las entradas. Por lo tanto, es la etapa en la cual se mejora y se desarrolla el sistema organizacional. 

      p.mt-5.mb-5 Los datos que amerita un sistema son: diversos, complejos, dinámicos y provenientes de muy diversas fuentes, y la clave se basa en la claridad de los datos requeridos, en la oportunidad y calidad de su obtención. En un esquema sistémico de una empresa, los datos pueden provenir de fuentes internas o externas.
      p.mb-5 Los tipos de datos que podrá encontrar dentro de ellos son:

      ImagenInfografica.color-acento-botones
        template(v-slot:imagen)
          .row.justify-content-center
            .col-sm-10  
              figure 
                img(src='@/assets/curso/temas/tema1/img9.png', alt='alt') 
        .cajon.color-acento-botones.punto-caliente-second-color(x="31%" y="44%")  
          .row.justify-content-center.m-5
            h4.mt-5.text-center Datos referentes a:
            ul.lista-ul.p-4
              li 
                i.lista-ul__vineta
                | Proveedores
              li 
                i.lista-ul__vineta
                | Demanda
              li 
                i.lista-ul__vineta
                | Competencia
              li 
                i.lista-ul__vineta
                | Mercado                 
                                                                                                      
        .cajon.color-acento-botones.punto-caliente-second-color(x="57%" y="44%" )
          .row.justify-content-center.m-5 
            h4.mt-5.text-center Datos referentes a: 
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Demanda
              li 
                i.lista-ul__vineta
                | #[span.small-text Volúmenes de producción]
              li 
                i.lista-ul__vineta
                | Materia prima e insumos
              li 
                i.lista-ul__vineta
                | Requerimientos de personal
              li 
                i.lista-ul__vineta
                | Requerimientos de maquinaria
              li 
                i.lista-ul__vineta
                | Requerimientos de almacenaje                                           
                                        
        .cajon.color-acento-botones.punto-caliente-second-color(x="71%" y="44%" )
          .row.justify-content-center.m-5 
            h4.mt-5.text-center Datos referentes a: 
            ul.lista-ul
              li
                i.lista-ul__vineta
                | Cantidades producidas
              li 
                i.lista-ul__vineta
                | Desperdicios
              li 
                i.lista-ul__vineta
                | Indicadores de calidad
              li 
                i.lista-ul__vineta
                | #[span.small-text Cumplimiento de metas de producción]
              li 
                i.lista-ul__vineta
                | Fallas de procesos
        .cajon.color-acento-botones.punto-caliente-second-color(x="63%" y="100%")
          .row.justify-content-center.m-5 
            h4.mt-5.text-center Datos referentes a: 
            ul.lista-ul
              li
                i.lista-ul__vineta
                | Informes de cumplimiento
              li 
                i.lista-ul__vineta
                | Necesidades de mejora
              li 
                i.lista-ul__vineta
                | Oportunidades de mejora
                  
      .row.mt-5.align-items-end.bg2.h4.p-3 Los sistemas de información en la empresa 

      .row.justify-content-center
        .tarjeta
          .row.justify-content-left
            .col-sm-5.mb-3.mt-5
              figure
                img(src="@/assets/curso/temas/tema1/img11.png", alt="alt")
            .col-sm-7.mb-3
              p.mt-5 El uso de los datos y convertirlos en información para las empresas que persiguen desarrollo organizacional y crecimiento en rentabilidad, no puede ser un asunto del azar y no puede ser un proceso empírico, es decir, no formalizado. 
              p Para eso se han creado los Sistemas de Información, los cuales son herramientas digitales, basadas en #[i software] especializados, que permiten la obtención, procesamiento y generación oportuna de información para la toma de decisiones. No se amerita el uso de Sistemas de Información altamente sofisticados, complejos o costosos; por el contrario, se buscan sistemas que se adapten a los procesos de la empresa, #[span.text-bold en función del tipo y la cantidad de datos a obtener, procesar y almacenar.] 
              .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color
                .row.justificar-contenido-entre.alinear-elementos-centro.p-5
                  .col-md-12                   
                    p Una hoja de cálculo puede ser la base de un Sistema de Información para una microempresa que no posee los recursos suficientes para adquirir #[i software] especializado. Por el contrario, a medida que aumenta la complejidad de la organización, en cuanto a la cantidad de procesos y subprocesos, mayor capacidad, versatilidad y facilidad de uso, deben utilizar Sistemas de Información.

      .row.justify-content-center.mt-5
        .col-md-10
          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img.bloque-img-left(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img12.png')})`}"
            )                             
            .bloque-texto-g__texto.bloque-text-rigth.p-4
              p  La clave para la existencia de Sistemas de Información en la empresa, no es la “moda” o el costo, sino la funcionalidad de acuerdo con las necesidades del manejo de los datos en el sistema empresarial. Al respecto, es responsabilidad de la gerencia seleccionar los Sistemas de Información más adecuados para la empresa y, además, brindar capacitaciones al personal sobre el manejo de estas valiosas herramientas.

      .row.mt-5.align-items-end.bg2.h4.p-3 Tendencias en el uso de los datos en las empresas 
      
      p.mt-5.mb5 Cada vez es más frecuente el uso de datos en las empresas y debido a la rapidez con la que se desenvuelven el mercado y la tecnología, se convierte en el motor de la dinámica social.  
      .row.justify-content-center
        .col-md-10
          .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
            .row.justify-content-center.align-items-center.p-4                
              p Las empresas, en la búsqueda de la competitividad, están optando por incorporarse al uso de Sistemas de Información Tecnológicos, en los que se busca prescindir de documentos físicos, facilitar la obtención y flujo de la información entre procesos o unidades organizativas.  
      
      p.mt-5.mb5 Debe tenerse en cuenta que, en medio de la virtualización de los procesos, las empresas han debido generar cambios en sus sistemas de trabajo, lo que ha ameritado la incorporación, rediseño y/o fortalecimiento de sus Sistemas de Información.      


      .row.justify-content-center.bg4.mg-img.mt-5.mb-5.mg-img-final
        .row.justify-content-center.mt-5
          .col-md-10
            .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
              .bloque-texto-g__img.w-bloque(
                :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img13.png')})`}"
              )                             
              .bloque-texto-g__texto.p-4
                p  La importancia de los Sistemas de Información no está basada en su complejidad, sino en cuánto aportan a la tenencia oportuna de información para la toma de decisiones en la empresa, qué tan sencillos son para que el personal los puedan administrar y qué tanta capacidad posee la empresa para el mantenimiento y sostenibilidad de estos sistemas.

  </template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
