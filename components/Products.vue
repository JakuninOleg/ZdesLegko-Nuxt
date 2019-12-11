<template>
  <section class="products">
    <div class="products__content">
      <header class="products__header">
        <h3 class="heading-3">
          Лучшие продукты
        </h3>
      </header>
    </div>
    <ProductsCarousel />
  </section>
</template>

<script>
import ProductsCarousel from '~/components/ProductsCarousel'

export default {
  components: {
    ProductsCarousel
  }
}
</script>
