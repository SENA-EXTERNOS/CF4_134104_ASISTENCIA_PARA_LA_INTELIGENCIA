<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bg1.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Técnicas y herramientas de la estadística para el procesamiento de datos 

    .row.justify-content-center
      .tarjeta
        .row.justify-content-left
          .col-sm-4.mb-3.mt-5
            figure
              img(src="@/assets/curso/temas/tema4/img1.png", alt="alt")
          .col-sm-8.mb-3
            p.mt-5 La estadística para el procesamiento de datos científicos, es decir, datos con valor predictivo, con importancia para la toma de decisiones, que conjugados aporten la mayor información posible al analista, amerita de técnicas y herramientas que han sido definidas por los matemáticos, y las cuales se han formalizado en tres grandes categorías, en función de su complejidad y utilidad: las distribuciones de frecuencia, las medidas de tendencia central, y las medidas de dispersión. 
            .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
              .row.justify-content-center.p-3                
                  p Cada una de estas técnicas posee procesamientos distintos, amerita del apoyo de herramientas ofimáticas o #[i software] de cálculo, y generan diversos tipos de información visualizadas de maneras análogas a través de tablas y gráficos, pero que muestran una estructura de datos particulares en cada caso.             
    
    p.mt-5.mb-5 Seguidamente, se describen técnicas y herramientas de la estadística, para el procesamiento de datos:

    .tarjeta--container.row.justify-content-center
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema4/img2.png', alt='')
        .tarjeta.he-tarjetas.color-tarjeta-avatar.p-3
          h2.text-center.mt-5 Distribuciones de frecuencia
          p.text-center Son las herramientas más básicas de la estadística descriptiva, la cual, mediante tablas, muestra la cantidad de veces que ocurre un evento y, el porcentaje de ocurrencia de ese evento, en función de la totalidad de la cantidad de casos de estudio.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema4/img3.png' alt='')
        .tarjeta.he-tarjetas.color-tarjeta-avatar.p-3
          h2.text-center.mt-5 Medidas de tendencia central
          p.text-center Se refiere a los parámetros estadísticos que indican el punto medio donde se comportan los datos de una población estadística de datos. #[span.text-bold Responden a la pregunta: ¿hacia dónde se concentran los datos?]
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema4/img4.png' alt='')
        .tarjeta.he-tarjetas.color-tarjeta-avatar.p-3
          h2.text-center.mt-5 Medidas de dispersión
          p.text-center Relacionan los parámetros estadísticos que indican qué tanto cambia el comportamiento de una variable estadística con respecto a otra, o el valor que toma una variable, con respecto a otro de la misma variable. #[span.text-bold Responden a la pregunta: ¿qué tanto varía (cambia) el valor de una variable?]

    <Separador></Separador>

    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Distribuciones de frecuencia

    .row.justify-content-center
      .tarjeta
        .row.justify-content-left
          .col-sm-5.mb-3.mt-5
            figure
              img(src="@/assets/curso/temas/tema4/img5.png", alt="alt")
          .col-sm-7.mb-3.mt-5            
            .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
              .row.justify-content-center.p-3             
                p Las distribuciones de frecuencia, facilitan la tabulación básica de los datos de entrada de un estudio, su conteo y el cálculo de las proporciones, sobre la base del total de los datos obtenidos.
            p.mt-3 Estas distribuciones se pueden generar para datos simples o para datos agrupados, dependiendo de los intereses de quien realiza el análisis, del tipo de dato y de la cantidad de datos. Para conocer los conceptos asociados a estas distribuciones y su aplicabilidad, descargue el material #[span.text-bold “Introducción a la estadística_ejemplos”], donde se presenta un caso de estudio de un grupo de personas que se consideran clientes potenciales para la compra de un nuevo producto y los ejemplos de las técnicas y herramientas de la estadística para el procesamiento de datos. 

    .row.justify-content-md-center.mt-3
        .col-md-10
          .tarjeta.color-tarjeta-descargas.p-3.mt-5
            .row.justify-content-md-center
              .col-1.mt-3
                  img(src="@/assets/curso/temas/tema2/img9.png")
              .col-md-8
                  h3.mt-3.text-white Introducción a la estadística ejemplos
                  p.text-small.text-white Para la visualización de las distribuciones, se utilizan diferentes elementos gráficos elaborados con las herramientas de cálculo utilizadas por el analista, y recordar que la más básica es Excel.
              .col-md-1.mt-4
                  a.boton.color-acento-botones.text-white(:href="obtenerLink('/downloads/Introduccion.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download 

    p.mt-5.mb-5 Acto seguido, se definen algunas herramientas:

    .tarjeta.color-borde-slider.color-slider.p-3.mt-5
        SlyderA(tipo="b")
          .row
            .col-md-6.mb-4.mb-md-0.p-4
              h4 Histogramas
              p Son los gráficos que muestran la frecuencia de las variables en estudio. Para el caso trabajado, se presenta el histograma de frecuencia simple.<br>
              | Para el caso de la distribución de datos agrupados, se tiene este: 
            .col-md-6
              figure
                img(src="@/assets/curso/temas/tema4/img6.png", alt="alt")
          .row
            .col-md-6.mb-4.mb-md-0.p-4
              h4 Polígonos de frecuencia
              p Son diagramas que, en vez del uso de barras, destacan y unen los puntos centrales de valor de los histogramas, para visualizar, de mejor manera, el comportamiento de la variable en estudio. Para el caso tratado, se tiene este:
            .col-md-6
              figure
                img(src="@/assets/curso/temas/tema4/img7.png", alt="alt")                
          .row
            .col-md-6.mb-4.mb-md-0.p-4
              h4 Curvas de frecuencia
              p Define la graficación de los datos obtenidos, de menor a mayor y con relación a una variable. Se trata de un gráfico de línea que señala los puntos de interés. Para construirlo, previamente deben reordenarse los datos como se muestra en la siguiente tabla:
            .col-md-6
              figure
                img(src="@/assets/curso/temas/tema4/img8.png", alt="alt")
          .row
            .col-md-6.mb-4.mb-md-0.p-4
              h4 Curvas de frecuencia
              p Para el caso en estudio, se muestra la curva de frecuencia para la distribución simple:
            .col-md-6
              figure
                img(src="@/assets/curso/temas/tema4/img9.png", alt="alt")   
          .row
            .col-md-6.mb-4.mb-md-0.p-4
              h4 Ojivas
              p La ojiva es el gráfico que se logra a partir del trabajo sobre frecuencias acumuladas, ya sean simples o de intervalos. Visualmente, es la misma línea de puntos que la curva de frecuencia, pero la clave es que se utiliza para #[span.text-bold frecuencias acumuladas.] En este caso, se muestra lo que es una frecuencia relativa acumulada, para el caso de las distribuciones por intervalos, en la siguiente imagen.
            .col-md-6
              figure
                img(src="@/assets/curso/temas/tema4/img10.png", alt="alt")  
          .row
            .col-md-6.mb-4.mb-md-0.p-4
              h4 Ojivas
              p La ojiva permite visualizar dónde se acumula la mayor cantidad de porcentajes de frecuencia. Para el ejemplo, más del 50 %, específicamente el 53 % de los posibles compradores del producto, se encuentran en edad comprendida entre los 18 y los 45 años. Esta información orienta hacia dónde la empresa debe, por ejemplo, dirigir la estrategia de venta, de publicidad, o el diseño mismo del producto, cuando se trata de un estudio de mercado. 
            .col-md-6
              figure
                img(src="@/assets/curso/temas/tema4/img11.png", alt="alt")                                              

    <Separador></Separador>

    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Medidas de tendencia central

    p.mt-5.mb-5 Las medidas de tendencia central son las que ayudan a encontrar un punto medio en el comportamiento de los datos estadísticos, para emitir conclusiones y tomar decisiones.
    p.mb-3 Las medidas de tendencia central son:
    .row.justify-content-center.mt-5
      .col-md-8       
        figure
          img(src="@/assets/curso/temas/tema4/img12.png", alt="alt") 

    p.mt-5.mb-5 Fuera de la media aritmética como medida de tendencia central, también existen otros tipos de media, como: la media ponderada, la media geométrica y la media armónica.
    p.mb-5 Seguidamente, se presentan las fórmulas y definiciones de los otros tipos de medias:

    .row.justify-content-center
        .col-md-12
          SlyderF(columnas="col-sm-6")
            .tarjeta.color-tarjeta-rosa.h-tarjeta-rosa
              .row.justify-content-center.mb-2
                h3.mt-3.mb-5.texto-centro Media ponderada
                .col-sm-2.col-lg-7.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema4/img13.png' alt='AvatarTop')                  
                p.mt-5.texto-centro Surge cuando se da valoración de importancia a los diferentes datos recolectados. 

            .tarjeta.color-tarjeta-rosa.h-tarjeta-rosa
              .row.justify-content-center.mb-2
                h3.mt-3.mb-5.texto-centro Media geométrica
                .col-sm-2.col-lg-7.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema4/img14.png' alt='AvatarTop')                  
                p.mt-5.texto-centro Se calcula con la raíz a la #[span.text-bold N], de la multiplicación de los valores obtenidos en los datos. #[span.text-bold N] corresponde a la cantidad de datos recolectados. 

            .tarjeta.color-tarjeta-rosa.h-tarjeta-rosa
              .row.justify-content-center.mb-2
                h3.mt-3.mb-5.texto-centro Media armónica 
                .col-sm-2.col-lg-7.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema4/img15.png' alt='AvatarTop')                  
                p.mt-5.texto-centro Es el resultado de dividir la cantidad de elementos en estudio, entre la sumatoria de los resultados obtenidos de cada elemento. 

    p.mt-5.mb-5 La relación directa que existe entre la media, la mediana y la moda, es que todas generan un valor promedio de los datos, pero con diferentes finalidades, en cuanto a necesidades de análisis.

    .row.justify-content-center.mt-5
        .col-md-10       
          .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
            .row.justify-content-center.p-3              
                p La relación que existe entre las medias aritmética, geométrica y armónica, es que todas indican un promedio, y la combinación de las tres favorece la selección del promedio más adecuado que se pueda tomar como criterio de decisión para el comportamiento de los datos. De esta manera, es que se establecen las escalas de valoración del desempeño, en los que ciertos resultados, corresponden a cierta posición en una determinada escala; tal es el caso de la educación o del nivel de dominio de un idioma, valorado por las instituciones mundiales especializadas.

    <Separador></Separador>
    #t_4_3.titulo-segundo.color-acento-contenido.mt-5
      h2 4.3 Medidas de dispersión

    p.mt-5.mb-5 En estadística, la búsqueda del mayor agrupamiento de los datos de un estudio, es decir, hacia dónde tiende el comportamiento de la mayoría de los datos, es entonces ahí donde se desarrollan las medidas de dispersión. La utilidad de estas medidas radica en que, mientras más se acerquen a su valor ideal, en función de ciertos parámetros preestablecidos por la misma estadística, mayor será la calidad de los datos recolectados y, mejores y más asertivas, las conclusiones que se presenten en torno a un estudio. 

    .row.justify-content-center.mt-5
        .col-md-10       
          .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
            .row.justify-content-center.p-3                
                p Mientras se propinen datos más dispersos, que puedan ser visualizados en herramientas gráficas, mayor es la inexactitud del conjunto de datos, y más complicado se hace encontrar una tendencia en el comportamiento de dicho conjunto. Se buscan entonces, datos “agrupados”.

    p.mt-5.mb-5 La dispersión puede ser absoluta o relativa. Esta última, se utiliza en estudios estadísticos complejos en los que las variables toman incluso, diferentes unidades de medida. Pero, en la estadística descriptiva, la dispersión de mayor uso es la absoluta, la cual corresponde al análisis de la variable en la medida real en la que se presenta, sin modificarla, transformando entonces, la dispersión clásica de los estudios estadísticos en la empresa. En ciencias más complejas como la medicina, la física o la química, en las que se desarrollan experimentos, se utiliza la dispersión relativa con sus respectivas fórmulas y parámetros de interés.
    p.mb-5 Las medidas de dispersión absoluta más utilizadas y que ofrecen la mejor información como apoyo al análisis previo de las medidas de tendencia central, son:

    .row.justify-content-center.bg4.mg-img.mt-5.mg-img-final
      .col-md-10
        TabsA.color-acento-botones.mt-5.mb-5
          .tarjeta.color-borde-slider.color-slider.p-4(titulo="Decisiones estratégicas")
            .row.justify-content-center
              p Se ocupa de medir la desviación de cada valor del conjunto de datos, con respecto a la media aritmética. Se calcula a partir de la media aritmética de los valores absolutos de la desviación de cada valor de la variable, dividido entre la media aritmética.
                | Dada la complejidad de estas fórmulas, el #[i software] se encarga de calcularla y, en este caso, Excel es la herramienta básica de cálculo estadístico, en la opción de “fórmulas” y “funciones estadísticas”.
              .col-md-10.mt-5.mb-3
                figure
                  img(src='@/assets/curso/temas/tema4/img16.png' alt='')             
          .tarjeta.color-borde-slider.color-slider.p-4(class="small-text" titulo="Desviación estándar")
            .row.justify-content-center
              p También se conoce como desviación típica, y se denota con la letra griega sigma “σ”, o la “s” latina. Su valor representa la variación o dispersión de un conjunto de datos, considerando que:
              ul.lista-ul
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      | Una desviación estándar baja, indica que la mayor parte de los datos están agrupados cerca de su media. Mientras más cercana a cero, los datos estarán más cerca de la media.
                    li 
                      i.lista-ul__vineta
                      | Una desviación estándar alta indica que los datos están dispersos, es decir, extendidos en el rango general de los datos. 
              p Por lo tanto, el comportamiento esperado es el de una σ baja, para determinar menor dispersión. Esta medida es una de las más importantes al momento de emitir conclusiones estadísticas.
              .col-md-8
                p La fórmula matemática se presenta en la imagen donde:<br>
                | -N es la cantidad de datos disponibles.<br>
                | -Xi es el valor del dato<br>
                | -X̅ es la media.
              .col-md-4 
                figure
                    img(src='@/assets/curso/temas/tema4/img17.png' alt='')                          
                    
          .tarjeta.color-borde-slider.color-slider.p-4(titulo="Varianza")
            .row.justify-content-center
              p Es otra de las medidas de dispersión, que indica datos que están muy alejados por encima o por debajo del valor de la media; son datos más dispersos y menos representativos, y se reflejan en una desviación alta. El coeficiente de variación se representa con el símbolo griego “σ2”, o la “s2” latina.
              .col-md-7
                p Para la fórmula matemática se tiene que:<br>
                | -N es la cantidad de datos disponibles.<br>
                | -Xi es el valor del dato<br>
                | -X̅ es la media.
              .col-md-5 
                  figure
                      img(src='@/assets/curso/temas/tema4/img18.png' alt='')

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
