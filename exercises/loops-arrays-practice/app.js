// 1
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var count = 0;

for (var i = 0; i < officeItems.length; i++) {
    if(officeItems[i] === "computer") {
        count++;
    }
}

console.log(count);


// 2
var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12
  },{
    name: "Madeline",
    age: 80
  },{
    name: "Cheryl",
    age: 22
  },{
    name: "Sam",
    age: 30
  },{
    name: "Suzy",
    age: 4
  }
]

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max.");
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max. Let them in!")
    }
}


// 3

var light = 'off';
var arr = [2, 2, 3];

for(var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
        // Do nothing since an even number would toggle to what light is currently set at.
    } else {
        // if it's an odd number
        if(light === 'off') {
            light = 'on';
        } else {
            light = 'off';
        }
    }
}
