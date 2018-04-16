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


var nameInput = document.getElementById('nameInput');
var submitBtn = document.getElementById('submitBtn');

var greaterAgeInput = document.getElementById('greaterAgeInput');
var greaterAgeBtn = document.getElementById('greaterAgeBtn');

var list = document.getElementById('list');

submitBtn.addEventListener('click', filterFavColor);
greaterAgeBtn.addEventListener('click', filteredGreaterAge);


function filterFavColor(){
    var filteredPeople = data.filter(function(person){
        return person.color === nameInput.value
    })

    for(var i = 0; i < filteredPeople.length; i++){
        let item = document.createElement('li');
        item.textContent = filteredPeople[i].name
        list.appendChild(item);
    }
}




function filteredGreaterAge(){

}











/**/
