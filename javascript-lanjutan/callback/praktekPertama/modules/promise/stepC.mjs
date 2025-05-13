export function stepC(resultB) {
    return new Promise((resolve, reject) => {
        console.log("Step C diproses");

        setTimeout(() => {
            if (!resultB) {
                reject("Error: Data dari step B tidak ada");
            } else {
                resolve(`${resultB} -> C`);
            }
        }, 2000);
    });
}

