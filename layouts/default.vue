<template>
  <div>
    <Navigation />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Navigation from '~/components/Navigation'
export default {
  components: {
    Navigation,
    Footer
  }
}
</script>
