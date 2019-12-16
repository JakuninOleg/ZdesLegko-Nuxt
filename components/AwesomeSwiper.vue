<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div v-for="(slide, index) in slides" :key="index" class="swiper-slide">
        <div class="product-card">
          <template>
            <picture :style="slide.style">
              <source :srcSet="require('~/assets/images/' + slide.image + '?webp')" type="image/webp">
              <source :srcSet="require('~/assets/images/' + slide.image + '?resize')" type="image/png">
              <img :src="require('~/assets/images/' + slide.image + '?sqip')" loading="lazy" class="product-card__image">
            </picture>
          </template>
          <div class="product-card__content">
            <h4 class="heading-4">
              {{ slide.name }}
            </h4>
            <ul class="product-card__list">
              <li v-for="(benefit, i) in slide.benefits" :key="i">
                {{ benefit }}
              </li>
            </ul>
            <button class="btn btn--blue">
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        slidesOffsetAfter: 300,
        spaceBetween: 20,
        freeMode: true,
        speed: 400
      }
    }
  }
}
</script>
