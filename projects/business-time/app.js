document.socialForm.addEventListener("submit", function(e){
    e.preventDefault();
    var firstName = document.socialForm.firstName.value;
    var lastName = document.socialForm.firstName.value;
    var submittedDiv = document.getElementById('submitted');
    document.socialForm.style.display = "none";
    submittedDiv.textContent = "Submitted," + "\n Thanks " + firstName + "!";
})
