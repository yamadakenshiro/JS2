function clickButton(btn) {
    const preValue = document.calculator.display.value.slice(-1);
    let value = btn.value;

    if (value == ".") {
        if (preValue === "" || preValue === "." || preValue === "+" || preValue === "-" || preValue === "*" || preValue === "/") {
           return;
        } 
    }
    if (value == "+") {
        if (preValue === "" || preValue === "." || preValue === "+" || preValue === "-" || preValue === "*" || preValue === "/") {
           return;
        } 
    }
    if (value == "-") {
        if (preValue === "" || preValue === "." || preValue === "+" || preValue === "-" || preValue === "*" || preValue === "/") {
           return;
        } 
    }
    if (value == "*") {
        if (preValue === "" || preValue === "." || preValue === "+" || preValue === "-" || preValue === "*" || preValue === "/") {
           return;
        } 
    }
    if (value == "/") {
        if (preValue === "" || preValue === "." || preValue === "+" || preValue === "-" || preValue === "*" || preValue === "/") {
           return;
        } 
    }

    if (value == "0") {
        if (preValue === "" || preValue === "+" || preValue === "-" || preValue === "*" || preValue === "/") {
            return;
        }
    }

    if (value == "00") {
        if (preValue === "" || preValue === "+" || preValue === "-" || preValue === "*" || preValue === "/") {
            return;
        }
    }

    if (value === "=") {
        document.calculator.display.value = eval(document.calculator.display.value);
    } else if (value === "AC") {
        document.calculator.display.value = "";
    } else {
        document.calculator.display.value += value;
    }
}