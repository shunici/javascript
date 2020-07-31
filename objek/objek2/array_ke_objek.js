var hari = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'];

var jumlahHuruf = hari.map (function(jl_hari){
    return jl_hari.length;
});

console.table(jumlahHuruf);

//dengan arrow fungsi lebih ringkas
var hari = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'];
var jumlahHuruf = hari.map(  nama => nama.length);
console.table(jumlahHuruf);

//berikut jika kita ingin mengembalikan objek
var hari = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'];
var jumlahHuruf = hari.map(  nama => ({
    nama: nama,
    jlh_hrf : nama.length,
}));
console.table(jumlahHuruf);
