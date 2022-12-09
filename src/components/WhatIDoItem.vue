<template>
  <router-link :to="service.url" v-for="(service, index) in services" :key="index">
    <div class="service-circle">
      {{service.title}}
    </div>
  </router-link>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'WhatIDoItem',
  setup() {
    const store = useStore();

    const setHomeServices = () => {
      store.dispatch('setHomeServices');
    };
    setHomeServices();

    const services = computed(() => {
      return store.getters.getHomeServices;
    });

    return { services };
  }
};
</script>
