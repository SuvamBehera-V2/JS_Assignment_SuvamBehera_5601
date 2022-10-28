let userInput = prompt("Enter the text you want to transform: ");

// function charReplace(text){
//     let allChar = text.split('')
//     for (let i = 0; i<allChar.length; i++){
//         let n = allChar[i].charCodeAt() - 'a'.charCodeAt();
//         n = (n+1) % 26;
//         allChar[i] = String.fromCharCode(n + 'a'.charCodeAt());
//     }
//     return allChar.join('')
// }

// console.log(charReplace(userInput));

// function letterChanges (str) {
//     return str.replace('/[a-zA-z]/g', function (x){
//         return String.fromCharCode(x.charCodeAt(0) + 1)
//     })
// }

function charReplace(text){
    let allChar = text.split('')
    for (let i = 0; i<allChar.length; i++){
        // unicode = allChar[i].charCodeAt(0) + 1
        allChar.splice(i, 1, String.fromCharCode(allChar[i].charCodeAt(0) + 1))
    }
    return allChar.join('')
}
console.log(charReplace(userInput));