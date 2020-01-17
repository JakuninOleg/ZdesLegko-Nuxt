<template>
  <section class="benefits">
    <div class="benefits__content">
      <div class="benefits__benefit-container">
        <div class="benefits__benefit-item">
          <Help />
          <h4 class="heading-4 benefits__benefit-heading">
            Защитим
          </h4>
          <p class="benefits__benefit-text">
            экономические интересы своих клиентов, предоставляя конкурентные и
            выгодные условия бизнеса
          </p>
        </div>
        <div class="benefits__benefit-item">
          <Weight />
          <h4 class="heading-4 benefits__benefit-heading">
            Обеспечим
          </h4>
          <p class="benefits__benefit-text">
            равный доступ к качественному финансовому сервису всех, кто оказался
            за пределами интересов банков
          </p>
        </div>
        <div class="benefits__benefit-item">
          <Umbrella />
          <h4 class="heading-4 benefits__benefit-heading">
            Поможем
          </h4>
          <p class="benefits__benefit-text">
            получить финансовую поддержку для сохранения и развития
            индивидуального предпринимательства в стране
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Help from '~/assets/icons/help.svg'
import Weight from '~/assets/icons/weight.svg'
import Umbrella from '~/assets/icons/umbrella.svg'

export default {
  components: {
    Help,
    Weight,
    Umbrella
  }
}
</script>
