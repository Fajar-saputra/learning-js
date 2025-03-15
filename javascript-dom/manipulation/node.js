// buat elemen baru
const tagParagraf = document.createElement("p");
// buat isi elemen
const text = document.createTextNode("Teks yang dibuat dengan DOM node");
// gabung masukan text kedalam tagParagraf
tagParagraf.appendChild(text);
// gabung masukan tagParagraf kedalam section
const sectionA = document.querySelector("section#a");
sectionA.appendChild(tagParagraf);

// buat elemen baru
const liBaru = document.createElement("li");
// buat isi elemen
const isi = document.createTextNode("Ini item baru");
// masukan isi ke liBaru
liBaru.appendChild(isi);

const Ul = document.querySelector("section#b ul"); // ambil parent
const li2 = document.querySelector("section#b ul li:nth-child(2)"); // posisi sebelem element yang akan diletakkan
Ul.insertBefore(liBaru, li2);

// remove
const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

// replace
const sectionB = document.querySelector("section#b");
const paragraf4 = sectionB.querySelector("p");
const h2Baru = document.createElement('h2');
const isiH2Baru = document.createTextNode("Judul pengganti");

h2Baru.appendChild(isiH2Baru);
sectionB.replaceChild(h2Baru, paragraf4);