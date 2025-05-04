// menggabungkan 2 array

// const sd = ["iqbal", "tono", "cecep"];
// const smp = ["otong", "dedep", "elvin"];

// const orang1 = [...sd, ...smp]; // modern
// const orang2 = sd.concat(smp); // cara biasa

// console.log(orang1);
// console.log(orang2);

// const orang3 = [...sd, "dadang", "dimas", ...smp]; // modern
// console.log(orang3);

// meng-copy array
const smp = ["otong", "dedep", "elvin"];
const copy = [...smp]
copy[2] = "asep";
console.log(copy);
console.log(smp);
