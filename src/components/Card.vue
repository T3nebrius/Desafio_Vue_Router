<template lang="">
  <section class="container" id="productos">
    <div class="row">
      <div class="col-sm-12 col-12 px-5 mb-4">
        <div class="card">
          <img :src=imagen class="card-img-top" alt="colaciones" />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ title }}</h5>
            <p class="card-text">
              {{ text }}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Ver mÃ¡s</a>
            <a href="#" class="card-link">Comprar</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    title: String,
    text: String, 
    imagen: String
  }
}
</script>