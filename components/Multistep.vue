<template>
  <div id="app">
    <form action="https://postman-echo.com/post" method="post">
      <Firststep v-show="step === 1" @nextStep="next" />
      <Secondstep
        v-show="step === 2"
        @prevStep="prev"
        @nextStep="next"
        @getData="getRegData"
      />
    </form>

    <br /><br />Debug: {{ registration }}
  </div>
</template>

<script>
import Firststep from './steps/Firststep'
import Secondstep from './steps/Secondstep'
export default {
  components: { Secondstep, Firststep },
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
    getRegData(regData) {
      this.registration = regData
    },
  },
}
</script>

<style>
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
