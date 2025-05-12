const list = document.querySelector(".list")

// list.addEventListener('click', (e) => {

//     const item1 = e.target.closest('.item-1');
//     if (item1) console.log(item1.textContent)
//     const item2 = e.target.closest('.item-2');
//     if (item2) console.log(item2.textContent)
//     const item3 = e.target.closest('.item-3');
//     if (item3) console.log(item3.textContent)
//     const item4 = e.target.closest('.item-4');
//     if (item4) console.log(item4.textContent)
//     const item5 = e.target.closest('.item-5');
//     if (item5) console.log(item5.textContent)
//     const item6 = e.target.closest('.item-6');
//     if (item6) console.log(item6.textContent)
// })

// refactoring

list.addEventListener("click", (e) => {
    const item = e.target.closest("li");

    if (item && list.contains(item)) {
        console.log(item.textContent)
        
        const p = document.createElement("p")
        p.textContent = `Kamu memilih : ${item.textContent}`
        list.insertBefore(p, item.nextSibling   )
    }
})
