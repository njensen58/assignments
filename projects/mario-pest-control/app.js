var totalSubmit = document.getElementById("totalSub");

totalSubmit.addEventListener("click", function(){
    var goombaCount = document.getElementById("goombaInput");
    var bombCount = document.getElementById("bombInput");
    var cheepCount = document.getElementById("cheepsInput");
    var totalCostBox = document.getElementById("totalCost");
    var goombaTotal = goombaCount.value * 5;
    var bombTotal = bombCount.value * 7;
    var cheepTotal = cheepCount.value * 11;
    var totCost = Number(goombaTotal) + Number(bombTotal) + Number(cheepTotal);
    totalCostBox.innerHTML = totCost;

    // goombaCount.value = '';
})
