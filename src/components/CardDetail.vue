<template lang="">
    <!-- cartas -->
    <section class="container" id="productos">
      <h1 class=" text-center">Nuestros Productos</h1>
      <div class="row">
        <!-- primera -->
        <div class="col-sm-4 col-12 px-5 mb-4">
          <div class="card">
            <img src="../assets/img/colaciones.jpg" class="card-img-top" alt="colaciones" />
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ titulo }}</h5>
              <p class="card-text">{{ mensaje }}
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Ver más</a>
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
      titulo: {
        type: String,      // Tipo de dato
        required: true     // Es obligatorio
      },
      mensaje: {
        type: String,
        default: 'Mensaje predeterminado'  // Valor por defecto
      }
    }
  };
  </script>
  
  <style>
  .tarjeta {
    border: 1px solid #ccc;
    padding: 16px;
    margin: 8px;
    border-radius: 8px;
  }
  </style>
  