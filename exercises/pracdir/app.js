var myBut = document.getElementById("but");
myBut.addEventListener("click", myFunction());


function myFunction(){
    var h1 = document.createElement("h1");
    var userVal = myBut.value;
    var txtNode = document.createTextNode(userVal);
    input.appendChild(txtNode);
    body.appendChild(h1);
    console.log("hello");
}