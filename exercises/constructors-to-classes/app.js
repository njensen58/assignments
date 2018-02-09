 // 1) Convert the following constructor functions to use the ES6 class syntax.

//  function Clown(name, shoeSize, isScary) {
//     this.name = name;
//     this.shoeSize = shoeSize;
//     this.isScary = isScary;
// }


class Clown {
    constructor(name, shoeSize, isScary){
        this.name = name;
        this.shoeSize = shoeSize;
        this.isScary = isScary;
    }
}




// 2)

// function HangmanGame(word, guessesUntilLose) {
//     this.word = word;
//     this.guessesUntilLose = guessesUntilLose;
// }
//
// HangmanGame.prototype.wrongGuess = function() {
//     this.guessesUntilLose--;
// }

class HangmanGame {
    constructor(word, guessesUntilLose) {
        this.word = word;
        this. guessesUntilLose = guessesUntilLose;
    }
    wrongGuess() {
        this.guessesUntilLose--;
    }
}




// 3) For this one, you will write 2 classes, one for Media and one for Song. The Song class will extend the Media class. Don't worry if you don't recognize sone of the code below just yet. The purpose of this exercise is to correctly use the constructor() method and the super() function.

// Media constructor
// function Media(title, duration) {
//     this.title = title;
//     this.duration = duration;
//     this.isPlaying = false;
// }
//
// Media.prototype.play = function() {
//     this.isPlaying = true;
// }
//
// Media.prototype.stop = function() {
//     this.isPlaying = false;
// }
//
//
// // Song constructor
// function Song(title, duration, artist) {
//     Media.call(title, duration);
//     this.artist = artist;
// }
//
// Song.prototype = Object.create(Media.prototype);
// Song.prototype.constructor = Song;


class Media {
    constructor(title, duration) {
        this.title = title;
        this.duration = duration;
        this.isPlaying = false;
    }
    play() {
        this.isPlaying = true;
    }
    stop() {
        this.isPlaying = false;
    }
}


class Song extends Media {
    constructor(title, duration, artist) {
        super(title, duration);
        this.artist = artist;
    }
}


const me = new Song("Hello", 20, "Me");
console.log(me);
me.play();
console.log(me);
me.stop();
console.log(me);








//
