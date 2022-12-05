<template>
  <a href="#" v-for="(service, index) in services" :key="index">
    <div class="service-circle">
      {{service}}
    </div>
  </a>
</template>

<script>
export default {
  name: 'WhatIDoItem',
  props: ['services']
};
</script>
