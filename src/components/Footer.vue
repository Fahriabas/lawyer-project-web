<template>
    <footer class="bg-[#1C1C1C] text-gray-400 py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <a href="#" class="flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow hover:bg-gray-600 transition-colors">
            <span class="mr-2 text-xl">💬</span>
            <span class="text-sm font-semibold">Ikuti WA Channel Mojok.co</span>
          </a>
          <a href="#" class="flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow hover:bg-gray-600 transition-colors">
            <span class="mr-2 text-xl">✉️</span>
            <span class="text-sm font-semibold">Berlangganan Newsletter Mojok.co</span>
          </a>
          <a href="#" class="flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow hover:bg-gray-600 transition-colors">
            <span class="mr-2 text-xl">✅</span>
            <span class="text-sm font-semibold">Ikuti Mojok.co di Google News</span>
          </a>
          <a href="#" class="flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow hover:bg-gray-600 transition-colors">
            <span class="mr-2 text-xl">▶️</span>
            <span class="text-sm font-semibold">Ikuti Channel Mojokdotco di YouTube</span>
          </a>
        </div> -->
  
        <!-- <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <a href="#" class="flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow hover:bg-gray-600 transition-colors">
            <span class="mr-2 text-xl">📸</span>
            <span class="text-sm font-semibold">Instagram</span>
          </a>
          <a href="#" class="flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow hover:bg-gray-600 transition-colors">
            <span class="mr-2 text-xl">🐦</span>
            <span class="text-sm font-semibold">Twitter</span>
          </a>
          <a href="#" class="flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow hover:bg-gray-600 transition-colors">
            <span class="mr-2 text-xl">👍</span>
            <span class="text-sm font-semibold">Facebook</span>
          </a>
          <a href="#" class="flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow hover:bg-gray-600 transition-colors">
            <span class="mr-2 text-xl">🎵</span>
            <span class="text-sm font-semibold">TikTok</span>
          </a>
          <a href="#" class="flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow hover:bg-gray-600 transition-colors">
            <span class="mr-2 text-xl">💼</span>
            <span class="text-sm font-semibold">LinkedIn</span>
          </a>
        </div> -->
      </div>
  
      <div class="border-t border-gray-700 my-8"></div>
  
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:justify-between text-xs">
        <nav class="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
          <a href="#" class="hover:text-white transition-colors">Tentang</a>
          <a href="#" class="hover:text-white transition-colors">Kru Tony Hasibuan</a>
          <a href="#" class="hover:text-white transition-colors">Cara Kirim Artikel</a>
          <a href="#" class="hover:text-white transition-colors">Disclaimer</a>
          <a href="#" class="hover:text-white transition-colors">Kontak</a>
          <a href="#" class="hover:text-white transition-colors">Kerja Sama</a>
          <a href="#" class="hover:text-white transition-colors">Pedoman Media Siber</a>
          <a href="#" class="hover:text-white transition-colors">Kebijakan Privasi</a>
          <a href="#" class="hover:text-white transition-colors">Laporan Transparansi</a>
        </nav>
  
        <div class="flex flex-col sm:flex-row items-center gap-4">
          <img src="https://images.dmca.com/badges/dmca_protected_sml_120i.png?ID=YOUR_DMCA_ID_HERE" alt="DMCA.com Protection Status" class="h-10" />
          <p class="text-center md:text-left">&copy; 2025 TONY HASIBUAN LAW OFFICE. All Rights Reserved.</p>
        </div>
  
        <div class="flex gap-4 mt-4 md:mt-0">
          <a href="#" class="text-white hover:text-gray-200">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-12h2v6h-2zm0 8h2v2h-2z" />
            </svg>
          </a>
          <a href="#" class="text-white hover:text-gray-200">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-12h2v6h-2zm0 8h2v2h-2z" />
            </svg>
          </a>
          <button class="text-gray-400 hover:text-white transition-colors" @click="scrollToTop">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  // Fungsi untuk scroll ke atas saat tombol panah diklik
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  </script>
  
  <style scoped>
  /* Optional: Jika ada styling spesifik yang tidak bisa dihandle Tailwind */
  </style>