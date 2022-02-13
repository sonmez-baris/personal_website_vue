<template>
<div class="w-full md:w-160 h-full mx-auto">
  <Sidebar />
  <div class="w-full md:w-150 mx-auto border-l-2 border-r-2 border-gray-200 dark:border-gray-700 max-h overflow-y-auto">
    <TopBar msg="Bugün onların olsun, ama uğrunda çok uğraştığım gelecek benimdir!" />
    <router-view />
    <Footer date="2022" />
  </div>
</div>
</template>

<script>

import Sidebar from '@/components/Sidebar.vue';
import TopBar from '@/components/TopBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    TopBar,
    Footer
  }
};
</script>
