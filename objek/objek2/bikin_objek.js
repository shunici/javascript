//objek literal
// var mahasiswa1 = {
//     nama : 'shuni',
//     energi : 5,
//     makan : function(nasi){
//         this.energi = this.energi + nasi;
//         console.log(`${this.nama} sudah makan`);
//     }
// }
// var mahasiswa2 = {
//     nama : 'nopi',
//     energi : 2,
//     makan : function(nasi){
//         this.energi = this.energi + nasi;
//         console.log(`${this.nama} sudah makan`);
//     }
// }
//cara pakai di console. mahasiswa1.makan(2);

//cara 2
//objek function declaration

function Mahasiswa (nama, energi){
    let mhs = {};
    mhs.nama = nama;
    mhs.energi = energi;
    mhs.makan = function (nasi){
        this.energi += nasi;
        // ini sama dengan  this.energi = this.energi + nasi;
        console.log(`${this.nama} sudah makan`);
    }
    return mhs;
}
// cara pakai
var tampil = Mahasiswa('shuni', 5);

alert (tampil.nama); //tampil shuni

//cara 3 function contructor, bedanya tanpa return dan inisiasi awal variabel , dan juga ada keyword new


function Mahasiswa (nama, energi){
 
    this.nama = nama;
    this.energi = energi;
    this.makan = function (nasi){
        this.energi += nasi;
        // ini sama dengan  this.energi = this.energi + nasi;
        console.log(`${this.nama} sudah makan`);
    }
   
}
//cara pakai
var mhs1 = new Mahasiswa('shuni', 5);
var mhs2  = new Mahasiswa('nopi', 2);

// bermain dengan console.log ketik
// mhs1.nama = "ronaldo" maka mhs1 sekarang bernanama ronaldo, berlaku dengan sintax sebelumnya juga



