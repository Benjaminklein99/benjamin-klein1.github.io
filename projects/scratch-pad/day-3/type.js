// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // if value is an array
    if (Array.isArray(value)){
        // return true
        return true;
    // otherwise
    } else {
        // false
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    // if type of value is object     not an array              not null             and not a date
    if (typeof value === 'object' && !Array.isArray(value) && value !== null && value instanceof(Date) === false){
        // return true
        return true;
    // otherwise
    } else {
        // return false
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    // if value is an object        not null                and not a date
    if (typeof value === 'object' && value !== null && value instanceof(Date) !== true){
        // return true
        return true;
    // otherwise
    } else {
        // return false
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    // if value is a string
    if (typeof value === 'string'){
        // return string
        return 'string';
    // if value is an array
    } else if (Array.isArray(value)){
        // return array
        return 'array';
    // if value is a date
    } else if (value instanceof(Date)){
        // return date
        return 'date';
    // if value     is an object             is not an array       and is not null
    } else if (typeof value === 'object' && !Array.isArray(value) && value !== null){
        // return object
        return 'object';
    // if value is undefined
    } else if (value === undefined){
        // return undefined
        return 'undefined';
    // if value is a number
    } else if (typeof value === 'number'){
        // return number
        return 'number';
    // if value is a boolean
    } else if (typeof value === 'boolean'){
        // return boolena
        return 'boolean';
    // if value is null
    } else if (value === null){
        // return null
        return 'null';
    // if value is a function
    } else if (typeof value === 'function'){
        // return function
        return 'function';
    } 
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
