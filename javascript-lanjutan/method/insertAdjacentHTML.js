// Tujuan: Metode ini menyisipkan string HTML ke dalam DOM pada posisi yang ditentukan.

// Parameter:

// position: Sama seperti pada insertAdjacentText().
// html: String yang berisi sintaks HTML yang akan di-parse oleh browser dan disisipkan sebagai elemen DOM.


{/* <div id="myDiv">Hello</div>
<script>
  const myDiv = document.getElementById('myDiv');
  myDiv.insertAdjacentHTML('beforebegin', '<p>HTML sebelum div.</p>');
  myDiv.insertAdjacentHTML('afterbegin', '<span>HTML di awal div.</span>');
  myDiv.insertAdjacentHTML('beforeend', '<strong>HTML di akhir div.</strong>');
  myDiv.insertAdjacentHTML('afterend', '<button>HTML setelah div.</button>');
</script> */}


// hasil
{/* <p>HTML sebelum div.</p>
<div id="myDiv"><span>HTML di awal div.</span>Hello<strong>HTML di akhir div.</strong></div><button>HTML setelah div.</button> */}