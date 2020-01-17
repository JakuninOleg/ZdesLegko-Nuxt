<template>
  <section class="product-calculator">
    <div class="product-calculator__content">
      <h2 class="heading-2">
        Подберите свой займ
      </h2>

      <div class="product-calculator__container">
        <div class="product-calculator__container-input">
          <div class="product-calculator__input-wrapper">
            <div class="product-calculator__input-container">
              <input
                id="credit-sum"
                ref="currencyInput"
                v-model="formattedSum"
                @focus="focusSum"
                @blur="blurSum"
                @input="inputSum"
                class="product-calculator__input"
                type="text"
              >
              <label for="credit-sum" class="product-calculator__label">Желаемая сумма</label>
              <span class="product-calculator__slider">
                <VueSlider
                  v-model="sum"
                  :dot-size="21"
                  :min="50000"
                  :max="1000000"
                  :interval="50000"
                  :silent="true"
                  @change="formatSliderSum"
                  tooltip="none"
                >
                  <template v-slot:dot>
                    <span class="vue-slider-dot">
                      <span class="vue-slider-dot__inside" />
                    </span>
                  </template>
                </VueSlider>
              </span>
            </div>
            <div class="product-calculator__input-tooltips">
              <span class="product-calculator__input-tooltip">50 000
                <span class="product-calculator__input-tooltip-rub">рублей</span></span>
              <span class="product-calculator__input-tooltip">1 000 000
                <span class="product-calculator__input-tooltip-rub">рублей</span></span>
            </div>
          </div>

          <div class="product-calculator__input-wrapper">
            <div class="product-calculator__input-container">
              <input
                id="credit-month"
                v-model="formattedDays"
                @focus="focusDays"
                @blur="blurDays"
                @input="inputDays"
                class="product-calculator__input"
              >
              <label for="credit-month" class="product-calculator__label">Срок займа</label>
              <span class="product-calculator__slider">
                <VueSlider
                  v-model="days"
                  :min="1"
                  :dot-size="21"
                  :max="36"
                  :silent="true"
                  @change="formatSliderDays"
                  tooltip="none"
                  class="vue-slider-kek"
                >
                  <template v-slot:dot>
                    <span class="vue-slider-dot">
                      <span class="vue-slider-dot__inside" />
                    </span>
                  </template>
                </VueSlider>
              </span>
            </div>
            <div class="product-calculator__input-tooltips">
              <span class="product-calculator__input-tooltip">1 месяц</span>
              <span class="product-calculator__input-tooltip">36 месяцев</span>
            </div>
          </div>
        </div>

        <div class="product-calculator__legal">
          Пример расчета условий по займу носит исключительно информационный
          характер и не является публичной офертой
        </div>

        <div class="product-calculator__container-result">
          <div class="product-calculator__circle">
            <div class="product-calculator__data">
              <div class="product-calculator__result-title">
                Процентная ставка
              </div>
              <div class="product-calculator__result-number">
                {{ percent }} %
              </div>
              <div class="product-calculator__result-title">
                Ежемесячный платеж
              </div>
              <div class="product-calculator__result-number">
                {{ percent }} ₽
              </div>
            </div>
            <div class="product-calculator__circle-chart">
              <svg
                width="275"
                height="275"
                viewBox="0 0 33.83098862 33.83098862"
                class="circle-chart"
              >
                <circle
                  cx="16.91549431"
                  cy="16.91549431"
                  r="15.91549430918954"
                  fill="#fff"
                />
                <circle
                  cx="16.91549431"
                  cy="16.91549431"
                  r="15.91549430918954"
                  fill="transparent"
                  stroke="#ffd524"
                  stroke-width="1"
                  stroke-linecap="round"
                />

                <circle
                  :stroke-dasharray="percent + ',100'"
                  class="circle-chart__circle"
                  cx="16.91549431"
                  cy="16.91549431"
                  r="15.91549430918954"
                  fill="transparent"
                  stroke="#3296D8"
                  stroke-width="1"
                  stroke-linecap="round"
                />
              </svg>
              <div class="product-calculator__circle-inner">
                <div class="product-calculator__circle-text">
                  Общая сумма платежей
                </div>
                <div class="product-calculator__circle-percent">
                  {{ percent * 1000 }}
                </div>
                <div class="product-calculator__circle-text">
                  за {{ percent }} месяцев
                </div>
              </div>
            </div>
          </div>
          <div class="product-calculator__legend">
            <div class="product-calculator__legend-item">
              <span
                class="product-calculator__legend-circle product-calculator__legend-circle--sum"
              />
              <span class="product-calculator__legend-title">
                Основная сумма
              </span>
              <span class="product-calculator__legend-sum">
                ₽ {{ percent * 10 }}
              </span>
            </div>
            <div class="product-calculator__legend-item">
              <span
                class="product-calculator__legend-circle product-calculator__legend-circle--percent"
              />
              <span class="product-calculator__legend-title">
                Проценты
              </span>
              <span class="product-calculator__legend-sum">
                ₽ {{ percent * 10 }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <RecommendedSwiper />
    </div>
  </section>
</template>

<script>
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import RecommendedSwiper from '~/components/RecommendedSwiper'
import 'vue-slider-component/dist-css/vue-slider-component.css'

export default {
  components: {
    VueSlider,
    RecommendedSwiper
  },
  data () {
    return {
      sum: 50000,
      formattedSum: '50 000 рублей',
      formattedDays: '1 год',
      days: 12
    }
  },
  computed: {
    percent () {
      return Math.ceil(this.sum * 0.0001)
    }
  },
  methods: {
    formatSliderSum () {
      this.formattedSum = this.formatSum()
    },
    formatSliderDays () {
      this.formattedDays = this.formatDays()
    },
    focusSum () {
      this.formattedSum = this.sum
    },
    blurSum () {
      if (this.formattedSum < 50000) {
        this.formattedSum = 50000
        this.sum = this.formattedSum
      }
      this.formattedSum = this.formatSum()
    },
    inputSum () {
      this.formattedSum = parseInt(this.formattedSum)
      if (this.formattedSum > 1000000) {
        this.formattedSum = 1000000
      } else if (this.formattedSum < 0) {
        this.formattedSum = 50000
      } else if (isNaN(this.formattedSum)) {
        this.formattedSum = 50000
      }
      this.sum = this.formattedSum
    },
    focusDays () {
      this.formattedDays = this.days
    },
    blurDays () {
      this.formattedDays = this.formatDays()
    },
    inputDays () {
      this.formattedDays = parseInt(this.formattedDays)
      if (this.formattedDays > 36) {
        this.formattedDays = 36
      } else if (this.formattedDays < 1) {
        this.formattedDays = 1
      } else if (isNaN(this.formattedDays)) {
        this.formattedDays = 12
      }
      this.days = this.formattedDays
    },
    formatSum () {
      return this.formatSumMixin(this.sum, ' рублей')
    },
    formatDays () {
      return this.formatDaysMixin(this.days)
    }
  }
}
</script>
