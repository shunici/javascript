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

 // sebenarnya objek.create sudah ada digantikan dengan prototype..jadi kita tidak perlu membuat nya
 //contruktor


function mahasiswa (nama, energi){  
     this.nama = nama;
     this.energi = energi;    

 }
 mahasiswa.prototype.makan = function(porsi){
     this.energi += porsi;
     return `anda sudah makan ${this.energi} porsi`;
 }

var shuni = new mahasiswa('shuni', 1);
