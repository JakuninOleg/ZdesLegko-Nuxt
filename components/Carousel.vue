<template>
  <div v-swiper:mySwiper="swiperOption" class="swiper-container--hero">
    <div class="swiper-wrapper">
      <div v-for="(slide, index) in slides" :key="index" class="swiper-slide">
        <div
          :style="slide.background"
          class="hero__container hero__container--big"
        >
          <div class="hero__content">
            <div class="hero__content-title">
              <h1 v-html="slide.title" class="heading-1" />
            </div>
            <div class="hero__content-description">
              <h5 class="heading-5">
                {{ slide.description }}
              </h5>
            </div>
            <div class="hero__content-cta">
              <button class="btn btn--yellow">
                Подробнее
              </button>
            </div>
            <template>
              <figure class="hero__content-figure">
                <picture>
                  <source
                    :srcSet="
                      require('~/assets/images/' + slide.image + '?webp')
                    "
                    type="image/webp"
                  >
                  <source
                    :srcSet="
                      require('~/assets/images/' + slide.image + '?resize')
                    "
                    type="image/png"
                  >
                  <img
                    :src="require('~/assets/images/' + slide.image + '?sqip')"
                    :alt="slide.title"
                    :class="'hero__content-image--' + (index + 1)"
                  >
                </picture>
              </figure>
            </template>
          </div>
        </div>

        <div
          :style="slide.smallMainBackground"
          class="hero__container hero__container--small"
        >
          <div class="hero__image-container">
            <figure class="hero__content-figure--small">
              <picture>
                <source
                  :srcSet="require('~/assets/images/' + slide.image + '?webp')"
                  type="image/webp"
                >
                <source
                  :srcSet="
                    require('~/assets/images/' + slide.image + '?resize')
                  "
                  type="image/png"
                >
                <img
                  :src="require('~/assets/images/' + slide.image + '?sqip')"
                  :alt="slide.title"
                  :class="'hero__content-image--small--' + (index + 1)"
                  class="hero__content-image--small"
                >
              </picture>
            </figure>
            <div
              v-if="slide.intersection"
              :style="slide.smallContentBackground"
              class="hero__content-intersection"
            />
          </div>
          <div
            :style="slide.smallContentBackground"
            class="hero__content-container"
          >
            <div class="hero__content-title">
              <h1 v-html="slide.title" class="heading-1" />
            </div>
            <div class="hero__content-description">
              <h5 class="heading-5">
                {{ slide.description }}
              </h5>
            </div>
            <div class="hero__content-cta">
              <button class="btn btn--yellow">
                Подробнее
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div slot="pagination" class="swiper-pagination" />
    <div slot="button-prev" class="swiper-button swiper-button--prev">
      <Arrow class="arrow--left" />
    </div>
    <div slot="button-next" class="swiper-button swiper-button--next">
      <Arrow class="arrow--right" />
    </div>
  </div>
</template>

<script>
import Arrow from '~/assets/icons/arrow.svg'

export default {
  components: {
    Arrow
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        speed: 500,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button--next',
          prevEl: '.swiper-button--prev'
        }
      },
      slides: [
        {
          background:
            'background: radial-gradient(39.45% 101.38% at 60.55% 69.54%, #494B4E 0.36%, #3D4347 100%);',
          title:
            'Лизинг транспортных <span style="display: block">средств</span>',
          description: 'Универсальное решение финансовых вопросов',
          image: 'bg-1.png',
          smallMainBackground:
            'background: radial-gradient(39.45% 101.38% at 60.55% 69.54%, #494B4E 0.36%, #3D4347 100%);',
          smallContentBackground: '',
          fullImage: false,
          intersection: false
        },
        {
          background:
            'background: linear-gradient(206.14deg, #7977F1 -25.16%, #3A3897 100%);',
          title:
            'Деньги под залог<span style="display: block">ПТС автомобиля</span>',
          description: 'Универсальное решение финансовых вопросов',
          image: 'bg-2.png',
          smallMainBackground:
            'background: linear-gradient(206.14deg, #7977F1 -25.16%, #3A3897 100%);',
          smallContentBackground: '',
          fullImage: false,
          intersection: false
        },
        {
          background:
            'background: linear-gradient(207.52deg, #707C92 4.56%, #4E5869 100%);',
          title:
            'Займ без залога <span style="display: block">до 60 000 ₽</span>',
          description: 'Потребительский кредит с удобным графиком платежей',
          image: 'bg-3.png',
          smallMainBackground:
            'background: linear-gradient(241.81deg, #7B88A0 4.56%, #586377 100%)',
          smallContentBackground:
            'background: linear-gradient(225.88deg, #656F82 0.76%, #4A5363 100%)',
          fullImage: false,
          intersection: true
        },
        {
          background:
            'background: linear-gradient(208.19deg, #29ABE2 -44.58%, #4F00BC 113.08%);',
          title: 'Рефинансирование кредита',
          description: 'Кредитные каникулы для тех, кто устал платить много',
          image: 'bg-4.png',
          smallMainBackground:
            'background: linear-gradient(242.48deg, #2EA9DD -44.58%, #7329D8 113.08%)',
          smallContentBackground:
            'background: linear-gradient(223.93deg, #2EA9DD -44.58%, #7329D8 113.08%)',
          fullImage: false,
          intersection: true
        },
        {
          background:
            'background: linear-gradient(200.16deg, #03CD0B -102.38%, #0081CA 100%);mix-blend-mode: darken;',
          title:
            'Сбережение <span style="display: block">и инвестирование</span>',
          description: 'Здесь помогут заработать больше и сохранить надежнее',
          image: 'bg-5.png',
          smallMainBackground:
            'background: linear-gradient(232.74deg, #03CD0B -102.38%, #0081CA 100%)',
          smallContentBackground:
            'background: linear-gradient(213.42deg, #03CD0B -102.38%, #0081CA 100%)',
          fullImage: false,
          intersection: true
        }
        // {
        //   background: 'background: #3F4ACD',
        //   title: 'Большие возможности<span style="display: block">для малого бизнеса</span>',
        //   description: 'Финансирование ИП и самозанятых в день обращения',
        //   image: 'business.jpg',
        //   smallMainBackground: 'background: #3F4ACD',
        //   smallContentBackground: 'background: #3F4ACD',
        //   fullImage: false,
        //   intersection: false
        // }
      ]
    }
  }
}
</script>
