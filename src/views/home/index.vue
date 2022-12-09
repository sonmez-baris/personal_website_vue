<template>
  <AboutMe :imageUrl="profileImg" :socials="socials" />
  <div class="px-2 mt-2">

    <div class="border-b-1 dark:border-gray-700 w-full">
      <h2 class="font-semibold text-bsonmezprimary dark:text-gray-300">ne yaparım?</h2>
    </div>
    <div class="grid grid-cols-2 gap-2 md:grid-cols-4 px-2 justify-items-center mt-6">
      <WhatIDoItem />
    </div>
    <div class="flex px-2 flex-row mt-6 flex-wrap w-full">
      <span class="skill-tag" v-for="(skill, index) in skills" :key="index">{{skill.title}}</span>
    </div>

  </div>

  <div class="px-2 mt-10">
    <div class="border-b-1 dark:border-gray-700 w-full">
      <h2 class="font-semibold text-bsonmezprimary">blogtan...</h2>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 px-2 mt-6 gap-2">
      <HomeBlogPost />
    </div>
  </div>

  <div class="px-2 mt-10">
    <div class="border-b-1 dark:border-gray-700 w-full">
      <h2 class="font-semibold text-bsonmezprimary">bazı referanslar</h2>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 justify-items-between items-stretch px-2 mt-6 gap-2">
      <HomeReference />
    </div>
  </div>

</template>

<script>
import { reactive, computed } from 'vue';
import WhatIDoItem from '@/components/WhatIDoItem.vue';
import AboutMe from '@/components/AboutMe.vue';
import HomeBlogPost from '@/components/HomeBlogPost.vue';
import HomeReference from '@/components/HomeReference.vue';
import profileImg from '@/assets/profile.jpg';
import { useStore } from 'vuex';

export default {
  name: 'Home',
  components: {
    WhatIDoItem,
    AboutMe,
    HomeBlogPost,
    HomeReference
  },
  setup() {
    const socials = reactive([
      { name: 'github', url: 'https://github.com/sonmez-baris' },
      { name: 'twitter', url: 'https://twitter.com/sonmezbaris' },
      { name: 'linkedin', url: 'https://www.linkedin.com/in/barissonmez/' },
      { name: 'medium', url: 'https://medium.com/@sonmez.baris' }
    ]);

    const store = useStore();

    // Actions
    const setLastBlogs = () => {
      store.dispatch('setLastBlogs');
    };
    setLastBlogs();

    const setTags = () => {
      store.dispatch('setTags');
    };
    setTags();

    // Getters
    const skills = computed(() => {
      return store.getters.getTags;
    });

    return { skills, profileImg, socials };
  }
};
</script>
