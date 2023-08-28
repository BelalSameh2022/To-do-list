let userInput = document.getElementById('userInput');
let searchInput = document.getElementById('searchInput');
let todoList = document.getElementById('todoList');
let items = [];

if (localStorage.getItem("todoItems") != null) {
    items = JSON.parse(localStorage.getItem("todoItems"));
    displayItems();
}

function addItem() {
    items.push(userInput.value);
    displayItems();
    localStorage.setItem("todoItems", JSON.stringify(items));
    userInput.value = '';
}

function displayItems() {
    temp = "";
    for (let i = 0; i < items.length; i++) {
        temp += `<div class="item mb-2 px-3 text-dark mx-auto w-25 bg-white d-flex justify-content-between align-items-center">
                    <p>${items[i]}</p>
                    <i class="fa-sharp fa-solid fa-trash" onClick="deleteItem(${i})"></i>
                </div>`
    }
    todoList.innerHTML = temp;
}


function deleteItem(index) {
    items.splice(index, 1);
    displayItems();
    localStorage.setItem("todoItems", JSON.stringify(items));
}

function getSearchItem(searchValue) {
    temp = "";
    for (let i = 0; i < items.length; i++) {
        if (items[i].toLowerCase().includes(searchValue.toLowerCase())) {
            temp += `
                    <div class="item mb-2 px-3 text-dark mx-auto w-25 bg-white d-flex justify-content-between align-items-center">
                        <p>${items[i].toLowerCase().replace(searchValue.toLowerCase(), `<span class="text-danger">${searchValue}</span>`)}</p>
                        <i class="fa-sharp fa-solid fa-trash" onclick="deleteItem(${i})"></i>
                    </div>
            `
        }
    }
    todoList.innerHTML = temp;
}


searchInput.addEventListener("input", function (e) {
    getSearchItem(e.target.value);
})

document.addEventListener("keyup", function (e) {
    if (e.key == "Enter") {
        if (userInput.value != "") {
            addItem();
        }
    }
})