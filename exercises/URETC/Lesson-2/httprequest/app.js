var myUrl = "https://swapi.co/api/people/1";
var list = document.getElementById('list');
var data;

    // grab information from API
    fetch (myUrl)
        // when the information comes back, run this function with the response data.
        .then(function(response){
            // Turn response into Javascript Object Notation(json), and return it.
            return response.json();
        }).then(function(response){
            // Create the HTML element
            var item = document.createElement('p')
            // set the text in the element
            item.textContent = response.name;
            // put the element into the <div> on the HTML page.
            list.appendChild()
        })
