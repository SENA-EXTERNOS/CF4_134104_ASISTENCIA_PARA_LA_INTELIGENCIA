<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mt-5.mb-5 Apreciado aprendiz, bienvenido a este componente formativo donde conocerá el adecuado desarrollo de la recolección de datos, a partir de las herramientas, técnicas estadísticas de procesamiento y la forma idónea de presentar la información al usuario, destacando la importancia del correcto proceder respecto a la información de una empresa.
    p.mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará en el presente material de estudio:

    figure
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              
  
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
