<template>

  <div class="flex px-2">
    <ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 gap-1">
      <router-link :to="{path: '/portfolio', query: { type: 'all' }}">
      <li class="nav-item" role="presentation">
        <span class="portfolio-tab active">tümü</span>
      </li>
      </router-link>
      <router-link :to="{path: '/portfolio', query: { type: 'web' }}">
      <li class="nav-item" role="presentation">
        <span class="portfolio-tab">web</span>
      </li>
      </router-link>
      <router-link :to="{path: '/portfolio', query: { type: 'mobile' }}">
      <li class="nav-item" role="presentation">
        <span class="portfolio-tab">mobil</span>
      </li>
      </router-link>
      <router-link :to="{path: '/portfolio', query: { type: 'embed' }}">
      <li class="nav-item" role="presentation">
        <span class="portfolio-tab">elektronik</span>
      </li>
      </router-link>
      <router-link :to="{path: '/portfolio', query: { type: 'graphic' }}">
      <li class="nav-item" role="presentation">
        <span class="portfolio-tab">grafik</span>
      </li>
      </router-link>
    </ul>
  </div>

  <div class="grid grid-cols-2 md:grid-cols-4 justify-items-between items-stretch px-2 mt-6 gap-2">
    <div class="rounded-2xl bg-no-repeat bg-cover" :style="{'background-image': 'url(' + require('@/assets/img/web01.jpg') + ')'}" >
      <a href="">
        <div class="bg-bsonmezsecondary dark:bg-gray-800 bg-opacity-90 h-full py-6 rounded-xl">
          <p class="text-bsonmezprimary w-full text-center text-sm font-semibold">&lt;web&gt;</p>
          <h5 class="mt-4 text-sm text-center font-semibold">özlem<br>özyün</h5>
        </div>
      </a>
    </div>
    <div class="rounded-2xl bg-no-repeat bg-cover" :style="{'background-image': 'url(' + require('@/assets/img/embed01.jpg') + ')'}" >
      <a href="">
        <div class="bg-bsonmezsecondary dark:bg-gray-800 bg-opacity-90 h-full py-6 rounded-xl">
          <p class="text-bsonmezprimary w-full text-center text-sm font-semibold">&lt;embed&gt;</p>
          <h5 class="mt-4 text-sm text-center font-semibold">jagbt</h5>
        </div>
      </a>
    </div>
    <div class="rounded-2xl bg-no-repeat bg-cover" :style="{'background-image': 'url(' + require('@/assets/img/mobile01.jpg') + ')'}" >
      <a href="">
        <div class="bg-bsonmezsecondary dark:bg-gray-800 bg-opacity-90 h-full py-6 rounded-xl">
          <p class="text-bsonmezprimary w-full text-center text-sm font-semibold">&lt;mobile&gt;</p>
          <h5 class="mt-4 text-sm text-center font-semibold">mert<br>istihbarat</h5>
        </div>
      </a>
    </div>
    <div class="rounded-2xl bg-no-repeat bg-cover" :style="{'background-image': 'url(' + require('@/assets/img/graphic01.jpg') + ')'}" >
      <a href="">
        <div class="bg-bsonmezsecondary dark:bg-gray-800 bg-opacity-90 h-full py-6 rounded-xl">
          <p class="text-bsonmezprimary w-full text-center text-sm font-semibold">&lt;graphic&gt;</p>
          <h5 class="mt-4 text-sm text-center font-semibold">cpr<br>mobil</h5>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio'
};
</script>
