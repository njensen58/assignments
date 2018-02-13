let newTodo;
// axios.get('URL').then(response => console.log(response.data));

const todoTitle = document.getElementById('userInput');
const todoPrice = document.getElementById('userPrice');
const todoDescribe = document.getElementById('userDescription');
const todoImg = document.getElementById('userImage');
const btn = document.getElementById('btn');
let imgTag = '';




axios.get('https://api.vschool.io/nateJ/todo/').then(response => {
    for(let i = 0; i < response.data.length; i++){
    imgTag = response.data[i].imgUrl ? `<img src="${response.data[i].imgUrl}" class="imgEdit"/>` : "";

    document.getElementById('list').innerHTML += `<input type="checkbox" class="checker">
    <li class="strike">${imgTag}${response.data[i].title}<span class="deleteSpan"><i class="ion-android-delete delete"></span></li>`;
    }
})


btn.addEventListener("click", function(e){
    e.preventDefault();
    newTodo = {title:` ${todoTitle.value}`,
               price:` ${todoPrice.value}`,
               description:` ${todoDescribe.value}`,
               imgUrl:`${todoImg.value}`
                };
    imgTag = newTodo.imgUrl ? `<img src="${newTodo.imgUrl}" class="imgEdit"/>` : "";
    if(newTodo.title === " "){
        alert("Title must not be empty")
    } else {
        axios.post('https://api.vschool.io/nateJ/todo/', newTodo);
        document.getElementById('list').innerHTML += `<input type="checkbox" class="checker"><li class="strike">${imgTag}${newTodo.title}<span class="deleteSpan"><i class="ion-android-delete delete"></span></li>`;
    }

})


const icons = document.getElementsByTagName('i');

// for(var i = 0; i < icons.length; i++){
//     icons[i].addEventListner("click",function(){
//
//     })
// }
// icons.addEventListener("click", function(){
//
// })








// var logo = document.getElementById('rm');
// logo.setAttribute('src', 'img/rm2.png');









// A user should be able to attach an imgUrl to the item (and if there is an imgUrl, the image should be displayed)
// imgUrl: string;
