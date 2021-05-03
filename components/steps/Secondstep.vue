<template>
  <div>
    <h1>Онлайн решение по кредиту</h1>
    <div class="field-row">
      <div class="input-wrapper">
        <div class="label">Сумма кредита ₽</div>
        <div class="input-value">
          <input
            v-model="registration.creditSum"
            type="number"
            min="300000"
            max="8000000"
            autocomplete="off"
            placeholder="3000000"
            class="input"
          />
        </div>
        <div class="range-wrapper">
          <input
            v-model="registration.creditSum"
            type="range"
            min="300000"
            step="10000"
            max="8000000"
          />
        </div>
      </div>
    </div>
    <div class="field-row">
      <div label="ФИО">
        <div class="select-wrapper">
          <div class="input-wrapper">
            <div class="label">ФИО</div>
            <div class="input-value">
              <input
                v-model="registration.name"
                autocomplete="off"
                placeholder=""
                class="input"
              />
            </div>
          </div>
          <div class="items selectHide"></div>
        </div>
      </div>
    </div>
    <div class="field-row">
      <div label="Пол">
        <div class="select-wrapper">
          <div class="input-wrapper">
            <div class="label">Пол</div>

            <div class="input-value">
              <input
                id="gender-input"
                v-model="registration.gender"
                autocomplete="off"
                placeholder="Укажите пол"
                class="input"
                @click="focused()"
              />
              <div v-show="isFocused" class="hidden-selector">
                <select
                  v-model="registration.gender"
                  size="2"
                  class="gender-selector"
                  name="gender"
                >
                  <option value="Мужской" @click="focused()">Мужской</option>
                  <option value="Женский" @click="focused()">Женский</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div label="Регион проживания" placeholder="Регион проживания">
        <div class="select-wrapper">
          <div class="input-wrapper">
            <div class="label">Регион проживания</div>

            <div class="input-value">
              <input
                v-model="registration.city"
                autocomplete="off"
                placeholder="Регион проживания"
                class="input"
              />
            </div>
          </div>

          <div class="items selectHide"></div>
        </div>
      </div>
    </div>
    <div class="field-row">
      <div class="phone-field">
        <div class="wrapper">
          <div class="input-wrapper">
            <div class="label">Телефон</div>

            <div class="input-value">
              <input
                v-model="registration.phone"
                autocomplete="off"
                placeholder=""
                class="input"
              />
            </div>
          </div>
        </div>
      </div>
      <div label="Email">
        <div class="select-wrapper">
          <div class="input-wrapper">
            <div class="label">Email</div>
            <!---->
            <div class="input-value">
              <input autocomplete="off" placeholder="" class="input" />
              <!---->
            </div>
            <!---->
          </div>
          <!---->
          <div class="items selectHide"></div>
        </div>
      </div>
    </div>
    <div class="checkbox">
      <label class="containers"
        ><input v-model="registration.personalData" type="checkbox" />
        <span class="checkmark"></span>
        <div class="title">
          Вы согласны
          <a
            href="https://api.norvikbank.ru/storage/docs/%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5.pdf"
            target="_blank"
          >
            на обработку персональных данных
          </a>
        </div></label
      >
      <label class="containers"
        ><input v-model="registration.bci" type="checkbox" />
        <span class="checkmark"></span>
        <div class="title">
          Вы согласны
          <a
            href="https://api.norvikbank.ru/storage/docs/%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5.pdf"
            target="_blank"
          >
            на обработку БКИ
          </a>
        </div></label
      >
    </div>
    <button @click.prevent="prevStep()">Назад</button>
    <button @click.prevent="nextStep()">Продолжить</button>
  </div>
</template>

<script>
export default {
  props: {
    method: { type: Function },
  },
  data() {
    return {
      isFocused: false,
      registration: {
        creditSum: 0,
        name: null,
        gender: null,
        city: null,
        phone: null,
        email: null,
        personalData: false,
        bci: false,
      },
    }
  },
  methods: {
    nextStep() {
      this.$emit('nextStep')
    },
    prevStep() {
      this.$emit('prevStep')
    },
    focused() {
      if (this.isFocused === false) {
        this.isFocused = true
      } else {
        this.isFocused = false
      }
    },
  },
  mounted() {
    this.$emit('getData', this.registration)
  },
}
</script>

<style scoped></style>
