var dictionary = {};

function addEntry(word, definition){
    var word = word.toLowerCase();
    var isDefined = dictionary[word];
    if (!isDefined){
        dictionary[word] = definition;
    } else {
        return word + ": " + dictionary[word];
    }
}

addEntry("Hello", "A greeting");
addEntry("Hello", "A greeting");
addEntry("Aloha", "A greeting");
addEntry("Goodbye", "A farewell")
console.log(dictionary);
