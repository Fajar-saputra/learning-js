export function createItem(text) {
    const listItem = document.createElement("li");
    listItem.classList.add("item");

    const content = document.createElement("p");
    content.classList.add("content");
    content.textContent = text;

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Remove!!";

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";

    buttonsDiv.appendChild(deleteBtn);
    buttonsDiv.appendChild(editBtn);

    listItem.appendChild(content);
    listItem.appendChild(buttonsDiv);

    return listItem;
}
