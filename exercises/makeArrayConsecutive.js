// Ratiorg got statues of different sizes as a present from
// CodeMaster for his birthday, each statue having an non-negative
// integer size. Since he likes to make things perfect, he wants to
// arrange them from smallest to largest so that each statue will be
// bigger than the previous one exactly by 1. He may need some additional
// statues to be able to accomplish that. Help him figure out the
// minimum number of additional statues needed.


function makeArrayConsecutive2(statues) {
    let count = 0;
    const sorted = statues.sort((a,b) => a - b)
    for(let i = 0; i < sorted.length - 1; i++){
        count += (sorted[i + 1] - sorted[i] - 1);
    }
    return count;
}


console.log(makeArrayConsecutive2([2, 3, 6, 8])) // 3
// console.log(makeArrayConsecutive2([0, 3])) // 2
// console.log(makeArrayConsecutive2([5, 4, 6])) // 0
// console.log(makeArrayConsecutive2([6, 3])) // 2
