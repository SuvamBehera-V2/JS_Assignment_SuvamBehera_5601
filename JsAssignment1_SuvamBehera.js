let input_value = parseInt(prompt("Enter a value"));
let prime_array = [];
function primeCheck(n)
{
    if(n==1 || n==0){
        return false;
    }
    for (let i=2; i<n; i++){
        if (n%i == 0){
            return false;
        }
    }
    return true;
}

if (Number.isInteger(input_value) == true){
    for(let j=1; j<=input_value; j++){
        if (primeCheck(j)){
            prime_array.push(j);
        }
    }
}   
console.log(prime_array);

