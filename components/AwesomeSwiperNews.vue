<template>
  <div v-swiper:newsSwiper="swiperOption">
    <div class="swiper-wrapper">
      <div v-for="(slide, index) in slides" :key="index" class="swiper-slide">
        <div class="news-card">
          <template>
            <picture>
              <source :srcSet="require('~/assets/images/' + slide.image + '?webp')" type="image/webp">
              <source :srcSet="require('~/assets/images/' + slide.image + '?resize')" type="image/png">
              <img :src="require('~/assets/images/' + slide.image + '?sqip')" loading="lazy" class="product-card__image">
            </picture>
          </template>
          <div class="news-card__content">
            <span class="news-card__date">
              {{ slide.date }}
            </span>
            <p class="news-card__title">
              {{ slide.name }}
            </p>
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
