<template>
  <section class="products">
    <div class="products__content">
      <header class="products__header">
        <h3 class="heading-3">
          Лучшие продукты
        </h3>
        <div class="products__controls">
          <button :class="choice == 'Все' ? 'products__controls-item--active' : ''" @click="showAllProducts" class="btn products__controls-item">
            Всем
          </button>
          <button :class="choice == 'Частные' ? 'products__controls-item--active' : ''" @click="showPrivateProducts" class="btn products__controls-item">
            Частным клиентам
          </button>
          <button :class="choice == 'Бизнес' ? 'products__controls-item--active' : ''" @click="showBusinessProducts" class="btn products__controls-item">
            Бизнес клиентам
          </button>
          <div class="arrows products__controls-item">
            <button @click="prevSlide" class="btn arrows__button">
              <span class="arrows__arrow arrows__button--left" />
            </button>
            <button @click="nextSlide" class="btn arrows__button">
              <span class="arrows__arrow arrows__button--right" />
            </button>
          </div>
        </div>
      </header>
    </div>
    <AwesomeSwiper ref="slider" :slides="slides" />
  </section>
</template>

<script>
import AwesomeSwiper from '~/components/AwesomeSwiper'

export default {
  components: {
    AwesomeSwiper
  },
  data () {
    return {
      allSlides: [
        {
          image: 'pc-1.png',
          name: 'Деньги под авто',
          benefits: ['до 50 000 рублей или до 90% стоимости авто', 'досрочное погашение', 'одобрение за 15 минут'],
          private: true,
          business: true
        },
        {
          image: 'pc-2.png',
          name: 'Займы для бизнеса',
          benefits: ['уникальные условия и выезд менеджера', 'до 15 000 000 рублей', 'до 36 месяцев'],
          private: false,
          business: true
        },
        {
          image: 'pc-3.png',
          name: 'Кредитные каникулы',
          benefits: ['рефинансирование со скидкой', 'от 200 000  до 5 млн. рублей', 'до 36 месяцев'],
          private: true,
          business: true
        },
        {
          image: 'pc-4.png',
          name: 'Экспресс займы',
          benefits: ['без залога', 'до 60 000 рублей', 'одобрение за 15 минут'],
          private: true,
          business: false
        }
      ],
      choice: 'Все',
      slides: []
    }
  },
  mounted () {
    this.slides = this.allSlides
  },
  methods: {
    showAllProducts () {
      this.choice = 'Все'
      this.slides = this.allSlides
    },
    showBusinessProducts () {
      this.choice = 'Бизнес'
      this.slides = this.allSlides.filter(el => el.business === true)
    },
    showPrivateProducts () {
      this.choice = 'Частные'
      this.slides = this.allSlides.filter(el => el.private === true)
    },
    nextSlide () {
      this.$refs.slider.mySwiper.slideNext()
    },
    prevSlide () {
      this.$refs.slider.mySwiper.slidePrev()
    }
  }
}
</script>
