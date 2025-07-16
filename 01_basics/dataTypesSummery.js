// There are manly two types of data types in javascript

// 1. Primitive data types
// 7 types : string, number, boolean, null, undefined, symbol, BigInt

// 2. Non-primitive data types (references types)
// Array, Objects, Functions


// javascript is dynamically typed language


// examples of primitive data types
/*
let name = "John"; // string
let age = 25; // number
let isAdmin = true; // boolean
let address = null; // null
let country = undefined; // undefined
let id = 1234567890123456789012345678901234567890n; // BigInt
let name1 = Symbol("John"); // symbol
let name2 = Symbol("John"); // symbol
console.log(name1 === name2);
*/


// examples of non-primitive data types

let books = ["IKIGAI" , "Personality Plus" , "You²" , "Rich Dad Poor Dad" , "The Psychology of Money"]; 

let person = {
    name : "Sofia",
    age : 20,
    address : "New York",
}

let myFunction = function(){
    console.log("This is a function");
}

// all non-primitive data type's return type is object but in function return type is function 


// https://262.ecma-international.org/5.1/#sec-11.4.3