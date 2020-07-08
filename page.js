let firstNumber = document.getElementById("firstnumber");
let secondNumber = document.getElementById("secondnumber");
const btn = document.getElementById("button");


function Result() {
if     (sing ==='+')  result = firstNumber + secondNumber;
else if (sing ==='-')  result = firstNumber - secondNumber;
else if (sing ==='*')  result = firstNumber * secondNumber;
else if (sing ==='/')  result = firstNumber / secondNumber;
document.getElementById('result').innerHTML = result
return (result)
}
btn.addEventListener("click", function (){
    Result();
});


