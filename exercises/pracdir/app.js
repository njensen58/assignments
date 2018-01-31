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