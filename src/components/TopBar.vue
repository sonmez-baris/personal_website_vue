<template>
  <div class="flex flex-col border-b-2 py-1">
      <div class="text-xs text-right px-2">{{ msg }}</div>
      <div class="text-xs text-right px-2">Tesla</div>
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
