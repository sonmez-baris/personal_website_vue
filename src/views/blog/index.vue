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

    <div class="flex flex-col gap-2">

      <router-link :to="'/blog/'+blog.seflink" v-for="(blog, index) in blogs.data" :key="index">
      <div class="bg-bsonmezsecondary dark:bg-gray-800 px-4 py-4 w-full items-center rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300">
        <p class="font-semibold">{{blog.title}}</p>
        <p class="text-xs text-gray-600 dark:text-gray-400"><span class="font-semibold">Genel</span> kategorisinde, 12 saat önce.</p>
      </div>
      </router-link>
      <Pagination v-if="blogs && blogs.meta" :currentPage="blogs.meta.current_page" :pageSize="blogs.meta.last_page" :perPage="blogs.meta.per_page" @pageChange="handlePageChange" />
    </div>

  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Blog',
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
    const payloadBlog = {
      params: {
        type: 1,
        category: null,
        search: null,
        page: null
      }
    };

    const filterPosts = () => {
      payloadBlog.params.category = categoryFilter.value;
      payloadBlog.params.search = searchPost.value;
      store.dispatch('setAllBlogs', payloadBlog);
    };

    const setCategories = () => {
      store.dispatch('setCategories', payloadCategory);
    };
    setCategories();

    const setAllBlogs = () => {
      store.dispatch('setAllBlogs', payloadBlog);
    };
    setAllBlogs();

    const handlePageChange = (page) => {
      currentPage.value = page;
      payloadBlog.params.page = currentPage.value;
      store.dispatch('setAllBlogs', payloadBlog);
    };
    handlePageChange();

    const categories = computed(() => store.getters.getCategories);
    const blogs = computed(() => store.getters.getAllBlogs);

    return { categories, blogs, filterPosts, categoryFilter, searchPost };
  }
};
</script>
