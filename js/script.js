let firstNum = "";
let operand = null;
let secondNum = "";

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (a == 0 || b == 0) return "Bruh";
    return a / b;
}

function clearAll() {
    firstNum = "";
    operand = null;
    secondNum = "";
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b)
        case "-":
            return subtract(a, b)
        case "*":
            return multiply(a, b)
        case "/":
            return divide(a, b)
        default:
            break;
    }
}

function populateDisplay(params) {
    document.querySelector("#screen").innerText = params;
}

function numberPress(num) {
    // If this is the first number
    if (!operand) {
        // prevents multiple decimals
        if (num == "." && firstNum.includes(".")) return;
        firstNum.length < 9 ? firstNum += num : null;
        populateDisplay(firstNum)
    }

    // if there is a first number and operand chosen
    if (operand && firstNum) {
        // prevents multiple decimals
        if (num == "." && secondNum.includes(".")) return;
        secondNum.length < 9 ? secondNum += num : null;
        populateDisplay(secondNum)
    }
}

// Selctor and handler for all numbers
document.querySelectorAll(".number").forEach(btn => {
    btn.addEventListener("click", (e) => {
        numberPress(e.target.innerText)
    })
})

// Selctor and handler for clearing/resetting
document.querySelector("#clear").addEventListener("click", () => {
    clearAll();
    populateDisplay("")
});

// Selctor and handler for performing the calculation
document.querySelector("#calculate").addEventListener("click", () => {
    if (!firstNum || !operand || !secondNum) return;

    const total = operate(operand ,Number(firstNum), Number(secondNum));
    clearAll()
    firstNum = total;
    populateDisplay(total)
})

// Selctor and handler for operations
document.querySelectorAll(".operator").forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (!firstNum) return;
        operand = e.target.getAttribute("data-symbol");
    })
})

// TODO:
// add inversion
// add percentage
// add backtracking/undo