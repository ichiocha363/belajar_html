const daftarProduk =[
    {
        nama:"Baju",
        harga:15000,
        stok:5
    },
    {
        nama:"Celana",
        harga:20000,
        stok:10
    },
    {
        nama:"Sepatu",
        harga:50000,
        stok:15
    }
] 
console.log(daftarProduk)

function menghitungDiscound(totalBelanja){
    let discound = 0;
    if(totalBelanja >= 100000){
        discound = totalBelanja * 0.1;
    }
    else if(totalBelanja >= 50000){
        discound = totalBelanja * 0.05;
    }else{
        discound = 0;
    }
    return discound;
}

console.log(`Harga beli 130.000 dapat discound : ${menghitungDiscound(130000)}`)
console.log(`Harga beli 70.000 dapat discound : ${menghitungDiscound(70000)}`)

function metodeBayar(metode){
    let biaya = 0;
    switch (metode){
        case "tunai":
            biaya = 0;
            break;
        case "Qris":
            biaya = 2500;
            break;
        default:
            biaya = 2500;
    }
    return biaya;
}

console.log(`Biaya Admin ${metodeBayar("Qris")} dengan metode bayar adalah Qris`)
console.log(`Biaya Admin ${metodeBayar("tunai")} dengan metode bayar adalah tunai`)
console.log(`Biaya Admin ${metodeBayar("hvcehcvudjvcusvdc")} dengan metode bayar adalah ngarang`)

let totalHarga = 0;
for(const produk of daftarProduk){
    totalHarga += produk.harga * produk.stok;
}
console.log(totalHarga)