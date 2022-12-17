<template>
  <div class="flex flex-col px-2 mt-4">
    <h4 class="font-semibold text-lg my-3 border-b-1">{{ reference.title }}</h4>

    <Carousel>
      <Slide v-for="(image, index) in reference.attachment" :key="index">
        <img :src="editImage(image.url)">
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>

    <p class="indent-4 mb-3" v-html="reference.content"></p>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'PortfolioDetail',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const lastPartOfUrl = route.path.split('/').pop();

    const setReferenceDetail = () => {
      store.dispatch('setReferenceDetail', { seflink: lastPartOfUrl });
    };
    setReferenceDetail();

    const reference = computed(() => store.getters.getReferenceDetail);

    const editImage = (image) => {
      return 'https://api.barissonmez.com.tr/' + image;
    };

    return { reference, editImage };
  }
};
</script>
