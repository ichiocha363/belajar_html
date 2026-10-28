// console.log ("Belajar HTML");

// const namaProduk = "Minyak Goreng Sania 2L";
// const hargaSatuan = 18500;
// const jumlahBeli ="2";

// console.log(`Nama Produk adalah : ${namaProduk}
// Total adalah : ${(hargaSatuan * jumlahBeli).toLocaleString("id-ID")} `);

// const ProdukWarung = {
//     id: 1,
//     nama : "Pecel Lele",
//     kategori : "Makanan",
//     hargaBeli : 9000,
//     hargaJual: 14000,
//     stock : 5,
//     batasMin:5
// };

// console.log(`
//     ID PRODUCT: SKU-${ProdukWarung.id},
//     Nama Produk : ${ProdukWarung.nama},
//     Kategori : ${ProdukWarung.kategori},
//     Harga Beli : ${ProdukWarung.hargaBeli.toLocaleString("id-ID")},
//     Harga Jual : ${ProdukWarung.hargaJual.toLocaleString("id-ID")},
//     Stock : ${ProdukWarung.stock}`)

// console.log(`
//         Status: ${ProdukWarung.stock < ProdukWarung.batasMin ? "Restock" : "tersedia"}`);

// const daftarProduk = [
//     {nama : "Telor", harga : 25000, stock: 15},
//     {nama : "Beras", harga : 14500, stock: 25},
//     {nama : "Minyak", harga : 39000, stock: 45}];

// for(const product of daftarProduk){
//     console.log(`
//         Nama Produk: ${product.nama}, 
//         Harga: ${product.harga.toLocaleString("id-ID")}, 
//         Stock: ${product.stock}
//         `)
// }

// console.log(daftarProduk[1].stock);
// console.log(daftarProduk);

// function hargaMargin(hargaJual, hargaBeli){
//     return hargaJual - hargaBeli;
// }
// function formatRupiah(angka){
//     return `Rp. ${angka.toLocaleString("id-ID")}`;
// }
// const product = {
//     nama :"Nasi Uduk",
//     hargaJual : 25000,
//     hargaBeli: 15000
// }
// console.log(formatRupiah(product.hargaJual));
// console.log(formatRupiah(product.hargaBeli));
// console.log(hargaMargin(product.hargaJual, product.hargaBeli));

// ==========================================
// KODE BARU: LAPORAN HARIAN POS (KasirKu)
// ==========================================

function hargaMargin(hargaJual, hargaBeli) {
    return hargaJual - hargaBeli;
}

function formatRupiah(angka) {
    return `Rp ${angka.toLocaleString("id-ID")}`;
}

const daftarProduk = [
    { nama: "Minyak Goreng Sania 2L", hargaBeli: 33000, hargaJual: 37000, stock: 10 },
    { nama: "Beras Ramos 5kg", hargaBeli: 65000, hargaJual: 72000, stock: 15 },
    { nama: "Gula Pasir 1kg", hargaBeli: 14000, hargaJual: 16000, stock: 3 },
];

console.log("====================================================");
console.log("    LAPORAN HARIAN POS: Toko Berkah Warung (KasirKu)");
console.log("    Kasir Bertugas: Mbak Sri");
console.log("====================================================");

const batasMin = 5;

const status1 = daftarProduk[0].stock < batasMin ? "Perlu Restock" : " Aman";
const margin1 = hargaMargin(daftarProduk[0].hargaJual, daftarProduk[0].hargaBeli);

console.log(`Produk       : ${daftarProduk[0].nama}`);
console.log(`Harga Jual   : ${formatRupiah(daftarProduk[0].hargaJual)} (Margin: ${formatRupiah(margin1)})`);
console.log(`Stok Gudang  : ${daftarProduk[0].stock} unit | Status: ${status1}`);
console.log("----------------------------------------------------");

const status2 = daftarProduk[1].stock < batasMin ? "Perlu Restock" : " Aman";
const margin2 = hargaMargin(daftarProduk[1].hargaJual, daftarProduk[1].hargaBeli);

console.log(`Produk       : ${daftarProduk[1].nama}`);
console.log(`Harga Jual   : ${formatRupiah(daftarProduk[1].hargaJual)} (Margin: ${formatRupiah(margin2)})`);
console.log(`Stok Gudang  : ${daftarProduk[1].stock} unit | Status: ${status2}`);
console.log("----------------------------------------------------");

const status3 = daftarProduk[2].stock < batasMin ? "Perlu Restock" : " Aman";
const margin3 = hargaMargin(daftarProduk[2].hargaJual, daftarProduk[2].hargaBeli);

console.log(`Produk       : ${daftarProduk[2].nama}`);
console.log(`Harga Jual   : ${formatRupiah(daftarProduk[2].hargaJual)} (Margin: ${formatRupiah(margin3)})`);
console.log(`Stok Gudang  : ${daftarProduk[2].stock} unit | Status: ${status3}`);
console.log("----------------------------------------------------");

const asetToko = (daftarProduk[0].hargaJual * daftarProduk[0].stock) +
                 (daftarProduk[1].hargaJual * daftarProduk[1].stock) +
                 (daftarProduk[2].hargaJual * daftarProduk[2].stock);

const restock = (daftarProduk[0].stock < batasMin ? 1 : 0) +
                (daftarProduk[1].stock < batasMin ? 1 : 0) +
                (daftarProduk[2].stock < batasMin ? 1 : 0);

console.log(`Total Estimasi Aset Toko : ${formatRupiah(asetToko)}`);
console.log(`Barang Butuh Perhatian   : ${restock} item`);
console.log("====================================================");

