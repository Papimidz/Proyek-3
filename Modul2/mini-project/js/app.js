'use strict';


const tombolMenu = document.querySelector('#menu-toggle');
const navMenu = document.querySelector('#nav-menu');

const daftarLayanan = document.querySelector('#daftar-layanan');
const statusLayanan = document.querySelector('#status-layanan');
const filterLayanan = document.querySelector('#filter-layanan');
const tombolFaq = document.querySelectorAll('.faq-question');
const formDaftar = document.querySelector('#form-daftar');

const inputNama = document.querySelector('#nama');
const inputEmail = document.querySelector('#email');
const inputMinat = document.querySelector('#minat');
const inputPesan = document.querySelector('#pesan');

const errorNama = document.querySelector('#error-nama');
const errorEmail = document.querySelector('#error-email');
const errorMinat = document.querySelector('#error-minat');
const errorPesan = document.querySelector('#error-pesan');

const hasilForm = document.querySelector('#hasil-form');
const ringkasanForm = document.querySelector('#ringkasan-form');
const tombolAtas = document.querySelector('#kembali-atas');
const tombolTema = document.querySelector('#tema-toggle');


const layanan = [
  {
    id: 1,
    judul: 'HTML Dasar',
    kategori: 'HTML',
    deskripsi:
      'Mempelajari struktur dokumen, elemen semantik, form, dan aksesibilitas dasar.'
  },
  {
    id: 2,
    judul: 'CSS Dasar',
    kategori: 'CSS',
    deskripsi:
      'Mempelajari styling, box model, Flexbox, dan responsive design.'
  },
  {
    id: 3,
    judul: 'JavaScript Dasar',
    kategori: 'JavaScript',
    deskripsi:
      'Mempelajari variabel, DOM, event, dan interaksi pada halaman web.'
  }
];


function renderLayanan(data) {
  daftarLayanan.replaceChildren();

  if (data.length === 0) {
    statusLayanan.textContent =
      'Tidak ada materi pada kategori ini.';

    return;
  }

  for (const item of data) {

    const kartu = document.createElement('article');
    const kategori = document.createElement('span');
    const judul = document.createElement('h3');
    const deskripsi = document.createElement('p');

    kartu.classList.add('card');
    kategori.classList.add('card-kategori');

    kategori.textContent = item.kategori;
    judul.textContent = item.judul;
    deskripsi.textContent = item.deskripsi;

    kartu.append(
      kategori,
      judul,
      deskripsi
    );

    daftarLayanan.append(kartu);
  }

  statusLayanan.textContent =
    `${data.length} materi ditampilkan.`;
}

function ambilLayananBerdasarkanKategori(kategori) {

  if (kategori === 'Semua') {
    return layanan;
  }

  return layanan.filter((item) => {
    return item.kategori === kategori;
  });
}


tombolMenu.addEventListener('click', () => {

  const terbuka =
    navMenu.classList.toggle('is-open');

  tombolMenu.setAttribute(
    'aria-expanded',
    String(terbuka)
  );

});

filterLayanan.addEventListener('change', (event) => {

  const kategoriDipilih = event.target.value;

  const hasilFilter =
    ambilLayananBerdasarkanKategori(kategoriDipilih);

  renderLayanan(hasilFilter);

});

formDaftar.addEventListener('submit', (event) => {

  event.preventDefault();

  hasilForm.hidden = true;


  const valid = validasiForm();


  if (!valid) {
    return;
  }


  const nama = inputNama.value.trim();
  const email = inputEmail.value.trim();
  const minat = inputMinat.value;


  ringkasanForm.textContent =
    `${nama} berhasil mendaftar untuk materi ${minat}. Konfirmasi akan dikirim ke ${email}.`;


  hasilForm.hidden = false;


  formDaftar.reset();
});

window.addEventListener('scroll', () => {

  if (window.scrollY > 400) {

    tombolAtas.classList.add('is-visible');

  } else {

    tombolAtas.classList.remove('is-visible');
  }

});

tombolAtas.addEventListener('click', () => {

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

});

tombolTema.addEventListener('click', () => {

  const temaGelap =
    document.body.classList.toggle('tema-gelap');


  tombolTema.setAttribute(
    'aria-pressed',
    String(temaGelap)
  );


  tombolTema.textContent =
    temaGelap
      ? 'Tema Terang'
      : 'Tema Gelap';

});

function tutupSemuaFaq() {

  for (const tombol of tombolFaq) {

    const idJawaban =
      tombol.getAttribute('aria-controls');

    const jawaban =
      document.querySelector(`#${idJawaban}`);

    const itemFaq =
      tombol.closest('.faq-item');

    tombol.setAttribute(
      'aria-expanded',
      'false'
    );

    jawaban.hidden = true;

    itemFaq.classList.remove('is-open');
  }

}

for (const tombol of tombolFaq) {

  tombol.addEventListener('click', () => {

    const sedangTerbuka =
      tombol.getAttribute('aria-expanded') === 'true';

    tutupSemuaFaq();

    if (!sedangTerbuka) {

      const idJawaban =
        tombol.getAttribute('aria-controls');

      const jawaban =
        document.querySelector(`#${idJawaban}`);

      const itemFaq =
        tombol.closest('.faq-item');

      tombol.setAttribute(
        'aria-expanded',
        'true'
      );

      jawaban.hidden = false;

      itemFaq.classList.add('is-open');
    }

  });

}

function tampilkanError(input, elemenError, pesan) {

  input.setAttribute('aria-invalid', 'true');

  elemenError.textContent = pesan;
}


function hapusError(input, elemenError) {

  input.setAttribute('aria-invalid', 'false');

  elemenError.textContent = '';
}

function validasiForm() {

  const nama = inputNama.value.trim();
  const email = inputEmail.value.trim();
  const minat = inputMinat.value;
  const pesan = inputPesan.value.trim();

  let valid = true;


  if (nama.length < 3) {

    tampilkanError(
      inputNama,
      errorNama,
      'Nama minimal 3 karakter.'
    );

    valid = false;

  } else {

    hapusError(
      inputNama,
      errorNama
    );
  }


  const polaEmail =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if (!polaEmail.test(email)) {

    tampilkanError(
      inputEmail,
      errorEmail,
      'Masukkan alamat email yang valid.'
    );

    valid = false;

  } else {

    hapusError(
      inputEmail,
      errorEmail
    );
  }


  if (minat === '') {

    tampilkanError(
      inputMinat,
      errorMinat,
      'Pilih salah satu materi.'
    );

    valid = false;

  } else {

    hapusError(
      inputMinat,
      errorMinat
    );
  }


  if (pesan.length < 10) {

    tampilkanError(
      inputPesan,
      errorPesan,
      'Alasan minimal 10 karakter.'
    );

    valid = false;

  } else {

    hapusError(
      inputPesan,
      errorPesan
    );
  }


  return valid;
}

renderLayanan(layanan);