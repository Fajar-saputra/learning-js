// Mendapatkan referensi ke elemen container tempat semua catatan akan ditampilkan
const container = document.querySelector(".container");
// Mendapatkan referensi ke tombol "New" untuk membuat catatan baru
const btnNewNote = document.querySelector(".btnNew");

// Fungsi untuk menyimpan array catatan ke localStorage
function saveNotes(notes) {
    // Menggunakan kunci "notesData" untuk menyimpan array JSON dari objek catatan
    localStorage.setItem("notesData", JSON.stringify(notes));
}

// Fungsi untuk mengambil array catatan dari localStorage
function getNotes() {
    try {
        // Mengambil string JSON dari localStorage menggunakan kunci "notesData"
        const storedNotes = localStorage.getItem("notesData");
        // Jika ada data, parse menjadi array JavaScript; jika tidak, kembalikan array kosong
        return storedNotes ? JSON.parse(storedNotes) : [];
    } catch (error) {
        // Jika terjadi error saat parsing (misalnya, data rusak), log error dan kembalikan array kosong
        console.error("Error getting notes from localStorage:", error);
        return [];
    }
}

console.log(getNotes());

const pushData = getNotes()

const note = {
    id: Date.now(),
    title: "Testing",
    tasks: [],
    backgroundColor: "hotpink",
};

// pushData.push(note)

pushData[1].tasks.push("Belajar")

// saveNotes(pushData)


