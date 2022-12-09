<template>
  <div class="flex flex-col px-2 mt-4">
    <h4 class="font-semibold text-lg my-3 border-b-1">{{post.title}}</h4>
    <nav class="rounded-md w-full my-3">
      <ol class="list-reset flex justify-end text-sm">
        <li><router-link to="/"><span class="text-blue-600 hover:text-blue-700">Anasayfa</span></router-link></li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li><router-link to="/blog"><span class="text-gray-500">Blog</span></router-link></li>
      </ol>
    </nav>
    <p class="indent-4 mb-3" v-html="post.content"></p>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'BlogDetailPost',
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
