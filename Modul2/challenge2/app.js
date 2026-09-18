'use strict';

const tombolFaq = document.querySelectorAll('.faq-question');

for (const tombol of tombolFaq) {
  tombol.addEventListener('click', () => {
    const idJawaban = tombol.getAttribute('aria-controls');
    const jawaban = document.querySelector(`#${idJawaban}`);
    const itemAktif = tombol.closest('.faq-item');

    const sedangTerbuka =
      tombol.getAttribute('aria-expanded') === 'true';

    for (const tombolLain of tombolFaq) {
      const idJawabanLain =
        tombolLain.getAttribute('aria-controls');

      const jawabanLain =
        document.querySelector(`#${idJawabanLain}`);

      const itemLain =
        tombolLain.closest('.faq-item');

      tombolLain.setAttribute('aria-expanded', 'false');
      jawabanLain.hidden = true;
      itemLain.classList.remove('is-open');
    }

    if (!sedangTerbuka) {
      tombol.setAttribute('aria-expanded', 'true');
      jawaban.hidden = false;
      itemAktif.classList.add('is-open');
    }
  });
}