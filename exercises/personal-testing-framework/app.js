function assert(actual, expected){
    if(actual !== expected){
        throw new Error("Asserted that " + actual + " would equal " + expected);
    } else {
        console.log("Test Passed. Actual: " + actual + ", expected: " + expected);
    }
}

function describe(message, testFunction){
    console.log("\n" + message);
    try {
        testFunction();
    } catch(err) {
        console.log("Test Failed: " + err.message);
    }
}


function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function increment(a){
    a++;
    return a;
}



describe("A Multiply Function", function(){
    assert(multiply(2, 4), 8);
    assert(multiply(3, 5), 15);
})

describe("A Division Function", function(){
    assert(divide(10, 2), 5);
    assert(divide(1, 0), Infinity);
    assert(divide(100, 50), 2);
})

describe("An Incrementing Function", function(){
    assert(increment(4), 5);
    assert(increment(10), 11);
    assert(increment(-20), -19);
})
