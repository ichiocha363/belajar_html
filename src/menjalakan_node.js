export const menjalankan_node = () => {
console.log("Halo,Selamat datang di kasirku");
const namaProduk = "Bakwan sayur";
const hargaSatuan = 5000;
const jumlahBeli = 3;
//  Template Literals``
console.log(
  `Nama Produk: ${namaProduk} Total Harga: ${(hargaSatuan * jumlahBeli).toLocaleString("id-ID")}`,
);
// ----------------------------------------------------------
const ProdukWarung = {
  id: 1,
  nama: "Pecel Ayam",
  Kategori: "Makanan",
  hargaBeli: 18000,
  hargaJual: 25000,
  stok: 10,
};
console.log(`ID Produk: SKU-${ProdukWarung.id}
    Nama Produk: ${ProdukWarung.nama}
    Kategori: ${ProdukWarung.Kategori}
    Harga Beli: Rp.${ProdukWarung.hargaBeli.toLocaleString("id-ID")}
    Harga Jual: Rp.${ProdukWarung.hargaJual.toLocaleString("id-ID")}
    Stok: ${ProdukWarung.stok}

    status: ${ProdukWarung.stok < ProdukWarung.batasMin ? "Restock" : "Tersedia"}
    `);
// ----------------------------LOOPING ARRAY PROJECT-----------------------------

const daftarProduk = [
  { nama: "Lele", harga: 5000, stok: 13 },
  { nama: "Ayam", harga: 20000, stok: 5 },
  { nama: "Ikan", harga: 15000, stok: 8 },
  { nama: "Tahu", harga: 3000, stok: 20 },
  { nama: "Tempe", harga: 4000, stok: 15 },
];

for (const produk of daftarProduk) {
  console.log(`
        Nama Produk: ${produk.nama},
        Harga: Rp.${produk.harga.toLocaleString("id-ID")},
        Stok: ${produk.stok}
    `);
}
console.log(daftarProduk[1]);

// ---------------FUNCTION-----------------------------
function hargaMargin(hargaJual, hargaBeli) {
  return hargaJual - hargaBeli;
}
function formatRupiah(angka) {
  return `Rp.${angka.toLocaleString("id-ID")}`;
}
const product = {
  nama: "Nasi Uduk",
  hargaJual: 22000,
  hargaBeli: 12500,
};
console.log(formatRupiah(product.hargaJual));
console.log(formatRupiah(product.hargaBeli));
console.log(hargaMargin(product.hargaJual, product.hargaBeli));

// -------------------TUGAS NODE JS-----------------------------

console.log(
  "=========================================================================",
);
console.log(
  "          LAPORAN HARIAN POS: Toko Ber Berkah Warung (Kasirku)           ",
);
console.log(
  "                  Kasir Bertugas: Mas Jundi S.kom                        ",
);
console.log(
  "=========================================================================",
);

const daftarBarang = [
  {
    nama: "Minyak Goreng Sania 2L",
    hargaJual: 32000,
    hargaBeli: 28000,
    stokGudang: 10,
  },
  {
    nama: "Beras Ramos 5Kg",
    hargaJual: 72000,
    hargaBeli: 65000,
    stokGudang: 15,
  },
  { nama: "Gula Pasir 1Kg", hargaJual: 16000, hargaBeli: 14000, stokGudang: 3 },
];

function totalMargin(hargaJual, hargaBeli) {
  return hargaJual - hargaBeli;
}

function totalAset(hargaJual, stokGudang) {
  return hargaJual * stokGudang;
}

function totalEstimasiAset(daftarBarang) {
  let total = 0;
  for (const produk of daftarBarang) {
    total += totalAset(produk.hargaJual, produk.stokGudang);
  }
  return total;
}

for (const produk of daftarBarang) {
  console.log(`
------------------------------------------------------------------------
Produk: ${produk.nama}
Harga Jual: Rp.${produk.hargaJual.toLocaleString("id-ID")} (Margin: Rp.${totalMargin(produk.hargaJual, produk.hargaBeli).toLocaleString("id-ID")})
Stok Gudang: ${produk.stokGudang} unit | Status: ${produk.stokGudang < 5 ? "Perlu Restock" : "Aman"}
------------------------------------------------------------------------
`);
}
console.log(
  `Total Estimasi Aset Toko : Rp.${totalEstimasiAset(daftarBarang).toLocaleString("id-ID")}`,
);
console.log(
  `Barang Butuh Perhatian : ${daftarBarang.filter((produk) => produk.stokGudang < 5).length} item`,
);
console.log(
  "=========================================================================",
);
}
