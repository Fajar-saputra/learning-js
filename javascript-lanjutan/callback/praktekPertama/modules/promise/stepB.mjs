export function stepB(resultA) {
    return new Promise((resolve) => {
        console.log("Step B diproses");
        setTimeout(() => {
            resolve(`${resultA} -> B`);
        }, 3000);
    });
}
