<template>
  <div v-swiper:myRecommendedSwiper="swiperOption">
    <div class="swiper-wrapper">
      <div v-for="(slide, index) in slides" :key="index" class="swiper-slide swiper-slide--recommended">
        <nuxt-link :style="slide.style" to="/products" class="link">
          <div :style="slide.style" class="recommended-card">
            <div class="recommended-card__content-big">
              <h4 class="heading-4 recommended-heading">
                {{ slide.name }}
              </h4>
              <div class="recommended-card__rates">
                <div class="recommended-card__rates-item">
                  <span class="recommended-card__rate">{{ slide.term }}</span>
                  <span class="recommended-card__desc">месяцев</span>
                </div>
                <div class="recommended-card__rates-item">
                  <span class="recommended-card__rate">{{ slide.rate }}</span>
                  <span class="recommended-card__desc">годовых</span>
                </div>
              </div>
              <div class="recommended-card__info">
                Заключение договора - 15 минут
              </div>
              <div :style="slide.style" v-if="slide.intersection" class="recommended-card__intersection" />
              <template>
                <figure class="recommended-card__image">
                  <picture>
                    <source :srcSet="require('~/assets/images/' + slide.image + '?webp')" type="image/webp">
                    <source :srcSet="require('~/assets/images/' + slide.image + '?resize')" type="image/png">
                    <img :src="require('~/assets/images/' + slide.image + '?sqip')" :class="'recommended-card__image--' + (index + 1)" :alt="slide.name" loading="lazy" class="recommended-card__image lazyload">
                  </picture>
                </figure>
              </template>
            </div>

            <div :style="slide.smallMainBackground" class="recommended-card__content--small">
              <div class="recommended-card__image-container-small">
                <template>
                  <figure class="recommended-card__figure-small">
                    <picture>
                      <source :srcSet="require('~/assets/images/' + slide.image + '?webp')" type="image/webp">
                      <source :srcSet="require('~/assets/images/' + slide.image + '?resize')" type="image/png">
                      <img :src="require('~/assets/images/' + slide.image + '?sqip')" :class="'recommended-card__image-small-' + (index + 1)" :alt="slide.name" loading="lazy" class="recommended-card__image-small lazyload">
                    </picture>
                  </figure>
                </template>
              </div>
              <div v-if="slide.intersection" :style="slide.smallContentBackground" class="recommended-card__intersection" />
              <div :style="slide.smallContentBackground" class="recommended-card__content-small">
                <div class="recommended-card__content-small-content">
                  <div class="recommended-card__content-small-title">
                    <h4 class="heading-4 recommended-heading">
                      {{ slide.name }}
                    </h4>
                  </div>
                  <div class="recommended-card__content-description">
                    <div class="recommended-card__rates">
                      <div class="recommended-card__rates-item">
                        <span class="recommended-card__rate">{{ slide.term }}</span>
                        <span class="recommended-card__desc">месяцев</span>
                      </div>
                      <div class="recommended-card__rates-item">
                        <span class="recommended-card__rate">{{ slide.rate }}</span>
                        <span class="recommended-card__desc">годовых</span>
                      </div>
                    </div>
                    <div class="recommended-card__info">
                      Заключение договора - 15 минут
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nuxt-link>
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
        speed: 400,
        breakpoints: {
          900: {
            slidesOffsetAfter: 0
          }
        }
      }
    }
  }
}
</script>
