var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];

// 1 - The first function will take this array, and print it to the console. Make sure to add spaces in-between each word so it looks nice on the console

function logMe(arr){
    console.log(arr.join(' '));
}
// logMe(lyrics);


// 2 - The second function will do the same thing, but print the song backwards (starting with the word "pretty": "pretty so I'm myself kiss Gotta", etc.).
function logMeBackwards(arr){
    console.log(arr.reverse().join(' '));
}
// logMeBackwards(lyrics);


// 3 - The third function will print every other word to the console, i.e. "this that cold Pfeiffer", etc.
function logEveryOther(arr){
    newArr = [];
    for(var i = 0; i < arr.length; i += 2){
         newArr.push(arr[i]);
    }
    console.log(newArr.join(' '));
}
// logEveryOther(lyrics);


// 4 - Create a fourth function that reverses every two words. So the end result would look like this: "hit This ice that Michelle cold" ...
function logReverseEveryOther(arr){
    newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i + 1]);
        newArr.push(arr[i]);
        i++;
    }
    console.log(newArr.join(' '));
}
// logReverseEveryOther(lyrics);
