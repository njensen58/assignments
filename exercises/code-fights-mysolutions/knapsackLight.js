// are the two weights greater than maxW;


const knapsackLight = (value1, weight1, value2, weight2, maxW) => {
    if((weight1 + weight2) > maxW) {
        if(weight1 <= maxW && value1 >= value2){
            return value1
        } else if(weight2 <= maxW && value2 >= value1){
            return value2
        }
    } else if(weight1 + weight2 <= maxW){
        return value1 + value2
    }
    if(weight1 <= maxW && weight2 > maxW){
        return value1;
    } else if(weight2 <= maxW && weight1 > maxW){
        return value2;
    } else {
        return 0;
    }
}



console.log(knapsackLight(10, 5, 6, 4, 8));  // 10
console.log(knapsackLight(10, 5, 6, 4, 9));  // 16
console.log(knapsackLight(5, 3, 7, 4, 6));  // 7
console.log(knapsackLight(10, 2, 11, 3, 1));  // 0
console.log(knapsackLight(15, 2, 20, 3, 2));  // 15
console.log(knapsackLight(2, 5, 3, 4, 5));  // 3
console.log(knapsackLight(3, 5, 3, 8, 10));  // 3
