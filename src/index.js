
import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";
// console.log (MenjalankanNode());
const rl = readline.createInterface({ input, output });
const daftar = [
  {
    nama: "Teh Celup",
    harga: 5000,
  },
  {
    nama: "Coca-cola",
    harga: 8000,
  },
];

console.table(daftar);
let pilihYa;
do {
  pilihYa = await rl.question("Pilih Menu :");
  switch (pilihYa) {
    case "1":
      // TAMBAH
      const nama = await rl.question("Nama Produk : ");
      if (nama === "") {
        console.log(`Isi duku nama Produk!`);
        break;
      }
      let harga = 0;
      while (true) {
        let hargaString = await rl.question("Harga Produk : ");
        harga = Number(hargaString);
        if (hargaString.trim() !== "" && !isNaN(harga) && harga > 0) {
          console.log(`Isi dulu harga atau harga tidak boleh minus!`);
          break;
        }
        console.log(`Harga gagal ter Input`);
      }
      daftar.push({ nama, harga });
      console.log(`Berhasil Bertambah!`);
      // console.table(daftar);
      break; // ..........................
    case "2":
      // LIHAT
      console.table(daftar);
      break;
    case "3":
      // CARI
      const cari = await rl.question("Ketik yg dicari : ");
      let ketemu = 0;
      for (const d of daftar) {
        if (d.nama.toLocaleLowerCase().includes(cari.toLocaleLowerCase())) {
          console.table({
            nama: d.nama,
            harga: d.harga,
          });
          ketemu++;
        }
      }
      if (ketemu === 0) {
        console.log(`Data tidak ditemukan!`);
      }
      break;
    case "4":
      // KELUAR
      console.log(`Terimakasih!`);
      break;

    default:
      console.log(`Pilihan tidak terrsedia`);
      break;
  }
} while (pilihYa !== "4");
rl.close();

