<template>
  <header>
    <div class="bg-[#08222F] py-3">
      <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <img
          src="../assets/image-removebg-preview.png"
          alt="Logo"
          class="h-25 ml-10"
        />

        <div class="relative md:hidden">
          <input
            type="text"
            placeholder="Cari..."
            class="pl-4 pr-10 py-1.5 rounded-full border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-24 sm:w-auto"
          />
          <button
            class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            🔍
          </button>
        </div>

        <div class="flex items-center gap-4">
          <button
            @click="toggleMobileMenu"
            class="md:hidden text-white text-2xl focus:outline-none"
          >
            <span v-if="!isMobileMenuOpen">☰</span>
            <span v-else>✕</span>
          </button>

          <button
            class="hidden md:flex bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full items-center gap-1 hover:bg-green-700"
          >
            <span>✏️</span> KIRIM ARTIKEL
          </button>

          <div class="hidden md:flex gap-2">
            <div class="w-6 h-6 rounded-full bg-pink-500"></div>
            <div
              class="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white text-xs"
            >
              X
            </div>
            <div class="w-6 h-6 rounded-full bg-blue-600"></div>
            <div
              class="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white text-xs"
            >
              🎵
            </div>
            <div class="w-6 h-6 rounded-full bg-red-600"></div>
          </div>
        </div>
      </div>
    </div>

    <nav
      v-if="isMobileMenuOpen"
      class="md:hidden bg-gray-100 py-4 border-b border-gray-200"
    >
      <ul
        class="flex flex-col items-center gap-4 font-semibold text-sm text-gray-900"
      >
        <li>
          <a
            @click="navigateAndClose('/')"
            :class="{
              'text-green-700 font-bold cursor-pointer': isActiveRoute('/'),
            }"
            >Utama</a
          >
        </li>
        <li>
          <a
            @click="navigateAndClose('/esai')"
            :class="{
              'text-green-700 font-bold cursor-pointer': isActiveRoute('/esai'),
            }"
            >Esai</a
          >
        </li>
        <li>
          <a
            @click="navigateAndClose('/article')"
            :class="{
              'text-green-700 font-bold cursor-pointer':
                isActiveRoute('/article'),
            }"
            >Artikel</a
          >
        </li>
        <li>
          <a
            @click="navigateAndClose('/news')"
            :class="{
              'text-green-700 font-bold cursor-pointer': isActiveRoute('/news'),
            }"
            >Berita</a
          >
        </li>
        <li>
          <a
            @click="navigateAndClose('/about')"
            :class="{
              'text-green-700 font-bold cursor-pointer':
                isActiveRoute('/about'),
            }"
            >Tonyhaslaw</a
          >
        </li>
      </ul>
    </nav>

    <div
      class="hidden md:flex bg-gray-100 px-4 py-2 flex-wrap items-center justify-between border-t border-gray-200"
    >
      <ul
        class="flex flex-wrap gap-6 font-semibold text-sm text-gray-900 mx-auto"
      >
        <li>
          <a
            @click="$router.push('/')"
            :class="{
              'text-green-700 font-bold cursor-pointer': isActiveRoute('/'),
            }"
            >Utama</a
          >
        </li>
        <li>
          <a
            @click="$router.push('/esai')"
            :class="{
              'text-green-700 font-bold cursor-pointer': isActiveRoute('/esai'),
            }"
            >Esai</a
          >
        </li>
        <li>
          <a
            @click="$router.push('/article')"
            :class="{
              'text-green-700 font-bold cursor-pointer':
                isActiveRoute('/article'),
            }"
            >Artikel</a
          >
        </li>
        <li>
          <a
            @click="$router.push('/news')"
            :class="{
              'text-green-700 font-bold cursor-pointer': isActiveRoute('/news'),
            }"
            >Berita</a
          >
        </li>
        <li>
          <a
            @click="$router.push('/about')"
            :class="{
              'text-green-700 font-bold cursor-pointer':
                isActiveRoute('/about'),
            }"
            >Tonyhaslaw</a
          >
        </li>
      </ul>

      <!-- <div class="relative">
        <input
          type="text"
          placeholder="Cari..."
          class="pl-4 pr-10 py-1.5 rounded-full border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
        >
          🔍
        </button>
      </div> -->
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router"; // Import useRoute dan useRouter

const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Inisialisasi router dan route
const route = useRoute();
const router = useRouter();

// Fungsi untuk memeriksa apakah rute saat ini cocok dengan path yang diberikan
const isActiveRoute = (path) => {
  // Untuk rute yang eksak
  return route.path === path;

  // Untuk rute yang mencakup sub-path (misal /article/detail akan cocok dengan /article)
  // return route.path.startsWith(path);

  // Jika Anda ingin menggunakan nama rute, bukan path:
  // return route.name === 'NamaRuteAnda';
};

// Fungsi navigasi yang sekaligus menutup menu mobile
const navigateAndClose = (path) => {
  router.push(path);
  closeMobileMenu(); // Panggil fungsi untuk menutup menu
};

// Fungsi terpisah untuk menutup menu mobile
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>
