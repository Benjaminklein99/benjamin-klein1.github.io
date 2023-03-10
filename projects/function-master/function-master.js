//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    let arr = [];
    for (let keys in object){
        arr.push(object[keys])
    }
    return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    let str = '';
    let arr = []
    for (let key in object){
        arr.push(key);
    }
    for (let i = 0; i < arr.length - 1; i++){
        str += arr[i] + ' '
    }
    return str + arr[arr.length - 1];
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let str = '';
    let arr = []
    for (let key in object){
        if (typeof object[key] === 'string'){
            arr.push(object[key]);
        }
    }
    for (let i = 0; i < arr.length - 1; i++){
        str += arr[i] + ' '
    }
    return str + arr[arr.length - 1];
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (typeof collection === 'object' && collection instanceof Date === false && !Array.isArray(collection) && collection !== null){
        return 'object';
    } else if (Array.isArray(collection)){
        return 'array';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1);
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let result = [];
    let arr = string.split(' ');
    for (let i = 0; i < arr.length; i++){
        result.push(arr[i][0].toUpperCase() + arr[i].slice(1));
    }
    return result.join(' ');
}



//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return 'Welcome ' + object.name[0].toUpperCase(1) + object.name.slice(1) + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return object.name[0].toUpperCase(1) + object.name.slice(1) + ' is a ' + object.species[0].toUpperCase(1) + object.species.slice(1)
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (object.hasOwnProperty('noises') && object.noises.length > 0){
        return object.noises.join(' ');
    } else {
        return 'there are no noises';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    let arr = string.split(' ');
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === word){
            return true;
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, obj) {
    if (obj.friends === undefined){
        return false;
    }
    for (let i = 0; i < obj.friends.length; i++){
        if (name === obj.friends[i]){
            return true;
        }
    }
    return false;

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    let stor = [];
    let stor2;
    let stor3 = [];
    for (let i = 0; i < array.length; i++){
        if (array[i].name !== name){
            stor.push(array[i].name);
        } else {
            stor2 = array[i].friends;
        }
    }
    for (let i = 0; i < stor.length; i++){
        if (!stor2.includes(stor[i])){
            stor3.push(stor[i]);
        }
    }
    return stor3;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (let i = 0; i < array.length; i++){
        for (let key in object){
            if (array[i] === key){
                delete object[key];
            }
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    return [...new Set(array)];
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}