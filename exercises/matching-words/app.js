// split the array into separate words.
    // loop through the array, if array[i] appears more than once, save it to final array.

let secret = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.";

const secretFinder = arr => {
    let newArr = arr.split(' ');
    let extras = [];
    let doubled = [];
    let final = [];
    for(var i = 0; i < newArr.length; i++){
        if(extras.indexOf(newArr[i]) === -1){
            extras.push(newArr[i]);
        } else {
            doubled.push(newArr[i]);
        }
    }
    for(var j = 0; j < doubled.length; j++){
        if(final.indexOf(doubled[j]) === -1){
            final.push(doubled[j])
        }
    }
    return final;
}


console.log(secretFinder(secret));


const secretFinderAdv = arr => {
    const words = arr.replace(/\.,/g, "").split(" ");
    return words.reduce((dictionary, word) => {
        if(words.indexOf(word) !== words.lastIndexOf(word) && !dictionary.includes(word)) {
            return [...dictionary, word]
        } else {
            return dictionary;
        }
    }, []);
}

console.log(secretFinderAdv(secret));
