'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */

function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;



/**
 * identity: Takes in an input value and returns the value unchanged.
 * 
 * @param { Any value }: Function takes in any value and return input value unchanged
 */

function identity(value){
    return value;
}
module.exports.identity = identity;



/**
* typeOf: Takes in any value and test what data type the value is. Types are one of:
* "string", "array", "object", "undefined", "number", "boolean", "null", or "function"
*
* @param { Any value} : Takes in any value and test what data type the value is
*/

function typeOf(val){
    if (Array.isArray(val)){
        return 'array';
    } else if (val === null){
        return 'null';
    } else {
        return typeof val;
    }
}
module.exports.typeOf = typeOf;




/** 
* first: Takes an array and a number and return the first number of item in the array.
* If input is not an array, or the entered number is negative, an array litteral will be returned.
* If the input number is not an number, then the first item in the array will be returned.
* If the input number is longer than the array, the entire array will be returned.
* 
*  @param { An array }: an array to take contents from.
*  @param { A number }: a number to specifie how many item to take.
* 
*/

function first(arr, num){
    if (!Array.isArray(arr) || num < 0){
        return [];
    } else if (typeof num !== 'number'){
        return arr[0];
    } else if (num > arr.length){
        return arr;
    } else {
        return arr.slice(0, num);
    }
}
module.exports.first = first;

/**
* last: Takes an array and a number and return the last number of item in the array.
* If input is not an array, or the entered number is negative, an array litteral will be returned.
* If the input number is not an number, then the last item in the array will be returned.
* If the input number is longer than the array, the entire array will be returned.
*
*  @param { An array }: an array to take contents from.
*  @param { A number }: a number to specifie how many item to take.
*
*/

function last(arr, num){
    if (!Array.isArray(arr) || num < 0){
        return [];
    } else if (typeof num !== 'number'){
        return arr[arr.length - 1];
    } else if (num > arr.length){
        return arr;
    } else {
        return arr.slice(-num);
    }
}
module.exports.last = last;



/** 
* indexOf: Returns the index of the input array that is the first occurrance of value. Function will 
* return -1 if the given value is not in the input array.
*
*  @param { An array }: an array to iterate over.
*  @param { A value }: a value to test against.
*/

function indexOf(arr, val){
    for (let i = 0; i < arr.length; i++){
        if (val === arr[i]){
            return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf;




/** 
* contains: Function test if a given value is in an array. Returns true if the input array contains the input value.
* Otherwise it will return false.
* 
*  @param { An array }: an array to iterate over.
*  @param { A value }: a value to test against.
*
*/

function contains(arr, val){
    for (let i = 0; i < arr.length; i++){
        if (val === arr[i]){
            return true;
        }
    }
    return false;
}
module.exports.contains = contains;



/** 
* unique: takes an input array and returns a new array with duplicates removed
* 
*  @param { An array }: an array to iterate over
*
*/

function unique(arr){
    let result = [];
    for (let i = 0; i < arr.length; i++){
        if (_.indexOf(arr, arr[i]) === i){
            result.push(arr[i]);
        }
    }
    return result;
}
module.exports.unique = unique;

/**
* filter: Takes an input array and a callback function. Will iterate over the input array and 
* call function on each element in array on the current element, it's index, and the array itself.
* Will then return a new array of elements for which callback function returned true.
* 
*  @param { An array }: an array to iterate over
*  @param { A function }: A function to test the current item, its index, and the array itself
* 
*/

function filter(arr, func){
    let result = [];
    for (let i = 0; i < arr.length; i++){
        if (func(arr[i], i, arr)){
            result.push(arr[i]);
        }
    }
    return result;
}
module.exports.filter = filter;

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(arr, func){
    let result = [];
    for (let i = 0; i < arr.length; i++){
        if (!func(arr[i], i, arr)){
            result.push(arr[i]);
        }
    }
    return result;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(arr, func){
    let t = [];
    let f = []
    for (let i = 0; i < arr.length; i++){
        if (func(arr[i], i, arr)){
            t.push(arr[i]);
        } else {
            f.push(arr[i])
        }
    }
    return Array(t, f);
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func){
    let result = []
    if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            result.push(func(collection[i], i, collection))
        }
    } else {
        for (let key in collection){
            result.push(func(collection[key], key, collection));
        }
    }
    return result;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(arr, prop){
    let res = _.map(arr, function(current){
        if (current.hasOwnProperty(prop)){
            return current[prop];
        }
    })
    return res;
}


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func){
    // determine if collection is array
    if (Array.isArray(collection)){
        // determine if no function was passed in
        if (func === undefined){
            // iterate over collection
            for (let i = 0; i < collection.length; i++){
                // determine if collection[i] is not truthy
                if (!collection[i]){
                    // return false
                    return false;
                }
            }
        // else it was
        } else { 
            for (let i = 0; i < collection.length; i++){
                // determine if collection[i] is not truthy
                if (!func(collection[i], i, collection)){
                    // return false
                    return false;
                }
            }
        }
    } else { // otherwise its an object
        // determine if no function was passed in
        if (func === undefined){
            // iterate over collection
            for (let key in collection){
                // determine if collection[key] is not truthy
                if (!collection[key]){
                    // return false
                    return false;
                }
            }
        // else it was
        } else { 
            for (let key in collection){
                // determine if collection[i] is not truthy
                if (!func(collection[key], key, collection)){
                    // return false
                    return false;
                }
            }
        }
    }
    return true;
}



/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func){
    // determine if collection is array
    if (Array.isArray(collection)){
        // determine if no function was passed in
        if (func === undefined){
            // iterate over collection
            for (let i = 0; i < collection.length; i++){
                // determine if collection[i] is truthy
                if (collection[i]){
                    // return true
                    return true;
                }
            }
        // else it was
        } else { 
            for (let i = 0; i < collection.length; i++){
                // determine if collection[i] is truthy
                if (func(collection[i], i, collection)){
                    // return true
                    return true;
                }
            }
        }
    } else { // otherwise its an object
        // determine if no function was passed in
        if (func === undefined){
            // iterate over collection
            for (let key in collection){
                // determine if collection[key] is truthy
                if (collection[key]){
                    // return true
                    return true;
                }
            }
        // else it was
        } else { 
            for (let key in collection){
                // determine if collection[i] is truthy
                if (func(collection[key], key, collection)){
                    // return true
                    return true;
                }
            }
        }
    }
    return false;
}


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed){
    // if no seed is given
    let result;
    if (seed === undefined){
        result = array[0];
        for (let i = 1; i < array.length; i++){
            result = func(result, array[i], i);
        }
    } else {
        result = seed;
        for (let i = 0; i < array.length; i++){
            result = func(result, array[i], i);
        }
    }
    return result;
};



/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(...args){
    return Object.assign(...args);
}
