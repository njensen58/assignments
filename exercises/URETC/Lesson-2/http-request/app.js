var data;
var names;
var people = document.getElementById('people');
var userInput = document.getElementById('user-input');
var inputValue = userInput.value;

 fetch ("https://swapi.co/api/people")
        .then(function(response){
        return  response.json();
   }).then(function(response ) {
        data = response.results;
        names = data.map(function(person){
                return person.name;
    })
        // names.forEach(function(name){
        //         let item = document.createElement('p');
        //         item.textContent = name;
        //         people.appendChild(item)
        // })
   })

   userInput.addEventListener("input", filterNames);

   function filterNames(){
     var current = names.filter(function(name){
            return name.toLowerCase().slice(0, userInput.value.length) === userInput.value.toLowerCase();
      })
      current.forEach(function(name){
            let item = document.createElement('p');
            item.textContent = name;
            people.innerHtml = `<p>${item}</p>`;
      })
   }
