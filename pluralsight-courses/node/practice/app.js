let count = 1;
let forward = true;


const print = () => {
    if(count % 2 === 0){
        console.log('#'.repeat(count) + '   ' + '#'.repeat(count))
    } else {
        console.log('$'.repeat(count) + '   ' + '$'.repeat(count))
    }

    if(count < 20 && forward){
        count++
    } else if(count > 0){
        count--
        forward = false
    } else if(count === 0){
        forward = true;
    }
}

let ID = setInterval(print, 100);
