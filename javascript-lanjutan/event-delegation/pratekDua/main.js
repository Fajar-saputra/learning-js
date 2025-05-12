import { list, input, addBtn, container } from './modules/dom.js';
import { createItem } from './modules/createItem.js';

let itemBeingEdited = null;

container.addEventListener("click", (e) => {
    const target = e.target;

    // Tambah / Update
    if (target.closest(".add-btn")) {
        const value = input.value.trim();
        if (!value) return alert("Enter your item");

        if (addBtn.textContent === "Tambah") {
            const item = createItem(value);
            list.appendChild(item);
        } else if (addBtn.textContent === "Update") {
            itemBeingEdited.querySelector(".content").textContent = value;
            itemBeingEdited = null;
            addBtn.textContent = "Tambah";
        }

        input.value = "";
        input.focus();
        return;
    }

    // Delete
    if (target.closest(".delete-btn")) {
        const item = target.closest(".item");
        if (item) list.removeChild(item);
        return;
    }

    // Edit
    if (target.closest(".edit-btn")) {
        const item = target.closest(".item");
        const content = item.querySelector(".content").textContent;

        input.value = content;
        input.focus();
        itemBeingEdited = item;
        addBtn.textContent = "Update";
        return;
    }

    // Alert konten
    if (target.closest("p")) {
        alert(`Kamu telah klik: ${target.textContent}`);
    }
});
