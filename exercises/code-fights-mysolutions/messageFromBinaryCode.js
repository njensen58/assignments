// String.fromCharCode(72, 69, 76, 76, 79);


const messageFromBinaryCode = code => {
    code = code.match(/.{1,8}/g).join(' ')
    const binary = code.split(' ')
    const binaryCode = []
    for(let i = 0; i < binary.length; i++){
        binaryCode.push(String.fromCharCode(parseInt(binary[i], 2)))
    }
    return binaryCode.join('')
}


console.log(messageFromBinaryCode("0100100001100101011011000110110001101111001000000100001001101001011011100110000101110010011110010010000001010111011011110111001001101100011001000010000000100001"))
