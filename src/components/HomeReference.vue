<template>
  <div class="rounded-2xl bg-no-repeat bg-cover" :style="{'background-image': 'url(' + editImage(reference.image) + ')'}" v-for="(reference, index) in references" :key="index" >
    <a href="">
      <div class="bg-bsonmezsecondary dark:bg-gray-800 bg-opacity-90 h-full py-6 rounded-xl">
        <p class="text-bsonmezprimary w-full text-center text-sm font-semibold">&lt;{{reference.category}}&gt;</p>
        <h5 class="mt-4 text-sm text-center font-semibold px-10 flex justify-center">{{reference.title}}</h5>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'HomeReference',
  props: {
    references: {
      type: Array,
      required: true
    }
  },
  setup() {
    const editImage = (image) => {
      return require(`@/assets/img/${image}`);
    };

    return { editImage };
  }
};
</script>
