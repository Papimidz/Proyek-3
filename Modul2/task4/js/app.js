'use strict';

const status = document.querySelector('#status');
const profil = document.querySelector('#profil');
const tombolCobaLagi = document.querySelector('#coba-lagi');
const tombolTema = document.querySelector('#ubah-tema');
const formSkill = document.querySelector('#form-skill');
const inputSkill = document.querySelector('#skill-baru');
const errorSkill = document.querySelector('#error-skill');

let dataProfil = null;
let sedangMemuat = false;

function aturState(state, pesan) {
  status.dataset.state = state;
  status.textContent = pesan;
  tombolCobaLagi.hidden = state !== 'error';
}

async function ambilProfil() {
  const response = await fetch('data/profile.json');

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}

function renderProfil(data) {
  profil.replaceChildren();

  const kartu = document.createElement('article');
  const nama = document.createElement('h2');
  const peran = document.createElement('p');
  const tombolDetail = document.createElement('button');
  const detail = document.createElement('div');
  const bio = document.createElement('p');
  const email = document.createElement('p');
  const judulSkill = document.createElement('h3');
  const daftarSkill = document.createElement('ul');

  kartu.classList.add('profile-card');
  tombolDetail.classList.add('toggle-detail');
  detail.classList.add('detail-profil');
  daftarSkill.classList.add('skill-list');

  nama.textContent = data.nama;
  peran.textContent = data.peran;
  bio.textContent = data.bio;
  email.textContent = data.email;

  tombolDetail.type = 'button';
  tombolDetail.textContent = 'Tampilkan detail';
  tombolDetail.setAttribute('aria-expanded', 'false');

  detail.append(bio, email);

  judulSkill.textContent = 'Keterampilan';

  if (
    !Array.isArray(data.keterampilan) ||
    data.keterampilan.length === 0
  ) {
    const itemKosong = document.createElement('li');
    itemKosong.textContent = 'Belum ada keterampilan.';
    daftarSkill.append(itemKosong);
  } else {
    for (const [index, skill] of data.keterampilan.entries()) {
      const itemSkill = document.createElement('li');
      const teksSkill = document.createElement('span');
      const tombolHapus = document.createElement('button');

      teksSkill.textContent = skill;

      tombolHapus.type = 'button';
      tombolHapus.textContent = 'Hapus';
      tombolHapus.classList.add('hapus-skill');

      tombolHapus.setAttribute(
        'aria-label',
        `Hapus keterampilan ${skill}`
      );

      tombolHapus.addEventListener('click', () => {
        data.keterampilan.splice(index, 1);

        renderProfil(data);

        aturState(
          'success',
          `Keterampilan ${skill} berhasil dihapus.`
        );
      });

      itemSkill.append(teksSkill, tombolHapus);
      daftarSkill.append(itemSkill);
    }
  }

  tombolDetail.addEventListener('click', () => {
    const terbuka = kartu.classList.toggle('is-open');

    tombolDetail.setAttribute(
      'aria-expanded',
      String(terbuka)
    );

    tombolDetail.textContent = terbuka
      ? 'Sembunyikan detail'
      : 'Tampilkan detail';
  });

  kartu.append(
    nama,
    peran,
    tombolDetail,
    detail,
    judulSkill,
    daftarSkill
  );

  profil.append(kartu);
}

async function muatProfil() {
  if (sedangMemuat) {
    return;
  }

  sedangMemuat = true;
  tombolCobaLagi.disabled = true;

  aturState('loading', 'Memuat profil...');
  profil.replaceChildren();

  try {
    dataProfil = await ambilProfil();

    if (
      dataProfil === null ||
      typeof dataProfil !== 'object' ||
      Array.isArray(dataProfil)
    ) {
      throw new Error('Format data profil tidak valid.');
    }

    if (Object.keys(dataProfil).length === 0) {
      aturState('empty', 'Data profil kosong.');
      return;
    }

    if (!Array.isArray(dataProfil.keterampilan)) {
      dataProfil.keterampilan = [];
    }

    renderProfil(dataProfil);

    aturState(
      'success',
      'Profil berhasil dimuat.'
    );
  } catch (error) {
    console.error(error);

    aturState(
      'error',
      `Gagal memuat profil: ${error.message}`
    );
  } finally {
    sedangMemuat = false;
    tombolCobaLagi.disabled = false;
  }
}

tombolTema.addEventListener('click', () => {
  document.body.classList.toggle('tema-gelap');
});

formSkill.addEventListener('submit', (event) => {
  event.preventDefault();

  const skillBaru = inputSkill.value.trim();

  if (skillBaru === '') {
    errorSkill.textContent =
      'Keterampilan tidak boleh kosong.';

    inputSkill.setAttribute(
      'aria-invalid',
      'true'
    );

    return;
  }

  if (!dataProfil) {
    errorSkill.textContent =
      'Data profil belum tersedia.';

    inputSkill.setAttribute(
      'aria-invalid',
      'true'
    );

    return;
  }

  const sudahAda =
    dataProfil.keterampilan.some(
      (skill) =>
        skill.toLowerCase() ===
        skillBaru.toLowerCase()
    );

  if (sudahAda) {
    errorSkill.textContent =
      'Keterampilan tersebut sudah ada.';

    inputSkill.setAttribute(
      'aria-invalid',
      'true'
    );

    return;
  }

  errorSkill.textContent = '';
  inputSkill.setAttribute('aria-invalid', 'false');

  dataProfil.keterampilan.push(skillBaru);

  renderProfil(dataProfil);

  formSkill.reset();

  aturState(
    'success',
    'Keterampilan berhasil ditambahkan.'
  );
});

tombolCobaLagi.addEventListener(
  'click',
  muatProfil
);

muatProfil();