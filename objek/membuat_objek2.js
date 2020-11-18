 var gitar = {
  //property
  warna : 'biru muda',
  bahan : 'kayu jingah',
  ukuran : '50 cm',

  dipetik : function (cara){  
    alert (`gitar ini mempunyai warna ${this.warna} dan bahan ${this.bahan} cara mainnya ${cara}`);
  },
  digenjreng : function (cara){  
    alert (`gitar ini mempunyai warna ${this.warna} dan bahan ${this.bahan} cara mainnya ${cara}`);
    
  },
  fingerstyle : function(cara){    
    alert (`gitar ini mempunyai warna ${this.warna} dan bahan ${this.bahan} cara mainnya ${cara}`);
  }

 };
 //cara pakai
gitar.dipetik('tangan main dari atas ke bawah');
gitar.digenjreng('semua tangan aktif');
gitar.fingerstyle('lihat alif bata di youtube');
