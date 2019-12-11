<template>
  <nav class="navigation">
    <div class="navigation__content">
      <div class="navigation__left">
        <nuxt-link to="/">
          <Logo class="logo" />
        </nuxt-link>
        <ul class="navigation__list">
          <li class="navigation__list-item navigation__list-item--main">
            <nuxt-link to="/products" class="link link--main">
              Частным клиентам
            </nuxt-link>
          </li>
          <li class="navigation__list-item navigation__list-item--main">
            <nuxt-link to="/business-products" class="link link--main">
              Бизнес клиентам
            </nuxt-link>
          </li>
          <li class="navigation__list-item navigation__list-item--main">
            <nuxt-link to="/about" class="link link--main">
              О сервисе
            </nuxt-link>
          </li>
          <li class="navigation__list-item navigation__list-item--main">
            <nuxt-link to="/contacts" class="link link--main">
              Офисы
            </nuxt-link>
          </li>
          <li class="navigation__list-item navigation__list-item--main">
            <nuxt-link to="/blog" class="link link--main">
              Журнал
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="navigation__button">
        <button class="btn btn--transparent">
          Войти
        </button>
      </div>
    </div>
    <div class="navigation__content navigation__content--bottom">
      <ul class="navigation__list">
        <li class="navigation__list-item navigation__list-item--secondary">
          <nuxt-link to="/products" class="link link--secondary">
            Лизинг Авто
          </nuxt-link>
        </li>
        <li class="navigation__list-item navigation__list-item--secondary">
          <nuxt-link to="/business-products" class="link link--secondary">
            Займ под ПТС
          </nuxt-link>
        </li>
        <li class="navigation__list-item navigation__list-item--secondary">
          <nuxt-link to="/about" class="link link--secondary">
            Автоломбард
          </nuxt-link>
        </li>
        <li class="navigation__list-item navigation__list-item--secondary">
          <nuxt-link to="/contacts" class="link link--secondary">
            Беззалоговые займы
          </nuxt-link>
        </li>
        <li class="navigation__list-item navigation__list-item--secondary">
          <nuxt-link to="/blog" class="link link--secondary">
            Инвестиции
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import Logo from '@/assets/icons/logo.svg'

export default {
  components: {
    Logo
  }
}
</script>
