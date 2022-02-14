<template>
  <div class="flex flex-col pt-2 px-2">

    <div class="flex flex-row flex-wrap md:flex-nowrap gap-3 py-3">
      <div class="w-full">
        <input type="text" class="px-2 py-1 border-1 rounded-md placeholder-gray-600 w-full text-sm dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-300" placeholder="İçerik ara...">
      </div>
      <div class="w-full">
        <select class="px-2 py-1 border-1 rounded-md placeholder-gray-600 w-full text-sm dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
          <option value="">Kategori 1</option>
          <option value="">Kategori 2</option>
          <option value="">Kategori 3</option>
        </select>
      </div>
      <div class="w-full">
        <button class="px-2 py-1 border-1 rounded-md bg-bsonmezsecondary hover:bg-gray-400 hover:text-white transition-all duration-300 w-full text-sm dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-600">Ara</button>
      </div>
    </div>

    <div class="flex flex-col gap-2">

      <router-link to="/blog/post">
      <div class="bg-bsonmezsecondary dark:bg-gray-800 px-4 py-4 w-full items-center rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300">
        <p class="font-semibold">Aermod INP Dosyası Çalıştırmaya Hazırlık.</p>
        <p class="text-xs text-gray-600 dark:text-gray-400"><span class="font-semibold">Genel</span> kategorisinde, 12 saat önce.</p>
      </div>
      </router-link>
      <router-link to="/">
      <div class="bg-bsonmezsecondary dark:bg-gray-800 px-4 py-4 w-full items-center rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300">
        <p class="font-semibold">Aermod INP Dosyası ve Kod Yapısı.</p>
        <p class="text-xs text-gray-600 dark:text-gray-400"><span class="font-semibold">Genel</span> kategorisinde, 12 saat önce.</p>
      </div>
      </router-link>
      <router-link to="/">
      <div class="bg-bsonmezsecondary dark:bg-gray-800 px-4 py-4 w-full items-center rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300">
        <p class="font-semibold">Uzun Yılların Ardından.</p>
        <p class="text-xs text-gray-600 dark:text-gray-400"><span class="font-semibold">Genel</span> kategorisinde, 12 saat önce.</p>
      </div>
      </router-link>
      <router-link to="/">
      <div class="bg-bsonmezsecondary dark:bg-gray-800 px-4 py-4 w-full items-center rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300">
        <p class="font-semibold">Aermod İçin Gerekli Dosyalar ve Çalıştırmaya Hazırlık.</p>
        <p class="text-xs text-gray-600 dark:text-gray-400"><span class="font-semibold">Genel</span> kategorisinde, 12 saat önce.</p>
      </div>
      </router-link>
      <router-link to="/">
      <div class="bg-bsonmezsecondary dark:bg-gray-800 px-4 py-4 w-full items-center rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300">
        <p class="font-semibold">AERMOD'a Giriş.</p>
        <p class="text-xs text-gray-600 dark:text-gray-400"><span class="font-semibold">Genel</span> kategorisinde, 12 saat önce.</p>
      </div>
      </router-link>
      <router-link to="/">
      <div class="bg-bsonmezsecondary dark:bg-gray-800 px-4 py-4 w-full items-center rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300">
        <p class="font-semibold">Aermod INP Dosyası Çalıştırmaya Hazırlık.</p>
        <p class="text-xs text-gray-600 dark:text-gray-400"><span class="font-semibold">Genel</span> kategorisinde, 12 saat önce.</p>
      </div>
      </router-link>
      <router-link to="/">
      <div class="bg-bsonmezsecondary dark:bg-gray-800 px-4 py-4 w-full items-center rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300">
        <p class="font-semibold">Aermod INP Dosyası ve Kod Yapısı.</p>
        <p class="text-xs text-gray-600 dark:text-gray-400"><span class="font-semibold">Genel</span> kategorisinde, 12 saat önce.</p>
      </div>
      </router-link>
      <router-link to="/">
      <div class="bg-bsonmezsecondary dark:bg-gray-800 px-4 py-4 w-full items-center rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300">
        <p class="font-semibold">Uzun Yılların Ardından.</p>
        <p class="text-xs text-gray-600 dark:text-gray-400"><span class="font-semibold">Genel</span> kategorisinde, 12 saat önce.</p>
      </div>
      </router-link>
      <router-link to="/">
      <div class="bg-bsonmezsecondary dark:bg-gray-800 px-4 py-4 w-full items-center rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300">
        <p class="font-semibold">Aermod İçin Gerekli Dosyalar ve Çalıştırmaya Hazırlık.</p>
        <p class="text-xs text-gray-600 dark:text-gray-400"><span class="font-semibold">Genel</span> kategorisinde, 12 saat önce.</p>
      </div>
      </router-link>
      <router-link to="/">
      <div class="bg-bsonmezsecondary dark:bg-gray-800 px-4 py-4 w-full items-center rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300">
        <p class="font-semibold">AERMOD'a Giriş.</p>
        <p class="text-xs text-gray-600 dark:text-gray-400"><span class="font-semibold">Genel</span> kategorisinde, 12 saat önce.</p>
      </div>
      </router-link>
    </div>
    <div class="flex gap-2 justify-center mt-6">
      <router-link to="/">
      <div class="w-8 h-8 bg-bsonmezsecondary inline-flex items-center justify-center rounded-md text-sm hover:bg-gray-400 hover:text-white transition-all duration-300 dark:bg-gray-800 dark:hover:bg-gray-700">ilk</div>
      </router-link>
      <router-link to="/">
      <div class="w-8 h-8 bg-bsonmezsecondary inline-flex items-center justify-center rounded-md text-sm hover:bg-gray-400 hover:text-white transition-all duration-300 dark:bg-gray-800 dark:hover:bg-gray-700">&lt;&lt;</div>
      </router-link>
      <router-link to="/">
      <div class="w-8 h-8 bg-bsonmezsecondary inline-flex items-center justify-center rounded-md text-sm hover:bg-gray-400 hover:text-white transition-all duration-300 dark:bg-gray-800 dark:hover:bg-gray-700">1</div>
      </router-link>
      <router-link to="/">
      <div class="w-8 h-8 bg-bsonmezsecondary inline-flex items-center justify-center rounded-md text-sm hover:bg-gray-400 hover:text-white transition-all duration-300 dark:bg-gray-800 dark:hover:bg-gray-700">2</div>
      </router-link>
      <router-link to="/">
      <div class="w-8 h-8 bg-bsonmezsecondary inline-flex items-center justify-center rounded-md text-sm hover:bg-gray-400 hover:text-white transition-all duration-300 dark:bg-gray-800 dark:hover:bg-gray-700">3</div>
      </router-link>
      <router-link to="/">
      <div class="w-8 h-8 bg-bsonmezsecondary inline-flex items-center justify-center rounded-md text-sm hover:bg-gray-400 hover:text-white transition-all duration-300 dark:bg-gray-800 dark:hover:bg-gray-700">&gt;&gt;</div>
      </router-link>
      <router-link to="/">
      <div class="w-8 h-8 bg-bsonmezsecondary inline-flex items-center justify-center rounded-md text-sm hover:bg-gray-400 hover:text-white transition-all duration-300 dark:bg-gray-800 dark:hover:bg-gray-700">son</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog'
};
</script>
