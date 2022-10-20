<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Asistencia para la inteligencia empresarial
          p.mt-3 Síntesis: Procesamiento estadístico de datos
      .col-md-1.d-flex.flex-row-reverse
            figure
              img(src="@/assets/curso/temas/logoSena.png", alt="alt")          

    p.mb-5 El procesamiento estadístico de datos se origina con la necesidad de obtener información cuantitativa precisa sobre una situación o fenómeno en cualquier contexto, y amerita la recolección de datos, para ser transformada en información a través de técnicas estadísticas y herramientas de procesamiento de datos. La importancia radica en que el tratamiento estadístico de los datos, reduce la posibilidad de subjetividad en el manejo de la información, y ofrece un medio efectivo para el manejo de la población, la orientación en la recolección de los datos, el uso de los datos y su conversión en información, hasta llegar a establecer conclusiones con alto nivel científico, al ser la estadística, la herramienta matemática que ofrece la valoración asertiva de los datos cuantitativos. 
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis   

</template>

<script>
export default {
  name: 'Sintesis',
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
