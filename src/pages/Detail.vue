<template>
  <div class="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
    <div class="md:col-span-2">
      <span
        class="bg-green-700 text-white text-xs font-semibold px-2 py-1 rounded mb-4 inline-block"
        >{{ detailData.type }}</span
      >

      <h1
        class="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4"
      >
        {{ detailData.title }}
      </h1>

      <div class="text-sm text-gray-600 mb-6 flex items-center gap-2">
        <span>oleh</span>
        <span class="text-green-700 font-semibold">{{
          detailData.author
        }}</span>
        <span>•</span>
        <span>{{ detailData.date }}</span>
        <span class="ml-auto flex items-center gap-2">
          <span class="text-gray-500">👀</span> {{ detailData.views }}
          <span class="text-gray-500">💬</span> {{ detailData.comments }}
          <span class="text-gray-500">A+</span>
        </span>
      </div>

      <img
        :src="detailData.image"
        alt="Article Main Image"
        class="w-full h-200 object-cover rounded-lg mb-8"
      />

      <div
        class="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-4 mb-10"
      >
        <p v-html="detailData.content"></p>
      </div>

      <div
        class="border-t border-b border-gray-200 py-4 flex flex-wrap gap-2 items-center text-sm mb-8"
      >
        <span class="font-semibold text-gray-700 mr-2">Tagar:</span>
        <a
          v-for="tag in detailData.tags"
          :key="tag"
          href="#"
          class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
        >
          #{{ tag }}
        </a>
      </div>

      <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-lg mb-8">
        <img
          :src="detailData.authorAvatar"
          alt="Author Avatar"
          class="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h4 class="font-bold text-gray-900">{{ detailData.author }}</h4>
          <p class="text-sm text-gray-600">{{ detailData.authorBio }}</p>
          <a href="#" class="text-green-700 text-sm hover:underline"
            >Lihat Artikel Lainnya</a
          >
        </div>
      </div>

      <div class="border-t border-gray-200 pt-8">
        <h3 class="text-xl font-bold text-gray-800 mb-4">Komentar</h3>
        <p class="text-gray-600">Fitur komentar akan ditambahkan di sini.</p>
      </div>

      <!-- <div>
            {{ detailData }}
        </div> -->
    </div>

    <div>
      <div class="bg-gray-100 p-4 rounded">
        <h3 class="text-sm font-bold text-green-700 mb-4">
          ⚡ Terpopuler Sepekan
        </h3>
        <div v-for="pop in popularPosts" :key="pop.id" class="mb-4 flex gap-3">
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
  </div>
</template>

<script>
// Impor yang tidak terpakai di Options API bisa dihapus jika tidak ada setup()
// import { computed, ref } from 'vue';
// import { useRoute } from 'vue-router';

import { useArticleStore } from "../store/article"; // Sesuaikan path jika berbeda
import { mapState } from "pinia"; // mapActions tidak dipakai di sini, bisa dihapus jika tidak digunakan

export default {
  name: "Detail", // Nama komponen, baik untuk debugging
  computed: {
    ...mapState(useArticleStore, ["articles"]), // Mengambil state `articles` dari Pinia store

    // Data dummy untuk artikel detail
    article() {
      return {
        id: 1,
        title:
          "Akhirnya Saya Tahu Alasan Orang Beli Sepeda Mahal Sampai Ratusan Juta: Gagal Finish, tetapi Setidaknya Gagal Secara Nyaman dan Bermartabat",
        author: "Mohammad Sadam Husaen",
        date: "22 Juni 2025",
        views: "1.2M",
        comments: "56K",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcf6G-KVgNeHXodvPp3K0KjyoA29E1LTb2A&s", // Ganti dengan URL gambar relevan
        content: `
        <p>Di dunia perspedaan, ada satu perdebatan abadi: lebih penting sepeda mahal atau dengkul yang kuat? Perdebatan ini tak pernah ada habisnya. Bak ayam dan telur, mana yang lebih dulu tercipta. Tiap kubu punya argumen yang sama kuatnya. Tiap kubu mengklaim kebenarannya masing-masing.</p>
        <p>Bagi kubu dengkul, sepeda hanyalah alat. Sehebat apa pun sepedanya, jika dengkul loyo, ya sama saja. Seperti kata pepatah: the engine, not the bike. Yang penting adalah mesinnya, bukan sepedanya. Dengkul yang kuat adalah investasi jangka panjang. Ia tak lekang dimakan zaman. Ia tak butuh perawatan mahal.</p>
        <p>Namun, kubu sepeda mahal juga punya argumennya. Sepeda mahal bukan sekadar alat, tapi karya seni. Ia adalah hasil riset dan pengembangan bertahun-tahun. Tiap komponennya dirancang untuk performa maksimal. Ringan, aerodinamis, dan presisi. Sepeda mahal adalah puncak teknologi. Ia adalah impian para pesepeda. Ia adalah status simbol.</p>
        <p>Saya pribadi sempat berada di kubu dengkul. Buat apa beli sepeda mahal jika toh ujung-ujungnya cuma buat di garasi? Buat apa beli sepeda ratusan juta jika cuma buat keliling komplek? Buat apa beli sepeda mahal jika toh ujung-ujungnya juga keringatan dan capek.</p>
        <p>Tapi, pandangan saya berubah setelah ikut lomba balap sepeda. Saya sadar, sepeda mahal bukan cuma soal performa. Tapi juga kenyamanan dan martabat. Ketika saya gagal finis dengan sepeda biasa, saya merasa lelah dan putus asa. Tapi ketika saya melihat teman saya gagal finis dengan sepeda mahal, ia tetap tersenyum dan bangga. Karena ia gagal secara nyaman dan bermartabat. Ia tahu, ia sudah melakukan yang terbaik. Dan sepedanya sudah mendukungnya secara maksimal.</p>
        <p>Jadi, mana yang lebih penting? Sepeda mahal atau dengkul kuat? Jawabannya, tergantung. Jika Anda cuma ingin keliling komplek, dengkul kuat sudah cukup. Tapi jika Anda ingin ikut lomba balap sepeda, dan ingin gagal secara nyaman dan bermartabat, maka sepeda mahal adalah jawabannya.</p>
        <p>Intinya, setiap pesepeda punya alasan dan preferensinya masing-masing. Yang terpenting adalah bersepeda, menikmati prosesnya, dan merasakan manfaatnya. Mau sepeda murah atau mahal, dengkul kuat atau tidak, yang penting gowes.</p>
      `,
        tags: ["Sepeda", "GayaHidup", "Hobi", "BalapSepeda"],
        authorAvatar:
          "https://www.gravatar.com/avatar/2c7d99fe21a8a25c786a3457a414b512?s=200&d=mp", // Ganti dengan URL avatar penulis
        authorBio:
          "Mohammad Sadam Husaen adalah seorang penulis lepas dan penggemar sepeda. Ia gemar menulis tentang gaya hidup, teknologi, dan pengalaman pribadi.",
      };
    },
    // Data dummy untuk artikel populer di sidebar
    popularPosts() {
      return [
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
        {
          id: 104,
          title: "Muslihat Penulisan Ulang Sejarah Mei 1998: Memberikan...",
          thumbnail:
            "https://media.istockphoto.com/id/952981694/id/foto/simbol-kota-surabaya-indonesia.jpg?s=612x612&w=0&k=20&c=Vrgm-AxeQlU5vOTaPD7JZUeuLdsLdmBceYilxjPvTAc=",
          date: "15 Juni 2025",
        },
        {
          id: 105,
          title: "Mengapa Pembelajaran Online Lebih Efektif?",
          thumbnail:
            "https://media.istockphoto.com/id/952981694/id/foto/simbol-kota-surabaya-indonesia.jpg?s=612x612&w=0&k=20&c=Vrgm-AxeQlU5vOTaPD7JZUeuLdsLdmBceYilxjPvTAc=",
          date: "14 Juni 2025",
        },
      ];
    },
    detailData() {
      // Ambil ID artikel dari route params
      const articleId = this.$route.params.id;
      // Cari artikel berdasarkan ID
      return this.articles.find((article) => article.id === articleId) || {};
    },
  },
  // Jika Anda ingin melakukan fetch data atau logika lain saat komponen dibuat, gunakan `created()` atau `mounted()`
  // created() {
  //   const articleId = parseInt(this.$route.params.id);
  //   // Panggil action dari store untuk fetch artikel
  //   // this.fetchArticleById(articleId); // Asumsikan ada action 'fetchArticleById' di Pinia store Anda
  // }
};
</script>

<style scoped>
/* Styling untuk `prose` (konten artikel) */
/* Anda perlu menginstal @tailwindcss/typography plugin untuk ini berfungsi */
.prose {
  font-family: "Georgia", serif;
  font-size: 1.125rem; /* text-lg */
  line-height: 1.75; /* leading-relaxed */
}

/* Custom styling untuk heading dalam konten artikel (jika diperlukan) */
.prose h1,
.prose h2,
.prose h3 {
  font-family: "Inter", sans-serif; /* Atau font lain yang Anda gunakan */
  color: #1a202c; /* gray-900 */
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}

/* Styling untuk gambar di dalam konten (jika ada) */
.prose img {
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem; /* rounded-lg */
  margin-top: 1em;
  margin-bottom: 1em;
}

/* Styling untuk link dalam konten */
.prose a {
  color: #10b981; /* green-500 */
  text-decoration: underline;
}

/* Styling untuk blockquote */
.prose blockquote {
  border-left: 0.25rem solid #10b981; /* green-500 */
  padding-left: 1rem;
  font-style: italic;
  color: #4a5568; /* gray-600 */
}
</style>
