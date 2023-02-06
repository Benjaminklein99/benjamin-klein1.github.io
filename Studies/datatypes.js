/**
 * 0. Data Types:
 * In Javscript, data type is an attribute associated with a piece of data that tells a computer system how to interpret its value.
 * All datatypes can fit into two categories: simple/primitive or complex.  A primitive is data that is not an object and has no 
 * methods or properties. Complex datatypes are just the oposite. This difference is important to remember because simple data types
 * are passed to a function by copy, while complex data types are passed by reference. This means that a simple data type will not
 * be mutated while a complex datatype will.
 */

// 1. Number //
// A number is exactly what it sounds like: a number.  In javascript numbers can be used to count, measure, and calculate.
var num = 1;
var num2 = 1583;

// 2. Stirng //
// A string is a line of characters that are meant to be read like words. They are denoted by a set of opening and closing quotation marks
var str = "Hello, World";

// 3. Boolean //
// A boolean is either a true or false. The can be used to evaluate other code or even control the flow of code.
var bool = true;
var bool2 = false;
 
// 4. Array //
// An array is an ordered list seperated by commas. They are used to store information. Arrays are 0 indexed, meaning the first item is at the 0th index,
// the second item is at the 1st, the third item at the 2nd indes, and so on. To create an array, we simply need an opening and a closing brace ==> []. To
// better access an array, we can store them in a variable.
var arr = [1, 2, 3, 4, 5];
 
// 5. Object //
// An object. is another orded list, but instead of being 0 indexed like an array, each object stores its own key value pairs.  To access a value in an object,
// we must first reference its key. To create an object, all we need are a set of curley braces {}, and like an array, it is easiest to access our object
// if we store it in a variable
let obj = {key1: 'value1', key2: 'value2', key3: 'value3'};
 
// 6. Function //
// A function is a reuseable block of code. To create a function, we use the keyword function followed by the name of a function and parantheses,
// which contain parameters. Parameters are what a function might need passed into it. Not all functions need parameters. After the parameters
// comes curley braces containing the code to run once the function is called. To call or invoke a function, you simply write the name of the
// function followed by parentheses. If a function needs arguments passed into it, then they are writen within the parentheses.
function foo(){
    console.log('foo');
}
foo(); // logs ==> foo

var message = 'Hello, World';
function print(string){
    console.log(string);
}
print(message); // logs ==> Hello, World


// 7. Undefined //
// undefined is when a variable has been created but has not yet stored any value in it. 
var x;
console.log(x); // logs ==> undefined

// 8. Null //
// Null represents the intentional absence of any value
x = null;
console.log(x); // logs ==> null

// 9. NaN //
// NaN is short for not a number. This will come up if you try to do something that is meant to be done with numbers
// with something other than a number
var a = 'String';
console.log(2 * a) // logs ==> NaN

// 10. Infinity //
// Infinity is a property of the global object. In other words, it is a variable in global scope. The value Infinity is greater than any 
// other number. Likewise, negative infinity is less than any other number.
console.log(100000000000 < Infinity); // logs ==> true
console.log(-100000000 > -Infinity); // logs ==> true