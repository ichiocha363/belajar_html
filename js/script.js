const daftarProduct = [
  {
    nama: "Pisang",
    harga: 5000,
    stock: 10,
  },
  {
    nama: "Apel ",
    harga: 10000,
    stock: 5,
  },
  {
    nama: "Buah Naga",
    harga: 15000,
    stock: 3,
  },
];

console.log(daftarProduct);

function MenghitungDiscount(totalBelanja) {
  let discount = 0;
  if (totalBelanja >= 100000) {
    discount = totalBelanja * 0.1;
  } else if (totalBelanja >= 50000) {
    discount = totalBelanja * 0.05;
  } else {
    discount = 0;
  }
  return discount;
}

console.log(
  `Jika total adalah 120000, maka diskonnya adalah: ${MenghitungDiscount(120000)}`,
);
// console.log(
//   `Jika belanja total adalah 70000, maka diskonnya adalah: ${MenghitungDiscount(70000)}`,
// );

function metodePembayaran(totalBelanja, metode) {
    let biaya = 0;
  switch (metode) {
    case "cash":
      biaya = 0;
      break;
    case "Qris":
      biaya = totalBelanja * 0.07;
      break;
  }
  return biaya;
}

console.log(
  `Jika total belanja adalah 120000 dan metode pembayaran adalah cash, maka biaya tambahan adalah: ${metodePembayaran(150000, "Qris")}`,
);

let totalBelanja = 0;
for (const product of daftarProduct) {
    totalBelanja += product.harga * product.stock;
}

console.log(`Total belanja adalah: ${totalBelanja}`);