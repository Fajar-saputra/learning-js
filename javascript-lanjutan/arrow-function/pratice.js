const box = document.querySelector('.box')

box.addEventListener("click", function() {
    box.classList.toggle('size')
    
    setTimeout(() => {
        box.classList.toggle('caption')
    }, 600);
})
