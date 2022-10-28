let userInput = prompt("Enter the text you want to transform: ");

function charReplace(text){
    let s = text.split('')
    for (let i = 0; s.length; i++){
        switch(s[i]){
            case ' ':
                break;
            case 'z':
                s[i] = 'a';
                break
            default:
                s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
        }
    }
    return s.join('')
}

console.log(charReplace(userInput));