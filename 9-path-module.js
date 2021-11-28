const path = require('path')

//Printing the separator symbol
console.log(path.sep);

//Using the join method to join file names
const filepath = path.join('/content', 'subfolder', 'test.txt')
console.log(filepath);


//Accessing the last item in a path
const base = path.basename(filepath);
console.log(base);

//Creating a file path to access files
const absolute = path.resolve(__dirname, 'content','subfolder', 'test.txt')

console.log(absolute)