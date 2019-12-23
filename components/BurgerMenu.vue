<template>
  <nav class="burger-menu">
    <section class="burger-menu__section">
      <div class="burger-menu__header">
        <LogoBlack />
        <Cross @click="toggleMenu" class="burger-menu__cross" />
      </div>
    </section>
    <section class="burger-menu__section">
      <ul class="burger-menu__list">
        <li class="burger-menu__list-item">
          <nuxt-link class="link" to="/">
            Лизинг авто
          </nuxt-link>
        </li>
        <li class="burger-menu__list-item">
          <nuxt-link class="link" to="/">
            Займ под ПТС
          </nuxt-link>
        </li>
        <li class="burger-menu__list-item">
          <nuxt-link class="link" to="/">
            Автоломбард
          </nuxt-link>
        </li>
        <li class="burger-menu__list-item">
          <nuxt-link class="link" to="/">
            Беззалоговые займы
          </nuxt-link>
        </li>
        <li class="burger-menu__list-item">
          <nuxt-link class="link" to="/">
            Инвестиции
          </nuxt-link>
        </li>
      </ul>
    </section>
    <section class="burger-menu__section">
      <div class="burger-menu__section-content">
        <nuxt-link class="link" to="/">
          Офисы
        </nuxt-link>
      </div>
    </section>
    <section class="burger-menu__section">
      <div class="burger-menu__section-content">
        <nuxt-link class="link" to="/">
          О сервисе
        </nuxt-link>
      </div>
    </section>
    <section class="burger-menu__section">
      <div class="burger-menu__section-content">
        <nuxt-link class="link" to="/">
          Блог
        </nuxt-link>
      </div>
    </section>
  </nav>
</template>

<script>
import Cross from '@/assets/icons/cross.svg'
import LogoBlack from '@/assets/icons/logo-black.svg'

export default {
  components: {
    Cross,
    LogoBlack
  },
  methods: {
    toggleMenu () {
      this.$emit('toggleMenu')
    }
  }
}
</script>
