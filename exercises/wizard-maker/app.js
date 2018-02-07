// "Make 5 wizard objects with constructor functions. Each wizard should have 3 attributes and 2 methods."

function WizardMaker(name, age, goodOrEvil){
    this.name = name;
    this.age = age;
    this.goodOrEvil = goodOrEvil;
    this.element = this.goodOrEvil ? 'Water' : 'Fire';
    this.catchPhrase = function(goodOrEvil){
        if(this.goodOrEvil === true){
            console.log("Join the Light!");
        } else {
            console.log("Join the Darkness!");
        }
    }
    this.gettingOlder = function(){
        this.age++;
    }
}

var wizards = [];

for(var i = 0; i < 5; i++){
    wizards.push(new WizardMaker())
}
