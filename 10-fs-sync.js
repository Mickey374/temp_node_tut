//Using filesystem to access contents of files
const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first, second)

writeFileSync('./content/result-sync.txt',`The result of the texts combined will be: ${first}, ${second}.`, {flag: 'a'});