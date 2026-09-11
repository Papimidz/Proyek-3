# Mini Project — Workshop Web Dasar D3 Teknik Informatika

Nama: Dzia Azizi Hamid  
NIM: 251511010  
Kelas: 2A-D3  

## Ringkasan Project

Mini project ini berupa landing page statis dengan tema **Workshop Web Dasar D3 Teknik Informatika**. Landing page dibuat untuk membantu mahasiswa D3 Teknik Informatika mendapatkan informasi singkat mengenai workshop dasar pengembangan web, manfaat yang diperoleh, materi yang dipelajari, serta cara melakukan pendaftaran.

Website dibuat menggunakan HTML5 dan CSS3 murni tanpa framework dan tanpa JavaScript.

## Target Pengguna

Target pengguna landing page ini adalah mahasiswa D3 Teknik Informatika yang ingin mempelajari dasar HTML, CSS, Flexbox, responsive design, dan penggunaan DevTools.

## Struktur Halaman

Landing page terdiri dari beberapa bagian utama:

- Header dan navigation
- Hero
- Manfaat / feature cards
- Materi workshop
- CTA / pendaftaran
- Footer

Navigasi memiliki tautan menuju bagian Manfaat, Materi, dan Daftar.

## Keputusan Teknis

Saya menggunakan elemen semantik seperti `header`, `nav`, `main`, `section`, `article`, dan `footer` agar struktur halaman lebih jelas sesuai fungsi setiap bagian.

CSS menggunakan custom properties seperti `--color-primary`, `--color-background`, `--color-text`, `--color-border`, dan `--spacing` agar warna dan spacing dapat digunakan secara konsisten.

Layout dibuat dengan pendekatan mobile-first. Pada layar kecil, feature card tersusun satu kolom. Pada breakpoint `768px`, layout berubah menjadi baris menggunakan Flexbox. Properti `flex-wrap` digunakan agar card tetap dapat menyesuaikan ketika ruang horizontal tidak cukup.

## Aksesibilitas Dasar

Beberapa hal yang diterapkan pada halaman:

- Dokumen menggunakan `lang="id"`.
- Terdapat satu `h1` utama dengan hierarki heading yang teratur.
- Tautan navigasi memiliki tujuan yang jelas.
- Elemen interaktif memiliki state `:hover` dan `:focus-visible`.
- Navigasi dan tombol dapat digunakan menggunakan keyboard.
- Warna teks dan tombol dibuat dengan kontras yang tetap terbaca.

## Hasil Pengujian Responsive

Landing page diuji melalui Device Toolbar pada beberapa viewport:

- **320px:** feature card tersusun satu kolom dan tidak terdapat horizontal overflow.
- **375px:** layout tetap satu kolom dan seluruh konten dapat dibaca dengan baik.
- **768px:** feature card mulai tersusun sejajar menggunakan Flexbox.
- **1024px:** tiga feature card dapat tampil sejajar dalam satu baris dengan spacing yang konsisten.

Tidak ditemukan horizontal overflow pada viewport yang diuji.

## Quality Assurance

Pengujian yang dilakukan meliputi:

- HTML Validator: tidak terdapat error struktur utama.
- Console: tidak terdapat error utama saat halaman dimuat.
- Network: stylesheet berhasil dimuat dan tidak terdapat request 404.
- Keyboard Tab: link dan tombol dapat difokuskan.
- Focus Visible: indikator fokus terlihat.
- Internal Link: tautan Manfaat, Materi, dan Daftar menuju ID yang sesuai.
- Responsive Test: layout diuji pada 320px, 375px, 768px, dan 1024px.

## Refleksi

Melalui mini project ini saya lebih memahami bagaimana struktur HTML semantik, reusable CSS, Flexbox, dan media query dapat digabungkan menjadi satu landing page yang responsif.

Salah satu hal yang paling membantu proses belajar adalah ketika feature card tetap tersusun vertikal pada viewport 1024px. Setelah diperiksa, masalah berada pada penulisan bagian media query CSS. Dari masalah tersebut saya belajar bahwa kesalahan kecil pada struktur CSS dapat menyebabkan aturan responsive tidak diterapkan.

Saya juga belajar bahwa breakpoint sebaiknya digunakan berdasarkan kebutuhan konten, bukan hanya berdasarkan ukuran perangkat tertentu. Ke depannya saya ingin meningkatkan kemampuan dalam membuat desain visual yang lebih menarik serta memperdalam responsive layout dan aksesibilitas web.

## Repository

URL Repository:  
`[isi URL repository GitHub di sini]`

## Deployment

URL GitHub Pages:  
`[isi URL GitHub Pages di sini]`