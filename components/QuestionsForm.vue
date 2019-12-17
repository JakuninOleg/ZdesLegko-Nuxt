<template>
  <div class="questions-form">
    <picture>
      <source :srcSet="require('~/assets/images/form-questions.png?webp')" type="image/webp">
      <source :srcSet="require('~/assets/images/form-questions.png?resize')" type="image/png">
      <img :src="require('~/assets/images/form-questions.png?sqip')" loading="lazy" class="questions-form__questions">
    </picture>
    <picture>
      <source :srcSet="require('~/assets/images/form-woman.png?webp')" type="image/webp">
      <source :srcSet="require('~/assets/images/form-woman.png?resize')" type="image/png">
      <img :src="require('~/assets/images/form-woman.png?sqip')" loading="lazy" class="questions-form__person">
    </picture>
    <div class="questions-form__content">
      <h4 class="heading-4">
        Остались вопросы?
      </h4>
      <form class="questions-form__form">
        <label for="tel" class="questions-form__label">Номер телефона</label>
        <input id="tel" type="tel" class="questions-form__input">
        <input type="checkbox" class="questions-form__checkbox">Я принимаю условия передачи информации</input>
      </form>
      <button class="btn btn--yellow questions-form__button">
        Позвоните мне
      </button>
    </div>
  </div>
</template>
