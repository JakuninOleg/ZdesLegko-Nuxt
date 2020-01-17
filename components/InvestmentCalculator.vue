<template>
  <section class="product-calculator">
    <div class="product-calculator__content">
      <h2 class="heading-2">
        Приумножайте накопления
      </h2>

      <div class="product-calculator__container">
        <div
          class="product-calculator__container-input product-calculator__container-input--investment"
        >
          <div class="product-calculator__input-wrapper">
            <div class="product-calculator__input-container">
              <input
                id="credit-sum-investment"
                ref="currencyInput"
                v-model="formattedSum"
                @focus="focusSum"
                @blur="blurSum"
                @input="inputSum"
                class="product-calculator__input"
                type="text"
              >
              <label
                for="credit-sum-investment"
                class="product-calculator__label"
              >Желаемая сумма</label>
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
              <span
                class="product-calculator__input-tooltip"
              >50 000 рублей</span>
              <span
                class="product-calculator__input-tooltip"
              >1 000 000 рублей</span>
            </div>
          </div>

          <div class="product-calculator__input-wrapper">
            <div class="product-calculator__input-container">
              <input
                id="investment-month"
                v-model="formattedDays"
                @focus="focusDays"
                @blur="blurDays"
                @input="inputDays"
                class="product-calculator__input"
              >
              <label
                for="investment-month"
                class="product-calculator__label"
              >Срок займа</label>
              <span class="product-calculator__slider">
                <VueSlider
                  v-model="days"
                  :min="1"
                  :dot-size="21"
                  :max="36"
                  :silent="true"
                  @change="formatSliderDays"
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
          Пример расчета условий инвестирования носит исключительно
          информационный характер и не является публичной офертой
        </div>
        <div
          class="product-calculator__container-result product-calculator__container-result--investment"
        >
          <div class="investment-calculator__result">
            <div
              class="investment-calculator__item investment-calculator__item--income"
            >
              <span class="investment-calculator__item-header">{{
                income
              }}</span>
              <span
                class="investment-calculator__item-text"
              >ваш доход в конце срока</span>
            </div>
            <div
              class="investment-calculator__item investment-calculator__item--income-total"
            >
              <span class="investment-calculator__item-header">{{
                totalIncome
              }}</span>
              <span
                class="investment-calculator__item-text"
              >сумма вклада с процентами</span>
            </div>
            <div
              class="investment-calculator__item investment-calculator__item--profit"
            >
              <span class="investment-calculator__item-header">{{
                profit
              }}</span>
              <span
                class="investment-calculator__item-text investment-calculator__item-text--profit"
              >выгода по сравнению с банковским депозитом</span>
              <button
                class="btn btn--yellow btn--investment investment-calculator__item-button"
              >
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
      days: 12,
      formattedDays: '1 год',
      sum: 50000,
      formattedSum: '50 000 рублей',
      percent: 0.15,
      depositPercent: 0.05
    }
  },
  computed: {
    income () {
      return '+ ' + this.formatSum(Math.ceil(this.sum * this.percent), ' ₽')
    },
    profit () {
      return (
        '+ ' +
        this.formatSum(
          Math.ceil(this.sum * this.percent - this.depositPercent * this.sum),
          ' ₽'
        )
      )
    },
    totalIncome () {
      return this.formatSum(
        Math.ceil(this.sum * this.percent + this.sum),
        ' ₽'
      )
    }
  },
  methods: {
    formatSliderSum () {
      this.formattedSum = this.formatSum(this.sum, ' рублей')
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
      this.formattedSum = this.formatSum(this.sum, ' рублей')
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
    formatSum (sum, currency) {
      return this.formatSumMixin(sum, currency)
    },
    formatDays () {
      return this.formatDaysMixin(this.days)
    }
  }
}
</script>
