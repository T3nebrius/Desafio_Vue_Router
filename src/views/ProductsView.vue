<template>
  <div class="container">
    <h1>Escoja alguno de nuestros productos</h1>
    <div class="d-flex flex-row bd-highlight mb-3">
      <div class="p-2 bd-highlight">
        <Card title="Colaciones Saludables" text="Una opción nutritiva para todos los días." :imagen="require('@/assets/img/colaciones.jpg')" />
      </div>
      <div class="p-2 bd-highlight">
        <Card title="Postres" text="Disfruta de un dulce capricho al final del día." :imagen="require('@/assets/img/dulces.jpg')" />
      </div>
      <div class="p-2 bd-highlight">
        <Card title="Bebidas" text="Refresca tu día con nuestras bebidas seleccionadas." :imagen="require('@/assets/img/bebidas.jpg')" />
      </div>
    </div>
    <h4><router-link :to="{name: 'home'}">VOLVER</router-link></h4>
  </div>
</template>

<script>

import Card from '@/components/Card.vue'

export default {
  components: {
    Card
  }
}
</script>
