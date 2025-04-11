/* Nullish Coalescing Operator */

/* 

Nullist value adalah null dan undefined
Nullist coalescing operator (??) adalah operator mirip dengan ternary operator, yang membedakan adalah pada kondisi, jika bernilai null atau undefined, baru value default nya diambil

*/

// tanpa Nullish Coalescing Operator
let parameter;

let data_1 = parameter;

if (data_1 == undefined || data_1 == null) {
    data_1 = "nilai default";
}

console.log(data_1);

// Nullish Coalescing Operator
let data_2 = parameter ?? "nilai default";
console.log(data_2)
