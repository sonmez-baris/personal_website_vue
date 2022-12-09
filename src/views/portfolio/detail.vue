<template>
  <div class="flex flex-col px-2 mt-4">
    <img src="@/assets/img/graphic-design.jpg" class="w-full h-60 object-cover" alt="">
    <nav class="rounded-md w-full mt-3">
      <ol class="list-reset flex justify-end text-sm">
        <li><router-link to="/"><span class="text-blue-600 hover:text-blue-700">Anasayfa</span></router-link></li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li><router-link to="/blog"><span class="text-gray-500">Blog</span></router-link></li>
      </ol>
    </nav>

    <h4 class="font-semibold text-lg my-3 border-b-1">Lorem Ipsum Dolor Sit Amet</h4>
    <p class="indent-4 mb-3">Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.</p>
    <p class="indent-4 mb-3">Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden biri olan 'consectetur' sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme alınan "de Finibus Bonorum et Malorum" (İyi ve Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum pasajının ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32 sayılı bölümdeki bir satırdan gelmektedir.</p>
  </div>
</template>

<script>
export default {
  name: 'BlogPost'
};
</script>
