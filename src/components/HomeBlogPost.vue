<template>
  <a href="#" v-for="(post, index) in truncatedPosts" :key="index">
    <div class="bg-bsonmezsecondary dark:bg-gray-800 px-2 py-3 rounded-xl">
      <p class="text-bsonmezprimary"><font-awesome-icon :icon="['fa-solid', 'code']" /></p>
      <h5 class="text-sm font-semibold mb-2">{{ post.title }}</h5>
      <p class="text-sm">{{ post.content }}</p>
    </div>
  </a>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'HomeBlogPost',
  props: {
    posts: {
      type: Object,
      required: true
    }
  },
  setup(posts) {
    const truncate = (text, length) => {
      if (text.length > length) {
        return text.substring(0, length) + '...';
      }
      return text;
    };

    const truncatedPosts = computed(() => {
      return posts.posts.map(post => {
        return {
          title: truncate(post.content, 33),
          content: truncate(post.content, 70)
        };
      });
    });

    return {
      truncate,
      truncatedPosts
    };
  }
};
</script>
