/**
 * Operators:
 * 0. In JavaScript, an operator is a special symbol used to perform operations on operands.  Operators can be described by the amound of operands
 they recieve. Operators that take one operand are called Unary, ones that take two operands are called Binary and ones that take three are Turnary
 There are different types of operators that serve different purposes. The types of operators that will be discoussed in this project are Assignment, 
 Arithmetic, Comparison, and Logical Operators.
 *
 * 1. Assignment Operators: As the name may imply, these operators are used to assign values to variables or other values
 * 2. Arithmetic Operators: Arithmetic Operators are used to cunduct mathematical calculations
 * 3. Comparison Operators: Comparison operators are used to compare various data types against one another. Will resolve to true or false
 * 4. Logical Operators:: Used to create logical expressions
 */

// 1. Assignment Operators //
// We use assignment operators every time was assign a value to a variable
var myName;
myName = 'Jeff';
console.log(myName); // logs ==> 'Jeff'
// we can also use them to reassign a previously assigned variable so long as the const keyword was not used
myName = 'Ben';
console.log(myName); // logs ==> 'Ben'


// 2. Arithmetic Operators //
// We can use Arithmetic Operators in two way.  The first and more straight forward is for calculation alone.
console.log(5 + 5); // addition operator: logs ==> 10
console.log(5 - 5); // subtraction operator: logs ==> 0
console.log(2 * 2); // multiplication operator: logs ==> 4
console.log(10 / 2); // devition operator: logs ==> 5
console.log(10 ** 2); // exponential operator: logs ==> 100
console.log(10 % 3); // remainder operator: logs ==> 1
console.log(10++); // increment by 1: logs ==> 11
console.log(10--) // decrement by 1: logs ==> 9

// we can also combine an Aritmetic Operator with an Assignment operator to assign variable to the result of the operation all at once
var num1 = 10;
var num2 = 20;
// instead of this
num1 = num1 + num2 
console.log(num1); // logs ==> 30
// we can do this
num1 += num2;
console.log(num1); // also logs ==> 30


// 3. Comparison Operators //
// There are two types of Comparison Operators, strict and loose. Strict comparison takes into account the data type that is being compared,
// where as the loose comparison operator does not. Strict and Loose can be denoted by how many equal signs are in use, two for loose and three for strict
console.log( 1 === 1); // logs ==> true
console.log( 1 === '1'); // logs ==> false
console.log( 1 == '1'); // logs ==> true

// we can flip the logic by using a bang operator (!)
console.log( 1 !== 1) // logs ==> false


//4. Logical Operators //