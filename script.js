const numbers = document.querrySelectorAll(".number")
console.log(numbers)

// // const numbers = document.querrySelectorAll(".number")
// numbers.forEach((number) => {
//     numbers.forEach((number)
// })

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        console.log(event.target.value)
    })      
})

// const numbers = document.querrySelectorAll(".number")
// numbers.forEach((number) => {
//     number.addEventListener("click", (event) => {
//         console.log(event.target.value)
//     })
// })

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)
    })
})

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}



let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    currentNumber = number 
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const inputNumber = (number) => {
    currentNumber += number
}

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        console.log(event.target.value)
    })
})

const inputOperator = (operator) => {
    prevNumber = currentNumber
    calculationOperator = operator 
    currentNumber = ''
}

const operators = document.querrySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const equalSign = document.querrySelectorAll('.equal-sign')

equalSign.addEventListener('click', () => {
    console.log('equal button is pressed')
})

const calculate = () => {
    let result = ''
    switch(calculationOperator){
        case "+":
            result = prevNumber + currentNumber
            break
        case "-":
            result = prevNumber - currentNumber
            break
        case "*":
            result = prevNumber * currentNumber
            break
        case "/":
            result = prevNumber / currentNumber
            break
        default:
            return
            
    }
    currentNumber = result
    calculationOperator = ''
}

const equal = document.querrySelectorAll('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case '+':
            result = parseInt(prevNumber) + parseInt(currentNumber)
            break
    }
}

const clearBtn = document.querrySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    console.log('AC button is pressed')
})

const  clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const clearBtn = document.querrySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const decimal = document.querrySelector('decimal')

decimal.addEventListener('click', (event) => {
    console.log(event.target.value)
})

inputDecimal = (dot) => {
    currentNumber += dot 
}

const decimal = document.querrySelector('.decimal')
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})



inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

