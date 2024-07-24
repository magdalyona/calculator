// let num = 42 // число
// let firstName = "Aliona" // строчка
// const isProgrammer = true // булен boolen

/* Can do что можно делать

let $ = "test"
let $num = 42
let num$ = 42
let _ = 49
let num_ = 12

let myNum = 34 //good
let first_name = "Leo" // bad

let num42 = 10 


*/

/* Restricted ошибки что нельзя делать

let 42num = "11" начинать с цифры
let my-num = 1 ставить дефис тире
let const - зарезирвированные слова / переменные слова в джава нельзя испольвать

*/


// firstName = "Magdalyona"

// isProgrammer = false // это ошибка, когда повторяем error because of const


// alert(firstName)
// console.log("Test:", firstName)

// console.log(num + 10)
// console.log(num - 10)
// console.log(num * 10)
// console.log(num / 10)



// let num2 = num + 10
// console.log (num, num2)
// num = num2 - num
// num2 = num2 + 1
// console.log (num, num2)



// let num3 = num + (10 * 2) / 3 - 1
// console.log (num3)



// const fullName = firstName + ' Cap' // варианты пробела
// const fullName = firstName + '' + ' Cap' // вариант пробела
// console.log (fullName)



const resultElement = document.getElementById('result')
const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const submitBtn = document.getElementById ("submit")
const plusBtn = document.getElementById ("plus")
const minusBtn = document.getElementById ("minus")
let action = "+"


// console.log(resultElement.textContent)

// resultElement.textContent = (45 - 2) / num

// console.log(tipeof sum)

plusBtn.onclick = function ( ) {
    action = "+"
}

minusBtn.onclick = function () {
    action = "-"

}





function printResult(result) {
    if (result < 0) {
        resultElement.style.color = "red"
    } else {
        resultElement.style.color = "green"
    }
    resultElement.textContent = result
}

// !это второй вариант как надо сделать -> привязан к этой схеме вверху
// submitBtn.onclick = function () {
//     if (action == "+") {
//         const sum = Number (input1.value) + Number (input2.value)
//         printResult(sum)
//     } else if (action == "-") {
//         const sum = Number (input1.value) - Number (input2.value)
//         printResult(sum)
//     }

//     // if спросить у программы; == два равно это значит сравнивание
//     // else значит иначе можеть быть другое 
// }


function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)

    // if (actionSymbol == "+") {
    //     return num1 + num2 //
    // } else if (actionSymbol == "-") {
    //     return num1 - num2
    // } можно писать в ожну строчку: 

    return actionSymbol == "+" ? num1 + num2 : num1 - num2
}

// третий вариант 
submitBtn.onclick = function () {
    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)
}




// !!!!!!!!! это первый вариант устаревший как можно сделать =>

// submitBtn.onclick = function () {

// if (action == "+") {
//     const sum = Number (input1.value) + Number (input2.value)
//     if (sum < 0) {
//         resultElement.style.color = "red"
//     } else {
//         resultElement.style.color = "green"
//     }
//     resultElement.textContent = sum
// } else if (action == "-") {
//     const sum = Number (input1.value) - Number (input2.value)
//     if (sum < 0) {
//         resultElement.style.color = "red"
//     } else {
//         resultElement.style.color = "green"
//     }
//     resultElement.textContent = sum
// }
//     // if спросить у программы; == два равно это значит сравнивание
// // else значит иначе можеть быть другое 
// }

