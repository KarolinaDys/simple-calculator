let firstNumber = document.getElementById("firstnumber").value;
let secondNumber = document.getElementById("secondnumber").value;
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


