<template>
  <div>
    <vueper-slides
      class="no-shadow"
      bullets-outside
      transition-speed="250"
      :infinite="false"
    >
      <vueper-slide
        v-for="i in 5"
        :key="i"
        :title="i.toString()"
      />
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  components: {
    VueperSlides,
    VueperSlide
  }
}
</script>

<style>

</style>
