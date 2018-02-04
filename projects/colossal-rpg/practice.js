var ask = require('readline-sync');



function frame1(){
    setTimeout(function(){
        console.log("\n\n\n\n\n\n\n\n\n\n||||\\|||\\     /|||//||||");
        console.log("|||\\|||\\     /|||//|||||");
        console.log("||\\|||\\     /|||//|||||/");
        console.log("||\\|||\\     /|||//|||||/");
        console.log("||\\|||\\     /|||//|||||/");
        console.log("|||\\|||\\     /|||//|||||");
        console.log("||||\\|||\\  o  /|||//||||");
    }, 500);
}

function frame2(){
    setTimeout(function(){
        console.log("\n\n\n\n\n\n\n\n\n\n||||\\|||\\     /|||//||||");
        console.log("|||\\|||\\     /|||//|||||");
        console.log("||\\|||\\     /|||//|||||/");
        console.log("||\\|||\\     /|||//|||||/");
        console.log("||\\|||\\     /|||//|||||/");
        console.log("|||\\|||\\  o  /|||//|||||");
        console.log("||||\\|||\\     /|||//||||");
    }, 1000);
}

function frame3(){
    setTimeout(function(){
        console.log("\n\n\n\n\n\n\n\n\n\n||||\\|||\\     /|||//||||");
        console.log("|||\\|||\\     /|||//|||||");
        console.log("||\\|||\\     /|||//|||||/");
        console.log("||\\|||\\     /|||//|||||/");
        console.log("||\\|||\\  o  /|||//|||||/");
        console.log("|||\\|||\\     /|||//|||||");
        console.log("||||\\|||\\     /|||//||||");
    }, 1500);
}

function frame4(){
    setTimeout(function(){
        console.log("\n\n\n\n\n\n\n\n\n\n||||\\|||\\     /|||//||||");
        console.log("|||\\|||\\     /|||//|||||");
        console.log("||\\|||\\     /|||//|||||/");
        console.log("||\\|||\\  o  /|||//|||||/");
        console.log("||\\|||\\     /|||//|||||/");
        console.log("|||\\|||\\     /|||//|||||");
        console.log("||||\\|||\\     /|||//||||");
    }, 2000);
}

function frame5 (){
    setTimeout(function(){
        console.log("\n\n\n\n\n\n\n\n\n\n||||\\|||\\     /|||//||||");
        console.log("|||\\|||\\     /|||//|||||");
        console.log("||\\|||\\  o  /|||//|||||/");
        console.log("||\\|||\\     /|||//|||||/");
        console.log("||\\|||\\     /|||//|||||/");
        console.log("|||\\|||\\     /|||//|||||");
        console.log("||||\\|||\\     /|||//||||");
    }, 3000);
}

function frame6(){
    setTimeout(function(){
        console.log("\n\n\n\n\n\n\n\n\n\n||||\\|||\\     /|||//||||");
        console.log("|||\\|||\\  o  /|||//|||||");
        console.log("||\\|||\\     /|||//|||||/");
        console.log("||\\|||\\     /|||//|||||/");
        console.log("||\\|||\\     /|||//|||||/");
        console.log("|||\\|||\\     /|||//|||||");
        console.log("||||\\|||\\     /|||//||||");
    }, 3500);
}

function frame7(){
    setTimeout(function(){
        console.log("\n\n\n\n\n\n\n\n\n\n||||\\|||\\  o  /|||//||||");
        console.log("|||\\|||\\     /|||//|||||");
        console.log("||\\|||\\     /|||//|||||/");
        console.log("||\\|||\\     /|||//|||||/");
        console.log("||\\|||\\     /|||//|||||/");
        console.log("|||\\|||\\     /|||//|||||");
        console.log("||||\\|||\\     /|||//||||");
    }, 4000);
}


var walkingMov = function(){
    frame1();
    frame2();
    frame3();
    frame4();
    frame5();
    frame6();
    frame7();
};

walkingMov();
