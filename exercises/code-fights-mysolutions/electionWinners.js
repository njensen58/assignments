// Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.
//
// The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.

/////// The first candidate got 2 votes. Even if all of the remaining 3 candidates vote for him, he will still have only 5 votes, i.e. the same number as the third candidate, so there will be no winner.
/////// The second candidate can win if all the remaining candidates vote for him (3 + 3 = 6 > 5).
/////// The third candidate can win even if none of the remaining candidates vote for him. For example, if each of the remaining voters cast their votes for each of his opponents, he will still be the winner (the votes array will thus be [3, 4, 5, 3]).
/////// The last candidate can't win no matter what (for the same reason as the first candidate).

// CLUE
//if k = 0 look for a unique person who wins if so return 1
// or look for someone who can win with all the remaining votes



const electionsWinners = (votes, k) => {
    const largest = Math.max(...votes)
    let count = 0
    if(k === 0){
        const first = votes.indexOf(largest)
        const last = votes.lastIndexOf(largest)
        if(first === last){
            return 1
        }
    }
    for(let i = 0; i < votes.length; i++){
        if(votes[i] + k > largest){
            count++
        }
    }
    return count
}


console.log(electionsWinners([2, 3, 5, 2], 3)) // 2
console.log(electionsWinners([1, 3, 3, 1, 1], 0)) // 0
console.log(electionsWinners([5, 1, 3, 4, 1], 0)) // 1
console.log(electionsWinners([1, 1, 1, 1], 1)) // 4
