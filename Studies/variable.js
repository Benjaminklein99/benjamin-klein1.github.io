/**
 * 0. Variables are named containers in JavaScript. We can declare variables with the var let and const key words. Variables can store any datatype or value,
 *    but only certain variable can be re-assigned
 * 
 * 1. To create a variables, we can use the var keyword followed by what we would like our variables name to be. Variable names cannot have spaces, 
 *    so it is important to use snake case for variable names with spaces. instead of a space, we use a capitolized letter. ie storage variable becomes
 *    storageVariable.
 * 
 * 2. The are two stages when using a variable, declaration and assignment.  
 * 
 */

// 1. Declaration //
// At the declaration stage, myVariable is not storing any data and is therefore undefined

    var myName;
    console.log(myName); //  prints ==> undefined

    let myName1;
    console.log(myName1); //  prints ==> undefined




// 2. Assignment //
// This is the stage where your variable can know what data you would like it to store

    myName = 'Ben';
    console.log(myName); // prints ==> 'Ben'

    myName1 = 'Joseph';
    console.log(myName1); //  prints ==> 'Joseph'

    // we can combine the declaration and assignment like so. This is the only option we have available when using the const key word.

    var myVariable = 'variable';
    console.log(myVariable); // prints ==> 'variable'

    const myName2 = 'Klein';
    console.log(myName2); //  prints ==> 'Klein'




// 3. Re-ssignment //
// when using the var and let key words, we can re-assign previously created variable. This will not work with the key word const 

    myName = 'Jeff';
    console.log(myName); // prints ==> 'Jeff'




// 4. Hoisting //
// At run time, the JavaScript interpreter will preform an action called hoisting.  This is where function and variable declarations are 'hoisted'
// to the top of their scope.  The key word var is globally scoped, so unless the declaration was made inside of a function, the declaration (and only the
// declarion) will be hoisted to the top of the global scope.

    console.log(a); // prints ==> undefined
    var a = 'eample 1';

    console.log(b); // prints ==> ReferenceError: Cannot access 'a' before initialization
    let b = 'example 2';

    console.log(c); // prints ==> ReferenceError: Cannot access 'a' before initialization
    const c = 'example 3';

    console.log(a); // prints ==> ReferenceError: a is not defined
    function foobar(){ 
        var a = 'example';
    }
