let userInput = prompt("Enter the text you want to transform: ");

function charReplace(text){
    let allChar = text.split('')
    for (let i = 0; i<allChar.length; i++){
        switch(allChar[i]){
            case ' ':
                break;
            case 'z':
                allChar[i] = 'a';
                break;
            default:
                allChar.splice(i, 1, String.fromCharCode(allChar[i].charCodeAt(0) + 1 ))
        }
    }
    return allChar.join('');
}

console.log(charReplace(userInput));