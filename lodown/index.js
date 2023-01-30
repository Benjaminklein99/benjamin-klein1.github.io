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
 *  @param { Any value } value: Function takes in any value.
 * 
 *  @return { Input value }: Function returns input value unchanged.
 */

function identity(value){
    return value;
}
module.exports.identity = identity;



/**
* typeOf: Takes in any value and test what data type the value is. Types are one of:
* "string", "array", "object", "undefined", "number", "boolean", "null", or "function"
*
*  @param { Any value} val: Takes in any value and test what data type the value is.
*
*  @return { a string }: will return string of what the input vlaue is.
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
*  @param { An array } arr: an array to take contents from.
*  @param { A number } num: a number to specifie how many item to take.
* 
*  @return { an array or an item in the array }: * If input is not an array, or the entered number is negative, an array 
* litteral will be returned. If the input number is not an number, then the first item in the array 
* will be returned. If the input number is longer than the array, the entire array will be returned.
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
*  @param { An array } arr: an array to take contents from.
*  @param { A number } num: a number to specifie how many item to take.
*
*  @return { an array or an item in the array }: * If input is not an array, or the entered number is negative, an array 
* litteral will be returned. If the input number is not an number, then the last item in the array 
* will be returned. If the input number is longer than the array, the entire array will be returned.
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
*  @param { An array } arr: an array to iterate over.
*  @param { A value } num: a value to test against.
*
*  @return { A number }: Will return the index of the array that the value was first found at. If
* value is not in the array, -1 will be returned.
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
*  @param { An array } arr: an array to iterate over.
*  @param { A value } val: a value to test against.
*
*  @return { A boolean }: Returns true if the input array contains the input value, otherwise it will return false.
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
*  @param { An array } arr: an array to iterate over
*
*  @return { An array }: returns a new array with duplicates removed
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
*  @param { An array } arr: an array to iterate over.
*  @param { A function } func: A function to test the current item, its index, and the array itself.
* 
*  @return { An array }: Will return a new array of elements for which the callback function returned true.
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

/** 
* reject: Takes an input array and a callback function. Will iterate over the input array and 
* call function on each element in array on the current element, it's index, and the array itself.
* Will then return a new array of elements for which the callback function returned false.
* 
*  @param { An array } arr: an array to iterate over.
*  @param { A function } func: A function to test the current item, its index, and the array itself.
* 
*  @return { An array }: Will return a new array of elements for which the callback function returned false.
*/

function reject(arr, func){
    let result = [];
    for (let i = 0; i < arr.length; i++){
        if (!func(arr[i], i, arr)){
            result.push(arr[i]);
        }
    }
    return result;
}
module.exports.reject = reject;




/** 
* partition: Takes an input array and a callback function. Will iterate over the input array and 
* call function on each element in array on the current element, it's index, and the array itself.
* Will then return an array of two arrays, one of elements for which the callback function returned false,
* and the other for which which the callback function returned true.
* 
*  @param { An array } arr: an array to iterate over.
*  @param { A function } func: A function to test the current item, its index, and the array itself.
* 
*  @return { an array}: Will return an array of two arrays, one of elements for which the callback function returned false,
* and the other for which which the callback function returned true.
*/

function partition(arr, func){
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
module.exports.partition = partition;




/** 
* map: takes a collection and a function. Will call function for each element in <collection> passing the arguments:
* the current element, it's index, the array itself if the input collection is an array, and the current value, it's key, 
* and the object itself if the input collection is an object. Each return value will then be saved in a new array. Lastly
* the new array is returned.
* 
*  @param { an array or an object } collection: a collection to iterate over.
*  @param { a function } func: a function to be applied.
*
*  @return { an array }: returns an array containing each result from the invokation of the callback function
*/

function map(collection, func){
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
module.exports.map = map;




/** 
* pluck: Takes an array of objects and a property to test for. Will return an array containing 
the value of property for every element in array.
*
*  @param { an array } arr: an array of objects to iterate over
*  @param { a property } prop: a property to find the value for
*  
*  @return { an array }: Will return an array containing the value of property for every element in array.
*/

function pluck(arr, prop){
    let res = _.map(arr, function(current){
        if (current.hasOwnProperty(prop)){
            return current[prop];
        }
    })
    return res;
}
module.exports.pluck = pluck;





/** 
* every: Takes a collection and a function. Will call function for each element in <collection> passing the arguments:
* the current element, it's index, the array itself if the input collection is an array, and the current value, it's key, 
* and the object itself if the input collection is an object. If the return value of calling the input function for every 
* element is true, true will be returned. If one of them returns false, false will be returned. If a function is not 
* provided, return true if every element is truthy, otherwise return false.
* 
*  @param { an array or an object } collection: a collection to iterate over.
*  @param { a function } func: a function to be applied.
*
*  @return { boolean }: returns true if all items are truthy or if the return true from callback function.
*/

function every(collection, func){
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
module.exports.every = every;





/** 
* some: Takes a collection and a function. Will call function for each element in <collection> passing the arguments:
* the current element, it's index, the array itself if the input collection is an array, and the current value, it's key, 
* and the object itself if the input collection is an object. If the return value of calling the input function is true for
* any of the results of the callback, true will be returned. If a function is not provided, return true if any element is 
* truthy, otherwise return false.
* 
*  @param { an array or an object } collection: a collection to iterate over.
*  @param { a function } func: a function to be applied.
*
*  @return { boolean }: returns true if any item is truthy or if any item returns true from callback function.
*/

function some(collection, func){
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
module.exports.some = some;



/** 
* reduce: takes an array, a function and a seed. Reduce will call the input function for every element in the inpur array
* passing the arguments: the previous result, the current element, and the current elements index. It will use the return 
* value of the input function as the "previous result" for the next iteration. On the very first iteration, seed will be
* used as the "previous result". If no seed value was given, the first element of the array will be used as seed value.
* After the last iteration, some will return the return value of the final function call.
* 
*  @param { An array } array: an array to over and test
*  @param { A function } func: a function to be called on the privious item, the current item and its index
*  @param { A seed } seed: what we want our return value to be
*
*  @return { A value }: return value is dependant of the input seed
*/

function reduce(array, func, seed){
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
module.exports.reduce = reduce;


/** 
* extend: Takes in two or more object and copies the properties of each object into the first object
*
*  @param { An object }: an object to add to
*  @param { An object }: an object to copy from
*  @param { An object }: possibly more object to copy from
*  
*  @return { An object}: the first object with all the properties from the following objects coppied into it.
*/

function extend(...args){
    return Object.assign(...args);
}
