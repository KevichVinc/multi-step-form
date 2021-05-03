<template>
  <div>
    <h1>Получите онлайн-решение по кредиту за 7 минут</h1>
    <p class="info">
      Мы выдаем кредиты с залогом недвижимости. Предлагаем сэкономить ваше время
      - заполните короткую форму, чтобы получить онлайн-одобрение в течение 7
      минут. Решение поступит вам по СМС или вам позвонит сотрудник банка для
      уточнения данных.
    </p>
    <div class="badges">
      <div class="badge-small">
        <h4 class="title">Ставка от</h4>
        <h2 class="content">8,8%</h2>
      </div>
      <div class="badge-small">
        <h4 class="title">Сумма до</h4>
        <h2 class="content">8 млн ₽</h2>
      </div>
      <div class="badge-small">
        <h4 class="title">На срок до</h4>
        <h2 class="content">20 лет</h2>
      </div>
    </div>
    <button class="start-survey-button" @click.prevent="nextStep">
      <span class="content">Получить решение</span>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    nextStep() {
      this.$emit('nextStep')
    },
  },
}
</script>

<style scoped></style>
