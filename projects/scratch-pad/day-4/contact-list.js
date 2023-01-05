// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    // create a storage object to return
    let obj = {};
    // add the inputss into the storage object
    obj.id = id;
    obj.nameFirst = nameFirst;
    obj.nameLast = nameLast;
    // return to object
    return obj;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){
            // add the input to the contacts array
            contacts.push(contact);
        },
        findContact: function(fullName){
            // splitting the full name input into an array
            let arr = fullName.split(' ');
            // loop over the contacts array
            for (let i = 0; i < contacts.length; i++){
                // if the first name is the same as first name and last the same as last
                if (arr[0] === contacts[i].nameFirst && arr[1] === contacts[i].nameLast){
                    // return the contact at that index
                    return contacts[i];
                }
            }
            // if the loop finishes without finding the contact return undefined
            return undefined;
        },
        removeContact: function(contact){
            // loop over the contacts array
            for (let i = 0; i < contacts.length; i++){
                // if the input contact is the same as the contact at the index
                if (contacts[i] === contact){
                    // remove one item at that index
                    contacts.splice(i, 1);
                }
            }
        },
        printAllContactNames: function(){
            // create a storage string
            let str = ''
            // loop over the contacts array except for the last item
            for (let i = 0; i < contacts.length - 1; i++){
                // add the first name to string     add last name       new line
                str += contacts[i].nameFirst + ' ' + contacts[i].nameLast + '\n'
            }
            // for the last item, add the first name to string   space   last name    no new line
            str += contacts[contacts.length - 1].nameFirst + ' ' + contacts[contacts.length - 1].nameLast;
            // return storage string
            return str;
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
