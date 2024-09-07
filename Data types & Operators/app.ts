                //Primitives Data Types -immutable

//strings
let userName: string = "Alice"
userName = "John"
userName = "Alice"

//number
let userNumber : number = 5

//boolean
let userBoolean : boolean = true

//null
// intentional absence of value in a variable
let emptyValue : null = null

//undefined
// un- initialised variable
let user
console.log(user)
//bigint
let bigNumber: bigint = 644435313343535n
//symbol
let userSymbol: symbol= Symbol("abc")
                //Non Primitive Data types
//Objects
let userObj = {
    key:"Value",
    key1:"Value1",
    Key2:"Value2"
}

//Functions
function userFunc(){
   return 10+10
} 

//Arrays
let userArray = [1,2,3,4,5]
//Class
class userObj1{
    "id":string
    "id1":number
}
let userObj2:userObj1={
    id:"John",
    id1:25
}
//Tuples
//Enums            
                    //Operators in TypeScript
// Arithmetic Operators
let num1 : number = 5
let num2 : number = 2
console.log(num1 + num2)  // Addition Operator
console.log(num1 - num2)  // Subrtaction Operator
console.log(num1 * num2)  // Multiplication Operator
console.log(num1 / num2)  // Division Operator
console.log(num1 % num2)  // Modulus Operator returns the remainder
//Increment & Decrement Operators
console.log(++num1)
console.log(--num1)
//Assignment Operators & Comparison Operators
console.log(num1 = num2) //Assignment operator which assigns the value. Not the equal operator
num1 = 5
console.log(num1 > num2)
console.log(num1 < num2)
console.log(num1 >= num2)
console.log(num1 <= num2)
console.log(num1 == num2) // Equal to operator -- checks the value
console.log(num1 != num2) // Inequality Operator

//Logical Operators  
//  &&(And operator)  ||(Or Operator) !(Not Operator)
console.log(num1 > num2 && num1 == num2)
console.log(num1 < num2 || num1 == num2)
console.log(!(num1>num2))