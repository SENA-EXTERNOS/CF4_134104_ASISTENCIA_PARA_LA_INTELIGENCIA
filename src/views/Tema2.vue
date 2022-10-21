<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bg1.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Los datos

    .row.justify-content-center
      .tarjeta
        .row.justify-content-left
          .col-sm-4.mb-3.mt-5
            figure
              img(src="@/assets/curso/temas/tema2/img1.png", alt="alt")
          .col-sm-8.mb-3
            p.mt-5 Un dato es considerado una representación, ya sea numérica, alfanumérica o alfabética, acerca de atributos o características de objetos, o resultados de procesos. Para Magdalena (2019), “los datos son la materia prima de la estadística. Los datos salen de las mediciones o también llamadas observaciones” (p.50). En el marco del procesamiento de los datos, estos no tienen un valor en sí mismos, es decir, el dato aislado no aporta algo, si no se analiza en conjunto con otros datos, para generar información integrada a través de procesos de cálculo con diferentes herramientas, de lo que se obtenga un número o números traducidos en información, lo que dispone de gran importancia al generar conclusiones para un fenómeno estudiado, y para orientar la toma de decisiones.


      .tarjeta.color-borde-slider.color-slider.p-3.mt-5
        SlyderA(tipo="b")
          .row
            .col-md-6.mb-4.mb-md-0.p-4
              h4 Tipos de datos
              p Los datos pueden ser cualitativos o cuantitativos, es decir, pueden representar un número o una cualidad.
            .col-md-6
              figure
                img(src="@/assets/curso/temas/tema2/img2.png", alt="alt")

          .row
            .col-md-6.mb-4.mb-md-0.p-4
              h4 Datos cuantitativos
              p Son aquellos que, por medio de números, indican la característica de algo. Representan una medida de las cosas y la descripción indica tamaños o cantidades. Pueden ser tomados a través de observación o herramientas de medición. Ejemplo de datos cuantitativos en una empresa, puede ser la cantidad de personal, la altura de una máquina, el tamaño de un almacén, el precio, las ventas, entre otros. Una característica de los datos cuantitativos es que pueden ser números exactos o enteros. 
              p La clave para reconocer datos cuantitativos es la de hacerse la pregunta: ¿cuánto?
            .col-md-6
              figure
                img(src="@/assets/curso/temas/tema2/img3.png", alt="alt")
          .row
            .col-md-6.mb-4.mb-md-0.p-4
              h4 Datos cualitativos
              p Son aquellos que representan cualidades o categorías; es decir, describen a las personas, cosas o situaciones, a través de adjetivos calificativos. Por ejemplo, una persona es hombre o mujer, es alta o es baja. Los datos cualitativos también pueden representar categorías o grados como el nivel de estrés de una persona: alto, medio, bajo, muy bajo. 
              p La clave para reconocer datos cualitativos es la de hacerse las preguntas: ¿cuál? o ¿qué?
            .col-md-6
              figure
                img(src="@/assets/curso/temas/tema2/img4.png", alt="alt")  
          .row
            .col-md-6.mb-4.mb-md-0.p-4
              h4 Fuentes de datos
              p Los datos, ya sean cuantitativos o cualitativos, pueden obtenerse de diferentes fuentes, a las cuales se les conoce como primarias o secundarias:
            .col-md-6
              figure
                img(src="@/assets/curso/temas/tema2/img5.png", alt="alt") 
          .row
            .col-md-6.mb-4.mb-md-0.p-4
              h4 Fuentes primarias
              p Los datos primarios son datos originales; es decir, son recolectados directamente por una persona en un momento real del estudio que se esté llevando a cabo, según los intereses propios y el momento en que se decide la recolección.
              p La tenencia de datos primarios debe fundamentarse en procesos de recolección, a través de diferentes herramientas como: listas de chequeo, cuestionarios, hojas de registros de datos, observaciones directas, o el uso de herramientas de medición especializadas. Lo importante es reducir al máximo, el error en la adquisición de los datos, por lo que el sujeto que incorpora el dato, debe asegurarse de estar utilizando la fuente de información correcta, o la herramienta de medición idónea.
            .col-md-6
              figure
                img(src="@/assets/curso/temas/tema2/img6.png", alt="alt")  
          .row
            .col-md-6.mb-4.mb-md-0.p-4
              h4 Fuentes primarias
              p Los datos primarios son datos originales; es decir, son recolectados directamente por una persona en un momento real del estudio que se esté llevando a cabo, según los intereses propios y el momento en que se decide la recolección.
              p La tenencia de datos primarios debe fundamentarse en procesos de recolección, a través de diferentes herramientas como: listas de chequeo, cuestionarios, hojas de registros de datos, observaciones directas, o el uso de herramientas de medición especializadas. Lo importante es reducir al máximo, el error en la adquisición de los datos, por lo que el sujeto que incorpora el dato, debe asegurarse de estar utilizando la fuente de información correcta, o la herramienta de medición idónea.
            .col-md-6
              figure
                img(src="@/assets/curso/temas/tema2/img6.png", alt="alt") 
          .row
            .col-md-6.mb-4.mb-md-0.p-4
              h4 Fuentes secundarias
              p Las fuentes secundarias representan datos ya existentes depositados en bases de datos, o en cualquier documento ya desarrollado por otras personas. Ejemplo: en una empresa puede haber datos internos como los registros de venta anuales, la cartera de clientes, entre otros, los cuales se reflejan en bases de datos o informes de gestión.
            .col-md-6
              figure
                img(src="@/assets/curso/temas/tema2/img7.png", alt="alt") 

      .row.justify-content-center.mt-5
        .col-md-11       
          .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
            .row.justify-content-center.p-3                 
                p Los datos son información procesada que conduce a conclusiones y aporta los insumos necesarios para la toma de decisiones.

      .row.justify-content-center.mt-5
      .tarjeta
        .row.justify-content-left
          .col-sm-4.mb-3.mt-5
            figure
              img(src="@/assets/curso/temas/tema2/img8.png", alt="alt")
          .col-sm-8.mb-3
            p.mt-5 Indistintamente de la fuente, la selección de un dato para el desarrollo de un estudio, debe hacerse a consideración de quien realiza el análisis; inclusive, puede darse el interés de comparar datos reales con datos históricos para conocer el comportamiento de algún fenómeno (caso de estudio).
            p Cualquier fuente de datos es válida, siempre y cuando se demuestre su veracidad, credibilidad y originalidad, porque esto es lo que aporta calidad a las conclusiones que se emitan a través de los datos. Especialmente se hace esta acotación, en cuanto al uso de las fuentes secundarias, debido a que los datos deben provenir de fuentes reconocidas en el contexto de estudio, para que los informes posean veracidad. Por eso es importante revisar el tipo de fuente que se utiliza, sobre todo cuando se trate de fuentes digitales.

      .row.align-items-end.bg2.h4.p-3.mt-5 Datos y variables

      p.mt-5.mb-5 A continuación, podrá conocer todos los elementos relativos de los datos y las variables como elementos clave de la toma de decisiones basada en el procesamiento estadístico. Con la información suministrada, podrá comprender que los datos no son información, sino que la generan, y que los datos responden al comportamiento de las variables de cualquier proceso de análisis. Esto contribuirá en gran medida a la estructuración adecuada de sus procesos de análisis en la empresa, aportando de manera asertiva a la generación de información para la toma de decisiones en la solución de problemas y búsqueda de oportunidades. Para esto, lo invitamos a ver el siguiente video:

      figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video        

      .row.align-items-end.bg2.h4.p-3.mt-5 Técnicas y herramientas para la recolección de datos

      p.mt-5.mb-5 La recolección de datos considerada verídica y de importancia para cualquier estudio, como en el caso de los análisis empresariales, debe basarse en técnicas y herramientas manuales o digitales, de apoyo, que generen el menor riesgo y el mínimo error en la recolección. En este aspecto, se hace relevante el elemento de #[span.text-bold credibilidad] o #[span.text-bold cientificidad] de los datos, reduciendo los “juicios de valor”, es decir, presunciones, opiniones sin basamento formal, suposiciones o proyecciones no calculadas. Por eso, toda persona que recolecta datos, cuenta con un importante abanico de técnicas y herramientas o instrumentos de recolección de datos, los cuales se utilizan en las investigaciones formales. Para profundizar en este tema descargue el siguiente material #[span.text-bold Técnicas, herramientas e instrumentos de recolección de datos más utilizados en las empresas.]

      .row.justify-content-md-center.mt-3
        .col-md-10
          .tarjeta.color-tarjeta-descargas.p-3.mt-5
            .row.justify-content-md-center
              .col-auto.mt-3
                  img(src="@/assets/curso/temas/tema2/img9.png")
              .col-md-8
                  h3.mt-3.text-white Técnicas, herramientas e instrumentos de recolección de datos más utilizados en las empresas.
                  p.text-small.text-white Para profundizar en este tema descargue el siguiente material 
              .col-lg-1.mt-4
                  a.boton.color-acento-botones.text-white(:href="obtenerLink('/downloads/Técnicas, herramientas e instrumentos de recolección de datos más utilizados en las empresas.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download 

    .row.justify-content-center.bg4.mg-img.mt-5.mg-img-final
      .row.justify-content-center.mt-5
        .col-md-10
          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img10.png')})`}"
            )                             
            .bloque-texto-g__texto.p-4
              p  La decisión con respecto a la forma de recolectar los datos, es de quien los recolecta; deben tomarse en cuenta los objetivos que se persiguen, el tipo de información que se amerita recolectar, la fuente de los datos disponibles, el tiempo disponible para la recolección, el acceso a la información, el tipo de herramientas manuales o digitales con las que cuenta, la profundidad a la que se quiere llegar con la recolección (diversas fuentes y variables), entre otros aspectos particulares de cada proceso de recolección de datos. 





</template>

<script>
export default {
  name: 'Tema2',
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
