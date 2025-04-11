function outer() {
    function inner() {
        console.log("Tess inner")
    }

    inner();
    inner();
}

outer()
// inner()