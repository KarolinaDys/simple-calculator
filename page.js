let firstNumber = Number(document.getElementById("firstnumber").value);
let secondNumber = Number(document.getElementById("secondnumber").value);

let sing =  document.getElementById("sing").value;
const btn = document.getElementById("button");
function Result() {
    let firstNumber =Number(document.getElementById("firstnumber").value);
    let secondNumber =Number(document.getElementById("secondnumber").value); 
    let sing =  document.getElementById("sing").value;
    let result;
    if      (sing === '+') result =  firstNumber + secondNumber;
    else if (sing === '-') result = firstNumber - secondNumber;
    else if (sing ==='*') result = firstNumber * secondNumber;
    else if (sing === '/')  result = firstNumber / secondNumber;
    document.getElementById('result').innerHTML = result;
    return (result)
};
btn.addEventListener("click", Result)
