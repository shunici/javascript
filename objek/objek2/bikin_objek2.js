//cara 1
//objek literal : kelemahan tidak efetktif untuk objek yang banyak karena method nya di bikin terus menerus
var mahasiswa1 = {
    nama : 'shuni',
    energi : 5,
    makan : function(nasi){
        this.energi = this.energi + nasi;
        console.log(`${this.nama} sudah makan`);
    }
}
var mahasiswa2 = {
    nama : 'nopi',
    energi : 2,
    makan : function(nasi){
        this.energi = this.energi + nasi;
        console.log(`${this.nama} sudah makan`);
    }
}
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
    };
    mhs.main = function (nasi){
        this.energi -= nasi;
        // ini sama dengan  this.energi = this.energi + nasi;
        console.log(`${this.nama} sudah main`);
    }
    return mhs;
}
var shuni = Mahasiswa('shuni', 5);
var nopi  = Mahasiswa('nopi', 2);
// //cara pakai di console ketik shuni atau shuni.makan(2)
//ini sedikit lebih efektif dari cara diatas
//akan tetapi sama saha fungsi main dan makan akan tetap dibaca dan apabila datanya banyak masih kurang efektif
//sedikit untuk mengakali cara diatas yaitu : dengan membuat objek terpisah dari fungsi itu ..


const metode_mhs = {
   makan : function (nasi){
        this.energi += nasi;        
        console.log(`${this.nama} sudah makan`);
    },
   main : function (nasi){
        this.energi -= nasi;       
        console.log(`${this.nama} sudah main`);
    }
}

function mahasiswa (nama, energi){
    let mhs = {};
    mhs.nama = nama;
    mhs.energi = energi;
    mhs.makan = metode_mhs.makan;
    mhs.main = metode_mhs.main;
    return mhs;
  
}
var shuni = mahasiswa('shuni', 5);
var nopi  = mahasiswa('nopi', 2);



//sedikit lebih efektif dari sebelumnya, tetapi masih kurang efektif karena setiap kali data tampil fungsinya masih deklarasi di objek dan di fungsi
//untuk mengatisifasi bisa dengan membuat method Object.create()

const metode_mhs = {
    makan : function (nasi){
         this.energi += nasi;        
         console.log(`${this.nama} sudah makan`);
     },
    main : function (nasi){
         this.energi -= nasi;       
         console.log(`${this.nama} sudah main`);
     }
 }
 
 function mahasiswa (nama, energi){
     let mhs = Object.create(metode_mhs);
     mhs.nama = nama;
     mhs.energi = energi;    
     return mhs;
   
 }
 var shuni = mahasiswa('shuni', 5);
 var nopi  = mahasiswa('nopi', 2);

//akan tetapi cara diatas masih kurang...oleh karena itu kita perlu prototype


