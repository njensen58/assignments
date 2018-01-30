// ADDITION //
var addInput1 = document.getElementById('a1');
var addInput2 = document.getElementById('a2');
var addSubmit = document.getElementById('addSub');
var addResult = document.getElementById('addRes');

addSubmit.addEventListener("click", function(){
    var num1 = addInput1.value;
    var num2 = addInput2.value;
    addResult.innerHTML = Number(num1) + Number(num2);     
})


// SUBTRACTION //
var subInput1 = document.getElementById('s1');
var subInput2 = document.getElementById('s2') ;
var subSubmit = document.getElementById('subSub');
var subResult = document.getElementById('subRes');

subSubmit.addEventListener("click", function(){
    var num1 = subInput1.value;
    var num2 = subInput2.value;
    subResult.innerHTML = Number(num1) - Number(num2);
})


// MULTIPLICATION //
var multInput1 = document.getElementById('m1');
var multInput2 = document.getElementById('m2');
var multSubmit = document.getElementById('multSub');
var multResult = document.getElementById('multRes');

multSubmit.addEventListener("click", function(){
    var num1 = multInput1.value;
    var num2 = multInput2.value;
    multResult.innerHTML = Number(num1) * Number(num2);
})