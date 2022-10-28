// This JS file has been embedded in the assignment3.html file. 

function validation(){
    let userEnteredAge = parseInt(document.getElementById('age').value);
    if (Number.isInteger(userEnteredAge) != true){
        alert("Please enter an number in the Age box");
    }
    else if (userEnteredAge > 150 || userEnteredAge<1){
        alert("Please enter an age in between 1-150")
    }
    let userEnteredName = document.getElementById('name').value;
    if (userEnteredName.includes(".") || userEnteredName.includes("/") || userEnteredName.includes(",")){
        alert(`Please avoid ".", ",", "/"`)
    }
    let confirmation = confirm("Are you sure you want to submit")
    if (confirmation == true){
        alert("Your name is " + userEnteredName + " and age is " + userEnteredAge)
    }
}