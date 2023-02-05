/**
 * Loops:
 * 
 * 0.
 * Sometimes, when creating an application, we may find that we want to repeat an action over and over again. Luckily,
 * Javascript has built in tools to allow us to accomplish this. These tools are called loops. Loops usually take a conditional
 * statement, and a block of code to run.  The block of code will run and run until the condition is met with true. This is
 * a perfect way to describe for and while loops, but not the for in loop. More information on for in loops under 3.
 * 
 * 1. The for loop is probably the most versitile loop that we have available to us.  It's syntax is as follows: the key word
 * for then parens ==> for (where to start; where to stop; where to go next){code to run};.  When using this type of loop,
 * we have the ability to choose where to start, where to stop, and which direction we would like to loop. The for loop is 
 * best suited to iterate over arrays versus objects.
 * 
 * 
 * 2. The while loop is similar to the for loop in that we can choose where to start, where to stop, and direction, the 
 * only difference is the syntaxt.  The while loops syntaxs starts with a variable to keep track of our index. Next it
 * has the key word while, and in parantheses, the condtional statement to denote where to stop. Next, in curly braces,
 * is the code we would like to run, but we also have to increment or decrement our index variable to let the loop know
 * where to go next. The while loop again is best suited to iterate over arrays.
 * 
 * 
 * 3. The for in loop is unlike the for and while loop in that we don't have any versitility as to where to stop and
 * start and in that it is better suited to loop over objects versus arrays. It's syntax is a s follows: for (let key(or whatever
 * we might like to call it) in object name){code to run};. The for in loop will iterate over each key in an object, starting
 * at the begining until there are no keys left to iterate over.
 * 
 */



// For Loop //
var array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++){
    console.log(array[i]);
}

for (let i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
}

for (let i = 1; i < array.length - 1; i++){
    console.log(array[i]);
}



// While Loop //
var array2 = ['a', 'b', 'c', 'd', 'e'];

var index = 0;
while (index < array2.length){
  console.log(array2[index]);
  index++;  
}

var index2 = array2.length - 1;
while (index2 >= 0){
  console.log(array2[index2]);
  index2--;
}

var index3 = 1;
while (index3 < array2.length - 1){
  console.log(array2[index3]);
  index3++;
}


// For In Loop//
var object = {a: 1, b: 2, c: 3, d: 4, e: 5}

for (let key in object){
    console.log(key);
}

for (let key in object){
    console.log(object[key]);
}