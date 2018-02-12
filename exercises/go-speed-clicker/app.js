const btn = document.getElementById('button');
const screen = document.getElementById('click');
document.getElementById('button').value = localStorage.count || "";
let count = 0;


btn.addEventListener("click", function(){
    count++;
    screen.textContent = count;
})
