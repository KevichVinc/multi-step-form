<template>
  <div class="container">
    <Multistep></Multistep>
  </div>
</template>

<script>
import Multistep from '../components/Multistep'
export default {
  components: { Multistep },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 700px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
