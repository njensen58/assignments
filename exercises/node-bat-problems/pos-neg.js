// Given 2 int values, return true if one is negative and one is positive.
// Except if the parameter 'negative' is true, then return true only if
// both are negative.

var posNeg = function(a, b, negative) {
    // if neg is true
    if(negative) {
        // if a is neg and b is neg
        if(a < 0 && b < 0) {
            // return True
            return true;
        // else return false
    } else {
            return false;
        }
    }
    // if a is pos and b is neg OR if a is neg and b is pos
    if(a > 0 && b < 0 || a < 0 && b > 0) {
        // return True
        return true;
    } else {
    // else return false
        return false;
    }
}


// SUPER SIMPLIFIED ANSWER

var posNeg = function(a, b, negative) {
    return negative ? a < 0 && b < 0 : a > 0 && b < 0 || a < 0 && b > 0;
}
