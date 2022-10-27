<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 
          figure
            img(src="@/assets/curso/temas/actividad-logo.png", alt="")        
      h1 Actividad didáctica   
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/curso/temas/actividad.png", alt="")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo.color-acento-contenido
          h2 Asistencia para la inteligencia empresarial
        p.mb-4 A continuación, se ubica una serie de preguntas que permiten evaluar el aprendizaje obtenido en cuanto al procesamiento de datos estadísticos. Se visualiza una serie de 10 preguntas de verdadero y falso, para seleccionar la opción que corresponda. 
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Falso/verdadero
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/Actividad_1/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
