const inventarisBahan = [
  { id: 1, nama: "Ayam Potong", stok: 10, satuan: "kg", batasMin: 6},
  { id: 2, nama: "Cabai Rawit", stok: 3, satuan: "kg", batasMin: 2},
  { id: 3, nama: "Bawang Merah", stok: 4, satuan: "kg", batasMin: 3},
  { id: 4, nama: "Telur Ayam", stok: 5, satuan: "kg", batasMin: 2},
  { id: 5, nama: "Beras Putih", stok: 10, satuan: "kg", batasMin: 5}
];

function saringStokMenipis(daftar) {
  return daftar.filter((p) => p.stok <= p.batasMin);
}

const hasil = saringStokMenipis(inventarisBahan);
if (hasil.length === 0) console.log("Tidak ditemukan");
else console.table(hasil);