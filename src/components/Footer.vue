<template>
  <div class="flex flex-col border-t-2 border-b-2 dark:border-gray-700 py-2 mt-10 mb-16 md:mb-0">
      <div class="text-xs text-center font-light px-2">barış sönmez (c) {{ date }}. made vith <span class="text-green-800 dark:text-gray-200"><font-awesome-icon :icon="['fa-brands', 'vuejs']" /></span>. we <span class="text-red-600 dark:text-gray-200"><font-awesome-icon :icon="['fa-solid', 'heart']" /></span> <a href="https://github.com/sonmez-baris/personal_website_vue" class="hover:underline" target="_blank">opensource</a></div>
      <div class="text-xs text-center font-light px-2">
          <a href="" class="text-gray-400 dark:hover:text-gray-100 text-xs mr-3 hover:text-gray-800 transition-colors duration-300">&lt;gizlilik&gt;</a>
          <a href="" class="text-gray-400 dark:hover:text-gray-100 text-xs mr-3 hover:text-gray-800 transition-colors duration-300">&lt;çerezler&gt;</a>
          <a href="" class="text-gray-400 dark:hover:text-gray-100 text-xs mr-3 hover:text-gray-800 transition-colors duration-300">&lt;iletişim&gt;</a>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  props: {
    date: String
  }
};
</script>
