// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./benjamin-klein1.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let males = _.filter(array, function(customer){
        return customer.gender === 'male';
    })
    return males.length;
};

var femaleCount = function(array){
    let females = _.reduce(array, function(accumulator, current, index){
        if (current.gender === 'female'){
            accumulator += 1;
        }
        return accumulator;
    }, 0)
    return females;
};

var oldestCustomer = function(array){
    let old = _.reduce(array, function(acc, curr){
        if (curr.age > acc.age){
            acc = curr;
        }
        return acc;
    })
    return old.name;
};

var youngestCustomer = function(array){
    let young = _.reduce(array, function(acc, curr){
        if (curr.age < acc.age){
            acc = curr;
        }
        return acc;
    })
    return young.name;
};;

var averageBalance = function(array){
    let totalBal = _.reduce(array, function(acc, curr){
        let clean = curr.balance.replace(/[$,]/g, '')
        acc += Number(clean);
        return acc;
    }, 0)
    let res = totalBal / array.length
    return res;
};

var firstLetterCount = function(array, char){
    let count = _.reduce(array, function(acc, curr){
        if (curr.name[0].toUpperCase() === char.toUpperCase()){
            acc += 1;
        }
        return acc;
    }, 0)
    return count;
};

var friendFirstLetterCount = function(arr, customer, char){
    let count = 0; 
    for (let i = 0; i < arr.length; i++){
        if (arr[i].name === customer){
            for (let x = 0; x < arr[i].friends.length; x++){
                if (arr[i].friends[x].name[0] === char.toUpperCase()){
                    count++;
                }
            }
        }
    }
    return count;
};

var friendsCount = function(arr, name){
    let res = [];
    for (let i = 0; i < arr.length; i++){
        for (let ii = 0; ii < arr[i].friends.length; ii++){
            if (arr[i].friends[ii].name === name){
                res.push(arr[i].name)
            }
        }
    }
    return res;
};

var topThreeTags = function(arr){
    let tagsObj = {};
    for (let i = 0; i < arr.length; i++){
        for (let ii = 0; ii < arr[i].tags.length; ii++){
            if (tagsObj.hasOwnProperty(arr[i].tags[ii])){
                tagsObj[arr[i].tags[ii]] += 1;
            } else {
                tagsObj[arr[i].tags[ii]] = 1;
            }
        }
    }
    let res = [];
    for (let key in tagsObj){
        if (tagsObj[key] >= tagsObj[res[0]]){
            res.unshift(key);
        } else {
            res.push(key);
        }
    }
    return res.slice(0, 3);

};

var genderCount = function(arr){
    let res = {};
    for (let i = 0; i < arr.length; i++){
        if (res.hasOwnProperty(arr[i].gender)){
            res[arr[i].gender] += 1;
        } else {
            res[arr[i].gender] = 1;
        }
    }
    return res;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
