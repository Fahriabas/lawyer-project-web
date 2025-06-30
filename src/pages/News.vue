<template>
  <div class="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
    <div class="md:col-span-2">
      <h1 class="text-2xl font-bold text-gray-800 mb-2">Artikel</h1>
      <p class="text-gray-600 mb-6">
        Kolom Artikel aruang untuk menyajikan tulisan-tulisan hukum yang
        bersifat lebih akademik, analitis, dan berbasis referensi, ditujukan
        bagi pembaca yang ingin mendalami isu-isu hukum secara sistematis dan
        mendalam.
      </p>
      <div>
        <p class="text-gray-600 mb-2">Tulisan dalam kolom ini menampilkan:</p>
        <ul class="list-disc list-inside space-y-1 text-gray-600 mb-6">
          <li>Argumentasi hukum yang terstruktur;</li>
          <li>Pandangan kritis terhadap fenomena hukum di sekitar;;</li>
          <li>Cerita sehari-hari yang menyentuh aspek keadilan;</li>
          <li>Gagasan atau refleksi dari pengetahuan hukum yang dimiliki;</li>
          <li>Perbandingan hukum dengan nilai sosial, budaya, atau agama</li>
        </ul>
      </div>

      <p class="text-gray-600 mb-2">
        Tujuannya adalah menghadirkan hukum dari sisi yang lebih dekat dengan
        kehidupan, tidak kaku, dan tidak menggurui. Siapa pun — baik praktisi,
        akademisi, mahasiswa, maupun masyarakat umum — bisa menulis. Karena itu,
        gaya tulisan dalam kolom esai bersifat naratif, jujur, dan membumi.
      </p>

      <div
        v-for="(post, index) in posts"
        :key="index"
        class="flex flex-col md:flex-row gap-6 mb-8"
      >
        <div class="w-full md:w-[48%] relative">
          <img
            :src="post.thumbnail"
            class="rounded-lg w-full h-64 object-cover"
          />
          <span
            class="absolute top-2 left-2 bg-green-700 text-white text-xs font-semibold px-2 py-1 rounded"
            >Artikel</span
          >
        </div>
        <div class="flex flex-col justify-between">
          <h2 class="text-xl font-extrabold text-gray-900 leading-snug">
            {{ post.title }}
          </h2>
          <p class="text-sm text-gray-600 mt-2">
            OLEH
            <span class="text-green-700 font-semibold">{{ posts.author }}</span>
            • {{ posts[0].date }}
          </p>
          <p class="text-sm text-gray-800 mt-3">
            {{ post.excerpt }}
          </p>

          <button
            class="mt-4 px-4 py-2 text-sm border border-gray-300 hover:bg-green-600 w-fit cursor-pointer"
            @click="$router.push(`/detail/${post.id}`)"
          >
            BACA SELENGKAPNYA
          </button>
        </div>
      </div>
    </div>

    <div>
      <div class="bg-gray-100 p-4 rounded">
        <h3 class="text-sm font-bold text-green-700 mb-4">
          ⚡ Terpopuler Sepekan
        </h3>
        <div v-for="pop in popularPosts" :key="index" class="mb-4 flex gap-3">
          <img :src="pop.thumbnail" class="w-14 h-14 object-cover rounded" />
          <div>
            <p class="text-sm font-semibold text-gray-800 leading-snug">
              {{ pop.title }}
            </p>
            <p class="text-xs text-gray-500 mt-1">{{ pop.date }}</p>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useArticleStore } from "../store/article";
import { mapState } from "pinia";

// import post1Thumbnail from '../assets/post1.jpeg';

export default {
  computed: {
    ...mapState(useArticleStore, ["articles"]),
    posts() {
      return this.articles;
    },
    popularPosts() {
      const popularPosts = [
        {
          id: 101,
          title:
            "Kualitas Pendidikan Advokat Buruk, Tjoetjoe: Negara Harus Hadir untuk Pembenahan...",
          thumbnail:
            "https://www.kai.or.id/wp-content/uploads/2021/01/tjoetjoe-s-hernanto.jpeg",
          date: "19 Juni 2025",
        },
        {
          id: 102,
          title:
            "Diduga Ada Unsur Penipuan, RI Siapkan Gugatan Pembatalan Kontrak Satelit di ICC Singapura...",
          thumbnail:
            "https://cdn.antaranews.com/cache/1200x800/2025/06/04/1000434809.jpg",
          date: "16 Juni 2025",
        },
        {
          id: 103,
          title: "Rasanya Jadi Perantau Mengurus KTP...",
          thumbnail:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHVIbpCvyYYtM1vawuSD3EJDlsbItzF34bw&s",
          date: "16 Juni 2025",
        },
      ];
      return popularPosts;
    },
  },
};
</script>
