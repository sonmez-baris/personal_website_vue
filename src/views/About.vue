<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div id="counter">
    Deneme : {{ msg }}<br>
    <input type="text" v-model="msg" class="from-current">
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      msg: 'Hello Vue'
    }
  }
}
</script>
