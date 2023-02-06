/**
 * 0. Normally in javascript, or code is executed from top to bottom in order. Trouble is, we don't always want it to do
 * that.  What if we only want a code to run if a condition is first met.  Control flow allows us to take control over
 * the order in which the code is read and if it is read at all. There are two main ways of doing this: an if else/if else
 * chain or a switch statement.
 * 
 * 1. The keyword if is able to be used on it own. It's syntax is simple, the keyword if a conditional statement inside 
 * of parentheses and the block of code you would like to run wrapped in curley braces. If the condeitional statement
 * resolves to true, the code will run, if not, it won't.
 * 
 * 2. Else if cannot stand on its own. They must follow an if statement to perform as intended. The else if
 * statement is syntactically the same as the if statement save for the else keyword that proceeds the if keyword. If the
 * innitial if statement is not run, the next else statement will be evaluted. If this else statement resolves to true, it's
 * code block will be executed. If not, the code will continue past it. There is no limit to how many else if statements you
 * can chain together.
 * 
 * 3. Else also cannot stand alone. It must follow an if statement or an if else if chain. Else does not have a conditional
 * statement. If all proceeding conditional statements resolve to false, the esle statements code block will run.
 * 
 * 4. Switch Statements are similar to if else chains in that they will only run a block of code if a condition is met, but the
 * way that the conditions are defined is quite different.  Switch statements use cases that will only run their code block if
 * the input expression matches its case. Each case is followed by the keyword break, denoting the end of the code intended for
 * that case. If none of the cases are met, we can use the keyword default, to create a block of code that only runs if no case is
 * met.
 */


// 1. If //
var value1 = 'Ben';
var value2 = 'Ben';
var value3 = 'Benjamin';

// resolves to true
if (value1 === value2){
    console.log('true'); // logs ==> true
}

// resolves to false
if (value1 === value3){
    console.log('true'); // does not hit log statement
}



// 2. Else If //
var value1 = 'Ben';
var value2 = 'Ned';

// resolves to false
if (value1 === value2){
    console.log('true'); // log statement is not hit
           // resolves to true
} else if (value1.length === value2.length){
    console.log('true'); // logs ==> true
}



// 3. Else //
var value1 = 'Benjamin';
var value2 = 'Ned';

// resolves to false
if (value1 === value2){
    console.log('true'); // log statement is not hit
           // resolves to false
} else if (value1.length === value2.length){
    console.log('true'); // log statement is not hit
} else {
    console.log('false'); // logs ==> false
}




// 4. Switch //
var time = 'night';
switch (time){
  case 'morning': // case doesnt match
    console.log('Good morning'); // code isnt run
    break;
  case 'evening': // case doesnt match
    console.log('Good evening'); // code isnt run
    break;
  case 'night': // case matches
    console.log('Good night'); // logs ==> good night
    break;
  default: // default doesnt get hit
    console.log('time not recognized'); // code isnt run
}

time = 'morning';
switch (time){
  case 'morning': // case matches
    console.log('Good morning'); // logs ==> Good morning
    break;
  case 'evening': // code beyond here doesnt get hit
    console.log('Good evening');
    break;
  case 'night': 
    console.log('Good night');
    break;
  default: 
    console.log('time not recognized');
}

time = 'sun down';
switch (time){
  case 'morning': // case doesnt match
    console.log('Good morning'); // code isnt run
    break;
  case 'evening': // case doesnt match
    console.log('Good evening'); // code isnt run
    break;
  case 'night': // case doesnt match
    console.log('Good night'); // code isnt run
    break;
  default: // default gets hit
    console.log('time not recognized'); // logs ==> time not recognized
}