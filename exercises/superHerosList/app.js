var superHeroes = ['Superman', 'Batman', 'Wonder Woman', 'Penguin', 'Scarecrow', 'The Flash'];


var btn = document.getElementById("myBtn");

btn.addEventListener("click", function(e){
    e.preventDefault();
    for(var i = 0; i < superHeroes.length; i++){
        document.getElementById("list").innerHTML += "<li> " + superHeroes[i] + " </li>";
    }
})
