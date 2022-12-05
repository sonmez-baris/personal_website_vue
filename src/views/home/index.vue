<template>
  <AboutMe :imageUrl="profileImg" :socials="socials" />
  <div class="px-2 mt-2">

    <div class="border-b-1 dark:border-gray-700 w-full">
      <h2 class="font-semibold text-bsonmezprimary dark:text-gray-300">ne yaparım?</h2>
    </div>
    <div class="grid grid-cols-2 gap-2 md:grid-cols-4 px-2 justify-items-center mt-6">
      <WhatIDoItem :services="services" />
    </div>
    <div class="flex px-2 flex-row mt-6 flex-wrap w-full">
      <span class="skill-tag" v-for="(skill, index) in skills" :key="index">{{skill}}</span>
    </div>

  </div>

  <div class="px-2 mt-10">
    <div class="border-b-1 dark:border-gray-700 w-full">
      <h2 class="font-semibold text-bsonmezprimary">blogtan...</h2>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 px-2 mt-6 gap-2">
      <HomeBlogPost :posts="posts" />
    </div>
  </div>

  <div class="px-2 mt-10">
    <div class="border-b-1 dark:border-gray-700 w-full">
      <h2 class="font-semibold text-bsonmezprimary">bazı referanslar</h2>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 justify-items-between items-stretch px-2 mt-6 gap-2">
      <HomeReference :references="references" />
    </div>
  </div>

</template>

<script>
import { reactive } from 'vue';
import WhatIDoItem from '@/components/WhatIDoItem.vue';
import AboutMe from '@/components/AboutMe.vue';
import HomeBlogPost from '@/components/HomeBlogPost.vue';
import HomeReference from '@/components/HomeReference.vue';
import profileImg from '@/assets/profile.jpg';

export default {
  name: 'Home',
  components: {
    WhatIDoItem,
    AboutMe,
    HomeBlogPost,
    HomeReference
  },
  setup() {
    const skills = reactive(['php', 'javascript', 'flutter', 'dart', 'html', 'css', 'laravel', 'codeigniter', 'sql', 'vue', 'tailwind', 'bootstrap', 'aermod', 'illustrator', 'photoshop', 'fireworks', 'premiere', 'kicad', 'easyeda', 'figma', 'avr', 'surfer', 'autocad', 'blender', 'cinema4d', 'netcad', 'pwa', 'jquery']);
    const services = reactive(['web uygulamalar', 'mobil uygulamalar', 'gömülü sistemler', 'grafik tasarım']);
    const socials = reactive([
      { name: 'github', url: 'https://github.com/sonmez-baris' },
      { name: 'twitter', url: 'https://twitter.com/sonmezbaris' },
      { name: 'linkedin', url: 'https://www.linkedin.com/in/barissonmez/' },
      { name: 'medium', url: 'https://medium.com/@sonmez.baris' }
    ]);
    const posts = reactive([
      {
        title: 'Aermod İçin Gerekli Dosyalar ve Çalıştırmaya Hazırlık',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nunc nisl aliquam lorem, nec ultricies nisl lorem eu nunc. Sed euismod, nunc sit amet ultricies lacinia, nunc nisl aliquam lorem, nec ultricies nisl lorem eu nunc.',
        url: 'https://barissonmez.com.tr',
        icon: 'fas fa-code fa-fw'
      },
      {
        title: 'Aermod İçin Gerekli Dosyalar ve Çalıştırmaya Hazırlık',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nunc nisl aliquam lorem, nec ultricies nisl lorem eu nunc. Sed euismod, nunc sit amet ultricies lacinia, nunc nisl aliquam lorem, nec ultricies nisl lorem eu nunc.',
        url: 'https://barissonmez.com.tr',
        icon: 'fas fa-code fa-fw'
      },
      {
        title: 'Aermod İçin Gerekli Dosyalar ve Çalıştırmaya Hazırlık',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nunc nisl aliquam lorem, nec ultricies nisl lorem eu nunc. Sed euismod, nunc sit amet ultricies lacinia, nunc nisl aliquam lorem, nec ultricies nisl lorem eu nunc.',
        url: 'https://barissonmez.com.tr',
        icon: 'fas fa-code fa-fw'
      },
      {
        title: 'Aermod İçin Gerekli Dosyalar ve Çalıştırmaya Hazırlık',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nunc nisl aliquam lorem, nec ultricies nisl lorem eu nunc. Sed euismod, nunc sit amet ultricies lacinia, nunc nisl aliquam lorem, nec ultricies nisl lorem eu nunc.',
        url: 'https://barissonmez.com.tr',
        icon: 'fas fa-code fa-fw'
      },
      {
        title: 'Aermod İçin Gerekli Dosyalar ve Çalıştırmaya Hazırlık',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nunc nisl aliquam lorem, nec ultricies nisl lorem eu nunc. Sed euismod, nunc sit amet ultricies lacinia, nunc nisl aliquam lorem, nec ultricies nisl lorem eu nunc.',
        url: 'https://barissonmez.com.tr',
        icon: 'fas fa-code fa-fw'
      },
      {
        title: 'Aermod İçin Gerekli Dosyalar ve Çalıştırmaya Hazırlık',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nunc nisl aliquam lorem, nec ultricies nisl lorem eu nunc. Sed euismod, nunc sit amet ultricies lacinia, nunc nisl aliquam lorem, nec ultricies nisl lorem eu nunc.',
        url: 'https://barissonmez.com.tr',
        icon: 'fas fa-code fa-fw'
      }
    ]);
    const references = reactive([
      {
        category: 'web',
        title: 'özlem özyün',
        image: 'web01.jpg'
      },
      {
        category: 'embed',
        title: 'jagbt',
        image: 'embed01.jpg'
      },
      {
        category: 'mobile',
        title: 'mert istihbarat',
        image: 'mobile01.jpg'
      },
      {
        category: 'graphic',
        title: 'cpr mobil',
        image: 'graphic01.jpg'
      }
    ]);

    return { skills, services, profileImg, socials, posts, references };
  }
};
</script>
