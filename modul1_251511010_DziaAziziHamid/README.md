# Praktikum Modul 1 - Dzia Azizi Hamid / 251511010

## Ringkasan halaman
Pada praktikum Modul 1, saya membuat halaman profil mahasiswa dengan HTML dan CSS. Saya belajar memperbaiki struktur HTML agar lebih semantik, membuat komponen CSS yang dapat digunakan kembali, serta membuat layout responsif menggunakan Flexbox dan media query. Halaman kemudian diuji pada beberapa ukuran viewport untuk memastikan tampilannya tetap rapi dan tidak mengalami horizontal overflow.

## Tiga keputusan teknis
1. Keputusan teknis pertama adalah mengganti penggunaan `div` yang terlalu umum menjadi elemen semantik seperti `header`, `nav`, `main`, `section`, dan `footer`. Hal ini membuat struktur halaman lebih jelas sesuai fungsi setiap bagian.
2. Keputusan kedua adalah menggunakan custom properties dan reusable class pada CSS. Saya menggunakan variabel seperti `--color-primary`, `--color-background`, `--color-text`, dan `--spacing`. Saya juga menggunakan class seperti `.container`, `.card`, `.nav-link`, dan `.button` agar style lebih konsisten dan tidak perlu ditulis berulang.
3. Keputusan ketiga adalah menggunakan pendekatan mobile-first. Pada layar kecil, card disusun satu kolom. Pada breakpoint `768px`, layout berubah menggunakan Flexbox dengan arah baris dan `flex-wrap`. Dari pengujian, pada 768px dua card dapat sejajar dan satu card turun ke baris berikutnya, sedangkan pada 1024px ketiga card dapat sejajar dalam satu baris.

## Masalah, diagnosis, dan perbaikan
Salah satu masalah yang saya temukan adalah gambar profil tidak tampil karena file atau path belum sesuai. Masalah ini diperbaiki dengan memastikan file `profile.jpg` berada di folder `assets` dan menggunakan path yang benar. Setelah dicek melalui browser dan struktur folder, penyebabnya adalah path gambar tidak mengarah ke file yang benar.
Masalah lain adalah jarak antar-card menjadi terlalu besar karena `margin-block` pada card digunakan bersamaan dengan `gap` pada flex container. Saya memperbaikinya dengan menggunakan `gap` sebagai pengatur jarak utama.

## Hasil pengujian empat viewport
Pengujian responsive layout dilakukan menggunakan Device Toolbar pada empat ukuran viewport, yaitu 320px, 375px, 768px, dan 1024px.
- **320px:** seluruh card tersusun dalam satu kolom, navigasi tetap terbaca, dan tidak ditemukan horizontal overflow.
- **375px:** seluruh card tetap tersusun satu kolom dengan jarak yang konsisten dan tidak ditemukan horizontal overflow.
- **768px:** layout mulai berubah menjadi baris. Dua card berada pada baris pertama dan satu card turun ke baris berikutnya karena ruang belum cukup untuk menampilkan tiga card sekaligus.
- **1024px:** ketiga card dapat tersusun sejajar dalam satu baris dan tidak ditemukan horizontal overflow.

Dari hasil tersebut, breakpoint 768px dipilih sebagai titik perubahan layout karena pada ukuran tersebut ruang horizontal mulai cukup untuk menampilkan card secara berdampingan. Penggunaan `flex-wrap` membuat layout tetap menyesuaikan ketika ruang belum cukup.

## Refleksi belajar
Bagian yang paling saya pahami dari praktikum ini adalah pentingnya semantic HTML, box model, reusable CSS, dan responsive layout. Saya juga belajar bahwa pengujian melalui DevTools, validator, dan beberapa ukuran viewport penting untuk menemukan masalah yang tidak terlihat hanya dari kode. Setelah praktikum ini, saya masih ingin meningkatkan kemampuan dalam membuat desain yang lebih rapi dan menentukan breakpoint berdasarkan kondisi konten, bukan hanya menggunakan angka tertentu.

## Log penggunaan AI / sumber bantuan

Dalam mengerjakan praktikum ini, saya menggunakan ChatGPT sebagai sumber bantuan untuk memahami langkah pengerjaan dan melakukan pengecekan terhadap hasil yang saya buat. Bantuan yang digunakan antara lain untuk memahami semantic HTML, memperbaiki path gambar, menyusun reusable class pada CSS, memahami Flexbox, menentukan breakpoint, serta melakukan pengujian responsive layout.

Saya tidak langsung menyalin seluruh jawaban AI. Setiap saran saya terapkan dan cek kembali melalui browser, DevTools, HTML Validator, Network, Console, serta Device Toolbar. Beberapa saran juga saya sesuaikan dengan kondisi project yang saya kerjakan, seperti ukuran gambar profil, jarak antar-card, dan breakpoint 768px.

Dari penggunaan AI ini, saya tetap melakukan proses diagnosis dan pengujian sendiri agar memahami penyebab masalah dan alasan dari setiap perubahan yang dilakukan. Dengan cara tersebut, AI saya gunakan sebagai alat bantu belajar, bukan sebagai pengganti proses pengerjaan.
