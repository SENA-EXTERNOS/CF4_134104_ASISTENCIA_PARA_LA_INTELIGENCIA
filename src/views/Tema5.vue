<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bg1.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Procesamiento tecnológico de datos  

    .row.justify-content-center
      .tarjeta
        .row.justify-content-left
          .col-sm-4.mb-3
            figure
              img(src="@/assets/curso/temas/tema5/img1.png", alt="alt")
          .col-sm-8.mb-3
            .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
              .row.justify-content-center.p-3                
                  p La complejidad en los cálculos matemáticos para el procesamiento de los datos estadísticos, genera la necesidad de apoyo con herramientas tecnológicas, de las cuales, Excel es la herramienta base como hoja de cálculo.
    
            p.mt-5 No obstante, han surgido en el mercado diversos software estadísticos especializados, con licencia propia, los cuales pueden ser adquiridos por las empresas para el manejo de los datos. Asimismo, los sistemas de información empresarial, tanto para la gerencia, como para las ventas y la producción o la logística, incorporan innumerables herramientas para el procesamiento de datos y su conversión en información. Hoy en día, se considera que una empresa que se oriente al desarrollo y crecimiento, debe tener un procesamiento tecnológico de datos, aunque los procesos empíricos no dejen de existir. Sin embargo, es evidente el aporte que la tecnología ha estampado a la gestión de los datos en el mundo entero, en cualquier contexto y para diferentes utilidades.

    .row.align-items-end.bg2.h4.p-3.mt-5 Importancia de la visualización gráfica de los datos

    .row.justify-content-center
      .tarjeta
        .row.justify-content-left
          .col-sm-8.mb-3
            p.mt-5.mb-4 El manejo de los datos amerita un proceso de organización, y la estadística descriptiva ofrece las herramientas básicas conocidas como tablas y gráficos, los cuales, además de la organización, favorecen la visualización gráfica, y permiten una mejor comprensión del comportamiento de los datos, tal y como se ha mostrado en todos los ejemplos estadísticos de este componente. Los procesadores tecnológicos de datos, permiten la elaboración de ambos recursos y, para la estadística, su combinación es fundamental. 
            .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
              .row.justify-content-center.p-3                
                  p En la empresa, es habitual encontrar reportes de datos gráficos, debido a que las imágenes son un recurso esencial en la comunicación de la información empresarial en cualquier área. Los gráficos de producción, las proyecciones de venta, los resultados de rentabilidad, en su mayoría, son representados a través de visualizaciones estadísticas gráficas.
          .col-sm-4.mb-3.mt-5
            figure
              img(src="@/assets/curso/temas/tema5/img2.png", alt="alt")

    .row.align-items-end.bg2.h4.p-3.mt-5 Herramientas para el procesamiento y generación de datos estadísticos

    .row.justify-content-center
      .tarjeta
        .row.justify-content-left
          .col-sm-4.mb-3
            figure
              img(src="@/assets/curso/temas/tema5/img3.png", alt="alt")
          .col-sm-8.mb-3               
            p La exigencia para digitalizar los datos es, en realidad, el insumo para la manifestación de herramientas para el procesamiento y generación de datos estadísticos, condensadas hoy en día, en su mayoría, en los sistemas de gestión de la información empresarial. A medida que avanza el desarrollo industrial, avanza la tecnología, y viceversa. Surgen así estas herramientas, facilitando la gestión de los procesos, y haciendo más competitivas y productivas a las empresas, al poseer información de primera mano, oportuna y procesada, en función de las necesidades internas y particulares de cada empresa.
            p.mt-5 El fundamento para el uso de herramientas para el procesamiento y generación de datos estadísticos, es la existencia de bases de datos empresariales, que ofrezcan los datos de entrada. Por consiguiente, la gerencia determina el direccionamiento estratégico de la información, demarcando, en cada proceso, la necesidad de datos de entrada, y el conjunto de datos de salida, lo que se presente en el momento requerido y la preparación de informes de desempeño empresarial de las personas y de los procesos. 

    .row.justify-content-center.mt-5
      .col-md-10       
        .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
          .row.justify-content-center.p-3                
              p De la calidad de los datos recabados, depende la utilidad y la contribución de las herramientas para el procesamiento y la generación de datos estadísticos.

    .row.justify-content-center.bg4.mg-img.mt-5.mg-img-final
      .row.justify-content-center.mt-5
        .col-md-11.mb-5
          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img4.png')})`}"
            )                             
            .bloque-texto-g__texto.p-4
              p  Para la adaptación a estas herramientas, se deben desarrollar capacidades tecnológicas por parte del analista. No obstante, la tendencia es, que en las empresas se contrate personal especializado para los departamentos administrativos, o que se subcontrate el servicio, tal y como se acostumbra hacer con los procesos contables. Esto ha permitido que surjan empresas especialmente dedicadas al procesamiento de datos, o que profesionales independientes desempeñen esta función de asesoría tecnológica. 

      p.mb-5 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, el material complementario, el glosario y la bibliografía. Lo invitamos a desarrollar la actividad didáctica para reforzar los conceptos estudiados.  



</template>

<script>
import Separador from 'ecored-base-pkg/src/components/Separador.vue'
export default {
  name: 'Tema3',
  components: { Separador },
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
