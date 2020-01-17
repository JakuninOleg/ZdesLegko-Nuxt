<template>
  <div class="container">
    <Hero />
    <Products />
    <ProductCalculator />
    <PersonalAccount />
    <Benefits />
    <InvestmentCalculator />
    <News />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue';
import Products from '~/components/Products.vue';
import ProductCalculator from '~/components/ProductCalculator.vue';
import PersonalAccount from '~/components/PersonalAccount';
import Benefits from '~/components/Benefits.vue';
import InvestmentCalculator from '~/components/InvestmentCalculator.vue';
import News from '~/components/News.vue';

export default {
  components: {
    Hero,
    Products,
    ProductCalculator,
    PersonalAccount,
    Benefits,
    InvestmentCalculator,
    News
  }
}
</script>
