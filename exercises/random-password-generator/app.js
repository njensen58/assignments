

function generateRandomPassword(n){
    var characterOptions = ['A','a','B','b','C','c','D','d','E','e','F','f','G','g','H','h','I','i','J','j','K','k','L','l','M','m','N','n','O','o','P','p','Q','q','R','r','S','s','T','t','U','u','V','v','W','w','X','x','Y','y','Z','z','!','@','#','$','%','&','*','=','+','?'];
    var randomPassword = '';
    for(var i = 0; i <= n; i++){
        var randomNumber = Math.floor(Math.random() * 20);
        var randomCharacter = characterOptions[Math.floor(Math.random() * characterOptions.length)];
        randomPassword += randomCharacter + randomNumber;
    }
    return randomPassword.slice(0, n);
}

console.log(generateRandomPassword(14));
