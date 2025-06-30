<template>
  <div class="max-w-5xl mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold text-gray-800 mb-12">Kru Kami</h1>

    <!-- Kepala -->
    <div class="flex justify-center mb-16">
      <div class="bg-white rounded-lg shadow p-6 text-center w-64 relative">
        <div
          class="w-32 h-32 mx-auto -mt-20 rounded-full border-4 border-white shadow-lg overflow-hidden"
        >
          <img
            :src="kepala?.image"
            alt="Kepala"
            class="w-full h-full object-cover"
          />
        </div>
        <h2 class="mt-4 text-xl font-semibold text-gray-800">
          {{ kepala?.name }}
        </h2>
        <p class="text-gray-500">{{ kepala?.role }}</p>
      </div>
    </div>

    <!-- Anggota Bersaf -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      <div
        v-for="crew in anggota"
        :key="crew.name"
        class="bg-white rounded-lg shadow p-6 text-center relative"
      >
        <div
          class="w-24 h-24 mx-auto -mt-16 rounded-full border-4 border-white shadow-lg overflow-hidden"
        >
          <img
            :src="crew.image"
            alt="Foto"
            class="w-full h-full object-cover"
          />
        </div>
        <h2 class="mt-4 text-lg font-semibold text-gray-800">
          {{ crew.name }}
        </h2>
        <p class="text-gray-500 text-sm">{{ crew.role }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import img from "../assets/post1.jpeg";
export default {
  computed: {
    // ...mapState(useArticleStore, ["articles"]),
    // posts() {
    //   return this.articles;
    // },
    kepala() {
      return {
        name: "Tony Akbar Hasibuan, SH., MH.",
        role: "Managing Partner",
        image: img,
      };
    },
    anggota() {
      const crew = [
        {
          name: "Sokhibul Kahfi, SH., MH.",
          role: "Partner",
          image: new URL(
            "https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small/default-avatar-photo-placeholder-profile-picture-vector.jpg"
          ).href,
        },
        {
          name: "Ari Arfan Hasibuan, SH.",
          role: "Partner",
          image: new URL(
            "https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small/default-avatar-photo-placeholder-profile-picture-vector.jpg"
          ).href,
        },
        {
          name: "Alvi Zuhri Hasibuan, SH.",
          role: "Partner",
          image: new URL(
            "https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small/default-avatar-photo-placeholder-profile-picture-vector.jpg"
          ).href,
        },
        {
          name: "Fifty Kosam, S.pd.",
          role: "Manager Oprasional",
          image: new URL(
            "https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small/default-avatar-photo-placeholder-profile-picture-vector.jpg"
          ).href,
        },
      ];
      return crew;
    },
  },
};
</script>

<style scoped></style>
