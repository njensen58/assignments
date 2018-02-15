let newTodo;
// axios.get('URL').then(response => console.log(response.data));

const todoTitle = document.getElementById('userInput');
const todoPrice = document.getElementById('userPrice');
const todoDescribe = document.getElementById('userDescription');
const todoImg = document.getElementById('userImage');
const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');
const idDel = document.getElementById('del');
let imgTag = '';
let id = '';



// PLACE THE GET REQUEST TO RENDER THE CURRENT LIST ON PAGE LOAD
axios.get('https://api.vschool.io/nateJ/todo/').then(response => {
    for(let i = 0; i < response.data.length; i++){
    imgTag = response.data[i].imgUrl ? `<img src="${response.data[i].imgUrl}" class="imgEdit"/>` : "";

    document.getElementById('list').innerHTML += `<input type="checkbox" class="checker">
    <li class="strike">${imgTag}${response.data[i].title}<br/><span class="idSpan">ID: ${response.data[i]._id}</span></li>`;
    }
})

// SUBMIT FORM LISTENER & POST REQUEST/RENDER NEW TOdo ITEM
document.getElementById('form').addEventListener("submit", function(e){
    e.preventDefault();
    newTodo = {title:` ${todoTitle.value}`,
               price:` ${todoPrice.value}`,
               description:` ${todoDescribe.value}`,
               imgUrl:`${todoImg.value}`
                };
    imgTag = newTodo.imgUrl ? `<img src="${newTodo.imgUrl}" class="imgEdit"/>` : "";
        axios.post('https://api.vschool.io/nateJ/todo/', newTodo);
        document.getElementById('list').innerHTML += `<input type="checkbox" class="checker"><li class="strike">${imgTag}${newTodo.title}</li>`;
    })


// DELETE LISTENER TO REMOVE TOdo
btn2.addEventListener("click", function() {
    if(idDel.value === ''){
        alert("Please copy the ID from the Todo you want to delete");
    } else {
    axios.delete(`https://api.vschool.io/nateJ/todo/${idDel.value}`).then(alert("Todo successfully deleted"));
    }
})
