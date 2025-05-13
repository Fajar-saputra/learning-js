function step1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 1 selesai");
            resolve("data dari step 1");
        }, 4000);
    });
}

function step2(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 2 selesai, terima:", data);
            resolve("data dari step 2");
        }, 7000);
    });
}

step1()
    .then(result1 => step2(result1))
    .then(result2 => console.log("Final result:", result2))
    .catch(err => console.error("Terjadi error:", err));
