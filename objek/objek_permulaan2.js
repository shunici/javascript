// cara 1 function declaration

function halo (){
    alert('hy sunichi');
}
//cara pakai
halo();

//////

// cara 2 objek literal

var objek = {};
objek.halo = function(){
    alert ('hy sunici');
}
//cara pakai
objek.halo();

///////////

function Halo (){
    alert('hy suni');
}
new Halo();

///kaitan dengan this. ////////////////////

// cara 1 function declaration, this mengembalikan nilai global

function halo (){
console(this);
    alert('hy sunichi');
}
//cara pakai
halo();


//////

// cara 2 objek literal, mengembalikan objek

var objek = {};
objek.halo = function(){
console(this);
    alert ('hy sunici');
}
//cara pakai
objek.halo();


//cara 3 menggunakan constructor, mengembalikan objek yang baru dibuat
///////////

function Halo (){
console(this);
    alert('hy suni');
}
new Halo();
