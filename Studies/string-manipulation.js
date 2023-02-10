/**
 * String-Manipulation
 *  0. In Javascript, strings are a datatype that represent words and sentences.  Like most things, they are stored in variables
 and can be denoted by opening and closing single or double quotes. There are two ways we can change or manipulate strings, methods and operatorss.
 *  1. Operators in Javascript can somethimes be used for various purposes. It is important to take context into consideration when examining what
 actions they might perform.
 *  2. Javascript also has a series of built in methods to manipulate strings. Some of these methods perform the same actions as some operators,
 and both are equally valid.  Methods however will sometimes need more information passed to them to get the desired result 
 */

 // 1. Operators //
 // The syntax for operators is as follows: the name of the string we want to manipulate, the operator, then what we would like to manipulate with.

 var word1 = 'Hello';
 var space = ' ';
 var word2 = 'World';
 var sentance = word1 + space + word2;
 console.log(sentance) // logs ==> 'Hello World' 

 word1 += space + 'World';
 console.log(word1); // logs ==> 'Hello World'

 // 2. Methods //
 // The syntax for string methods is the nave of the variable that you would like to manpulate, a dot, the mothod, and parantheses
 // some methods can be simply invoked without passing anything to their paranthese.
 var word3 = 'All caps';
 console.log(word3.toUpperCase()); // logs ==> 'ALL CAPS'
 

 // methods such as slice will need further information passed into their parantheses, in this case to denote where to 'cut' our string apart.
 var word4 = 'slice';
 console.log(word4.slice(1)); // logs ==> 'lice'

 // The replace method takes two inputs into its parens.  The first imput is the target you would like to replace, and the second is
 // what we would like to replace our target with
 var name = 'My name is Jeff';
 var replaced = name.replace('Jeff', 'Ben');
 console.log(replaced);