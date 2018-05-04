var dictionary = {};

function addWord(word, define){
    if(!word.match(/([^aiou])s/, '')){
        dictionary[word] = define;
        return dictionary[word]
    } else {
        return "plurals are not allowed"
    }
}

function lookItUp(word){
    return dictionary[word]
}

addWord('happy', 'a feeling of being content');
addWord('camel', 'a black and white animal');
addWord('camels', 'a black and white animal');



module.exports = {
    addWord,
    lookItUp
};
