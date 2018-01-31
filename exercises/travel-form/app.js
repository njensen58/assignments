document.flightPlan.addEventListener("submit", function(e){
    e.preventDefault();
    var firstName = document.flightPlan.firstName.value;
    var lastName = document.flightPlan.lastName.value;
    var age = document.flightPlan.age.value;
    var gender = document.flightPlan.gender.value;
    var destination = document.flightPlan.destinations.value;
    var amenitiesArr = document.flightPlan.amenities;
    var amenities = [];
    for(var i = 0; i < amenitiesArr.length; i++){
        if(amenitiesArr[i].checked){
            amenities.push(amenitiesArr[i].value);
        }
    }
    alert('First name: ' + firstName + '\nLast name: ' + lastName + '\nAge: ' + age + '\nGender: ' + gender + '\nDestination: ' + destination + '\nAmenities: ' + amenities.join(', '));
})



// document.travelForm.addEventListener("submit", function(e){
//     e.preventDefault();
//     var firstName = document.travelForm.firstName.value;
//     var lastName = document.travelForm.lastName.value;
//     var age = document.travelForm.age.value;
//     var gender = document.travelForm.gender.value;
//     var location = document.travelForm.locations.value;
//     var diets = document.travelForm.diets;
//     var dietSelections = '';
//
//     for(var i = 0; i < diets.length; i++){
//         if(diets[i].checked){
//             dietSelections += diets[i].value + ', ';
//         }
//     }
//
//     alert('First Name: ' + firstName + '\nLast Name: ' + lastName + '\nAge: ' + age + '\nGender: ' + gender + '\nLocation: ' + location + '\nDiet Restrictions: ' + dietSelections);
// })
