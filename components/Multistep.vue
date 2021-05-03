<template>
  <div id="app">
    <form action="https://postman-echo.com/post" method="post">
      <div v-show="step === 1">
        <h1>Получите онлайн-решение по кредиту за 7 минут</h1>
        <p class="info">
          Мы выдаем кредиты с залогом недвижимости. Предлагаем сэкономить ваше
          время - заполните короткую форму, чтобы получить онлайн-одобрение в
          течение 7 минут. Решение поступит вам по СМС или вам позвонит
          сотрудник банка для уточнения данных.
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
        <button class="start-survey-button" @click.prevent="next()">
          <span class="content" data-v-76c5ac82="">Получить решение</span>
        </button>
      </div>

      <div v-show="step === 2">
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
                      <option value="Мужской" @click="focused()">
                        Мужской
                      </option>
                      <option value="Женский" @click="focused()">
                        Женский
                      </option>
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
        <button @click.prevent="prev()">Назад</button>
        <button @click.prevent="next()">Продолжить</button>
      </div>
      <div v-show="step === 3">
        <button @click.prevent="prev()">Назад</button>
        <button @click.prevent="next()">Продолжить</button>
      </div>
    </form>

    <br /><br />Debug: {{ registration }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
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
    prev() {
      this.step--
    },
    next() {
      this.step++
    },
    focused() {
      if (this.isFocused === false) {
        this.isFocused = true
      } else {
        this.isFocused = false
      }
    },
  },
}
</script>

<style scoped>
h1 {
  font-size: 52px;
  line-height: 53px;
  color: #002569;
}

h2,
h4 {
  color: #00256a;
}

button {
  margin-top: 10px;
  height: 48px;
  position: relative;
  cursor: pointer;
  border: none;
  padding: 15px 60px;
  background-color: #c8102e;
  border-radius: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.start-survey-button {
  margin-top: 40px;
  max-width: none;
  width: auto;
}

button .content {
  font-family: 'Open Sans', sans-serif;
  color: #fff;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.info {
  margin-top: 24px;
  font-family: 'Open Sans', sans-serif;
  color: #002569;
  font-size: inherit;
  line-height: 1.5;
}

.badges {
  margin-top: 46px;
  display: flex;
  justify-content: flex-start;
}

.badges :first-child {
  margin-left: 0;
  margin-right: 30px;
}

.badge-small {
  display: grid;
  grid-gap: 4px;
  margin: 23px 30px 12px;
}

.field-row {
  display: flex;
  margin-top: 24px;
}

.field-row > div:nth-child(2) {
  margin-left: 14px;
}

.input-wrapper {
  position: relative;
}

.input-wrapper .label {
  color: #002569;
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 3px;
  height: 24px;
}

.input-wrapper .input {
  position: relative;
  width: 100%;
  padding: 11px 20px;
  border: 1px solid rgba(0, 156, 222, 0.25);
  box-sizing: border-box;
  border-radius: 24px;
  color: #002569;
  font-size: 18px;
  line-height: 25px;
}

.input-wrapper .range-wrapper {
  position: absolute;
  display: flex;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  justify-content: center;
}

.input-wrapper .range-wrapper input[type='range'] {
  padding: 0;
  width: 90%;
  outline: 0;
  border: none;
  background-color: transparent;
  -webkit-appearance: none;
}

.input-value {
  position: relative;
}

.hidden-selector {
  display: block;
}

#gender-input:focus + .hidden-selector {
  display: block;
}
.gender-selector {
  color: #002569;
  width: 100%;
  height: 100%;
  border-radius: 0 0 6px 6px;
  overflow: hidden;
  background-color: #fff;
  left: 0;
  right: 0;
  z-index: 5;
  box-shadow: 0 2px 8px rgb(0 37 105/25%);
}

.containers {
  display: block;
  position: relative;
  padding-left: 28px;
  margin-top: 20px;
  margin-bottom: 12px;
  cursor: pointer;
}

.containers input {
  display: none;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #fff;
  border: 1px solid rgba(0, 156, 222, 0.25);
  border-radius: 4px;
}

.containers input:checked ~ .checkmark {
  background-color: #002569;
}

.containers .checkmark:after {
  left: 6px;
  top: 2px;
  width: 7px;
  height: 10px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  content: '';
  position: absolute;
}
</style>
