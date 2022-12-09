<template v-if="post">
  <div class="flex flex-col px-2 mt-4" v-if="post && post.attachment && post.attachment[0]">
    <img :src="editImage" class="w-full h-60 object-cover">
    <h4 class="font-semibold text-lg my-5 border-b-1">{{post.title}}</h4>
    <p class="indent-4 mb-3" v-html="post.content"></p>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'ServiceDetailPost',
  setup() {
    const store = useStore();
    const route = useRoute();
    const lastPartOfUrl = route.path.split('/').pop();

    const setServicePost = () => {
      store.dispatch('setServicePost', { seflink: lastPartOfUrl });
    };
    setServicePost();

    const post = computed(() => {
      return store.getters.getServicePost;
    });

    const editImage = computed(() => {
      if (post.value.attachment[0] === undefined) {
        return false;
      } else {
        return store.state.apiBaseURL + post.value.attachment[0].url;
      }
    });

    return { post, editImage };
  }
};
</script>
