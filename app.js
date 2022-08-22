// get random number function
function getPin(){
    const pin = Math.round(Math.random()*10000)
    const pinString = pin+ "";
    // check the pin is 4 number or not
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}
// display the random number function
function generatePin(){
  const pin = getPin();  
  document.getElementById("display-pin").value = pin;
}
// number keypad typing
document.getElementById("key-pad").addEventListener('click',function(event){
const number = event.target.innerText;
const calcInput = document.getElementById("typed-numbers");
// check is a number or not
if (isNaN(number)) {
//If we click on 'C' it will clear all numbers 
    if(number == 'C'){
        calcInput.value = '';
    }  
} 
// If it's a number then it will display 
else {
    const previousNum = calcInput.value;
    const newNum = previousNum + number;
    calcInput.value = newNum;
}
})
//matching pins correct or not
document.getElementById("submit-btn").addEventListener('click',function(){
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById("typed-numbers").value;
    const verifySuccess = document.getElementById('verify-success');
    const verifyFail = document.getElementById('verify-fail');
    //if pin is correct then it show success message otherwise show fail message
    if (pin == typedNumber) {
       
        verifySuccess.style.display = 'block';
        verifyFail.style.display = 'none'; 

    }
    else{
       
        verifyFail.style.display = 'block'; 
        verifySuccess.style.display = 'none';
    }
})