let userInput = document.getElementById('userInput');
let searchInput = document.getElementById('searchInput');
let todoList = document.getElementById('todoList');
let items = [];

if (localStorage.getItem('todoItems') != null){
    items = JSON.parse(localStorage.getItem('todoItems'))
    displayItem()
}

function addItem(){
    items.push(userInput.value)
    displayItem()
    localStorage.setItem('todoItems',JSON.stringify(items))
    userInput.value = '';
}

function displayItem(){
    let temp = '';
    for(let i = 0; i < items.length; i++){
        temp += `
                <div class="item mb-2 px-3 text-dark mx-auto w-25 bg-white d-flex justify-content-between align-items-center">
                    <p>${items[i]}</p>
                    <i class="fa-sharp fa-solid fa-trash" onClick="deleteItems(${i})"></i>
                </div>
        `
    }
    todoList.innerHTML = temp;
}

function deleteItems(index){
    items.splice(index, 1)
    displayItem()
    localStorage.setItem('todoItems',JSON.stringify(items))
}

function getSearchItem(searchValue){
    let temp = '';
    for(let i = 0; i < items.length; i++){
        if(items[i].toLowerCase().includes(searchValue.toLowerCase())){
            temp += `
                    <div class="home-item mb-2 px-3  text-dark mx-auto w-25 bg-white d-flex justify-content-between align-items-center">
                        <p id="x">${items[i]}</p>
                        <i class=" fa-sharp fa-solid fa-trash" onClick="deleteItems(${i})"></i>
                    </div>
            `
        }
        todoList.innerHTML = temp
    }
}

searchInput.addEventListener('input',function(e){
    getSearchItem(e.target.value)
})

document.addEventListener('keyup', function(e){
    if (e.key == 'Enter') {
        addItem()
    }
})




// Problem 1 





// function Boom(arr){

//     // Condition ?  True  : False 
//     arr.join('').includes('7') ? console.log("Boom!") : console.log("there is no 7 in the array");
//     console.log(arr.join());
// }

// Boom([8, 6, 33, 100])




// Problem 2

// function checkNum(arr) {
//     let newArr = []
//     for (let i = 0 ; i < arr.length ; i++){
//         for(let k = 0 ; k <arr[i].length ; k++){
//             if(arr[i][k] >= 0 && arr[i][k] <= 9){
//                 newArr.push(arr[i])
//                 console.log(newArr);
//                 break
//             }
//         }
//     }
// }
// checkNum(["1a", "a", "2b", "b"])



// Problem 3

// function sumNums(x){
//     // console.log(arguments[0]+arguments[1]);
//     // return function(y){
//     //     console.log(y);
//     // }
//     if (arguments.length == 2){
//         console.log(arguments[0]+arguments[1]);
//     } else {
//         return function(y){
//             console.log(x+y);
//         }
//     }
// }
// sumNums(2,3)
// sumNums(2)(10)