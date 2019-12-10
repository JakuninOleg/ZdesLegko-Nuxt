<template>
  <section class="hero">
    <Carousel />
    <Navigation />
  </section>
</template>

<script>
import Navigation from '~/components/Navigation'
import Carousel from '~/components/Carousel'

export default {
  components: {
    Navigation,
    Carousel
  }
}
</script>
