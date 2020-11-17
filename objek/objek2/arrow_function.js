
function halo (nama){
 return alert(nama);
}
halo('shunii');

// ini sama yang diatas

//fungsi biasa
var halo = function(nama){
    return `halo ${nama}`;
}
console.log( halo('shunii') );




//arrow fungsi adalah bentuk fungsi yang lebih ringkas cth
let halo = (nama) => {
    return `halo ${nama}`;
}
console.log( halo('shunii') );





//jika parameter lebih dari satu
let halo = (nama, waktu) => {
    return `halo ${nama} selamat ${waktu}`;
}
console.log( halo('shunii', 'pagi') );


//jika parameter satu aja
let halo = nama => {
    return `halo ${nama} selamat`;
}
console.log( halo('shunii') );





//jika return nya cuma satu aja (implisit return)
let halo = nama => `halo ${nama} selamat`;
console.log( halo('shunii') );


//jika fungsinya tanpa parameter
let halo = () => `hy shunici`;
console.log( halo() );
