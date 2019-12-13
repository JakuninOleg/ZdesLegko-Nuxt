<template>
  <vueper-slides :slide-ratio="1/3" :dragging-distance="15" :infinite="true" class="no-shadow" fixed-height="715px">
    <template v-slot:arrow-left>
      <Arrow class="arrow arrow--left" />
    </template>
    <template v-slot:arrow-right>
      <Arrow class="arrow arrow--right" />
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
              <h1 v-html="slide.title" class="heading-1" />
            </div>
            <div class="hero__content-description">
              <h2 class="heading-2">
                {{ slide.description }}
              </h2>
            </div>
            <div class="hero__content-cta">
              <button class="btn btn--yellow">
                Подробнее
              </button>
            </div>
            <template>
              <picture :style="slide.style" :class="'hero__content-image--' + (index + 1)" class="hero__content-image">
                <source :srcSet="require('~/assets/images/' + slide.image + '?webp')" type="image/webp">
                <source :srcSet="require('~/assets/images/' + slide.image + '?resize')" type="image/png">
                <img :src="require('~/assets/images/' + slide.image + '?sqip')" loading="lazy">
              </picture>
            </template>
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
          title: 'Лизинг транспортных <span style="display: block">средств</span>',
          description: 'Универсальное решение финансовых вопросов',
          image: 'bg-1.png'
        },
        {
          background:
            'background: linear-gradient(206.14deg, #7977F1 -25.16%, #3A3897 100%);',
          title: 'Деньги под залог<span style="display: block">ПТС автомобиля</span>',
          description: 'Универсальное решение финансовых вопросов',
          image: 'bg-2.png'
        },
        {
          background:
            'background: linear-gradient(207.52deg, #707C92 4.56%, #4E5869 100%);',
          title: 'Займ без залога <span style="display: block">до 60 000 ₽</span>',
          description: 'Потребительский кредит с удобным графиком платежей',
          image: 'bg-3.png'
        },
        {
          background:
            'background: linear-gradient(208.19deg, #29ABE2 -44.58%, #4F00BC 113.08%);',
          title: 'Рефинансирование кредита',
          description: 'Кредитные каникулы для тех, кто устал платить много',
          image: 'bg-4.png'
        },
        {
          background: 'background: linear-gradient(200.16deg, #03CD0B -102.38%, #0081CA 100%);mix-blend-mode: darken;',
          title: 'Сбережение <span style="display: block">и инвестирование</span>',
          description: 'Здесь помогут заработать больше и сохранить надежнее',
          image: 'bg-5.png'
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
  opacity: 1;
}

.arrow {
  padding: 0;

  &--left {
    transform: rotate(180deg) translateX(-2px);
  }

  &--right {
    transform: translateX(-2px);
  }

}
</style>
