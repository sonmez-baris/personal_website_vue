<template>

  <div class="w-[600px] mx-auto border-l-2 border-r-2 border-gray-200 max-h-screen px-2">
    <TopBar msg="Bugün onların olsun, ama uğrunda çok uğraştığım gelecek benimdir!" />
  </div>

</template>

<script>

import TopBar from '@/components/TopBar.vue'

export default {
  name: 'App',
  components: {
    TopBar
  }
}
</script>
