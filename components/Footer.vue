<template>
  <footer class="footer">
    <div class="footer__content">
      <QuestionsForm />
      <nav class="footer__content-list">
        <ul class="footer__list footer__list--logo">
          <li class="footer__list-item footer__list-item--heading footer__list-item--logo">
            <Logo />
          </li>
          <li class="footer__list-item footer__list-item--contacts">
            <a href="tel:+74951203120" class="link footer__list-tel">+7 495 120 31 20</a>
            <span class="footer__list-hours">с 10:00 до 19:00 по мск</span>
          </li>
          <li class="footer__list-item">
            <nuxt-link to="/" class="link footer__list-item--policy">
              <span>Политика </span>
              <span>конфиденциальности</span>
            </nuxt-link>
          </li>
        </ul>
        <ul class="footer__list footer__list--company">
          <li class="footer__list-item footer__list-item--heading">
            <nuxt-link to="/about" class="link">
              О компании
            </nuxt-link>
          </li>
          <li class="footer__list-item footer__list-item--simple">
            <nuxt-link to="/" class="link">
              Миссия
            </nuxt-link>
          </li>
          <li class="footer__list-item footer__list-item--simple">
            <nuxt-link to="/" class="link">
              FAQ
            </nuxt-link>
          </li>
          <li class="footer__list-item footer__list-item--simple">
            <nuxt-link to="/" class="link">
              Контакты
            </nuxt-link>
          </li>
          <li class="footer__list-item footer__list-item--simple">
            <nuxt-link to="/" class="link">
              Партнерам
            </nuxt-link>
          </li>
        </ul>
        <ul class="footer__list footer__list--loans">
          <li class="footer__list-item footer__list-item--heading">
            <nuxt-link to="/about" class="link">
              Займы
            </nuxt-link>
          </li>
          <li class="footer__list-item footer__list-item--simple">
            <nuxt-link to="/" class="link">
              Лизинг авто
            </nuxt-link>
          </li>
          <li class="footer__list-item footer__list-item--simple">
            <nuxt-link to="/" class="link">
              Займ под ПТС
            </nuxt-link>
          </li>
          <li class="footer__list-item footer__list-item--simple">
            <nuxt-link to="/" class="link">
              Беззалоговые займы
            </nuxt-link>
          </li>
          <li class="footer__list-item footer__list-item--simple">
            <nuxt-link to="/" class="link">
              Автоломбард
            </nuxt-link>
          </li>
        </ul>
        <ul class="footer__list footer__list--investment">
          <li class="footer__list-item footer__list-item--heading">
            <nuxt-link to="/about" class="link">
              Инвестиции
            </nuxt-link>
          </li>
          <li class="footer__list-item footer__list-item--simple">
            <nuxt-link to="/" class="link">
              Вклады
            </nuxt-link>
          </li>
          <li class="footer__list-item footer__list-item--simple">
            <nuxt-link to="/" class="link">
              Сбережения
            </nuxt-link>
          </li>
          <li class="footer__list-item footer__list-item--simple">
            <nuxt-link to="/" class="link">
              Облигации
            </nuxt-link>
          </li>
        </ul>
        <ul class="footer__list footer__list--services">
          <li class="footer__list-item footer__list-item--heading">
            <nuxt-link to="/about" class="link">
              Услуги
            </nuxt-link>
          </li>
          <li class="footer__list-item footer__list-item--simple">
            <nuxt-link to="/" class="link">
              Выездной офис
            </nuxt-link>
          </li>
          <li class="footer__list-item footer__list-item--simple">
            <nuxt-link to="/" class="link">
              Франшиза
            </nuxt-link>
          </li>
          <li class="footer__list-item footer__list-item--simple">
            <nuxt-link to="/" class="link">
              Личный кабинет
            </nuxt-link>
          </li>
        </ul>
        <div class="footer__legal">
          <span class="footer__legal--copyright">© {{ currentYear }} ООО “Стратегия” (торговый бренд “Здесь Легко”) ОГРН 1177746843955 ИНН 7722407831 Услуги оказываются партнерами сервиса «Здесь легко»</span>
          <span class="footer__legal--info">Обращаем ваше внимание, что информация, размещенная на сайте, носит информаионный харакет и не является публичной офертой, определяемой полжениями статьи 437 ГК РФ. Конкретные условия займа будут определеяться отдельно при заключении договора.</span>
        </div>
      </nav>
    </div>
  </footer>
</template>

<script>
import QuestionsForm from '~/components/QuestionsForm'
import Logo from '@/assets/icons/logo.svg'

export default {
  components: {
    QuestionsForm,
    Logo
  },
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  }
}
</script>
