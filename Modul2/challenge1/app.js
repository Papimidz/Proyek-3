'use strict';

function validasiInput(harga, jumlah) {
  return harga > 0 && jumlah > 0;
}

function hitungSubtotal(harga, jumlah) {
  return harga * jumlah;
}

function tentukanDiskon(subtotal, statusAnggota) {
  let diskon = 0;

if (subtotal >= 200000) {
  diskon = 0.20;
} else if (subtotal >= 100000) {
  diskon = 0.10;
}

  if (statusAnggota) {
    diskon += 0.05;
  }

  if (diskon > 0.25) {
    diskon = 0.25;
  }

  return diskon;
}

function hitungTotal(subtotal, diskon) {
  return subtotal - (subtotal * diskon);
}

function buatRingkasan(harga, jumlah, statusAnggota) {
  if (!validasiInput(harga, jumlah)) {
    return {
      valid: false,
      pesan: 'Harga dan jumlah harus lebih besar dari 0.'
    };
  }

  const subtotal = hitungSubtotal(harga, jumlah);
  const diskon = tentukanDiskon(subtotal, statusAnggota);
  const total = hitungTotal(subtotal, diskon);

  return {
    valid: true,
    harga,
    jumlah,
    statusAnggota,
    subtotal,
    diskon,
    total
  };
}


// Kasus uji
const kasusUji = [
  { harga: 25000, jumlah: 2, statusAnggota: false },
  { harga: 50000, jumlah: 2, statusAnggota: false },
  { harga: 100000, jumlah: 2, statusAnggota: true },
  { harga: 75000, jumlah: 2, statusAnggota: true },
  { harga: 0, jumlah: 2, statusAnggota: false }
];

for (const kasus of kasusUji) {
  console.log(
    buatRingkasan(
      kasus.harga,
      kasus.jumlah,
      kasus.statusAnggota
    )
  );
}