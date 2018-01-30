//var button1 = document.getElementById("button1");
//button1.addEventListener("click", function(){
//    animateMe();
//})
function animateMeAgain(){
    var ball = document.getElementById('box2');
    var pos = 0;
    var neg = 378;
    var id = setInterval(frame, 5);
    
    function frame(){
        if(pos === 378){
            clearInterval(id);
        } else {
            pos++;
            ball.style.top = neg + 'px';
            ball.style.left = neg + 'px';
        }
    }
}

function animateMe(){
    var ball = document.getElementById('box2');
    var pos = 0;
    var id = setInterval(frame, 5);
    
    function frame(){
        if(pos === 378){
            animateMeAgain();
        } else {
            pos++;
            ball.style.top = pos + 'px';
            ball.style.left = pos + 'px';
        }
    }
}

























//function animateMe(){ 
//    var ball = document.getElementById('box2');
//    var pos = 0;
//    var neg = 0;
//    var vid = setInterval(frame, 5);
//    
//    function frame(){
//        if(pos === 378){
//            pos = 0;
//            if(pos === 378) {
//                clearInterval(vid);
//            } else {
//                pos++;
//                neg--;
//                ball.style.right = pos + 'px';
////                ball.style.right = neg + 'px';         
//            }
//        } else {
//            pos++;
//            ball.style.top = pos + 'px';
//            ball.style.left = pos + 'px';
//        }
//    }
//}