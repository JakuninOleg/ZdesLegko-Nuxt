<template>
  <vueper-slides :slide-ratio="1/3" :dragging-distance="35" :infinite="false" class="no-shadow" fixed-height="715px">
    <template v-slot:arrow-left>
      <Arrow class="arrow-left" />
    </template>
    <template v-slot:arrow-right>
      <Arrow class="arrow-right" />
    </template>
    <vueper-slide
      v-for="(slide, index) in slides"
      :key="index"
      :style="slide.background"
    >
      <template v-slot:content>
        <div class="hero__container">
          <div class="hero__content">
            <div class="hero__content-title">
              <h1 class="heading-1">
                {{ slide.title }}
              </h1>
            </div>
            <div class="hero__content-description">
              <h2 class="heading-2">
                {{ slide.description }}
              </h2>
            </div>
            <img src="~/assets/images/bg-1.png" alt="">
          </div>
        </div>
      </template>
    </vueper-slide>
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import Arrow from '@/assets/icons/arrow.svg'

export default {
  components: {
    VueperSlides,
    VueperSlide,
    Arrow
  },
  data () {
    return {
      slides: [
        {
          background:
            'background: radial-gradient(39.45% 101.38% at 60.55% 69.54%, #494B4E 0.36%, #3D4347 100%);',
          image: '~/assets/images/bg-1.png',
          title: 'Лизинг транспортных средств',
          description: 'Универсальное решение финансовых вопросов'
        },
        {
          background:
            'background: linear-gradient(206.14deg, #7977F1 -25.16%, #3A3897 100%);',
          image: '~/assets/images/bg-2.png',
          title: 'Деньги под залог ПТС автомобиля',
          description: 'Универсальное решение финансовых вопросов'
        },
        {
          background:
            'background: linear-gradient(207.52deg, #707C92 4.56%, #4E5869 100%);',
          title: 'Займ без залога до 60 000 ₽',
          description: 'Потребительский кредит с удобным графиком платежей'
        },
        {
          background:
            'background: linear-gradient(208.19deg, #29ABE2 -44.58%, #4F00BC 113.08%);',
          title: 'Рефинансирование кредита',
          description: 'Кредитные каникилу для тех, кто устал платить много'
        }
      ]
    }
  }
}
</script>

<style lang='scss'>
.vueperslides__bullet {
  background-color: var(--color-grey-light-2);
  border: none;
  box-shadow: none;
  transition: 0.4s ease-out;
  width: 8px;
  height: 8px;

  &--active {
    background-color: var(--color-white-light-2);
    width: 47px;
    height: 8px;
  }
}

.vueperslides__arrow {
  border: 0.5px solid #c4c4c4;
  height: 40px;
  width: 40px;

  &--next {
    right: 5%;
  }

  &--prev {
    left: 5%;
  }
}

.vueperslides__arrow svg {
  padding: 0;
  color: white;
}

.arrow-left {
  transform: rotate(180deg) translateX(-2px);
  color: white;
}

.arrow-right {
  transform: translateX(-2px);
}
</style>
