let number1 = 0
let number2 = 0
let activeOp;
let OP;
const add = (num1,num2) => {
    
    display.innerText = `${num1 + num2}`
}
const subtract = (num1, num2) => {
    display.innerText = `${ num1 - num2}`
}
const multiply = (num1,num2) => {
    display.innerText = `${num1 * num2 }`
}
const divide = (num1, num2) => {
    display.innerText = `${num1 / num2}`
}
const operation = (a,b,operator) => {
  
    switch(operator){
        case "+":
            add(a,b)
            break;
        case "-":
            subtract(a,b)
            break;
        case "*":
            multiply(a,b)
            break;
        case "/":
            divide(a,b)
            break;
    }
} 
const clearDisplay = () => {
    display.innerText = ""
}
const clearBtn = document.querySelector('#clear')
const display = document.querySelector('#display-area')
const numKeys = document.querySelectorAll('.numbers')
const operatorBtns = document.querySelectorAll('.operator')
const equalBtn = document.querySelector('#equal')
numKeys.forEach(numKey => numKey.addEventListener('click', e => {
    display.innerText += `${e.target.innerText}`

}))
operatorBtns.forEach(operatorBtn => operatorBtn.addEventListener('click',e => {
    OP = e.target.innerText
    number1 += +display.innerText
    display.innerText = ''
}))
equalBtn.addEventListener('click', e => {
    number2 = +display.innerText
    display.innerText = ''
    operation(number1, number2, OP)
})
clearBtn.addEventListener('click',clearDisplay)

