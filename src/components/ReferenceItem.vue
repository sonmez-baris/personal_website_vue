<template>
  <div class="rounded-2xl bg-no-repeat bg-cover" :style="{'background-image': 'url(' + editImage(reference.attachment[0].url) + ')'}" v-for="(reference, index) in references" :key="index" >
    <router-link :to="'/portfolyo/' + reference.seflink">
      <div class="bg-bsonmezsecondary dark:bg-gray-800 bg-opacity-90 h-full py-6 rounded-xl">
        <p class="text-bsonmezprimary w-full text-center text-sm font-semibold">&lt;{{reference.tags}}&gt;</p>
        <h5 class="mt-4 text-sm text-center font-semibold px-10 flex justify-center">{{reference.title}}</h5>
      </div>
    </router-link>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'HomeReference',
  setup() {
    const store = useStore();

    const setHomeReferences = () => {
      store.dispatch('setHomeReferences');
    };
    setHomeReferences();

    const references = computed(() => {
      return store.getters.getHomeReferences;
    });

    const editImage = (image) => {
      return 'https://api.barissonmez.com.tr/' + image;
    };

    return { editImage, references };
  }
};
</script>
