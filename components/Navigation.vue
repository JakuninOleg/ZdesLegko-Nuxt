<template>
  <nav class="navigation">
    <div class="navigation__content">
      <div class="navigation__left">
        <nuxt-link aria-label="Главная страница" to="/">
          <Logo class="logo" />
        </nuxt-link>
        <ul class="navigation__list">
          <li class="navigation__list-item navigation__list-item--main">
            <nuxt-link aria-label="Продукты для частных клиентов" to="/products" class="link link--main">
              Частным клиентам
            </nuxt-link>
          </li>
          <li class="navigation__list-item navigation__list-item--main">
            <nuxt-link aria-label="Продукты для бизнес клиентов" to="/business-products" class="link link--main">
              Бизнес клиентам
            </nuxt-link>
          </li>
          <li class="navigation__list-item navigation__list-item--main">
            <nuxt-link aria-label="Информация о кмопании" to="/about" class="link link--main">
              О сервисе
            </nuxt-link>
          </li>
          <li class="navigation__list-item navigation__list-item--main">
            <nuxt-link aria-label="Наши офисы" to="/contacts" class="link link--main">
              Офисы
            </nuxt-link>
          </li>
          <li class="navigation__list-item navigation__list-item--main">
            <nuxt-link aria-label="Блог компании" to="/blog" class="link link--main">
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
      <div class="navigation__icons">
        <Login class="navigation__icons-icon" />
        <Menu class="navigation__icons-icon" />
      </div>
    </div>
    <div class="navigation__content navigation__content--bottom">
      <ul class="navigation__list">
        <li class="navigation__list-item navigation__list-item--secondary">
          <nuxt-link aria-label="Лизинг автотранспорта" to="/products" class="link link--secondary">
            Лизинг Авто
          </nuxt-link>
        </li>
        <li class="navigation__list-item navigation__list-item--secondary">
          <nuxt-link aria-label="Деньги под ПТС" to="/business-products" class="link link--secondary">
            Займ под ПТС
          </nuxt-link>
        </li>
        <li class="navigation__list-item navigation__list-item--secondary">
          <nuxt-link aria-label="Автоломбард" to="/about" class="link link--secondary">
            Автоломбард
          </nuxt-link>
        </li>
        <li class="navigation__list-item navigation__list-item--secondary">
          <nuxt-link aria-label="Потребительские кредиты и займы до зарплаты" to="/contacts" class="link link--secondary">
            Беззалоговые займы
          </nuxt-link>
        </li>
        <li class="navigation__list-item navigation__list-item--secondary">
          <nuxt-link aria-label="Инвестиции и сбережения" to="/blog" class="link link--secondary">
            Инвестиции
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import Logo from '@/assets/icons/logo.svg'
// import Cross from '@/assets/icons/cross.svg'
import Login from '@/assets/icons/login.svg'
import Menu from '@/assets/icons/Menu.svg'

export default {
  components: {
    Logo,
    // Cross,
    Login,
    Menu
  }
}
</script>
