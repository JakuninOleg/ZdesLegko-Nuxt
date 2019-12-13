<template>
  <div class="container">
    <Hero />
    <Products />
    <ProductCalculator />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Products from '~/components/Products.vue'
import ProductCalculator from '~/components/ProductCalculator.vue'

export default {
  components: {
    Hero,
    Products,
    ProductCalculator
  }
}
</script>
