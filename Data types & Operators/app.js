"use strict";
//Primitives Data Types -immutable
//strings
let userName = "Alice";
userName = "John";
userName = "Alice";
//number
let userNumber = 5;
//boolean
let userBoolean = true;
//null
// intentional absence of value in a variable
let emptyValue = null;
//undefined
// un- initialised variable
let user;
console.log(user);
//bigint
let bigNumber = 644435313343535n;
//symbol
let userSymbol = Symbol("abc");
//Non Primitive Data types
//Objects
let userObj = {
    key: "Value",
    key1: "Value1",
    Key2: "Value2"
};
//Functions
function userFunc() {
    return 10 + 10;
}
//Arrays
let userArray = [1, 2, 3, 4, 5];
//Class
class userObj1 {
}
let userObj2 = {
    id: "John",
    id1: 25
};
//Tuples
//Enums            
//Operators in TypeScript
// Arithmetic Operators
let num1 = 5;
let num2 = 2;
console.log(num1 + num2); // Addition Operator
console.log(num1 - num2); // Subrtaction Operator
console.log(num1 * num2); // Multiplication Operator
console.log(num1 / num2); // Division Operator
console.log(num1 % num2); // Modulus Operator returns the remainder
//Increment & Decrement Operators
console.log(++num1);
console.log(--num1);
//Assignment Operators & Comparison Operators
console.log(num1 = num2); //Assignment operator which assigns the value. Not the equal operator
num1 = 5;
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 == num2); // Equal to operator -- checks the value
console.log(num1 != num2); // Inequality Operator
//Logical Operators  
//  &&(And operator)  ||(Or Operator) !(Not Operator)
console.log(num1 > num2 && num1 == num2);
console.log(num1 < num2 || num1 == num2);
console.log(!(num1 > num2));
