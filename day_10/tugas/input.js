function bacaJumlahStok(teks) {
  const jumlah = Number(teks);
  
  if (teks.trim() === "" || Number.isNaN(jumlah) || jumlah <= 0) {
    throw new Error("Jumlah stok harus berupa angka lebih dari 0, mis. 2.5 atau 10");
  }
  return jumlah;
}

const daftarIsian = ["sepuluh kg", "", "-3", "10"];

for (const isian of daftarIsian) {
  try {
    const hasil = bacaJumlahStok(isian);
    console.log(`✔ Berhasil input stok: ${hasil} kg`);
  } catch (err) {
    console.log("✖", err.message);
    console.log("  ↳ Kembali ke menu...");
  }
}

console.log("Program selesai.");