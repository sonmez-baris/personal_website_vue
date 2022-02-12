<template>
  <div class="flex flex-col border-b-2 dark:border-gray-700 py-1">
      <div class="text-xs text-right px-2 dark:text-gray-200">{{ msg }}</div>
      <div class="text-xs text-right px-2 dark:text-gray-200">Tesla</div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  props: {
    msg: String
  }
};
</script>
