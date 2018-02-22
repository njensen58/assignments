// Given a string including parentheses, write a function that returns true if every opening parenthesis has a closing parenthesis.

const hasParenthesis = str => {
    const newArr = str.split('').filter(char => char === '(' || char === ')');
    let openCount = 0;
    let closeCount = 0;
    for(let i = 0; i < newArr.length; i++){
        if(newArr[i] === '('){
            openCount++;
        }else if(newArr[i] === ')'){
            closeCount++;
            if(closeCount > openCount) {
                return false;
            }
        }
    }
    return true;
}



console.log(hasParenthesis("()()")); // -> true
console.log(hasParenthesis("(()adf)")); // -> true
console.log(hasParenthesis("(dfasdf)))")); // -> false
console.log(hasParenthesis(")()(")); // -> false
console.log(hasParenthesis("())(")); // -> false
