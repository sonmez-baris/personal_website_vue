<template>
  <div class="flex flex-col pt-2 px-2">
    <div class="flex flex-row flex-wrap md:flex-nowrap gap-3 py-3">
      <div class="w-full">
        <input type="text" class="px-2 py-1 border-1 rounded-md placeholder-gray-600 w-full text-sm dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-300" placeholder="İçerik ara..." v-model="searchPost">
      </div>
      <div class="w-full">
        <select class="px-2 py-1 border-1 rounded-md placeholder-gray-600 w-full text-sm dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300" v-model="categoryFilter">
          <option value="">Tüm Kategoriler</option>
          <option :value="category.id" v-for="(category, index) in categories" :key="index">{{category.title}}</option>
        </select>
      </div>
      <div class="w-full">
        <button @click="filterPosts" class="px-2 py-1 border-1 rounded-md bg-bsonmezsecondary hover:bg-gray-400 hover:text-white transition-all duration-300 w-full text-sm dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-600">Ara</button>
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 justify-items-between items-stretch mt-6 gap-2">
      <div class="rounded-2xl bg-no-repeat bg-cover" :style="{'background-image': 'url(' + editImage(reference.attachment[0].url) + ')'}" v-for="(reference, index) in references.data" :key="index" >
      <router-link :to="'/portfolyo/' + reference.seflink">
        <div class="bg-bsonmezsecondary dark:bg-gray-800 bg-opacity-90 h-full py-6 rounded-xl">
          <p class="text-bsonmezprimary w-full text-center text-sm font-semibold">&lt;{{reference.tags}}&gt;</p>
          <h5 class="mt-4 text-sm text-center font-semibold px-10 flex justify-center">{{reference.title}}</h5>
        </div>
      </router-link>
      </div>
    </div>
    <Pagination v-if="references && references.meta" :currentPage="references.meta.current_page" :pageSize="references.meta.last_page" :perPage="references.meta.per_page" @pageChange="handlePageChange" />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Portfolio',
  components: { Pagination },
  setup() {
    const store = useStore();
    const categoryFilter = ref('');
    const searchPost = ref('');
    const currentPage = ref(null);
    const payloadCategory = {
      params: {
        type: 2
      }
    };
    const payloadReference = {
      params: {
        type: 3,
        category: null,
        search: null,
        page: null
      }
    };

    const filterPosts = () => {
      payloadReference.params.category = categoryFilter.value;
      payloadReference.params.search = searchPost.value;
      store.dispatch('setReferences', payloadReference);
    };

    const setCategories = () => {
      store.dispatch('setCategories', payloadCategory);
    };
    setCategories();

    const setReferences = () => {
      store.dispatch('setReferences', payloadReference);
    };
    setReferences();

    const handlePageChange = (page) => {
      currentPage.value = page;
      payloadReference.params.page = currentPage.value;
      store.dispatch('setReferences', payloadReference);
    };
    handlePageChange();

    const categories = computed(() => store.getters.getCategories);
    const references = computed(() => store.getters.getReferences);

    const editImage = (image) => {
      return 'https://api.barissonmez.com.tr/' + image;
    };

    return { references, categories, filterPosts, editImage, categoryFilter, searchPost };
  }
};
</script>
