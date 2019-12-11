<template>
  <div class="container">
    <Hero />
    <Products />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Products from '~/components/Products.vue'

export default {
  components: {
    Hero,
    Products
  }
}
</script>
