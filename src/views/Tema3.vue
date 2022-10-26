<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bg1.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Introducción a la estadística 

    .row.justify-content-center
      .tarjeta
        .row.justify-content-left
          .col-sm-4.mb-3.mt-5
            figure
              img(src="@/assets/curso/temas/tema3/img1.png", alt="alt")
          .col-sm-8.mb-3
            p.mt-5 La estadística es una disciplina de la ciencia matemática, dedicada al estudio de las probabilidades de ocurrencia de fenómenos en el tiempo y para lo cual utiliza datos históricos o actuales. La estadística, a través de sus técnicas y/o métodos, organiza y analiza las fuentes numéricas de datos, y permite establecer conclusiones numéricas y gráficas, respecto al comportamiento de los fenómenos en el momento actual y hacer proyecciones futuras (García y Maroto, 2018, p.370-379). Asimismo, proyecta la realidad de una muestra de datos, hacia la generalidad de toda una población de datos, lo cual permite generalizar las realidades y tomar decisiones. Esta disciplina es la base de los cálculos en el mundo global, para la medicina, la política, la educación, la demografía; absolutamente todo fenómeno que posea comportamientos medibles con datos numéricos puede ser sometido al análisis estadístico. 
    
    .row.align-items-end.bg2.h4.p-3.mt-5 Uso de la estadística en el manejo de la información empresarial

    .row.justify-content-center
      .tarjeta
        .row.justify-content-left
          .col-sm-7.mb-3
            p.mt-5 La interpretación de datos, a partir de la estadística, es un avance importante en la mejora de los procesos de toma de decisiones en una empresa; este proceso corresponde al análisis basado en la evidencia, permitiendo transformar el desconocimiento y la incertidumbre del futuro, en proyecciones de datos, a través de la determinación de parámetros medibles, propios de la práctica empresarial. 
            .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
              .row.justify-content-center.p-3            
                p Las empresas ameritan datos de entrada para el desarrollo de los procesos y, a la par, generan un sinfín de datos numéricos, los cuales, al encontrarse adecuadamente identificados, establecidos como importantes para la toma de decisiones, y medidos o recopilados de las maneras adecuadas, permitirán que la estadística genere sus aportes en el procesamiento.
            p.mt-3 En los procesos de producción, la estadística permite hacer proyecciones de demanda con base en un mercado potencial; favorece la proyección de datos de producción, indica los cambios que deben hacerse en la compra de insumos a partir de un cambio en las necesidades de producción por aumentos de la demanda; determina la frecuencia histórica de fallas de la maquinaria; permite llevar registro histórico de mejora o bajas en los resultados de la calidad. Uno de los usos fundamentales se basa en la administración, la cual debe ofrecer a los procesos gerenciales estratégicos, información clave para la toma de decisiones, donde los datos “simples”, aislados y sin procesamiento, no generan aportes.
          .col-sm-5.mb-3.mt-5
            figure
              img(src="@/assets/curso/temas/tema3/img2.png", alt="alt")

    .row.justify-content-center.mt-5
      .col-md-11       
        .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
          .row.justify-content-center.p-3              
              p La estadística permite, además del procesamiento oportuno y científico de los datos, la visualización gráfica de la información, que es un elemento esencial para la comprensión del comportamiento de los procesos empresariales. 
    <Separador></Separador>
    #t_3_1.titulo-segundo.color-acento-contenido.mt-5
      h2 3.1 Estadística descriptiva

    p.mt-5.mb-5 La estadística descriptiva es la rama de la estadística que inicia desde el proceso de recolectar datos, para pasar a organizar el conjunto de datos bajo criterios de análisis (parámetros), agruparlos y procesarlos, emitiendo frecuencias de ocurrencia y proporciones de frecuencia, a través de generar conclusiones con respecto al comportamiento de los datos, por medio de tablas o gráficos. La estadística descriptiva, aunque #[span.text-bold no predice comportamientos futuros], sí permite explicar el comportamiento actual de los datos para la muestra precisa de datos que se estén procesando.   

    .row.justify-content-md-center.mt-3
      .col-md-10
        .tarjeta.color-tarjeta-descargas.p-3.mt-5
          .row.justify-content-md-center
            .col-auto.mt-3
                img(src="@/assets/curso/temas/tema2/img9.png")
            .col-md-8
                h3.mt-3.text-white Caso de estudio empresarial
                p.text-small.text-white Para conocer un caso de estudio empresarial donde se aplican los conceptos básicos de la estadística descriptiva, lo invitamos descargar el siguiente material.      
            .col-lg-1.mt-4
                a.boton.color-acento-botones.text-white(:href="obtenerLink('/downloads/Caso de estudio empresarial.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download 


    .row.justify-content-center.mt-5
      .col-md-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.w-bloque-3(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img3.png')})`}"
          )                             
          .bloque-texto-g__texto.p-4
            p  Es evidente, que la persona que maneja la estadística en la empresa, debe poseer competencias en la utilización de herramientas ofimáticas como #[i Excel, Word y PowerPoint], para el procesamiento de los datos y la emisión de informes estadísticos.

    .row.align-items-end.bg2.h4.p-3.mt-5 Importancia del manejo de las expresiones numéricas en la estadística 

    p.mt-5.mb-5 Las expresiones numéricas de la estadística descriptiva son datos procesados, que deben ser operados con procesos de análisis para emitir conclusiones.
    p.mb-5 Representación gráfica de expresiones numéricas:

    .tarjeta--container.row.justify-content-center
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema3/img4.png', alt='')
        .tarjeta.he-tarjetas.color-tarjeta-avatar.p-3
          h2.text-center.mt-5 Números enteros o reales
          p.text-center Aluden a las cantidades que se obtienen en cuanto a la variable (parámetro), que se esté estudiando. Puede ser un dato directo, es decir, el valor de la edad, el peso, la talla, o datos indirectos como las opiniones, en cuanto a algún aspecto, que se registran y deben sumarse para poder ser procesadas.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema3/img5.png' alt='')
        .tarjeta.he-tarjetas.color-tarjeta-avatar.p-3
          h2.text-center.mt-5 Porcentajes
          p.text-center Reflejan la expresión numérica de mayor utilidad estadística, ya que indican, sobre la base de una población total de datos, cuántos o cuáles corresponden a los resultados más altos o más bajos; es decir, especifica en qué tipo de datos se dan las mayores ocurrencias. Son estos porcentajes los que permiten generar las conclusiones de los estudios estadísticos. 

    <Separador></Separador>
    #t_3_2.titulo-segundo.color-acento-contenido.mt-5
      h2 3.2 Población y muestra estadística

    p.mt-5.mb-5 En los estudios estadísticos, se utilizan dos términos fundamentales: población y muestra. Se trata de los elementos de los cuales se requiere extraer u obtener los datos para el análisis cualitativo o cuantitativo que se vaya a desarrollar.

    .row.justify-content-center.mt-5.p-5
      .col-md-10
        figure
          img(src="@/assets/curso/temas/tema3/img6.png", alt="alt")   

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon-verde").mt-5
      .row(titulo="Población").p-5
        p Corresponde a la totalidad de los sujetos, cosas o elementos disponibles para un estudio y son de interés para los objetivos de la investigación. La población se encuentra en uno o varios contextos, dependiendo del estudio. Por ejemplo, en el caso de un estudio de mercado, puede tratarse de la totalidad de la población de una zona geográfica; en una empresa, la población podría ser la totalidad del personal, o solo los miembros del proceso de ventas y comercialización, si el estudio se trata únicamente de esa área. Los datos de la población pueden ser: internos, tomados de los datos internos de las empresas o instituciones en estudio, o externos, provenientes de fuentes estadísticas de datos; es el caso de los datos censales de los entes gubernamentales que miden la población.

      div(titulo="Muestra").p-5
        p La muestra corresponde a la parte de la población que se desea investigar. Se parte de una muestra, cuando no hace falta investigar a toda la población, o cuando la población es considerada muy amplia o variada. La consideración de cantidad depende del juicio de quien realiza el estudio. No obstante, hay estudios que ameritan la inclusión del total de la población, los cuales se denominan estudios censales (Hernández, Fernández & Baptista, 2010). En el resto de los casos, existe la necesidad de tomar una muestra, la cual puede ser en términos estadísticos, probabilística o no probabilística.

      div(titulo="Muestra no probabilística").p-5
        p Es la muestra llamada intencional. Sobre la base de una población, la persona que realiza el estudio toma solo una cantidad relativa de sujetos o elementos de investigación, para la recolección de los datos.
        p Estas muestras deben ir justificadas respecto al porqué no se manejan de manera probabilística, y son usadas normalmente en estudios cualitativos, en los que se hace énfasis en las cualidades y no en las cantidades. Por ejemplo, en las empresas, para un estudio relacionado con las capacidades gerenciales, puede hacerse una entrevista solo a los líderes de los procesos, lo que indica ser una muestra intencional con respecto a la totalidad de los trabajadores de la empresa. 

      div(titulo="Muestra probabilística").p-5
        p Ocurre cuando, a través de técnicas estadísticas de muestreo, se calcula una cantidad específica de unidades de estudio, a partir del total de la población, detentando que de una población de 2.500 personas que habitan en una ciudad, se termine encuestando a 195, número que resulta de un análisis estadístico que se realiza a partir del conocimiento de si la población es finita o infinita. Estas se dividen en: muestra en poblaciones finitas y muestra en poblaciones infinitas.        
                   
      div(titulo="Muestra en poblaciones finitas").p-5
        p Se calcula con una fórmula estándar, cuando se conoce con exactitud el total de la población. Por ejemplo, cuando se quiere hacer un estudio de opiniones de los clientes para una empresa, con una cartera establecida de 863 clientes. Se considera un número considerable de clientes, razón por la cual se opta por calcular una muestra estadística. Según Hernández, Fernández & Baptista (2010), la fórmula para muestras de poblaciones finitas es:
        .row.justify-content-center.mt-5.p-5
          .col-md-7
            figure
              img(src="@/assets/curso/temas/tema3/img7.png", alt="alt")
        p.mt-3 Donde: <br>
        | #[span.text-bold n: ] es el número final de muestra. <br> 
        | #[span.text-bold N: ] es el total conocido de la población. <br> 
        | #[span.text-bold Z: ] es la desviación estándar de exactitud de los datos de la muestra. <br>
        | #[span.text-bold E: ] es el error de cálculo de la muestra.<br>
        | #[span.text-bold p: ] es la probabilidad de éxito que ocurra el evento que se está estudiando.<br>
        | #[span.text-bold q: ] es la probabilidad de fracaso.

      div(titulo="Muestra en poblaciones infinitas").p-5
        p Se utiliza cuando no se tiene certeza del total de población disponible para el estudio. Por ejemplo, en un estudio de mercado que busca conocer la aceptación de un nuevo producto, no se sabe cuántas personas pudieran aceptarlo y consumirlo. Entonces, se utiliza la fórmula de muestreo probabilístico para poblaciones infinitas, propuesta por Hernández, Fernández & Baptista (2010), siendo esta la siguiente:
        .row.justify-content-center.mt-5.p-5
          .col-md-4
            figure
              img(src="@/assets/curso/temas/tema3/img8.png", alt="alt")

    .row.justify-content-center.bg4.mg-img.mt-5.mg-img-final
      .row.justify-content-center.mt-5
        .col-md-11
          .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
            .row.justify-content-center.p-3               
              p Como clave, en la selección y muestra de una población, es necesario tener claridad suficiente en cuanto al objetivo del estudio, al contexto del estudio y a los sujetos o elementos involucrados, además de las fuentes de información disponibles. Puede darse el caso de estudios en los que se amerite utilizar más de una población, y combinar técnicas de muestreo, como el caso de un estudio empresarial en el que se utiliza muestra intencional para recolectar información de los líderes de proceso, muestra censal (total de la población), para trabajar con el cuadro gerencial, y muestra probabilística para seleccionar pequeños grupos de muestra en las diferentes unidades organizativas.
                                

</template>

<script>
export default {
  name: 'Tema3',
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
