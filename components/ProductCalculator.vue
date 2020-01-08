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
                min="5000"
                class="product-calculator__input"
                type="text"
              >
              <label for="credit-sum" class="product-calculator__label">Желаемая сумма</label>
              <span class="product-calculator__slider">
                <VueSlider
                  v-model="sum"
                  :dotSize="21"
                  :min="50000"
                  :max="1000000"
                  :interval="50000"
                  @change="formatSliderValue"
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
              <span class="product-calculator__input-tooltip">5 000 <span class="product-calculator__input-tooltip-rub">рублей</span></span>
              <span class="product-calculator__input-tooltip">1 000 000 <span class="product-calculator__input-tooltip-rub">рублей</span></span>
            </div>
          </div>

          <div class="product-calculator__input-wrapper">
            <div class="product-calculator__input-container">
              <input id="credit-month" v-model.number="month" class="product-calculator__input">
              <label for="credit-month" class="product-calculator__label">Срок займа</label>
              <span class="product-calculator__slider">
                <VueSlider
                  v-model="month"
                  :min="1"
                  :dotSize="21"
                  :max="36"
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
          Пример расчета условий по займу носит исключительно информационный характер и не является публичной офертой
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
              <svg width="275" height="275" viewBox="0 0 33.83098862 33.83098862" class="circle-chart">
                <circle cx="16.91549431" cy="16.91549431" r="15.91549430918954" fill="#fff" />
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
              <span class="product-calculator__legend-circle product-calculator__legend-circle--sum" />
              <span class="product-calculator__legend-title">
                Основная сумма
              </span>
              <span class="product-calculator__legend-sum">
                ₽ {{ percent * 10 }}
              </span>
            </div>
            <div class="product-calculator__legend-item">
              <span class="product-calculator__legend-circle product-calculator__legend-circle--percent" />
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
      month: 12,
      sum: 50000,
      formattedSum: '50 000 рублей',
      formattedDays: '1 год'
    }
  },
  computed: {
    percent () {
      return this.sum * 0.0001
    }
  },
  methods: {
    formatSliderValue () {
      this.formatSum()
    },
    focusSum () {
      this.formattedSum = this.sum
    },
    blurSum () {
      this.formatSum()
    },
    inputSum () {
      this.formattedSum = parseInt(this.formattedSum)
      if (this.formattedSum > 1000000) {
        this.formattedSum = 1000000
      } else if (this.formattedSum < 50000) {
        this.formattedSum = 50000
      } else if (isNaN(this.formattedSum)) {
        this.formattedSum = 50000
      }
      this.sum = this.formattedSum
    },
    formatSum () {
      const sumStr = this.sum.toString()
      if (this.sum < 10000) {
        this.formattedsum = sumStr.substring(0, 1) + ' ' + sumStr.substring(1, sumStr.length) + ' рублей'
      } else if (this.sum < 100000) {
        this.formattedSum = sumStr.substring(0, 2) + ' ' + sumStr.substring(2, sumStr.length) + ' рублей'
      } else if (this.sum < 1000000) {
        this.formattedSum = sumStr.substring(0, 3) + ' ' + sumStr.substring(3, sumStr.length) + ' рублей'
      } else {
        this.formattedSum = sumStr.substring(0, 1) + ' ' + sumStr.substring(1, 4) + ' ' + sumStr.substring(4, sumStr.length) + ' рублей'
      }
    },
    formatDays () {
      let monthArr = [2,3,4]
      const years = Math.trunc(days / 12)
      const month = days % 12

      if(years == 0) {
        if(month == 1) {
          this.formattedDays = "1 месяц"
        } else if(monthArr.includes(month)) {
          this.formattedDays = month + " месяца"
        } else {
          this.formattedDays = month + " месяцев"
        }
      } else if(years==1) {
        if(month == 0) {
          this.formattedDays = "1 год"
        } else if(month == 1) {
          this.formattedDays = "1 год 1 месяц"
        } else if(monthArr.includes(month)) {
          this.formattedDays = "1 год " + month + " месяца"
        } else {
          this.formattedDays = "1 год " + month + " месяцев"
        }
      } else {
        if(month == 0) {
          this.formattedDays = years + " года"
        } else if(month == 1) {
          this.formattedDays = years + " года 1 месяц"
        } else if(monthArr.includes(month)) {
          this.formattedDays = years + " года " + month + " месяца"
        } else {
          this.formattedDays = years + " года " + month + " месяцев"
        }
      }
    }
  }
}
</script>
