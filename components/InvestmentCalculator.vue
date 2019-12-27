<template>
  <section class="product-calculator">
    <div class="product-calculator__content">
      <h2 class="heading-2">
        Приумножайте накопления
      </h2>

      <div class="product-calculator__container">
        <div class="product-calculator__container-input product-calculator__container-input--investment">
          <div class="product-calculator__input-wrapper">
            <div class="product-calculator__input-container">
              <input
                id="credit-sum-investment"
                ref="currencyInput"
                v-model="formattedSum"
                @focus="focusSum"
                @blur="blurSum"
                @input="inputSum"
                min="5000"
                class="product-calculator__input"
                type="text"
              >
              <label for="credit-sum-investment" class="product-calculator__label">Желаемая сумма</label>
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
              <span class="product-calculator__input-tooltip">5 000 рублей</span>
              <span class="product-calculator__input-tooltip">1 000 000 рублей</span>
            </div>
          </div>

          <div class="product-calculator__input-wrapper">
            <div class="product-calculator__input-container">
              <input id="investment-month" v-model.number="month" class="product-calculator__input">
              <label for="investment-month" class="product-calculator__label">Срок займа</label>
              <span class="product-calculator__slider">
                <VueSlider

                  v-model="month"
                  :min="1"
                  :dotSize="21"
                  :max="36"
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
              <span class="product-calculator__input-tooltip">1 месяц</span>
              <span class="product-calculator__input-tooltip">36 месяцев</span>
            </div>
          </div>
        </div>
        <div class="product-calculator__legal">
          Пример расчета условий инвестирования носит исключительно информационный характер и не является публичной офертой
        </div>
        <div class="product-calculator__container-result product-calculator__container-result--investment">
          <div class="investment-calculator__result">
            <div class="investment-calculator__item investment-calculator__item--income">
              <span class="investment-calculator__item-header">{{ income }}</span>
              <span class="investment-calculator__item-text">ваш доход в конце срока</span>
            </div>
            <div class="investment-calculator__item investment-calculator__item--income-total">
              <span class="investment-calculator__item-header">{{ totalIncome }}</span>
              <span class="investment-calculator__item-text">сумма вклада с процентами</span>
            </div>
            <div class="investment-calculator__item investment-calculator__item--profit">
              <span class="investment-calculator__item-header">{{ profit }}</span>
              <span class="investment-calculator__item-text investment-calculator__item-text--profit">выгода по сравнению с банковским депозитом</span>
              <button class="btn btn--yellow btn--investment investment-calculator__item-button">
                Подробнее
              </button>
            </div>
            <div class="investment-calculator__label">
              15 %
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import 'vue-slider-component/dist-css/vue-slider-component.css'

export default {
  components: {
    VueSlider
  },
  data () {
    return {
      month: 25,
      sum: 50000,
      formattedSum: '50 000 рублей',
      percent: 0.15,
      depositPercent: 0.05
    }
  },
  computed: {
    income () {
      return '+ ' + this.formatSum(this.sum * this.percent, ' ₽')
    },
    profit () {
      return '+ ' + this.formatSum(this.sum * this.percent - (this.depositPercent * this.sum), ' ₽')
    },
    totalIncome () {
      return this.formatSum(this.sum * this.percent + this.sum, ' ₽')
    }
  },
  methods: {
    formatSliderValue () {
      this.formattedSum = this.formatSum(this.sum, ' ₽')
    },
    focusSum () {
      this.formattedSum = this.sum
    },
    blurSum () {
      this.formattedSum = this.formatSum(this.sum, ' ₽')
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
    formatSum (sum, currency) {
      let formattedSum
      const sumStr = sum.toString()
      if (sum < 10000) {
        formattedSum = sumStr.substring(0, 1) + ' ' + sumStr.substring(1, sumStr.length) + currency
      } else if (sum < 100000) {
        formattedSum = sumStr.substring(0, 2) + ' ' + sumStr.substring(2, sumStr.length) + currency
      } else if (sum < 1000000) {
        formattedSum = sumStr.substring(0, 3) + ' ' + sumStr.substring(3, sumStr.length) + currency
      } else {
        formattedSum = sumStr.substring(0, 1) + ' ' + sumStr.substring(1, 4) + ' ' + sumStr.substring(4, sumStr.length) + currency
      }
      return formattedSum
    }
  }
}
</script>
