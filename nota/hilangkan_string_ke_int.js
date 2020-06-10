cara menghilangkan string atau text sehingga angkanya saja yang diinginkan

var str = "avc234jw6";
var no = parseInt(str.replace(/[a-z]/ig, ""));

console.log(no)
hasil //
2346


========================
ini cuma menghilangkan data- nya aja
var ret = "data-123".replace('data-','');
console.log(ret);   //prints: 123
