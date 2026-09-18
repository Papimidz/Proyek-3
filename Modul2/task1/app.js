'use strict';

function validasiNilai(nilai) {
  return (
    typeof nilai === 'number' &&
    Number.isFinite(nilai) &&
    nilai >= 0 &&
    nilai <= 100
  );
}

console.log('Test validasiNilai');
console.log('-1   :', validasiNilai(-1));
console.log('0    :', validasiNilai(0));
console.log('100  :', validasiNilai(100));
console.log('101  :', validasiNilai(101));
console.log('NaN  :', validasiNilai(NaN));
console.log('"80" :', validasiNilai("80"));

function tentukanKategori(nilai) {
  if (!validasiNilai(nilai)) {
    return null;
  }

  if (nilai >= 85) {
    return 'A';
  }

  if (nilai >= 70) {
    return 'B';
  }

  if (nilai >= 60) {
    return 'C';
  }

  return 'D';
}

console.log('Test tentukanKategori');
console.log('59  :', tentukanKategori(59));
console.log('60  :', tentukanKategori(60));
console.log('69  :', tentukanKategori(69));
console.log('70  :', tentukanKategori(70));
console.log('84  :', tentukanKategori(84));
console.log('85  :', tentukanKategori(85));
console.log('100 :', tentukanKategori(100));
console.log('101 :', tentukanKategori(101));

function tentukanStatus(nilai) {
  if (!validasiNilai(nilai)) {
    return 'Data tidak valid';
  }

  if (nilai >= 60) {
    return 'Lulus';
  }

  return 'Tidak lulus';
}

console.log('Test tentukanStatus');
console.log('59  :', tentukanStatus(59));
console.log('60  :', tentukanStatus(60));
console.log('100 :', tentukanStatus(100));
console.log('101 :', tentukanStatus(101));
console.log('"80":', tentukanStatus("80"));

function buatRingkasan(nama, nilai) {
  return {
    nama,
    nilai,
    kategori: tentukanKategori(nilai),
    status: tentukanStatus(nilai)
  };
}

const kasusUji = [
  { nama: 'Alya', nilai: 0 },
  { nama: 'Bima', nilai: 59 },
  { nama: 'Citra', nilai: 60 },
  { nama: 'Danu', nilai: 69 },
  { nama: 'Eka', nilai: 70 },
  { nama: 'Fani', nilai: 85 },
  { nama: 'Gilang', nilai: 101 },
];

const hasilUji = kasusUji.map(({ nama, nilai }) =>
  buatRingkasan(nama, nilai)
);

console.table(hasilUji);