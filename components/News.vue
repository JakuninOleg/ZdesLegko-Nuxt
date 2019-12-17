<template>
  <section class="news">
    <div class="news__content">
      <header class="recommended-swiper__header">
        <div class="recommended-swiper__header-title">
          <h4 class="heading-4 recommended-swiper__header-heading">
            Новостной журнал
          </h4>
          <nuxt-link to="/blog" class="link link--swiper">
            Все новости
          </nuxt-link>
        </div>
        <div class="arrows products__controls-item">
          <button @click="prevSlide" class="btn arrows__button">
            <span class="arrows__arrow arrows__button--left" />
          </button>
          <button @click="nextSlide" class="btn arrows__button">
            <span class="arrows__arrow arrows__button--right" />
          </button>
        </div>
      </header>
      <AwesomeSwiperNews ref="newsSlider" :slides="allSlides" />
    </div>
  </section>
</template>

<script>
import AwesomeSwiperNews from '~/components/AwesomeSwiperNews'

export default {
  components: {
    AwesomeSwiperNews
  },
  data () {
    return {
      allSlides: [
        {
          image: 'news-1.png',
          name: 'Беру деньги под ПТС на новогодние каникулы по минимальной ставке от 1,5%',
          date: '18.12.2014'
        },
        {
          image: 'news-2.png',
          name: 'Инструкция: что делать при банкротстве кредитного потребительского кооператива?',
          date: '30.10.2017'
        },
        {
          image: 'news-3.png',
          name: 'Ломбарды: история, современность и перспективы',
          date: '06.05.2018'
        },
        {
          image: 'news-4.png',
          name: 'Готовимся к отпуску: правила финансовой безопасности за рубежом',
          date: '21.02.2019'
        }
      ],
      choice: 'Все',
      slides: []
    }
  },
  methods: {
    nextSlide () {
      this.$refs.newsSlider.newsSwiper.slideNext()
    },
    prevSlide () {
      this.$refs.newsSlider.newsSwiper.slidePrev()
    }
  }
}
</script>
