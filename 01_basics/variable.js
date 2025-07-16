const accId = 1001;
let accName = "ABC";
var accBalance = 9860;
accPassword = "abc123";
let accno ; // undefined

console.log(accId);
console.log(accName);
console.log(accBalance);
console.log(accPassword);



// accId = 1002; // Error
accName = "XYZ";
accBalance = 9870;

console.table([accBalance,accId,accName,accPassword])


/*
    if we don't assign value to variable then it will be undefined
    scope : {...} code between {} is called scope
    const - constant  -- it is immutable --
    let - variable  -- it is mutable -- it is use in scope
    var - variable -- it is mutable -- it is use in everywhere so it is global variable --  NOTE : it is not recommended
*/