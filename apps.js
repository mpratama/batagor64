//hitung tanggal
var d = new Date();

//memproses file terpilih dan memanggil fungsi prosesBase64()
document.getElementById('tombol_encode').addEventListener('click', function() {
  var files = document.getElementById('filemu').files;
  if (files.length > 0) {
    prosesBase64(files[0]);
  }
});

document.getElementById('tahun').innerHTML = "Pratama " + d.getFullYear();
//konversi Base64 teks ke bentuk file
function prosesFile(){
    var texObj = document.getElementById("teksmu").value;
    open(texObj);
}

//read file dan konversi
function prosesBase64(file) {
   var reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
       alert("Simpan file berikut lalu kirimkan lewat sms");
       download("hasil_encoding_file.txt", reader.result);
   };
   reader.onerror = function (error) {
     alert('Error: ', error);
   };
}

// menyimpan hasil encoding ke dalam file text
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}