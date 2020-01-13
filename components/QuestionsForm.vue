<template>
  <div class="questions-form">
    <figure class="questions-form__image--big">
      <picture>
        <source :srcSet="require('~/assets/images/form-questions.png?webp')" type="image/webp">
        <source :srcSet="require('~/assets/images/form-questions.png?resize')" type="image/png">
        <img
          :src="require('~/assets/images/form-questions.png?sqip')"
          loading="lazy"
          class="questions-form__questions"
          alt="questions"
        >
      </picture>
    </figure>

    <figure class="questions-form__image--small">
      <picture>
        <source :srcSet="require('~/assets/images/form-questions-sm.png?webp')" type="image/webp">
        <source :srcSet="require('~/assets/images/form-questions-sm.png?resize')" type="image/png">
        <img
          :src="require('~/assets/images/form-questions-sm.png?sqip')"
          loading="lazy"
          class="questions-form__questions"
          alt="questions"
        >
      </picture>
    </figure>

    <figure>
      <picture>
        <source :srcSet="require('~/assets/images/form-woman.png?webp')" type="image/webp">
        <source :srcSet="require('~/assets/images/form-woman.png?resize')" type="image/png">
        <img
          :src="require('~/assets/images/form-woman.png?sqip')"
          loading="lazy"
          class="questions-form__person"
          alt="Ask me a question"
        >
      </picture>
    </figure>
    <div class="questions-form__content">
      <h4 class="heading-4">
        Остались вопросы?
      </h4>
      <form class="questions-form__form">
        <label for="tel" class="questions-form__label">Номер телефона</label>
        <input
          id="tel"
          @focus.prevent="focusPhone"
          @blur="blurPhone"
          @input="formatPhone"
          v-model="phone"
          type="tel"
          class="questions-form__input"
          placeholder="+7 ("
          required="true"
          autocomplete="off"
        >
        <label for="checkbox" class="questions-form__label questions-form__label--checkbox">
          <input
            id="checkbox"
            v-model="checked"
            type="checkbox"
            class="questions-form__checkbox"
            required="true"
          >
          <nuxt-link to="/" class="link link--checkbox">Я принимаю условия передачи информации</nuxt-link>
        </label>
        <button type="submit" class="btn btn--yellow btn--form questions-form__button">
          Позвоните мне
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      phone: '',
      phoneRegex: /^[+](7)(\s)[(]/,
      checked: false
    }
  },
  methods: {
    focusPhone (e) {
      if (this.phone === '') {
        this.phone = '+7 ('
      }
    },
    blurPhone () {
      if (this.phone.length < 5) {
        this.phone = ''
      } else {
        this.validatePhone()
      }
    },
    validatePhone () {
      // console.log('validated')
    },
    formatPhone (e) {
      let phoneStr = this.phone.replace(/\D/g, '')

      if (!this.phone.match(this.phoneRegex) && e.target.selectionStart > 4) {
        this.phone = '+7 (' + this.phone.substring(4, 18)
      } else if (e.target.selectionStart < 3) {
        phoneStr += phoneStr.charAt(0)
        phoneStr = phoneStr.substring(1)
      }

      if (isNaN(e.data) || e.data === ' ' || phoneStr.length > 11) {
        this.phone = this.phone.replace(/.$/, '')
      } else if (phoneStr.length > 9) {
        this.phone =
          '+7 (' +
          phoneStr.substring(1, 4) +
          ') ' +
          phoneStr.substring(4, 7) +
          '-' +
          phoneStr.substring(7, 9) +
          '-' +
          phoneStr.substring(9, 11)
      } else if (
        phoneStr.length > 8 &&
        e.inputType === 'deleteContentBackward'
      ) {
        this.phone =
          '+7 (' +
          phoneStr.substring(1, 4) +
          ') ' +
          phoneStr.substring(4, 7) +
          '-' +
          phoneStr.substring(7, 9)
      } else if (phoneStr.length > 8) {
        this.phone =
          '+7 (' +
          phoneStr.substring(1, 4) +
          ') ' +
          phoneStr.substring(4, 7) +
          '-' +
          phoneStr.substring(7, 9) +
          '-'
      } else if (phoneStr.length > 7) {
        this.phone =
          '+7 (' +
          phoneStr.substring(1, 4) +
          ') ' +
          phoneStr.substring(4, 7) +
          '-' +
          phoneStr.substring(7, 9)
      } else if (
        phoneStr.length > 6 &&
        e.inputType === 'deleteContentBackward'
      ) {
        this.phone =
          '+7 (' + phoneStr.substring(1, 4) + ') ' + phoneStr.substring(4, 7)
      } else if (phoneStr.length > 6) {
        this.phone =
          '+7 (' +
          phoneStr.substring(1, 4) +
          ') ' +
          phoneStr.substring(4, 7) +
          '-'
      } else if (phoneStr.length > 4) {
        this.phone =
          '+7 (' + phoneStr.substring(1, 4) + ') ' + phoneStr.substring(4, 7)
      } else if (
        phoneStr.length > 3 &&
        e.inputType === 'deleteContentBackward'
      ) {
        this.phone = '+7 (' + phoneStr.substring(1, 4)
      } else if (phoneStr.length > 3) {
        this.phone = '+7 (' + phoneStr.substring(1, 4) + ') '
      } else {
        this.phone = '+7 (' + phoneStr.substring(1, 4)
      }
    }
  }
}
</script>
