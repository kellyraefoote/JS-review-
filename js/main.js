// *Variables*
// Create a variable and console log the value

const sleep = 8
console.log(sleep)

// Create a variable, add 10 to it, and alert the value

let num = 10
let numPlus = num +10
alert(numPlus)


// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractFour (num1, num2, num3, num4) {
    alert(num1 - num2 - num3 - num4)
}
subtractFour(20, 2, 2, 2)

// Create a function that divides one number by another and returns the remainder

function divide (num1, num2) {
    return num1%num2
}
let answer = divide(20,3)
alert(answer)




// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function Jumanji (n1, n2) {
    return n1 + n2 
} 

let sum = Jumanji(2, 7)
if (sum > 50) {
    alert("Jumanji!")
} else {
    alert("Boring!")
}


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function zebra (n1, n2, n3) {
    return (n1*n2*n3)%3
}

let product = zebra(2, 2, 2) 
if (product === 0) {
    alert("ZEBRA")
} else {
    alert("DONKEY")
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function lamp (word, number) {
    for (let i =1; i<=number; i++) {

        console.log(word)
        }
}
lamp('Panda', 5)

