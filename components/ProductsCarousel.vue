<template>
  <vueper-slides
    :class="{ 'offset-slide--first': firstSlide, 'offset-slide--last': lastSlide }"
    @before-slide="beforeSlide"
    :visible-slides="3"
    :slide-ratio="1/4"
    :dragging-distance="35"
    :arrows-outside="false"
    class="no-shadow"
    show-multiple-slides="show-multiple-slides"
  >
    <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.toString()" />
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  components: {
    VueperSlides,
    VueperSlide
  },
  data () {
    return {
      slides: [1, 2, 3, 4, 5, 6],
      firstSlide: true,
      lastSlide: false
    }
  },
  methods: {
    beforeSlide ({ nextSlide }) {
      this.firstSlide = !nextSlide.index
      this.lastSlide = nextSlide.index === this.slides.length - 1
    }
  }
}
</script>

<style lang="scss">
.offset-slide--first {
  .vueperslides__track-inner {
    transform: translate3d(15rem, 0px, 0px) !important;
  }
}

.offset-slide--last {
  .vueperslides__track-inner {
    transform: translate3d(-133.33%, 0px, 0px) !important;
  }
}
</style>
