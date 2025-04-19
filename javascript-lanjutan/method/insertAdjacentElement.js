// Tujuan: Metode ini menyisipkan objek elemen DOM yang sudah ada ke dalam DOM pada posisi yang ditentukan.

// Parameter:

// position: Sama seperti pada insertAdjacentText() dan insertAdjacentHTML().
// element: Objek elemen DOM yang ingin disisipkan. Objek ini harus sudah dibuat menggunakan metode seperti document.createElement() atau sudah merupakan referensi ke elemen yang ada di DOM.
//     Contoh:

//     <div id="myDiv">Hello</div>
// <script>
//   const myDiv = document.getElementById('myDiv');
//   const newParagraph = document.createElement('p');
//   newParagraph.textContent = 'Elemen sebelum div.';
//   myDiv.insertAdjacentElement('beforebegin', newParagraph);

//   const newSpan = document.createElement('span');
//   newSpan.textContent = 'Elemen di awal div.';
//   myDiv.insertAdjacentElement('afterbegin', newSpan);

//   const newStrong = document.createElement('strong');
//   newStrong.textContent = 'Elemen di akhir div.';
//   myDiv.insertAdjacentElement('beforeend', newStrong);

//   const newButton = document.createElement('button');
//   newButton.textContent = 'Elemen setelah div.';
//   myDiv.insertAdjacentElement('afterend', newButton);
// </script>

// <p>Elemen sebelum div.</p><div id="myDiv"><span>Elemen di awal div.</span>Hello<strong>Elemen di akhir div.</strong></div><button>Elemen setelah div.</button>