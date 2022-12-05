<template>
  <div class="flex px-2 py-4">
    <div class="w-20 h-20 flex-shrink-0"><img :src="imageUrl" class="w-20 h-20 object-cover rounded-full" alt=""></div>
    <div class="ml-2">
      <p class="text-sm">Merhaba, ben Barış Sönmez.<br>
      Antalya’da yaşayan, full stack web & mobil uygulama geliştiricisiyim.</p>
      <p class="flex flex-wrap">
        <a :href="social.url" class="top-contact-item" target="_blank" v-for="(social, index) in socials" :key="index">&lt;{{social.name}}&gt;</a>
      </p>
    </div>
  </div>
</template>
uy
<script>
export default {
  name: 'AboutMe',
  props: {
    imageUrl: String,
    socials: Array
  }
};
</script>
