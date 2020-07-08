let firstNumber = document.getElementById("firstnumber").value;
let secondNumber = document.getElementById("secondnumber").value;
const btn = document.getElementById("button");
let sing = document.getElementById("sing").value;

function Result() {
    let firstNumber = document.getElementById("firstnumber").value;
    let secondNumber = document.getElementById("secondnumber").value;   
    let result;
    if     (sing ==='+')  result = firstNumber + secondNumber;
    else if (sing ==='-') result = firstNumber - secondNumber;
    else if (sing ==='*') result = firstNumber * secondNumber;
    else if (sing ==='/')  result = firstNumber / secondNumber;
    document.getElementById('result').innerHTML = result;
    return (result)
};
btn.addEventListener("click", Result)
