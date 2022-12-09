<template>
  <router-link :to="post.url" v-for="(post, index) in truncatedPosts" :key="index">
    <div class="bg-bsonmezsecondary dark:bg-gray-800 px-2 py-3 rounded-xl">
      <p class="text-bsonmezprimary"><font-awesome-icon :icon="['fa-solid', 'code']" /></p>
      <h5 class="text-sm font-semibold flex items-center mb-2 h-10">{{post.title}}</h5>
      <p class="text-sm">{{ post.summary }}</p>
    </div>
  </router-link>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'HomeBlogPost',
  setup() {
    const truncate = (text, length) => {
      if (text.length > length) {
        return text.substring(0, length) + '...';
      }
      return text;
    };

    const store = useStore();

    const setLastBlogs = () => {
      store.dispatch('setLastBlogs');
    };
    setLastBlogs();

    const lastBlogs = computed(() => {
      return store.getters.lastBlogs;
    });

    const truncatedPosts = computed(() => {
      return lastBlogs.value.map(post => {
        return {
          title: truncate(post.title, 33),
          summary: truncate(post.summary, 70),
          url: '/blog/' + post.seflink
        };
      });
    });

    return {
      truncate,
      lastBlogs,
      truncatedPosts
    };
  }
};
</script>
