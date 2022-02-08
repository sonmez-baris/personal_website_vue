<template>
  <div class="flex flex-col">
      <div class="text-sm text-right">{{ msg }}</div>
      <div class="text-xs text-right">Tesla</div>
      <div class="divide-x-2"></div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  props: {
    msg: String,
  }
}
</script>