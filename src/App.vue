<template>
<div class="w-full md:w-160 h-full mx-auto">
  <Sidebar />
  <div class="overflow-y-auto">
      <router-view />
  </div>
</div>
</template>

<script>

import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar
  }
};
</script>
