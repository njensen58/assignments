let newTodo;
// axios.get('URL').then(response => console.log(response.data));

const todoTitle = document.getElementById('userInput');
const todoPrice = document.getElementById('userPrice');
const todoDescribe = document.getElementById('userDescription')
const btn = document.getElementById('btn');


axios.get('https://api.vschool.io/nateJ/todo/').then(response => {
    for(let i = 0; i < response.data.length; i++){
    document.getElementById('list').innerHTML += `<li>${response.data[i].title}<input type="checkbox" class="checker"></li>`;
    }
})


btn.addEventListener("click", function(e){
    e.preventDefault();
    newTodo = {title:` ${todoTitle.value}`,price:` ${todoPrice.value}`,description:` ${todoDescribe.value}`};
    console.log(newTodo);
    axios.post('https://api.vschool.io/nateJ/todo/', newTodo);
    document.getElementById('list').innerHTML += `<li>${newTodo.title}</li>`;
})


const boxForChecking = document.getElementsByTagName('input');

boxForChecking.addEventListener("change", function(){
    console.log("Herro");
})



// If a todo item is complete, it should have a strikethrough line on it
// A user should be able to attach an imgUrl to the item (and if there is an imgUrl, the image should be displayed)
