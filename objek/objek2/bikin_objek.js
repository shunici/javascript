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

// function Mahasiswa (nama, energi){
//     let mhs = {};
//     mhs.nama = nama;
//     mhs.energi = energi;
//     mhs.makan = function (nasi){
//         this.energi += nasi;
//         // ini sama dengan  this.energi = this.energi + nasi;
//         console.log(`${this.nama} sudah makan`);
//     }
//     return mhs;
// }

// //cara pakai di console ketik shuni atau shuni.makan(2)
// var shuni = Mahasiswa('shuni', 5);
// var nopi  = Mahasiswa('nopi', 2);

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
var shuni = new Mahasiswa('shuni', 5);
var nopi  = new Mahasiswa('nopi', 2);

