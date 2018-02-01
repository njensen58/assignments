var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");
var query = document.querySelector;
submit.addEventListener("click", formAlert);

function formAlert() {
    var firstName = form['first-name'].value;
    var lastName = form['last-name'].value;
    var age = form["age"].value;
    var gender = form["gender"].value;
    var location = form["travel-location"].value;
    var diet = [];
    if (form['vegan'].checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}
