'use strict';

const status = document.querySelector('#status');
const tombolMuat = document.querySelector('#muat-data');
const tombolCobaLagi = document.querySelector('#coba-lagi');
const hasil = document.querySelector('#hasil');


function aturState(state, pesan) {
  status.dataset.state = state;
  status.textContent = pesan;

  tombolCobaLagi.hidden = state !== 'error';
}


function tunggu(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}


function buatDelayAcak() {
  return Math.floor(Math.random() * 1001) + 500;
}


async function ambilTips() {
  const response = await fetch('data/tips.json');

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}


function pilihTipAcak(data) {
  const indeksAcak = Math.floor(
    Math.random() * data.length
  );

  return data[indeksAcak];
}


function simulasiGagal() {
  return Math.random() < 0.3;
}


function renderTip(item) {
  hasil.textContent = '';

  const article = document.createElement('article');
  const paragraf = document.createElement('p');

  article.classList.add('tip-card');
  paragraf.textContent = item.teks;

  article.append(paragraf);
  hasil.append(article);
}


async function muatTip() {
  tombolMuat.disabled = true;
  tombolCobaLagi.disabled = true;

  tombolMuat.textContent = 'Memuat...';
  tombolMuat.setAttribute('aria-busy', 'true');

  hasil.textContent = '';
  tombolCobaLagi.hidden = true;

  aturState('loading', 'Memuat data...');

  try {
    const delay = buatDelayAcak();

    console.log(`Delay: ${delay} ms`);

    await tunggu(delay);

    if (simulasiGagal()) {
      throw new Error('Simulasi kegagalan.');
    }

    const data = await ambilTips();

    if (!Array.isArray(data)) {
      throw new Error('Format data bukan array.');
    }

    if (data.length === 0) {
      aturState('empty', 'Data kosong.');
      return;
    }

    const tip = pilihTipAcak(data);

    renderTip(tip);

    aturState(
      'success',
      'Tip berhasil dimuat.'
    );
  } catch (error) {
    console.error(error);

    aturState(
      'error',
      `Gagal: ${error.message}`
    );
  } finally {
    tombolMuat.disabled = false;
    tombolCobaLagi.disabled = false;

    tombolMuat.textContent = 'Muat Data';

    tombolMuat.removeAttribute('aria-busy');
  }
}


tombolMuat.addEventListener('click', muatTip);

tombolCobaLagi.addEventListener('click', muatTip);