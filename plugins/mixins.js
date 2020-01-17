import Vue from 'vue'

Vue.mixin({
  methods: {
    formatSumMixin (sum, currencyStr) {
      const sumStr = sum.toString()
      let formattedSum

      if (sum < 10000) {
        formattedSum =
          sumStr.substring(0, 1) +
          ' ' +
          sumStr.substring(1, sumStr.length) +
          currencyStr
      } else if (sum < 100000) {
        formattedSum =
          sumStr.substring(0, 2) +
          ' ' +
          sumStr.substring(2, sumStr.length) +
          currencyStr
      } else if (sum < 1000000) {
        formattedSum =
          sumStr.substring(0, 3) +
          ' ' +
          sumStr.substring(3, sumStr.length) +
          currencyStr
      } else {
        formattedSum =
          sumStr.substring(0, 1) +
          ' ' +
          sumStr.substring(1, 4) +
          ' ' +
          sumStr.substring(4, sumStr.length) +
          currencyStr
      }

      return formattedSum
    },
    formatDaysMixin (days) {
      const monthArr = [2, 3, 4]
      const years = Math.trunc(days / 12)
      const month = days % 12
      let formattedDays

      if (years === 0) {
        if (month === 1) {
          formattedDays = '1 месяц'
        } else if (monthArr.includes(month)) {
          formattedDays = month + ' месяца'
        } else {
          formattedDays = month + ' месяцев'
        }
      } else if (years === 1) {
        if (month === 0) {
          formattedDays = '1 год'
        } else if (month === 1) {
          formattedDays = '1 год 1 месяц'
        } else if (monthArr.includes(month)) {
          formattedDays = '1 год ' + month + ' месяца'
        } else {
          formattedDays = '1 год ' + month + ' месяцев'
        }
      } else if (month === 0) {
        formattedDays = years + ' года'
      } else if (month === 1) {
        formattedDays = years + ' года 1 месяц'
      } else if (monthArr.includes(month)) {
        formattedDays = years + ' года ' + month + ' месяца'
      } else {
        formattedDays = years + ' года ' + month + ' месяцев'
      }
      return formattedDays
    }
  }
})
