let answerUser = prompt("Belajar percabangan swtich\nBerapa nilai mu (A,B,C) : ");

switch (answerUser) {
    case "A":
    case "a":
        alert("Nilai mu sangat bagus");
        break;
    case "B":
    case "b":
        alert("Nilai mu bagus");
        break;
    case "C":
    case "c":
        alert("Nilai mu cukup");
        break;

    default:
        alert("Masukan A or B or C");
        break;
}
