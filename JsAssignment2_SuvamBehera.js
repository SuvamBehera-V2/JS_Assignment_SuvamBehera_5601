let inputNumber = parseInt(prompt("Enter a number: "));
if (Number.isInteger(inputNumber) != true){
    confirm("Please enter an integer")
}
// Checking for odd even 
if (inputNumber % 2 == 1){
    console.log(`${inputNumber} is an odd number`);
}
else{
    console.log(`${inputNumber} is an even number`);
}
// Checking for prime number
let isPrime = true;
if (inputNumber == 0 || inputNumber == 1){
    isPrime = false;
}
for (let i=2; i<inputNumber; i++){
    if (inputNumber%i == 0){
        isPrime = false;
        break;
    }
}
if(isPrime){
    console.log(`${inputNumber} is a prime number`);
}
else{
    console.log(`${inputNumber} is not a prime number`);
}