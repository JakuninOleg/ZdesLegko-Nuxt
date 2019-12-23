<template>
  <div class="container">
    <Hero />
    <Products />
    <ProductCalculator />
    <PersonalAccount />
    <Benefits />
    <InvestmentCalculator />
    <News />
    <Footer />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Products from '~/components/Products.vue'
import ProductCalculator from '~/components/ProductCalculator.vue'
// import Benefits from '~/components/Benefits.vue'
// import InvestmentCalculator from '~/components/InvestmentCalculator.vue'
// import News from '~/components/News.vue'
// import Footer from '~/components/Footer.vue'
import PersonalAccount from '~/components/PersonalAccount'

export default {
  components: {
    Hero,
    Products,
    ProductCalculator,
    // Benefits,
    // InvestmentCalculator,
    // News,
    // Footer,
    PersonalAccount
  }
}
</script>
