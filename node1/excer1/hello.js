const fs = require('fs');
const setDiff = require('./setDiff');
const setInter = require('./setInter');

a = ['a', 'ball', 'hat'];
b = ['b', 'ball', 'hat'];

console.log(setDiff.setDiff(a,b));
console.log(setInter.setInter(a,b));