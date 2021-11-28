//Alternative ways of Declaring other module exports
// 1.
module.exports.items = ['item1', 'item2', 'item3'];


// 2.
const person = {
    name: 'rob'
}

module.exports.singlePerson = person;