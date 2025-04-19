
// Tujuan: Metode ini menyisipkan teks biasa ke dalam DOM pada posisi yang ditentukan.

// insertAdjacentText(position, text)
// Parameter:

// position:    String yang menunjukkan posisi relatif terhadap elemen yang memanggil metode. Nilai yang valid adalah:
//             'beforebegin': Sebelum elemen itu sendiri.
//             'afterbegin': Tepat di dalam elemen, sebelum anak pertamanya.
//             'beforeend': Tepat di dalam elemen, setelah anak terakhirnya.
//             'afterend': Setelah elemen itu sendiri.

// text:       String yang akan disisipkan.String ini akan disisipkan sebagai teks biasa,
//             tanpa diinterpretasikan sebagai HTML.Karakter - karakter HTML seperti <, >, & akan ditampilkan sebagai teks biasa.

// contoh

{/* <div id="myDiv">Hello</div>
<script>
  const myDiv = document.getElementById('myDiv');
  myDiv.insertAdjacentText('beforebegin', 'Ini teks sebelum div. ');
  myDiv.insertAdjacentText('afterbegin', 'Teks di awal div. ');
  myDiv.insertAdjacentText('beforeend', 'Teks di akhir div. ');
  myDiv.insertAdjacentText('afterend', ' Ini teks setelah div.');
</script> */}


// hasil
// Ini teks sebelum div. <div id="myDiv">Teks di awal div. HelloTeks di akhir div. </div> Ini teks setelah div.