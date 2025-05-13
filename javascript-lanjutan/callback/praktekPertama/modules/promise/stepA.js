export function stepA() {
    return new Promise((resolve) => {
        console.log("Step A diproses");
        setTimeout(() => {
            resolve("A");
        }, 1000);
    });
}
