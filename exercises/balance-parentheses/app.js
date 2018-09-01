// Given a string including parentheses, write a function that returns true if every opening parenthesis has a closing parenthesis.

const hasParenthesis = str => {
    let openCount = 0;
    let closeCount = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === '('){
            openCount++;
        } else if(str[i] === ')'){
            closeCount++;
            if(closeCount > openCount) {
                return false;
            }
        }
    }
    return openCount === closeCount
}



console.log(hasParenthesis("()()(")); // -> false
console.log(hasParenthesis("(()adf)")); // -> true
console.log(hasParenthesis("(dfasdf)))")); // -> false
console.log(hasParenthesis(")()(")); // -> false
console.log(hasParenthesis("())(")); // -> false
console.log(hasParenthesis(")()()(")); // -> false
console.log(hasParenthesis("!)]()[d()&$0(")); // -> false
console.log(hasParenthesis("([(380)!]{})(!!!bkd())")); // -> true
