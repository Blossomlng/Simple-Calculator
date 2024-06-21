
var result = document.getElementById("result")
var del = document.getElementById("delete-button")
var equal = document.getElementById("equal-button")
var input = document.getElementById("input")
var numbers = document.querySelectorAll("#num-pad")
var clear = document.getElementById("clear-button")
var hist = document.getElementById("history")


numbers.forEach( numpad => {
    numpad.addEventListener("click", () => {
        input.value = input.value + numpad.innerText
    })
})

clear.addEventListener("click", () => {
    input.value = ""
    result.innerText = ""
})

del.addEventListener("click", () => {
    input.value = input.value.slice(0, -1)
})

equal.addEventListener("click", () => {
    var equation = input.value
    equation = equation.replace(/X/gi, "*")
    hist.innerText = equation
    try {
        var answer = eval(equation)
        result.innerText = answer
    } catch {
        result.innerText = "error"
    }
    input.value = ""
})

