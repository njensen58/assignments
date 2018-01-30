var box = document.getElementById('box1');

box.addEventListener("mouseover", function(){
    box.style.backgroundColor = 'dodgerblue';
})

box.addEventListener("mouseout", function(){
    box.style.backgroundColor = '#ddd';
})

box.addEventListener("mousedown", function(){
    box.style.backgroundColor = 'red';
})

box.addEventListener("mouseup", function(){
    box.style.backgroundColor = 'yellow';
})

box.addEventListener("dblclick", function(){
    box.style.backgroundColor = 'green';
})

window.addEventListener("wheel", function(){
    box.style.backgroundColor = 'orange';
})

window.addEventListener("keydown", function(e){
    if(e.keyCode === 66){
        box.style.backgroundColor = 'blue';
    }
});

window.addEventListener("keydown", function(e){
    if(e.keyCode === 82){
        box.style.backgroundColor = 'red';
    }
});

window.addEventListener("keydown", function(e){
    if(e.keyCode === 89){
        box.style.backgroundColor = 'yellow';
    }
});

document.addEventListener("keydown", function(e){
    if(e.keyCode === 71){
        box.style.backgroundColor = 'green';
    }
})

document.addEventListener("keydown", function(e){
    if(e.keyCode === 79){
        box.style.backgroundColor = 'orange';
    }
})


