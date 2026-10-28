console.log ("Belajar HTML");

const namaProduk = "Minyak Goreng Sania 2L";
const hargaSatuan = 18500;
const jumlahBeli ="2";

console.log(`Nama Produk adalah : ${namaProduk}
Total adalah : ${(hargaSatuan * jumlahBeli).toLocaleString("id-ID")} `);

const ProdukWarung = {
    id: 1,
    nama : "Pecel Lele",
    kategori : "Makanan",
    hargaBeli : 9000,
    hargaJual: 14000,
    stock : 5,
    batasMin:5
};

console.log(`
    ID PRODUCT: SKU-${ProdukWarung.id},
    Nama Produk : ${ProdukWarung.nama},
    Kategori : ${ProdukWarung.kategori},
    Harga Beli : ${ProdukWarung.hargaBeli.toLocaleString("id-ID")},
    Harga Jual : ${ProdukWarung.hargaJual.toLocaleString("id-ID")},
    Stock : ${ProdukWarung.stock}`)

console.log(`
        Status: ${ProdukWarung.stock < ProdukWarung.batasMin ? "Restock" : "tersedia"}`);

const daftarProduk = [
    {nama : "Telor", harga : 25000, stock: 15},
    {nama : "Beras", harga : 14500, stock: 25},
    {nama : "Minyak", harga : 39000, stock: 45}]