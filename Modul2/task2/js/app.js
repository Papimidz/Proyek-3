'use strict';

const peserta = [
  {
    id: 1,
    nama: 'Alya',
    prodi: 'Teknik Informatika'
  },
  {
    id: 2,
    nama: 'Bima',
    prodi: 'Sistem Informasi'
  },
];

const form = document.querySelector('#form-peserta');
const namaInput = document.querySelector('#nama');
const prodiInput = document.querySelector('#prodi');
const filterInput = document.querySelector('#filter-prodi');
const daftar = document.querySelector('#daftar-peserta');
const status = document.querySelector('#status');
const errorNama = document.querySelector('#error-nama');
const errorProdi = document.querySelector('#error-prodi');

function validasiPeserta(calon) {
  let errorNama = '';
  let errorProdi = '';

  if (calon.nama.trim().length < 3) {
    errorNama = 'Nama minimal 3 karakter.';
  }

  if (calon.prodi === '') {
    errorProdi = 'Program studi wajib dipilih.';
  }

  return {
    valid: errorNama === '' && errorProdi === '',
    errorNama,
    errorProdi
  };
}

function buatKartuPeserta(item) {
  const article = document.createElement('article');
  const judul = document.createElement('h2');
  const prodi = document.createElement('p');

  article.classList.add('kartu');

  judul.textContent = item.nama;
  prodi.textContent = item.prodi;

  article.append(judul, prodi);

  return article;
}

function renderPeserta(data) {
  daftar.textContent = '';

  if (data.length === 0) {
    status.textContent = 'Tidak ada peserta.';
    return;
  }

  status.textContent = `${data.length} peserta tampil.`;

  for (const item of data) {
    const kartu = buatKartuPeserta(item);
    daftar.append(kartu);
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const calon = {
    nama: namaInput.value.trim(),
    prodi: prodiInput.value
  };

  const hasilValidasi = validasiPeserta(calon);

  errorNama.textContent = hasilValidasi.errorNama;
  errorProdi.textContent = hasilValidasi.errorProdi;

  namaInput.setAttribute(
    'aria-invalid',
    String(hasilValidasi.errorNama !== '')
  );

  prodiInput.setAttribute(
    'aria-invalid',
    String(hasilValidasi.errorProdi !== '')
  );

  if (!hasilValidasi.valid) {
    status.textContent = 'Periksa kembali data peserta.';
    return;
  }

  const pesertaBaru = {
    id: peserta.length + 1,
    nama: calon.nama,
    prodi: calon.prodi
  };

  peserta.push(pesertaBaru);

  form.reset();

  namaInput.setAttribute('aria-invalid', 'false');
  prodiInput.setAttribute('aria-invalid', 'false');

  errorNama.textContent = '';
  errorProdi.textContent = '';

  renderPeserta(peserta);

  status.textContent = 'Peserta berhasil ditambahkan.';
});

filterInput.addEventListener('change', () => {
  const pilihan = filterInput.value;

  if (pilihan === 'semua') {
    renderPeserta(peserta);
    return;
  }

  const hasilFilter = peserta.filter((item) => {
    return item.prodi === pilihan;
  });

  renderPeserta(hasilFilter);
});

renderPeserta(peserta);