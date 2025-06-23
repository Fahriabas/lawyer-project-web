import { defineStore } from "pinia";
import post1Thumbnail from "../assets/post1.jpeg"; // Pastikan path ini sesuai
// Anda bisa menambahkan import gambar lain jika punya, atau gunakan URL langsung

interface Article {
  id: string;
  title: string;
  thumbnail: string; // Bisa string (URL) atau any (untuk import lokal)
  image: string; // URL gambar utama artikel
  author: string;
  date: string;
  type: string; // Misal: Artikel, Esai, Berita
  excerpt: string;
  views?: string; // Opsional
  comments?: string; // Opsional
  content?: string; // Konten HTML lengkap
  tags?: string[]; // Array of strings
  authorAvatar?: string; // URL avatar penulis
  authorBio?: string; // Bio singkat penulis
}

export const useArticleStore = defineStore("article", {
  state() {
    return {
      articles: [
        {
          id: "16eba186-3a5c-4531-9614-7a62509d874e",
          title:
            "Pentingnya pengaturan yang jelas tentang alat bukti keterangan Ahli dalam RUU KUHAP",
          thumbnail: post1Thumbnail,
          image: post1Thumbnail, // Contoh gambar relevan
          author: "Tony Hasibuan",
          date: "22 Juni 2025",
          type: "Artikel",
          excerpt:
            "Pembahasan RUU KUHAP mendapat respon beragam dari para akademisi, praktisi dan penggiat hukum lainnya, ada yang menarik perhatian tentang keterangan ahli sebagai alat bukti dalam persidangan tidak dapat menilai...",
          views: "987K", // Contoh data
          comments: "12K", // Contoh data
          content: `
                    <p>Pembahasan RUU KUHAP mendapat respon beragam dari para akademisi, praktisi dan penggiat hukum lainnya, ada yang menarik perhatian tentang keterangan ahli sebagai alat bukti dalam persidangan tidak dapat menilai langsung pokok perkara.</p>
                    <p>Muncul usulan untuk menghapus keterangab ahli sebagai alat bukti jika ahli tidak dapat menilai pokok perkara, atau tetap dimasukkan sebagai alat bukti namun dibolehkan menilai pokok perkara.</p>
                    <p>Sebelum menilai apakah dihapus atau tidak, coba kita kaji seberapa penting keterangan ahli dalam pembuktian perbuatan pidana ?</p>
                    <p>Untuk memudahkan menilainya, kita ambil contoh dalam pembuktian perkara pembunuhan, dimana harus terlebih dahulu dibuktikan seseorang meninggal dunia akibat alamiah (sakit) atau tindakan manusia.</p>
                    <p>Hal ini lah membutuhkan keterangan/pendapat ahli menemukan penyebab kematian sehingga memudahkan penyelidik/penyidik menentukan peristiwa pidana dan menemukan pelakunya.</p>
                    <p>Secara spesifik keahlian dibidang kedokteran dapat menilai pokok perkara serta menyimpulkan tindakan pembunuhan serta tidak berandai-andai dan bahkan sering dijadikan kesimpulan hukum.</p>
                    <p>Berbeda pula dengan keterangan ahli hukum yang tidak dapat menilai langsung pokok perkara serta menyimpulkannya, dan hanya dapat menggunakan perumpaan atau berandai-andai saja.</p>
                    <p>Terkadang ada ahli dihadirkan di persidangan memberikan pendapat dan dikualifikasikan sebagai alat bukti keterangan ahli, padahal ahli yang bersangkutan juga telah membuat surat keterangan (contoh : visum, hasil audit dll) yang juga dijadikan sebagai alat bukti surat. Akibatnya ada 2 (dua) alat bukti padahal kualitasnya sama.</p>
                    <p>Maka dari itu harus ada pengkategorian keterangan ahli masing-masing bidang serta batasan penilaian pokok perkara dan keterangan ahli sebagai alat bukti surat dalam RUU KUHAP.</p>
                  `,
          tags: ["Hukum", "RUU KUHAP", "Alat Bukti", "Keterangan Ahli"],
          authorAvatar:
            "https://www.gravatar.com/avatar/a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6?s=200&d=mp", // Ganti dengan avatar asli Tony
          authorBio:
            "Tony Hasibuan adalah seorang praktisi hukum dan pengamat perundang-undangan. Ia fokus pada isu-isu terkait reformasi hukum di Indonesia.",
        },
        {
          id: "254bd706-a290-4d32-95ab-3f3df9bff452",
          title:
            "Akhirnya Saya Tahu Alasan Orang Beli Sepeda Mahal Sampai Ratusan Juta: Gagal Finish, tetapi Setidaknya Gagal Secara Nyaman dan Bermartabat",
          thumbnail:
            "https://media.istockphoto.com/id/1135508703/id/foto/balapan-bersepeda.jpg?s=612x612&w=0&k=20&c=eRzYaGj5kosUkQFxymvbcOgmDGDZQCBDL2rZuqhlCzo=",
          image:
            "https://media.istockphoto.com/id/1135508703/id/foto/balapan-bersepeda.jpg?s=612x612&w=0&k=20&c=eRzYaGj5kosUkQFxymvbcOgmDGDZQCBDL2rZuqhlCzo=",
          author: "Mohammad Sadam Husaen",
          date: "22 Juni 2025",
          type: "Esai",
          excerpt:
            "Sepeda mahal ratusan juta memang tidak menjamin kamu finish, tapi setidaknya kamu gagal dengan nyaman dan bermartabat.",
          views: "1.2M",
          comments: "56K",
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
        },
        {
          id: "3e9b6a0d-7f1c-4b5a-9d2e-1c3f4a5b6d7e",
          title: "Poco C75, Hape Sejutaan, Tapi Kamera Tetap Ganas?",
          thumbnail:
            "https://media.istockphoto.com/id/2160862297/id/foto/smartphone-ponsel-ponsel-touchscreen-handset-gadget-closeup-gambar-telefono-inteligente-foto.jpg?s=612x612&w=0&k=20&c=fzpvtOoyEbUD9mU53DA5iT_REvKb7oPaJLB-DcAVPaU=",
          image:
            "https://media.istockphoto.com/id/2160862297/id/foto/smartphone-ponsel-ponsel-touchscreen-handset-gadget-closeup-gambar-telefono-inteligente-foto.jpg?s=612x612&w=0&k=20&c=fzpvtOoyEbUD9mU53DA5iT_REvKb7oPaJLB-DcAVPaU=",
          author: "ADITIA PURNOMO",
          date: "12 November 2024",
          type: "Teknologi",
          excerpt:
            "Review singkat Poco C75, smartphone entry-level dengan harga sejutaan yang menjanjikan kualitas kamera di atas rata-rata.",
          views: "800K",
          comments: "15K",
          content: `
                    <p>Poco kembali menggebrak pasar smartphone entry-level dengan merilis Poco C75, sebuah perangkat yang diklaim menawarkan spesifikasi menggiurkan di segmen harga sejutaan.</ Pertanyaan besar yang muncul adalah: apakah Poco C75 benar-benar mampu menghadirkan pengalaman fotografi yang ganas dengan harga semurah itu?</p>
                    <p>Dari segi desain, Poco C75 tampil cukup modern dengan modul kamera yang mencolok di bagian belakang. Layarnya menggunakan panel IPS LCD yang cukup cerah untuk penggunaan sehari-hari. Performanya didukung oleh chipset yang cukup standar di kelasnya, namun dikombinasikan dengan optimasi MIUI for Poco yang diklaim dapat memberikan pengalaman yang mulus.</p>
                    <p>Fokus utama Poco C75 terletak pada sektor kamera. Dengan lensa utama yang memiliki resolusi cukup tinggi dan fitur AI yang disempurnakan, Poco berharap dapat menarik perhatian konsumen yang menginginkan smartphone dengan kemampuan fotografi mumpuni tanpa harus menguras kantong.</p>
                    <p>Dalam pengujian singkat, kamera Poco C75 mampu menghasilkan gambar yang cukup detail di kondisi cahaya yang ideal. Warna yang dihasilkan cenderung natural dan fitur HDR bekerja dengan baik untuk menyeimbangkan eksposur. Namun, di kondisi minim cahaya, performanya mulai menurun, meskipun masih tergolong wajar untuk kelas harganya.</p>
                    <p>Secara keseluruhan, Poco C75 menawarkan paket yang menarik bagi mereka yang mencari smartphone terjangkau dengan prioritas pada kamera. Meskipun bukan yang terbaik di kelasnya, namun dengan harga sejutaan, Poco C75 patut dipertimbangkan sebagai opsi menarik.</p>
                  `,
          tags: ["Smartphone", "Poco", "Review", "Gadget", "Teknologi"],
          authorAvatar:
            "https://www.gravatar.com/avatar/a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5?s=200&d=mp", // Contoh avatar
          authorBio:
            "Aditia Purnomo adalah seorang tech reviewer yang fokus pada smartphone dan gadget terjangkau.",
        },
        {
          id: "4f5g6h7i-8j9k-0l1m-2n3o-4p5q6r7s8t9u",
          title:
            "Kualitas Pendidikan Advokat Buruk, Tjoetjoe: Negara Harus Hadir untuk Pembenahan...",
          thumbnail:
            "https://www.kai.or.id/wp-content/uploads/2021/01/tjoetjoe-s-hernanto.jpeg",
          image:
            "https://www.kai.or.id/wp-content/uploads/2021/01/tjoetjoe-s-hernanto.jpeg",
          author: "Tjoetjoe S. Hernanto",
          date: "19 Juni 2025",
          type: "Berita",
          excerpt:
            "Ketua Umum KAI, Tjoetjoe S. Hernanto, menyoroti buruknya kualitas pendidikan advokat dan meminta peran serta negara untuk pembenahan.",
          views: "750K",
          comments: "8K",
          content: `
                    <p>Ketua Umum Kongres Advokat Indonesia (KAI), Dr. Tjoetjoe Sandjaja Hernanto, SH, MH, mengungkapkan keprihatinannya terhadap kualitas pendidikan advokat di Indonesia yang dinilai masih jauh dari harapan.</p>
                    <p>"Banyak lulusan yang belum siap terjun langsung ke dunia praktik hukum. Ini menjadi tantangan besar bagi profesi advokat di masa depan," ujar Tjoetjoe dalam sebuah seminar di Jakarta.</p>
                    <p>Menurutnya, kurikulum pendidikan advokat perlu direvisi dan disesuaikan dengan kebutuhan praktik di lapangan. Selain itu, kolaborasi antara institusi pendidikan dan organisasi profesi advokat juga harus diperkuat.</p>
                    <p>Tjoetjoe juga menekankan pentingnya peran negara dalam membenahi kualitas pendidikan advokat. "Pemerintah harus hadir, tidak bisa lepas tangan. Profesi advokat adalah pilar penegakan hukum, kualitasnya harus dijamin," tambahnya.</p>
                    <p>Salah satu usulan yang disampaikan adalah pembentukan lembaga independen yang bertugas mengawasi dan mengevaluasi standar pendidikan advokat di seluruh Indonesia.</p>
                    <p>Dengan adanya pembenahan yang serius, diharapkan kualitas advokat di Indonesia dapat meningkat, sehingga mampu memberikan kontribusi yang lebih besar dalam sistem peradilan dan penegakan hukum.</p>
                  `,
          tags: ["Advokat", "Pendidikan Hukum", "KAI", "Tjoetjoe", "Hukum"],
          authorAvatar:
            "https://www.kai.or.id/wp-content/uploads/2021/01/tjoetjoe-s-hernanto.jpeg", // Contoh avatar
          authorBio:
            "Tjoetjoe S. Hernanto adalah Ketua Umum Kongres Advokat Indonesia (KAI) dan seorang akademisi di bidang hukum.",
        },
        {
          id: "5i6j7k8l-9m0n-1o2p-3q4r-5s6t7u8v9w0x",
          title:
            "Diduga Ada Unsur Penipuan, RI Siapkan Gugatan Pembatalan Kontrak Satelit di ICC Singapura...",
          thumbnail:
            "https://cdn.antaranews.com/cache/1200x800/2025/06/04/1000434809.jpg",
          image:
            "https://cdn.antaranews.com/cache/1200x800/2025/06/04/1000434809.jpg",
          author: "Antara News",
          date: "16 Juni 2025",
          type: "Berita",
          excerpt:
            "Pemerintah Indonesia sedang mempersiapkan gugatan pembatalan kontrak satelit di ICC Singapura karena dugaan unsur penipuan.",
          views: "600K",
          comments: "5K",
          content: `
                    <p>Pemerintah Republik Indonesia melalui Kementerian Komunikasi dan Informatika (Kominfo) sedang mempersiapkan langkah hukum serius terkait dugaan adanya unsur penipuan dalam kontrak pengadaan satelit. Gugatan pembatalan kontrak tersebut direncanakan akan diajukan di International Chamber of Commerce (ICC) Singapura.</p>
                    <p>Menteri Kominfo, Budi Arie Setiadi, menyatakan bahwa pihaknya telah mengumpulkan bukti-bukti kuat yang mengindikasikan adanya praktik curang dalam proses penandatanganan kontrak satelit yang merugikan negara.</p>
                    <p>"Kami tidak akan mentolerir segala bentuk penipuan yang merugikan keuangan negara. Tim hukum kami sedang bekerja keras untuk memastikan keadilan ditegakkan," ujar Budi Arie dalam konferensi pers.</p>
                    <p>Kasus ini menjadi sorotan publik mengingat pentingnya infrastruktur satelit bagi konektivitas nasional. Dugaan penipuan ini berpotensi menghambat pengembangan teknologi dan layanan komunikasi di Indonesia.</p>
                    <p>Pemerintah berharap proses hukum di ICC Singapura dapat berjalan lancar dan menghasilkan putusan yang adil, serta menjadi pelajaran bagi pihak-pihak yang mencoba melakukan praktik ilegal dalam proyek-proyek strategis negara.</p>
                  `,
          tags: ["Satelit", "Kominfo", "Hukum", "Penipuan", "Internasional"],
          authorAvatar: "https://source.unsplash.com/random/100x100?journalist", // Placeholder random
          authorBio:
            "Antara News adalah kantor berita resmi Indonesia yang menyediakan informasi terverifikasi.",
        },
        {
          id: "6k7l8m9n-0o1p-2q3r-4s5t-6u7v8w9x0y1z",
          title: "Rasanya Jadi Perantau Mengurus KTP di Perusahaan...",
          thumbnail:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHVIbpCvyYYtM1vawuSD3EJDlsbItzF34bw&s",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHVIbpCvyYYtM1vawuSD3EJDlsbItzF34bw&s",
          author: "Nama Penulis Perantau", // Ganti dengan nama penulis asli
          date: "16 Juni 2025",
          type: "Esai",
          excerpt:
            "Pengalaman unik perantau dalam mengurus dokumen kependudukan di tengah kesibukan perusahaan.",
          views: "400K",
          comments: "3K",
          content: `
                    <p>Sebagai perantau, mengurus dokumen kependudukan seperti KTP seringkali menjadi tantangan tersendiri. Apalagi jika Anda juga disibukkan dengan pekerjaan di perusahaan. Birokrasi yang kadang berbelit dan jam operasional kantor yang seringkali bentrok dengan jam kerja membuat proses ini terasa semakin sulit.</p>
                    <p>Saya ingat pernah harus izin setengah hari dari kantor hanya untuk mengurus perpanjangan KTP. Antrean yang panjang, formulir yang rumit, dan kurangnya informasi yang jelas di awal seringkali membuat frustrasi. Belum lagi jika ada dokumen yang kurang, harus kembali lagi di hari yang berbeda.</p>
                    <p>Namun, belakangan ini ada beberapa perusahaan yang mulai peduli dengan kesulitan karyawannya dalam mengurus administrasi publik. Beberapa menyediakan layanan khusus atau minimal memberikan kemudahan izin untuk keperluan tersebut. Hal ini sangat membantu para perantau seperti saya.</p>
                    <p>Ada juga opsi untuk mengurus secara online atau melalui aplikasi. Meskipun belum semua daerah menerapkannya, ini adalah kemajuan yang patut diapresiasi. Semoga ke depannya, proses administrasi publik semakin dipermudah, tidak hanya untuk perantau, tetapi juga seluruh warga negara.</p>
                    <p>Pengalaman ini mengajarkan saya untuk lebih menghargai waktu dan juga pentingnya perencanaan. Selalu cek persyaratan dan jadwal jauh-jauh hari sebelum mengurus dokumen apapun.</p>
                  `,
          tags: ["Perantau", "KTP", "Birokrasi", "Pengalaman", "Administrasi"],
          authorAvatar:
            "https://source.unsplash.com/random/100x100?man-portrait", // Placeholder random
          authorBio:
            "Penulis ini adalah seorang perantau yang sering berbagi pengalaman hidup di kota besar.",
        },
        {
          id: "7h8i9j0k-1l2m-3n4o-5p6q-7r8s9t0u1v2w",
          title:
            "Muslihat Penulisan Ulang Sejarah Mei 1998: Memberikan Sudut Pandang Baru",
          thumbnail:
            "https://media.istockphoto.com/id/500798563/id/foto/city-skyline-at-sunset-jakarta-indonesia.jpg?s=612x612&w=0&k=20&c=dICfiBlbElOeu0UceZMoFpBJ7xJF5bKyriTRZmGXHO4=",
          image:
            "https://media.istockphoto.com/id/500798563/id/foto/city-skyline-at-sunset-jakarta-indonesia.jpg?s=612x612&w=0&k=20&c=dICfiBlbElOeu0UceZMoFpBJ7xJF5bKyriTRZmGXHO4=",
          author: "Analisis Sejarah",
          date: "15 Juni 2025",
          type: "Esai",
          excerpt:
            "Sebuah tinjauan kritis terhadap upaya penulisan ulang sejarah peristiwa Mei 1998 dan dampaknya pada narasi nasional.",
          views: "550K",
          comments: "7K",
          content: `
                    <p>Peristiwa Mei 1998 adalah salah satu babak paling kelam dalam sejarah modern Indonesia. Tragedi ini tidak hanya menandai runtuhnya rezim Orde Baru, tetapi juga meninggalkan luka mendalam bagi banyak pihak. Namun, seiring berjalannya waktu, muncul berbagai upaya untuk menulis ulang narasi sejarah peristiwa tersebut.</p>
                    <p>Upaya penulisan ulang ini seringkali datang dengan berbagai motif, mulai dari keinginan untuk meluruskan fakta yang dianggap keliru, hingga agenda politik tertentu untuk memanipulasi opini publik. Hal ini menimbulkan tantangan serius dalam memahami kebenaran sejarah.</p>
                    <p>Sebagai masyarakat yang melek sejarah, penting bagi kita untuk selalu kritis terhadap setiap narasi yang disajikan. Membandingkan berbagai sumber, mencari tahu latar belakang penulis atau pihak yang menyajikan narasi, serta menganalisis motif di baliknya adalah langkah-langkah krusial.</p>
                    <p>Peristiwa Mei 1998 bukanlah sekadar tanggal atau rangkaian kejadian, tetapi adalah pelajaran berharga tentang perjuangan demokrasi, bahaya intoleransi, dan pentingnya akuntabilitas. Menjaga ingatan kolektif yang akurat adalah tanggung jawab kita bersama.</p>
                    <p>Dengan demikian, muslihat penulisan ulang sejarah harus selalu diwaspadai agar generasi mendatang tidak kehilangan jejak kebenaran dan dapat belajar dari masa lalu untuk membangun masa depan yang lebih baik.</p>
                  `,
          tags: ["Sejarah", "Mei1998", "Reformasi", "Politik", "Narasi"],
          authorAvatar: "https://source.unsplash.com/random/100x100?historian", // Placeholder random
          authorBio:
            "Analisis Sejarah adalah platform yang mengulas peristiwa sejarah dengan pendekatan kritis dan objektif.",
        },
        {
          id: "8i9j0k1l-2m3n-4o5p-6q7r-8s9t0u1v2w3x",
          title: "Mengapa Pembelajaran Online Lebih Efektif?",
          thumbnail:
            "https://media.istockphoto.com/id/952981694/id/foto/simbol-kota-surabaya-indonesia.jpg?s=612x612&w=0&k=20&c=Vrgm-AxeQlU5vOTaPD7JZUeuLdsLdmBceYilxjPvTAc=",
          image:
            "https://media.istockphoto.com/id/952981694/id/foto/simbol-kota-surabaya-indonesia.jpg?s=612x612&w=0&k=20&c=Vrgm-AxeQlU5vOTaPD7JZUeuLdsLdmBceYilxjPvTAc=",
          author: "Edukasi Modern",
          date: "14 Juni 2025",
          type: "Edukasi",
          excerpt:
            "Meskipun banyak tantangan, pembelajaran online memiliki potensi efektivitas yang lebih tinggi dengan metode yang tepat.",
          views: "300K",
          comments: "2K",
          content: `
                    <p>Pandemi COVID-19 secara drastis mengubah lanskap pendidikan, memaksa jutaan siswa dan pengajar beralih ke pembelajaran online. Awalnya banyak yang skeptis, namun seiring berjalannya waktu, potensi efektivitas pembelajaran daring mulai terlihat.</p>
                    <p>Salah satu keuntungan utama adalah fleksibilitas. Siswa dapat mengakses materi kapan saja dan di mana saja, memungkinkan mereka untuk belajar dengan kecepatan sendiri. Ini sangat bermanfaat bagi mereka yang memiliki jadwal padat atau gaya belajar yang berbeda.</p>
                    <p>Selain itu, pembelajaran online seringkali memanfaatkan teknologi interaktif yang tidak selalu tersedia di kelas tradisional. Forum diskusi, kuis interaktif, video, dan simulasi dapat meningkatkan keterlibatan siswa dan membuat materi lebih menarik.</p>
                    <p>Efektivitas juga dapat meningkat karena personalisasi. Dengan alat analisis data, pengajar bisa melacak kemajuan siswa secara individual dan menyesuaikan pendekatan pengajaran. Sumber daya tambahan juga mudah diakses, memperkaya pengalaman belajar.</p>
                    <p>Tentu, ada tantangan seperti kurangnya interaksi sosial langsung atau masalah konektivitas. Namun, dengan infrastruktur yang memadai, desain kurikulum yang inovatif, dan dukungan yang berkelanjutan, pembelajaran online dapat menjadi mode pendidikan yang sangat efektif dan inklusif di masa depan.</p>
                  `,
          tags: [
            "Edukasi",
            "Online Learning",
            "Teknologi Pendidikan",
            "Fleksibilitas",
            "Pembelajaran",
          ],
          authorAvatar: "https://source.unsplash.com/random/100x100?teacher", // Placeholder random
          authorBio:
            "Edukasi Modern adalah tim pendidik yang berkomitmen untuk memajukan sistem pembelajaran melalui teknologi.",
        },
      ] as Article[],
    };
  },
  // Jika Anda membutuhkan getters atau actions
  getters: {
    getArticleById: (state) => (id: string) => {
      return state.articles.find((article) => article.id === id);
    },
    getPopularPosts(state) {
      // Anda bisa menambahkan logika untuk mengurutkan berdasarkan views atau komentar jika data tersedia
      // Untuk sementara, kita akan mengembalikan beberapa artikel dengan data dummy populer
      const popularPostIds = [
        "4f5g6h7i-8j9k-0l1m-2n3o-4p5q6r7s8t9u", // Kualitas Pendidikan Advokat
        "5i6j7k8l-9m0n-1o2p-3q4r-5s6t7u8v9w0x", // Dugaan Penipuan Satelit
        "6k7l8m9n-0o1p-2q3r-4s5t-6u7v8w9x0y1z", // Perantau KTP
        "7h8i9j0k-1l2m-3n4o-5p6q-7r8s9t0u1v2w", // Muslihat Sejarah Mei 1998
        "8i9j0k1l-2m3n-4o5p-6q7r-8s9t0u1v2w3x", // Pembelajaran Online
      ];
      return popularPostIds
        .map((id) => state.articles.find((article) => article.id === id))
        .filter(Boolean);
    },
  },
  actions: {
    // Jika Anda ingin mengambil data dari API, Anda bisa tambahkan action di sini
    // async fetchArticles() {
    //     // Logic to fetch from API and update state.articles
    // }
  },
});
