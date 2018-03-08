// Write a function that takes a query object and an HTTP endpoint and then returns a URL with a query string.

// PT 1

const stringifyUrl = (endpoint, query) => {
    let queryStr = '?';
    for(let key in query){
        queryStr += key + '=' + query[key] + '&';
    }
    return endpoint + queryStr.slice(0, -1)
}

console.log(stringifyUrl("http://localhost:8080/monkeys", {color: "black", species: "howler"})); //returns "http://localhost:8080/monkeys?color=black&species=howler"
console.log(stringifyUrl("http://localhost:8080/monkeys", {color: "black", species: "howler", size: "huge"}));



// P2

const deStringifyUrl = url => {
    const queryIndex = url.indexOf("?");
    const queryString = url.slice(queryIndex + 1)
    const queryArr = queryString.split('&');
    let query = {}
    for(let property of queryArr){
        let keyValueArray = property.split('=');
        query[keyValueArray[0]] = keyValueArray[1];
    }
    return query;
}

console.log(deStringifyUrl("http://localhost:8080/monkeys?color=black&species=howler")); // {color: "black", species: "howler"}
console.log(deStringifyUrl("http://localhost:8080/monkeys?color=black&species=howler&size=huge"));





//
