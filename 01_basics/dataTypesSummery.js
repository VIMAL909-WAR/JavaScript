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
console.log(typeof books);
console.log(typeof person);
console.log(typeof myFunction);

/*____________________________________________________________________________________________*/

// there are mainly two types of memory allocation in javascript

// 1) Stack memory allocation
// 2) Heap memory 

// primitive data types are stored in stack memory allocation
// non-primitive data types are stored in heap memory allocation

// in stack memory allocation, memory is allocated for primitive data types and the value is copied to the stack memory allocation
// in heap memory allocation, memory is allocated for non-primitive data types and the reference is copied to the stack memory allocation

/*
let name1 = "John";
let name2 = name1;
name2 = "sofia" ;

console.log(name1);
console.log(name2);
*/

// this is example of stack memory allocation




// in heap memory 

let user1 = {
    name : "John",
    age : 20
};

let user2 = user1;
user2.name = "sofia";

console.log(user2.name);
console.log(user1.name);

// this is example of heap memory allocation