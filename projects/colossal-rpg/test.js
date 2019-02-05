const sleep = require('sleep')

function frame1(){
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t||||\\|||\\     /|||//||||");
    console.log("\t\t\t|||\\|||\\     /|||//|||||");
    console.log("\t\t\t||\\|||\\     /|||//|||||/");
    console.log("\t\t\t||\\|||\\     /|||//|||||/");
    console.log("\t\t\t||\\|||\\     /|||//|||||/");
    console.log("\t\t\t|||\\|||\\     /|||//|||||");
    console.log("\t\t\t||||\\|||\\  o  /|||//||||");
}

function frame2(){
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t||||\\|||\\     /|||//||||");
    console.log("\t\t\t|||\\|||\\     /|||//|||||");
    console.log("\t\t\t||\\|||\\     /|||//|||||/");
    console.log("\t\t\t||\\|||\\     /|||//|||||/");
    console.log("\t\t\t||\\|||\\     /|||//|||||/");
    console.log("\t\t\t|||\\|||\\  o  /|||//|||||");
    console.log("\t\t\t||||\\|||\\     /|||//||||");
}

function frame3(){
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t||||\\|||\\     /|||//||||");
    console.log("\t\t\t|||\\|||\\     /|||//|||||");
    console.log("\t\t\t||\\|||\\     /|||//|||||/");
    console.log("\t\t\t||\\|||\\     /|||//|||||/");
    console.log("\t\t\t||\\|||\\  o  /|||//|||||/");
    console.log("\t\t\t|||\\|||\\     /|||//|||||");
    console.log("\t\t\t||||\\|||\\     /|||//||||");
}

function frame4(){
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t||||\\|||\\     /|||//||||");
    console.log("\t\t\t|||\\|||\\     /|||//|||||");
    console.log("\t\t\t||\\|||\\     /|||//|||||/");
    console.log("\t\t\t||\\|||\\  o  /|||//|||||/");
    console.log("\t\t\t||\\|||\\     /|||//|||||/");
    console.log("\t\t\t|||\\|||\\     /|||//|||||");
    console.log("\t\t\t||||\\|||\\     /|||//||||");
}

function frame5 (){
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t||||\\|||\\     /|||//||||");
    console.log("\t\t\t|||\\|||\\     /|||//|||||");
    console.log("\t\t\t||\\|||\\  o  /|||//|||||/");
    console.log("\t\t\t||\\|||\\     /|||//|||||/");
    console.log("\t\t\t||\\|||\\     /|||//|||||/");
    console.log("\t\t\t|||\\|||\\     /|||//|||||");
    console.log("\t\t\t||||\\|||\\     /|||//||||");
}

function frame6(){
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t||||\\|||\\     /|||//||||");
    console.log("\t\t\t|||\\|||\\  o  /|||//|||||");
    console.log("\t\t\t||\\|||\\     /|||//|||||/");
    console.log("\t\t\t||\\|||\\     /|||//|||||/");
    console.log("\t\t\t||\\|||\\     /|||//|||||/");
    console.log("\t\t\t|||\\|||\\     /|||//|||||");
    console.log("\t\t\t||||\\|||\\     /|||//||||");
}

function frame7(){
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t||||\\|||\\  o  /|||//||||");
    console.log("\t\t\t|||\\|||\\     /|||//|||||");
    console.log("\t\t\t||\\|||\\     /|||//|||||/");
    console.log("\t\t\t||\\|||\\     /|||//|||||/");
    console.log("\t\t\t||\\|||\\     /|||//|||||/");
    console.log("\t\t\t|||\\|||\\     /|||//|||||");
    console.log("\t\t\t||||\\|||\\     /|||//||||");
}

function walkingMov(){
frame1();
    sleep.msleep(250);
frame2();
    sleep.msleep(250);
frame3();
    sleep.msleep(250);
frame4();
    sleep.msleep(250);
frame5();
    sleep.msleep(250);
frame6();
    sleep.msleep(250);
frame7();
};

walkingMov()