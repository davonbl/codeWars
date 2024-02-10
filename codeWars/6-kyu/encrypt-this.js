/*
Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"


*/



const encryptThis = function(text) {
    let textArr = text.split(' ');
    let encryptWord = '';
    for(let i = 0; i < textArr.length; i++){
        let indexArr = [...textArr[i]];
        for(j = 0; j < indexArr.length; j++){
            if(j === 0){
                encryptWord = encryptWord + indexArr[j].charCodeAt(j);
            }else if(j === 1){
                encryptWord = encryptWord + indexArr[indexArr.length - 1];
            }else if(j === indexArr.length - 1){
                encryptWord = encryptWord + indexArr[1];
            }else{
                encryptWord = encryptWord + indexArr[j];
            }
        }
        if(i !== textArr.length - 1 && textArr.length > 1){
            encryptWord = encryptWord + ' ';
        }
    }
    return encryptWord;
}