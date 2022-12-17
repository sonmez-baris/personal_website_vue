<template>
  <div class="flex gap-2 justify-center mt-6">
    <div v-if="currentPage > 1" class="w-8 h-8 bg-bsonmezsecondary cursor-pointer inline-flex items-center justify-center rounded-md text-sm hover:bg-gray-400 hover:text-white transition-all duration-300 dark:bg-gray-800 dark:hover:bg-gray-700" @click="firstPage">ilk</div>
    <div v-if="currentPage > 1" class="w-8 h-8 bg-bsonmezsecondary cursor-pointer inline-flex items-center justify-center rounded-md text-sm hover:bg-gray-400 hover:text-white transition-all duration-300 dark:bg-gray-800 dark:hover:bg-gray-700" @click="previousPage">&lt;&lt;</div>
    <div v-for="(page, index) in visiblePageNumbers" :key="index" class="w-8 h-8 cursor-pointer inline-flex items-center justify-center rounded-md text-sm hover:bg-gray-400 hover:text-white transition-all duration-300 dark:bg-gray-800 dark:hover:bg-gray-700" :class="page === currentPage ? 'bg-gray-500 text-white dark:bg-gray-700 dark:text-white' : 'bg-bsonmezsecondary'">{{page}}</div>
    <div v-if="pageSize > 1" class="w-8 h-8 bg-bsonmezsecondary cursor-pointer inline-flex items-center justify-center rounded-md text-sm hover:bg-gray-400 hover:text-white transition-all duration-300 dark:bg-gray-800 dark:hover:bg-gray-700" @click="nextPage">&gt;&gt;</div>
    <div v-if="pageSize > 1 && currentPage !== pageSize" class="w-8 h-8 bg-bsonmezsecondary cursor-pointer inline-flex items-center justify-center rounded-md text-sm hover:bg-gray-400 hover:text-white transition-all duration-300 dark:bg-gray-800 dark:hover:bg-gray-700" @click="lastPage">son</div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'Pagination',
  props: {
    currentPage: Number,
    pageSize: Number,
    perPage: Number
  },
  setup(props, { emit }) {
    const currentPage = ref(props.currentPage);
    const pageSize = ref(props.pageSize);

    const visiblePageNumbers = computed(() => {
      const pageCount = Math.ceil(pageSize.value);
      if (pageCount <= 5) {
        // if there are 5 pages or fewer, show all page numbers
        return Array.from({ length: pageCount }, (_, i) => i + 1);
      } else {
        // if there are more than 5 pages, only show the current page,
        // the two pages before and after it, and "..." in place of the rest
        const visiblePageNumbers = [1, currentPage.value - 1, currentPage.value, currentPage.value + 1, pageCount];
        return visiblePageNumbers.filter(
          pageNumber => pageNumber > 0 && pageNumber <= pageCount
        ).map((pageNumber, i, arr) => {
          if (i > 0 && arr[i - 1] + 1 !== pageNumber) {
            return '...';
          } else {
            return pageNumber;
          }
        });
      }
    });

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const nextPage = () => {
      if (currentPage.value < pageSize.value) {
        currentPage.value++;
      }
    };

    const firstPage = () => {
      if (currentPage.value > 1) {
        currentPage.value = 1;
      }
    };

    const lastPage = () => {
      if (currentPage.value < pageSize.value) {
        currentPage.value = pageSize.value;
      }
    };

    const setCurrentPage = page => {
      currentPage.value = page;
    };

    emit('pageChange', currentPage.value);

    return {
      visiblePageNumbers,
      prevPage,
      nextPage,
      firstPage,
      lastPage,
      setCurrentPage
    };
  }
};
</script>
