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
    fixed-height="520px"
  >
    <vueper-slide v-for="(slide, i) in slides" :key="i">
      <template v-slot:content>
        <div class="product-card">
          <template>
            <picture :style="slide.style">
              <source :srcSet="require('~/assets/images/' + slide.image + '?webp')" type="image/webp">
              <source :srcSet="require('~/assets/images/' + slide.image + '?resize')" type="image/png">
              <img :src="require('~/assets/images/' + slide.image + '?sqip')" loading="lazy" class="product-card__image">
            </picture>
          </template>
          <ul class="product-card__list">
            <li v-for="(benefit, index) in slide.benefits" :key="index">
              {{ benefit }}
            </li>
          </ul>
          <button class="btn">
            Оставить заявку
          </button>
        </div>
      </template>
    </vueper-slide>
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
      slides: [
        {
          image: 'bg-1.png',
          name: 'Деньги под авто',
          benefits: ['до 50 000 рублей или до 90% стоимости авто', 'досрочное погашение', 'одобрение за 15 минут']
        }
      ],
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
