<template>
  <div class="rounded-2xl bg-no-repeat bg-cover" :style="{'background-image': 'url(' + require('@/assets/img/web01.jpg') + ')'}" >
    <a href="">
      <div class="bg-bsonmezsecondary dark:bg-gray-800 bg-opacity-90 h-full py-6 rounded-xl">
        <p class="text-bsonmezprimary w-full text-center text-sm font-semibold">&lt;web&gt;</p>
        <h5 class="mt-4 text-sm text-center font-semibold">özlem<br>özyün</h5>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  props: {
    msg: String
  }
};
</script>
