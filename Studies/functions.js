/**
 * Functions: 
 * 
 * 0. A function is a reuseable block of code. It saves us work by storing a set of statements that performs a task or calculates a value.
 * There are two phases to using a function: declaration and invocation.
 * 
 * 1. To declare a function, first the keyword function is used. Next we write what we would like our functions name to be followed by parentheses.
 * Inside of these parentheses, we can put our parametes if our function might need them. A function may or may not need data passed to it in order 
 * to perform properly. When creating the function, this data is called a parameter. A parameter is essencially a function scoped variable.  When 
 * invoking a function, the data being passed into it is called an argument. Finally, after the parentheses, we put the code we wouldlike to run 
 * encased in curley braces.  Not all functions have a name. An un-named function is called an anonymous function.
 * 
 * 2. To invoke a function, we simply write the name of the function followed by parentheses. If the function has parameters, then the arguments are written
 * into the parentheses seperated with commas.
 * 
 * 3. Functions can also be stored in variables. To do this, we set the variable equal to the initialization of the function without using a function name.
 * 
 * 4. When using function, it is important to consider a concept called scope.  Functions create their own scope that cannot be seen from outside of the 
 * function.  Think of scope like a set of steps. Imagine that you can see down the steps but not up and creating a function is like moving up a step.
 * Functions can see into their parent functions scope, if the were created inside of another function, all the way down to the global scope.
 * 
 * 5. Another important concept is closure. When a function returns another function. the parent unctions form closures around the data it houses. 
 * 
 */

// 1 Declaration //
function foo(){
    console.log('has no return or parameters')
}

function bar(string){
    return string;
}



// 2 Invocation //
foo(); // logs ==> has no return or parameters

var message = 'has return and parameter';
console.log(bar(message)); // logs ==> has return and parameter 




// 3 Function Stored in Variable //
var func = function(){
    console.log('this is a function stored in a variable');
}

func() // logs ==> this is a function stored in a variable




// 4 Scope //
var global = 'seen';
function test(variable){
    console.log(variable);
}
test(global); // logs ==> seen because function can see into outer scopes


function test2(){
    var funcScoped = 'unseen'
}
test2()
console.log(funcScoped); // throws error: funcScope is not defined because, the funcScoped variable is function scoped and not available in the global scope


// 5 Closure //
function counter(){
    // count is created and set to 0
    var count = 0;
    // an anonymous function is returned
    return function(){
        // closure is formed around count and its incremented
        count++;
        // count is returned by the anonymous function so we can access it
        return count;
    }
}
// increment stores the invocation of counter
var increment = counter();
// the anonymous function is invoked and count in incremented by 1
increment(); // count = 1
// the anonymous function is invoked and count in incremented by 1
increment(); // count = 2
// the anonymous function is invoked, count in incremented by 1 and the return is logged to the console
console.log(increment()); // logs ==> 3