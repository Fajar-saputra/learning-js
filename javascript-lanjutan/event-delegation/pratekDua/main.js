const list = document.querySelector(".list");
const input = document.querySelector(".input");
const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
    const addBtn = e.target.closest(".add-btn");
    if (addBtn) {
        addItem();
        return;
    }

    const content = e.target.closest("p");
    if (content && list.contains(content)) {
        alert(`Kamu telah klik : ${content.textContent}`);
        return;
    }

    const deleteBtn = e.target.closest(".delete-btn");
    if (deleteBtn) {
        const item = deleteBtn.closest(".item");
        if (item) {
            list.removeChild(item);
        }
    }
});

function addItem() {
    const valueInput = input.value;
    if (valueInput.trim() !== "") {

        const item = createEl(valueInput.trim())

        list.appendChild(item);
        input.value = "";
        input.focus();
    } else {
        alert("Enter your item");
    }
}

function createEl(inputValue) {
  const listItem = document.createElement("li");
  listItem.classList.add("item");

  const contentParagraph = document.createElement("p");
  contentParagraph.classList.add("content");
  contentParagraph.textContent = inputValue;

  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("buttons");

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.textContent = "Remove!!";

  const editButton = document.createElement("button");
  editButton.classList.add("edit-btn");
  editButton.textContent = "Edit";

  buttonsDiv.appendChild(deleteButton);
  buttonsDiv.appendChild(editButton);

  listItem.appendChild(contentParagraph);
  listItem.appendChild(buttonsDiv);

  return listItem;
}
