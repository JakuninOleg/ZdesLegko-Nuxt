<template>
  <section class="recommended-swiper">
    <header class="recommended-swiper__header">
      <div class="recommended-swiper__header-title">
        <h4 class="heading-4 recommended-swiper__header-heading">
          Вам подходит
        </h4>
        <nuxt-link to="/products" class="link link--swiper">
          Все продукты
        </nuxt-link>
      </div>
      <div class="arrows products__controls-item">
        <button @click="prevSlide" class="btn arrows__button" aria-label="Prev Slide">
          <span class="arrows__arrow arrows__button--left" />
        </button>
        <button @click="nextSlide" class="btn arrows__button" aria-label="Next Slide">
          <span class="arrows__arrow arrows__button--right" />
        </button>
      </div>
    </header>
    <AwesomeSwiperRecommended ref="recommendedSlider" :slides="allSlides" />
  </section>
</template>

<script>
import AwesomeSwiperRecommended from '~/components/AwesomeSwiperRecommended'

export default {
  components: {
    AwesomeSwiperRecommended
  },
  data () {
    return {
      allSlides: [
        {
          image: 'bg-1.png',
          name: 'Лизинг авто',
          style: 'background: radial-gradient(39.45% 101.38% at 60.55% 69.54%, #494B4E 0.36%, #3D4347 100%);',
          term: '12',
          rate: '12.5%'
        },
        {
          image: 'bg-3.png',
          name: 'Займы товарищам',
          term: '12',
          rate: '12.5%',
          style: 'background: linear-gradient(207.52deg, #707C92 4.56%, #4E5869 100%);'
        },
        {
          image: 'bg-4.png',
          name: 'Кредитные каникулы',
          term: '12',
          rate: '12.5%',
          style: 'background: linear-gradient(208.19deg, #29ABE2 -44.58%, #4F00BC 113.08%);'
        },
        {
          image: 'bg-2.png',
          name: 'Экспресс займы',
          term: '12',
          rate: '12.5%',
          style: 'background: linear-gradient(206.14deg, #7977F1 -25.16%, #3A3897 100%);'
        }
      ],
      choice: 'Все',
      slides: []
    }
  },
  methods: {
    nextSlide () {
      this.$refs.recommendedSlider.myRecommendedSwiper.slideNext()
    },
    prevSlide () {
      this.$refs.recommendedSlider.myRecommendedSwiper.slidePrev()
    }
  }
}
</script>
