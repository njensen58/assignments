document.travelForm.addEventListener("submit", function(e){
    e.preventDefault();
    var firstName = document.travelForm.firstName.value;
    var lastName = document.travelForm.lastName.value;
    var age = document.travelForm.age.value;
    var gender = document.travelForm.gender.value;
    var location = document.travelForm.locations.value;
    var diets = document.travelForm.diets;
    var dietSelections = '';

    for(var i = 0; i < diets.length; i++){
        if(diets[i].checked){
            dietSelections += diets[i].value + ', ';
        }
    }
    
    alert('First Name: ' + firstName + '\nLast Name: ' + lastName + '\nAge: ' + age + '\nGender: ' + gender + '\nLocation: ' + location + '\nDiet Restrictions: ' + dietSelections);
})
