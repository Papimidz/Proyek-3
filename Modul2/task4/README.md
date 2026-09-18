# Interactive Profile Card

Homework Modul 2 Vanilla JavaScript.

## Cara Menjalankan

Project menggunakan `fetch()` untuk membaca file JSON lokal, sehingga harus dijalankan melalui local development server.

### Menggunakan Live Server di Visual Studio Code

1. Buka folder project menggunakan Visual Studio Code.
2. Pastikan extension Live Server sudah terpasang.
3. Klik kanan pada file `index.html`.
4. Pilih **Open with Live Server**.
5. Browser akan membuka halaman project secara otomatis.

Jangan menjalankan project dengan membuka `index.html` langsung menggunakan `file://`, karena proses `fetch()` terhadap `data/profile.json` dapat gagal.

## Struktur Folder

```text
homework-profile-card/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── app.js
└── data/
    └── profile.json