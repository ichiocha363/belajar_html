import { readFile, writeFile, mkdir } from "node:fs/promises";
const produk = [
//   { id: 1, nama: "Ayam Potong", stok: 10, satuan: "kg", batasMin: 6},
//   { id: 2, nama: "Cabai Rawit", stok: 2, satuan: "kg", batasMin: 2},
//   { id: 3, nama: "Bawang Merah", stok: 3, satuan: "kg", batasMin: 3},
//   { id: 4, nama: "Telur Ayam", stok: 2, satuan: "kg", batasMin: 2},
//   { id: 5, nama: "Beras Putih", stok: 10, satuan: "kg", batasMin: 5}
];

async function simpan(data) {
  await mkdir("data", { recursive: true });
  await writeFile("data/produk.json", JSON.stringify(data, null, 2));
}

await simpan(produk);


async function muat() {
  try {
    return JSON.parse(await readFile("data/produk.json", "utf8"));
  } catch (err) {
    if (err.code === "ENOENT") return [];
    throw err;
  }
}


const dataFile = await muat();
console.log("Jumlah data dari file:", dataFile.length);
