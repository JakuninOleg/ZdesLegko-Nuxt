<template>
  <section class="personal-account">
    <div class="personal-account__content">
      <figure class="personal-account__laptop">
        <picture>
          <source :srcSet="require('~/assets/images/laptop.png?webp')" type="image/webp">
          <source :srcSet="require('~/assets/images/laptop.png?resize')" type="image/png">
          <img :src="require('~/assets/images/laptop.png?sqip')" loading="lazy" alt="Ask me a question">
        </picture>
      </figure>
      <div class="personal-account__container">
        <h4 class="heading-4">
          Личный кабинет
        </h4>
        <p class="personal-account__text">
          Контролируйте свои займы, инвестируйте на ваших условиях
        </p>
        <button class="btn btn--white">
          Войти
        </button>
      </div>
    </div>
  </section>
</template>
