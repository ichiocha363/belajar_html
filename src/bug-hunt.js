const stok = [
  { nama: "Kopi Sachet", jumlah: "10", min: "9" },
  { nama: "Teh Celup", jumlah: "4", min: "5" },
  { nama: "Gula 1kg", jumlah: "12", min: "3" },
];

// 1. Total barang
let total = 0;
for (let i = 0; i < stok.length; i++) {
  total = total + Number(stok[i].jumlah);
}
console.log("Total barang:", total);

// 2. Barang yang menipis (jumlah < min)
for (const s of stok) {
    let jumlahStock = Number(s.jumlah);
    let minStock = Number(s.min);
  if (jumlahStock < minStock) console.log("Menipis:", s.nama);
}
// 3. Nilai stok
const harga = [2500, 2000, 16000];
let nilai = 0;
for (let i = 0; i < stok.length; i++) {
  nilai += harga[i] * Number(stok[i].jumlah);
}
console.log("Nilai stok:", nilai);
