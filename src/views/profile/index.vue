<template>
  <AboutMe />
  <div class="flex px-2 flex-row mt-2 flex-wrap w-full">
    <Skill />
  </div>
  <div class="flex flex-col px-2 mt-4">
    <h4 class="font-semibold text-lg my-3 border-b-1">barış sönmez <span class="font-normal">kimdir?</span></h4>
    <p class="indent-4 mb-3" v-html="post.content"></p>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import AboutMe from '@/components/AboutMe.vue';
import Skill from '@/components/Skill.vue';

export default {
  name: 'ServiceDetailPost',
  components: {
    AboutMe,
    Skill
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const lastPartOfUrl = route.path.split('/').pop();

    const setBlogPost = () => {
      store.dispatch('setBlogPost', { seflink: lastPartOfUrl });
    };
    setBlogPost();

    const post = computed(() => {
      return store.getters.getBlogPost;
    });

    return { post };
  }
};
</script>
