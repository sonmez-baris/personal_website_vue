<template>
  <span class="skill-tag" v-for="(skill, index) in skills" :key="index">{{skill.title}}</span>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'Skill',
  setup() {
    const store = useStore();

    // Actions
    const setTags = () => {
      store.dispatch('setTags');
    };
    setTags();

    // Getters
    const skills = computed(() => {
      return store.getters.getTags;
    });

    return { skills };
  }
};
</script>
