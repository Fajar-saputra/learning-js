const container = document.querySelector('.container'),
    btnNew = document.querySelector('.btnNew');

    function saveNotes(Notes) {
        localStorage.setItem('NotesData', JSON.stringify(Notes))
}
    
function getNotes() {
    try {
        const Notes = localStorage.getItem('NotesData');
        return Notes ? JSON.parse(Notes) : [];
    } catch (e) {
        console.error('Data kosong / rusak ' , e);
        return []
    }
}

