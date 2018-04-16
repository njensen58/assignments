var data = [
    {
        name: 'john',
        color: 'blue',
        age: 25
    },
    {
        name: 'mary',
        color: 'red',
        age: 20
    },
    {
        name: 'ben',
        color: 'green',
        age: 32
    },
    {
        name: 'lisa',
        color: 'yellow',
        age: 40
    },
    {
        name: 'trevor',
        color: 'purple',
        age: 16
    },
    {
        name: 'alisha',
        color: 'blue',
        age: 51
    },
    {
        name: 'nate',
        color: 'purple',
        age: 50
    },
    {
        name: 'eric',
        color: 'green',
        age: 65
    },
    {
        name: 'nick',
        color: 'red',
        age: 12
    },
    {
        name: 'marcus',
        color: 'yellow',
        age: 103
    },
    {
        name: 'stephanie',
        color: 'blue',
        age: 11
    },
]

/* First grab the list and the inputs */










var list = document.getElementById('list');
var nameInput = document.getElementById('nameInput');
var greaterAgeInput = document.getElementById('greaterAgeInput');
var lessAgeInput = document.getElementById('lessAgeInput');
var colorBtn = document.getElementById('submitBtn');
var greaterAgeBtn = document.getElementById('greaterAgeBtn');
var lessAgeBtn = document.getElementById('lessAgeBtn');

colorBtn.addEventListener("click", filterFavColor);
greaterAgeBtn.addEventListener("click", filterGreaterAge);
lessAgeBtn.addEventListener("click", filterLessAge);


function filterFavColor(){
    var filteredNames = data.filter(function(person){
        return person.color === nameInput.value;
    })
    for(var i = 0; i < filteredNames.length; i++){
        var item = document.createElement('li');
        item.textContent =
            `Name: ${filteredNames[i].name}, Favorite Color: ${filteredNames[i].color}`;
        list.appendChild(item);
    }

}


function filterGreaterAge(){
    var filteredAges = data.filter(function(person){
        return person.age >= greaterAgeInput.value;
    })
    for(var i = 0; i < filteredAges.length; i++){
        var item = document.createElement('li');
        item.textContent =
            `Name: ${filteredAges[i].name}, Age: ${filteredAges[i].age}`;
        list.appendChild(item);
    }
}


function filterLessAge(){
    var filteredAges = data.filter(function(person){
        return person.age <= lessAgeInput.value;
    })
    for(var i = 0; i < filteredAges.length; i++){
        var item = document.createElement('li');
        item.textContent =
            `Name: ${filteredAges[i].name}, Age: ${filteredAges[i].age}`;
        list.appendChild(item);
    }
}


/**/
