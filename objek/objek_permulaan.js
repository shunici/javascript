//cara 1
//dengan variabel biasa

  var nama = 'shun';
var alamat = 'desa 6 takuti';
var nilai = [2, 5, 4, 3 , 7];

//hitung nilai rata-rata
function nilai_rata(angka) {
    var total = 0;
    for (var i = 0; i< angka.length; i++){
        total += angka[i];
    }
    return total/angka.length;
}

var tes = nilai_rata(nilai);
alert(tes);

////////////////////////

//cara2
//dengan array 
var mahasiswa = ['shun', 'desa 6 takuti', [2, 5, 4, 3 , 7] ];
function nilai_rata(nilai) {
    var total = 0;
    for (var i = 0; i< nilai.length; i++){
        total += nilai[i];
    }
    return total/nilai.length;
}
var tampil2 = nilai_rata(mahasiswa[2]);
alert (tampil2);

//////////

//cara3, menghitung dengan objek

var mahasiswa = {
    nama : 'shun',
    alamat : 'desa 6 takuti',
    nilai : [2, 5, 4, 3 , 7],
    nilai_rata : function(){
        var total = 0;
        var angka = this.nilai;
        for (var i = 0; i< angka.length; i++){
            total += angka[i];
        }
        return total/angka.length;
        //21/5=4.2
    }
}
var tampil = mahasiswa.nilai_rata();
alert (tampil);

//
